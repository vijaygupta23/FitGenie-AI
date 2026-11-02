import { GoogleGenAI } from "@google/genai";

const chatWithCoach = async (req, res) => {
  try {
    const { messages } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({
        message: "Please send a message to the AI Coach.",
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        message: "Gemini API key is not configured.",
      });
    }

    // Validate and limit conversation history
    const validMessages = messages
      .filter(
        (msg) =>
          ["user", "ai"].includes(msg.sender) &&
          typeof msg.text === "string" &&
          msg.text.trim()
      )
      .slice(-16);

    if (
      validMessages.length === 0 ||
      validMessages[validMessages.length - 1].sender !== "user"
    ) {
      return res.status(400).json({
        message: "Please send a valid user message.",
      });
    }

    const ai = new GoogleGenAI({ apiKey });

    const contents = validMessages.map((msg) => ({
      role: msg.sender === "user" ? "user" : "model",
      parts: [{ text: msg.text.trim() }],
    }));

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents,
      config: {
        systemInstruction: `
You are FitGenie AI Coach, a helpful fitness and wellness assistant.

Your responsibilities:
- Answer questions about workouts, nutrition, calories, recovery,
  exercise technique and general fitness.
- Give practical guidance suitable for the user's stated fitness level.
- Keep answers friendly, clear and easy to understand.
- Use short paragraphs or bullet points when useful.
- Never invent the user's personal profile or claim to have read data
  that was not provided.
- Do not recommend dangerous diets, extreme calorie restriction,
  steroids or exercising through serious pain.
- Explain when a question requires a qualified doctor or dietitian.
- You are an AI fitness assistant, not a medical professional.
`,
      },
    });

    const reply = response.text?.trim();

    if (!reply) {
      return res.status(502).json({
        message: "AI Coach returned an empty response. Please try again.",
      });
    }

    return res.status(200).json({ reply });
  } catch (error) {
    console.error("AI COACH ERROR:", error);

    const status = Number(error.status ?? error.code);

    if (status === 503 || status === 429) {
      return res.status(status).json({
        message:
          status === 503
            ? "AI Coach is temporarily busy. Please try again shortly."
            : "AI request limit reached. Please try again later.",
      });
    }

    return res.status(500).json({
      message: "Unable to get an AI response right now. Please try again.",
    });
  }
};

export { chatWithCoach };
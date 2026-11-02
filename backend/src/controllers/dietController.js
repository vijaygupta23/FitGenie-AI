
import { GoogleGenAI } from "@google/genai";

export const generateDiet = async (req, res) => {
  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        message: "Gemini API key is missing in backend .env",
      });
    }

    const { goal, weight, height, age, activity } = req.body;

    const numericWeight = Number(weight);
    const numericHeight = Number(height);
    const numericAge = Number(age);

    if (
      !goal ||
      !activity ||
      !Number.isFinite(numericWeight) ||
      !Number.isFinite(numericHeight) ||
      !Number.isFinite(numericAge) ||
      numericWeight < 1 ||
      numericHeight < 1 ||
      numericAge < 1 ||
      numericAge > 120
    ) {
      return res.status(400).json({
        message: "Please provide valid diet preferences.",
      });
    }

    const ai = new GoogleGenAI({ apiKey });

    const prompt = `
Create a practical one-day meal plan for a fitness application.

User details:
- Goal: ${goal}
- Weight: ${numericWeight} kg
- Height: ${numericHeight} cm
- Age: ${numericAge}
- Activity level: ${activity}

Return ONLY valid JSON in this format:
{
  "meals": [
    {
      "meal": "Breakfast",
      "food": "Meal description",
      "calories": 400,
      "protein": 20
    }
  ],
  "dailyCalories": 2200,
  "dailyProtein": 120,
  "note": "Short general nutrition note"
}

Include breakfast, lunch, dinner and snacks.
Use practical foods and realistic approximate nutrition values.
Do not recommend extreme calorie restriction.
Nutrition values are estimates, not medical advice.
`;


let response;
const maxAttempts = 3;

for (let attempt = 1; attempt <= maxAttempts; attempt++) {
  try {
    response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    break;
  } catch (error) {
    const status = Number(error.status ?? error.code);
    const retryable = [429, 500, 502, 503, 504].includes(status);

    if (!retryable || attempt === maxAttempts) {
      throw error;
    }

    const delay = 1000 * 2 ** (attempt - 1);

    console.log(
      `Gemini error ${status}. Retry ${attempt + 1}/${maxAttempts} in ${delay}ms`
    );

    await new Promise((resolve) => setTimeout(resolve, delay));
  }
}

if (!response?.text) {
  throw new Error("Gemini returned an empty response.");
}

let result;

try {
  result = JSON.parse(response.text);
} catch {
  throw new Error("Gemini returned invalid JSON.");
}

if (!Array.isArray(result.meals)) {
  throw new Error("Invalid meal plan response from AI.");
}

return res.status(200).json(result);

} catch (error) {
  console.error("DIET AI ERROR:", error);

  return res.status(500).json({
    message: error.message || "Diet generation failed",
  });
}
};


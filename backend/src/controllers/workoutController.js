
import { GoogleGenAI } from "@google/genai";

const generateWorkout = async (req, res) => {
  try {
    const { goal, level, days, duration, focus } = req.body;

    // Validate input
    if (!goal || !level || !days || !duration || !focus) {
      return res.status(400).json({
        message: "Please provide all workout preferences.",
      });
    }

    const workoutDays = Number(days);
    const workoutDuration = Number(duration);

    if (
      !Number.isInteger(workoutDays) ||
      workoutDays < 1 ||
      workoutDays > 7 ||
      !Number.isFinite(workoutDuration) ||
      workoutDuration < 10 ||
      workoutDuration > 180
    ) {
      return res.status(400).json({
        message: "Invalid workout days or duration.",
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        message: "Gemini API key is not configured.",
      });
    }

    const ai = new GoogleGenAI({ apiKey });

    const prompt = `
You are a professional fitness workout planner.

Create a personalized workout plan using these preferences:
- Goal: ${goal}
- Fitness level: ${level}
- Workout days per week: ${workoutDays}
- Session duration: ${workoutDuration} minutes
- Focus area: ${focus}

Requirements:
1. Return exactly ${workoutDays} workout-day objects.
2. Use realistic exercises suitable for the fitness level.
3. Include warm-up and rest guidance.
4. Include exercise name, sets, reps, and rest seconds.
5. Keep the workout within the requested session duration.
6. Do not prescribe unsafe or excessive training volume.
7. Return valid JSON only, without Markdown.

Use this JSON structure:
{
  "plan": [
    {
      "day": "Day 1",
      "focus": "Upper Body",
      "exercises": [
        {
          "exercise": "Push-ups",
          "sets": 3,
          "reps": "8-12",
          "restSeconds": 60
        }
      ]
    }
  ],
  "warmup": "5-10 minutes of light activity",
  "notes": "Include recovery and proper-form advice"
}
`;

    let response;
    const maxAttempts = 3;

    for (let attemp =1; attemp<=maxAttempts; attemp++){
      const response = await ai.models.generateContent({
  model: "gemini-3.6-flash",
  contents: prompt,
  config: {
    responseMimeType: "application/json",
  },
});

if (!response?.text) {
  throw new Error("Gemini returned an empty workout plan.");
}

const result = JSON.parse(response.text);

if (!Array.isArray(result.plan) || result.plan.length !== workoutDays) {
  throw new Error("Invalid workout plan returned by Gemini.");
}

return res.status(200).json(result);
    }

    // for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    //   try {
    //     response = await ai.models.generateContent({
    //       model: "gemini-3.8-flash",
    //       contents: prompt,
    //       config: {
    //         responseMimeType: "application/json",
    //       },
    //     });

    //     break;
    //   } catch (error) {
    //     const status = error.status ?? error.code;
    //     const retryable = [429, 500, 502, 503, 504].includes(
    //       Number(status)
    //     );

    //     if (!retryable || attempt === maxAttempts) {
    //       throw error;
    //     }

    //     const delay = 1000 * 2 ** (attempt - 1);

    //     console.log(
    //       `Gemini workout request failed (${status}). Retrying in ${delay}ms...`
    //     );

    //     await new Promise((resolve) => setTimeout(resolve, delay));
    //   }
    // }

    if (!response?.text) {
      throw new Error("Gemini returned an empty workout plan.");
    }

    const result = JSON.parse(response.text);

    if (!Array.isArray(result.plan) || result.plan.length !== workoutDays) {
      throw new Error("Invalid workout plan returned by Gemini.");
    }

    return res.status(200).json(result);
    } catch (error) {
  console.error("WORKOUT GENERATION ERROR:", error);

  const status = Number(error.status ?? error.code);

  if (status === 503 || status === 429) {
    return res.status(status).json({
      message:
        status === 503
          ? "AI service is busy right now. Please try again shortly."
          : "AI request limit reached. Please try again later.",
    });
  }

  return res.status(500).json({
    message:
      error.message || "Unable to generate workout. Please try again.",
  });
}
  // } catch (error) {
  //   console.error("WORKOUT GENERATION ERROR:", error);

  //   return res.status(500).json({
  //     message: "Unable to generate a workout right now. Please try again.",
  //   });
  // }
};

export { generateWorkout };

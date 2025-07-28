export function parseAIResponse(rawText: string) {
    const cleaned = rawText
      .trim()
      .replace(/^```json/, "")
      .replace(/^```/, "")
      .replace(/```$/, "")
      .replace(/^\s*Here.*\{/, "{") 
      .trim();

    try {
      const parsed = JSON.parse(cleaned);
      return parsed;
    } catch (err) {
      console.error("Failed to parse AI response:", err);
      throw new Error("AI response was not valid or complete JSON.");
    }
}
import { addQuestion } from "@/lib/actions";
import { useState } from "react";

export function AskQuestion({ topic }: { topic: string }) {
  const [question, setQuestion] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("title", question);
      formData.append("topic_id", topic);

      await addQuestion(formData); // Trigger the server action to add the question
      setQuestion(""); // Clear the input after successful submission
    } catch (err) {
      setError("Failed to add the question. Please try again.");
      console.error("Error adding question:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="relative my-8" onSubmit={handleSubmit}>
      <input
        type="hidden"
        name="topic_id"
        value={topic}
      />
      <input
        type="text"
        name="title"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Enter your question"
        required
        className="border p-2"
      />
      <button type="submit" className="btn" disabled={isLoading}>
        {isLoading ? "Submitting..." : "Ask"}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
}

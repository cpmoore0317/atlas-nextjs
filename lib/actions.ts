"use server";

import { revalidatePath } from "next/cache";
import { incrementVotes, insertQuestion, insertTopic } from "./data";  // Add logic to insert topic into your database
import { redirect } from "next/navigation";

export async function addTopic(data: FormData) {
  try {
    const topic = await insertTopic({
      title: data.get("title") as string,
    });
    revalidatePath("/ui/topics");  // Revalidate the topics page to refresh with the new topic
    redirect(`/ui/topics/${topic.id}`);  // Redirect to the newly created topic page
  } catch (error) {
    console.error("Error adding topic:", error);
    throw new Error("Failed to add topic.");
  }
}

export async function addQuestion(question: FormData) {
    try {
      await insertQuestion({
        title: question.get("title") as string,
        topic_id: question.get("topic_id") as string,
        votes: 0,  // Default vote count for a new question
      });
      revalidatePath("/ui/topics/[id]");  // Revalidate the topic page to show the new question
    } catch (error) {
      console.error("Error adding question:", error);
      throw new Error("Failed to add question.");
    }
  }
  
  export async function addVote(data: FormData) {
    try {
      await incrementVotes(data.get("id") as string);  // Increment votes in the database
      revalidatePath("/ui/topics/[id]");  // Revalidate the page to reflect the updated vote count
    } catch (error) {
      console.error("Error adding vote:", error);
      throw new Error("Failed to add vote.");
    }
  }
  
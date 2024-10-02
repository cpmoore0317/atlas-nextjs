import { fetchTopics } from "@/lib/data";
import TopicLink from "./TopicLink";

export default async function TopicLinks() {
  const topics = await fetchTopics(); // Fetch topics from the database

  return (
    <>
      {topics.map((topic) => (
        <TopicLink key={topic.id} id={topic.id} title={topic.title} />
      ))}
    </>
  );
}

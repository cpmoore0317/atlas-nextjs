import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import { addVote } from "@/lib/actions";  // Import the server action

export default function VoteButton({ id }: { id: string }) {
  return (
    <form action={addVote} method="post">
      <input type="hidden" name="id" value={id} /> {/* Hidden field to send the question ID */}
      <button
        type="submit"
        className="h-8 w-8 min-w-[2rem] rounded-full ring-gray-200 hover:text-atlas-teal active:bg-primary active:text-white active:outline-none active:ring-2 active:ring-primary"
      >
        <HandThumbUpIcon />
      </button>
    </form>
  );
}

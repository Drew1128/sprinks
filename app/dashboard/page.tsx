"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  // i need to wire up this button to the dashboard

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      sign up
      <button
        onClick={() => router.push("/signup")}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        go to
      </button>
    </main>
  );
}

"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  //

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      sign up
      <button
        onClick={() => router.push("/signup")}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        go to sign in
      </button>
      <SignupForm />
    </main>
  );
}

// make a form component that allows a user to sign up

const SignupForm = () => {
  return (
    <form className="space-y-4">
      <input
        className="border border-gray-300 rounded-md shadow-sm p-2 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        type="text"
        placeholder="email"
      />
      <input
        className="border border-gray-300 rounded-md shadow-sm p-2 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        type="password"
        placeholder="password"
      />
      <button
        className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        type="submit"
      >
        Sign up
      </button>
    </form>
  );
};
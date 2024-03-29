import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth(); // server side
  if (userId) redirect("/dashboard");

  return (
    <main className="">
      <h1>Welcome</h1>
    </main>
  );
}

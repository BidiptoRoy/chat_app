import SideBar from "@/components/SideBar";
import WelcomePage from "@/components/WelcomePage";

import { OPTIONS } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(OPTIONS);
  if (!session) redirect("/login");
  return (
    <div className="bg-slate-200 h-[92vh] w-[92vw] rounded-2xl flex flex-row drop-shadow-xl">
      <SideBar />
      <WelcomePage />
    </div>
  );
}

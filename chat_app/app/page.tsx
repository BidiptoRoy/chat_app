import ChatArea from "@/components/ChatArea";
import CreateGroup from "@/components/CreateGroup";
import SideBar from "@/components/SideBar";
import UserGroups from "@/components/UserGroups";
import UsersOnline from "@/components/UsersOnline";
import WelcomePage from "@/components/WelcomePage";

import { OPTIONS } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(OPTIONS);
  if (!session) redirect("/login");
  return (
    <div className="bg-slate-200 h-[92vh] w-[92vw] rounded-2xl flex flex-row drop-shadow-xl">
      <SideBar />
      {/* <ChatArea /> */}
      {/* <WelcomePage /> */}
      {/* <CreateGroup /> */}
      <UserGroups />
      {/* <UsersOnline /> */}
    </div>
  );
}

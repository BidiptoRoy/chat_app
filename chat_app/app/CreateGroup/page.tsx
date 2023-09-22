import { IconButton, TextField } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { OPTIONS } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import SideBar from "@/components/SideBar";
async function CreateGroup() {
  const session = await getServerSession(OPTIONS);
  if (!session) redirect("/login");
  return (
    <div className="bg-slate-200 h-[92vh] w-[92vw] rounded-2xl flex flex-row drop-shadow-xl">
      <SideBar />
      <div className="w-3/4 mr-2 my-2 rounded-2xl bg-gradient-to-r from-cyan-300/70 via-stone-100 to-amber-200/70 ml-2 border-b-2 border-blue-700 flex flex-col items-center justify-center">
        <img src="/logo.png" alt="chat logo" width="232px" height="232px" />
        <div className="bg-stone-100 rounded-lg flex flex-row justify-between p-2 drop-shadow-2xl space-x-1">
          <TextField
            id="outlined-basic"
            label="Enter Group Name"
            variant="outlined"
          />
          <IconButton>
            <DoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default CreateGroup;

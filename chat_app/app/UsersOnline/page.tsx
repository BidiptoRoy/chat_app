import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { OPTIONS } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import SideBar from "@/components/SideBar";
const dummyUsers = [
  {
    name: "Sohini",
  },
  {
    name: "Pronay",
  },
  {
    name: "Rupkatha",
  },
  {
    name: "Soumya",
  },
  {
    name: "Sourya",
  },
  {
    name: "Arunim",
  },
  {
    name: "Arunim",
  },
];

function UsersOnline() {
  return (
    <div className="bg-slate-200 h-[92vh] w-[92vw] rounded-2xl flex flex-row drop-shadow-xl">
      <SideBar />
      <div className="w-3/4 mr-2 my-2 rounded-r-2xl flex flex-col ml-2">
        <div className="bg-stone-100 rounded-lg flex flex-row p-2 w-full drop-shadow items-center">
          <img src="/logo.png" alt="chat logo" width="48px" height="48px" />
          <p className="font-semibold text-lg">Online Users</p>
        </div>
        <div className="bg-stone-100 rounded-lg p-1 flex flex-row mt-2 drop-shadow">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <input
            className="w-full rounded-full bg-stone-200 text-stone-800 focus:outline-none focus:ring focus:ring-blue-800/30 m-1 py-1 px-2"
            placeholder="Search user..."
          ></input>
        </div>
        <div className="flex flex-col overflow-y-auto">
          <ul className="">
            {dummyUsers.map((user) => (
              <User user={user} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function User({ user }: any) {
  return (
    <div className="bg-stone-100 mt-2 p-2 rounded-lg drop-shadow flex flex-row">
      <div className="flex justify-center items-center">
        <p className="font-mono text-2xl font-extrabold bg-slate-600/30 rounded-[50%] h-8 w-8 justify-self-center p-2 flex justify-center items-center">
          {user.name[0]}
        </p>
        <div className="font-semibold ml-2">{user.name}</div>
      </div>
    </div>
  );
}

export default UsersOnline;

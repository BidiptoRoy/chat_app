"use client";

import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SearchIcon from "@mui/icons-material/Search";
import { Button, IconButton } from "@mui/material";
import Chat from "./Chat";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import LogoutIcon from "@mui/icons-material/Logout";

const friends = [
  {
    name: "Sohini",
    lastMessage: "Hey Good Morning",
    timeStamp: "today",
  },
  {
    name: "Srijan",
    lastMessage: "Hey don't go to office today",
    timeStamp: "yesterday",
  },
  {
    name: "Pronay",
    lastMessage: "Are you coming to office?",
    timeStamp: "today",
  },
  {
    name: "Soumya",
    lastMessage: "Hey, its never to late...",
    timeStamp: "yesterday",
  },
];

function SideBar() {
  const { data: session } = useSession();
  if (!session) return <div></div>;
  return (
    <div className="w-1/4 ml-2 my-2 rounded-l-2xl flex flex-col">
      <div className="bg-stone-100 rounded-lg p-1 flex flex-row justify-between drop-shadow">
        <div>
          <IconButton>
            {session?.user ? (
              <div className="relative z-40">
                <Image
                  src={session.user.image ? session.user.image : ""}
                  alt={"Profile Picture"}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </div>
            ) : (
              <AccountCircleIcon />
            )}
          </IconButton>
        </div>
        <div>
          <IconButton>
            <PersonAddIcon />
          </IconButton>
          <IconButton>
            <GroupAddIcon />
          </IconButton>
          <IconButton>
            <AddCircleIcon />
          </IconButton>
          <IconButton>
            <DarkModeIcon />
          </IconButton>
          <IconButton>
            <LogoutIcon onClick={() => signOut()} />
          </IconButton>
        </div>
      </div>
      <div className="bg-stone-100 rounded-lg p-1 flex flex-row mt-2 drop-shadow">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input
          className="w-full rounded-full bg-stone-200 text-stone-800 focus:outline-none focus:ring focus:ring-blue-800/30 m-1 py-1 px-2"
          placeholder="search..."
        ></input>
      </div>
      <div className="bg-stone-100 rounded-lg p-1 flex flex-col mt-2 flex-grow overflow-y-auto drop-shadow">
        <ul className="divide-y divide-stone-800/50 px-2">
          {friends.map((friend) => (
            <Chat friend={friend} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;

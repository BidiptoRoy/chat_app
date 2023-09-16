import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import UserText from "./UserText";
import FriendText from "./FriendText";

const dummyFriend = {
  name: "Sohini",
  lastMessage: "Hey Good Morning",
  timeStamp: "today",
};

function ChatArea() {
  return (
    <div className="w-3/4 mr-2 my-2 rounded-r-2xl flex flex-col ml-2">
      <div className="bg-stone-100 rounded-lg flex flex-row p-2 w-full drop-shadow">
        <div className="flex justify-center items-center">
          <p className="font-mono text-2xl font-extrabold bg-slate-600/30 rounded-[50%] h-8 w-8 justify-self-center p-2 flex justify-center items-center">
            {dummyFriend.name[0]}
          </p>
        </div>

        <div className="flex justify-between w-full">
          <div className="mx-2">
            <p className="font-semibold">{dummyFriend.name}</p>
            <p className="text-sm text-blue-900">{dummyFriend.timeStamp}</p>
          </div>
          <div className="flex flex-col items-end">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto bg-stone-100 p-2 my-2 rounded-lg drop-shadow">
        <UserText />
        <FriendText />
        <UserText />
        <FriendText />
        <UserText />
        <FriendText />
      </div>

      <div className="bg-stone-100 rounded-lg flex flex-row p-2 justify-between drop-shadow">
        <input
          className="w-full rounded-full bg-stone-200 text-stone-800 focus:outline-none focus:ring focus:ring-blue-800/30 m-1 py-1 px-2"
          placeholder="Type your message here..."
        ></input>
        <IconButton>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default ChatArea;

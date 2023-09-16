function Chat({ friend }: any) {
  return (
    <div className="flex flex-row w-full hover:bg-slate-300 rounded-md p-1">
      <div className="flex justify-center items-center">
        <p className="font-mono text-2xl font-extrabold bg-slate-600/30 rounded-[50%] h-8 w-8 justify-self-center p-2 flex justify-center items-center">
          {friend.name[0]}
        </p>
      </div>
      <div className="px-1 ml-2 w-full">
        <div className="font-semibold">{friend.name}</div>
        <div className="flex flex-col">
          <div className="">{friend.lastMessage}</div>
          <div className="flex justify-end ">
            <span className="text-sm text-stone-800/80">
              {friend.timeStamp}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;

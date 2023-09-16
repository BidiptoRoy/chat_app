const dummyMessage =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchan";

const dummyFriend = {
  name: "Sohini",
  lastMessage: "Hey Good Morning",
  timeStamp: "today",
};
function FriendText() {
  const currentTime = new Date();
  const hours = currentTime.getHours().toString().padStart(2, "0");
  const minutes = currentTime.getMinutes().toString().padStart(2, "0");
  const formattedTime = `${hours}:${minutes}`;
  return (
    <div className="flex justify-start mt-2">
      <div className="flex justify-center ">
        <p className="font-mono text-2xl font-extrabold bg-slate-600/30 rounded-[50%] h-8 w-8 justify-self-center p-2 flex justify-center items-center">
          {dummyFriend.name[0]}
        </p>
      </div>
      <span className="bg-blue-400/70 rounded-xl p-2 border border-black/50 mr-16 ml-1">
        <span className="font-semibold">{dummyFriend.name}</span>
        <br />
        {dummyMessage}
        <br />
        <span className="flex justify-end text-stone-800 text-xs">
          {formattedTime.toString()}
        </span>
      </span>
    </div>
  );
}

export default FriendText;

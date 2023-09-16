const dummyMessage =
  "Lorem Ipsum ";
function UserText() {
  const currentTime = new Date();
  const hours = currentTime.getHours().toString().padStart(2, "0");
  const minutes = currentTime.getMinutes().toString().padStart(2, "0");

  const formattedTime = `${hours}:${minutes}`;

  return (
    <div className="flex justify-end mt-2">
      <span className="bg-amber-100/70 rounded-xl p-2 border border-black/50 ml-16">
        {dummyMessage}
        <br />
        <span className="flex justify-end text-stone-800 text-xs">
          {formattedTime.toString()}
        </span>
      </span>
    </div>
  );
}

export default UserText;

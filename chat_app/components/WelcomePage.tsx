function WelcomePage() {
  return (
    <div className="w-3/4 mr-2 my-2 rounded-2xl bg-gradient-to-r from-cyan-300/70 via-stone-100 to-amber-200/70 ml-2 border-b-2 border-blue-700 flex flex-col items-center justify-center">
      <img src="/logo.png" alt="chat logo" width="432px" height="432px" />
      <div className="flex flex-col  items-center mb-20">
        <p className="text-4xl font-bold text-blue-800">Welcome to Chat App</p>
        <p className="mt-4">Start texting by selecting any of your friends</p>
      </div>
    </div>
  );
}

export default WelcomePage;

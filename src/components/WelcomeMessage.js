const WelcomeMessage = ({ username }) => {

  return (
    <>
      <div className="bg-gray-800 rounded-md">
        <div className="flex items-center justify-center rounded-xl px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
          <div className="text-white text-xl">Welcome | { username }</div>
        </div>
      </div>
    </>
  );
};

export default WelcomeMessage;
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  function handleSubmit(evt) {
    navigate('/home')

    evt.preventDefault();
  }

  return (
    <div
      className="flex h-screen w-full items-center justify-center bg-slate-700"
    >
      <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div>
          <div className="mb-8 flex flex-col items-center">
            <h1 className="mb-2 text-2xl text-white">Welcome | ToDo App</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 text-md">
              <input
                className="rounded-sm border-none px-6 py-2 text-center shadow-lg outline-none"
                type="text"
                name="name"
                placeholder="email@gmail.com"
              />
            </div>

            <div className="mb-4 text-md">
              <input
                className="rounded-sm border-none px-6 py-2 text-center shadow-lg outline-none"
                type="Password"
                name="name"
                placeholder="*********"
              />
            </div>
            <div className="mt-8 flex justify-center text-lg text-black">
              <button
                type="submit"
                className="rounded-sm bg-slate-700 bg-opacity-60 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-slate-500"
              >
                Login
              </button>
            </div>
            <div className="text-white text-xs text-center mt-10">David Peña @ 2023</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
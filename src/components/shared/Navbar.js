import { removeUser } from "../../store/user";
import { BiLogOut, BiUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import MyToast from '../../namespaces/Toast';

const Navbar = ({ parent }) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    removeUser();
    MyToast.fire({
      icon: 'success',
      title: 'Sesión finalizada!'
    })
    navigate("/");
  }

  const goBack = () => {
    navigate("/home");
  }

  const goProfile = () => {
    navigate("/my-profile");
  }

  return (
    <div className="flex">
      <div className="flex-none w-14 h-14">
        <button
          type="button"
          onClick={parent === 'home' ? handleLogOut : goBack}
          className="rounded-md px-3 py-2 bg-blue-400 border-none hover:bg-blue-500 text-sm border-2 text-white flex items-center">
          <BiLogOut className="text-lg mr-2" />{parent === 'home' ? 'Exit' : 'Home'}
        </button>
      </div>
      <div className="grow h-14"></div>
      {
        parent === 'home' && (
          <div className="flex-none">
            <button
              type="button"
              onClick={goProfile}
              className="rounded-md px-3 py-2 bg-blue-400 border-none hover:bg-blue-500 text-sm border-2 text-white flex items-center">
              <BiUser className="text-lg mr-2" />My Profile
            </button>
          </div>
        )
      }
    </div>
  )
}

export default Navbar;
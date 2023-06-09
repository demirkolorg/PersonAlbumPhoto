import { BiUserPlus } from "react-icons/bi";
import { ImSpinner9 } from "react-icons/im";
import { useAddUserMutation } from "../store";

const Header = () => {
  const [addUser, results] = useAddUserMutation();
  const addUserHandle = () => {
    addUser();
  };

  return (
    <>
      <header className="m-3 ">
        <nav className="bg-white align-middle border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a className="flex items-center text-amber-950 ">
              <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">
                User Rehber
              </span>
            </a>
            <div className="flex items-center lg:order-2">
              <button
                disabled={results.isLoading}
                onClick={addUserHandle}
                className="flex flex-wrap disabled:bg-zinc-500 disabled:cursor-not-allowed items-center text-white bg-sky-400 hover:bg-sky-800 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none "
              >
                {results.isLoading ? (
                  <>
                    Bekleyin
                    <ImSpinner9 className="ml-3 w-5 h-5 animate-spin" />
                  </>
                ) : (
                  <>
                    {" "}
                    Kişi Ekle
                    <BiUserPlus className="ml-3 w-5 h-5" />
                  </>
                )}
              </button>
            </div>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            ></div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;

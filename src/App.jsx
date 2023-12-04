import chatGptLogo from "./assets/chatgpt-logo.png";
import { CiChat2 } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { CiLocationArrow1 } from "react-icons/ci";

function App() {
  return (
    // left
    <div className=" app flex">
      <div className="sidebar ">
        <div className="flex items-center hover:bg-[#52525b] text-white pl-2">
          <img src={chatGptLogo} alt="" className="h-10 w-10" />
          <button>New chat</button>
          <button></button>
        </div>

        <div className="mt-8 p-4">
          <button className="flex items-center justify-center gap-4 text-white">
            <CiChat2 className="h-6 w-6" />
            Header Text
          </button>
        </div>

        <div className="p-4">
          <button className="flex items-center justify-center gap-4 text-white">
            <CiChat2 className="h-6 w-6" />
            Header Text 2
          </button>
        </div>

        <div className=""></div>
      </div>
      {/* right */}
      <div className="main text-white ">
        <div className="">
          <CgProfile className="w-10 h-8" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad hic
            dicta, rem incidunt excepturi saepe ipsa doloribus sunt eveniet
            aliquam!
          </p>
        </div>

        <div className="">
          <img className="h-10 w-10" src={chatGptLogo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad hic
            dicta, rem incidunt excepturi saepe ipsa doloribus sunt eveniet
            aliquam!
          </p>
        </div>

        {/* footer - input */}
        <div>
          <div className="flex">
            <input type="text" />
            <CiLocationArrow1 className="rotate-45" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

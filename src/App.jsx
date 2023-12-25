import chatGptLogo from "./assets/chatgpt-logo.png";
import { IoMdChatbubbles } from "react-icons/io";
import { FaUserTie } from "react-icons/fa6";
import { CiLocationArrow1 } from "react-icons/ci";

function App() {
  return (
    // Main
    <div className="flex h-[100vh] ">
      {/* left */}
      <div className="flex-[20%] bg-black p-2">
        <div className="flex items-center hover:bg-[#52525b] text-white pl-2 mt-4 rounded-sm">
          <img src={chatGptLogo} alt="" className="h-10 w-10" />
          <button>New chat</button>
          <button></button>
        </div>

        <div className="mt-8 p-4">
          <button className="flex items-center justify-center gap-4 text-white">
            <IoMdChatbubbles className="h-6 w-6" />
            Header Text
          </button>
        </div>

        <div className="p-4">
          <button className="flex items-center justify-center gap-4 text-white">
            <IoMdChatbubbles className="h-6 w-6" />
            Header Text 2
          </button>
        </div>

        <div className=""></div>
      </div>

      {/* right */}
      <div className="flex-[80%] bg-[#343541] text-white text-justify min-h-[100%] flex flex-col items-center">
        <div className="flex-1 mx-[13rem] p-4 overflow-hidden space-y-8 ">
          <div className="flex rounded-sm p-2">
            <FaUserTie className="h-6 w-6 mr-[0.8rem]" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad hic
              dicta, rem incidunt excepturi saepe ipsa doloribus sunt eveniet
              aliquam!
            </p>
          </div>
          <div className="flex rounded-sm p-2">
            <img className="h-10 w-10" src={chatGptLogo} alt="" />
            <p>
              uta ratione tempora ipsam possimus velit excepturi. Sapiente
              delectus laborum rem facilis. Corrupti, unde quia, ea nulla quod
              tenetur perferendis consequatur sint autem eius dolores
              repellendus minima animi facilis quisquam adipisci eos. Inventore
              officia iusto ut quasi facere consequatur veritatis cumque
              expedita adipisci magnam eligendi consectetur, nam natus! Rerum
              adipisci ipsum saepe tenetur labore fugit sunt quasi corporis, et
              eum atque provident voluptate? Deleniti asperiores, corrupti
              adipisci architecto sit dolorem illo suscipit consectetur repellat
              dolores sapiente expedita reiciendis a nesciunt quae dolor alias
              provident deserunt impedit! Impedit obcaecati animi sequi vel
              ipsam asperiores enim aperiam nam sapiente officiis quasi a
              similique, illum rem veniam hic ab cumque dicta exercitationem?
            </p>
          </div>
        </div>

        {/* footer - input */}
        <div className="shrink-0 ">
          <div className="flex text-center">
            <input
              className="rounded-[1rem] p-[0.85rem] w-[52rem] outline-none bg-transparent overflow-hidden border border-[D9D9E3]"
              type="text"
              placeholder="Message ChatGPT...."
            />
            <button className="relative right-10">
              <CiLocationArrow1 className="rotate-45 h-[1.5rem] w-[1.5rem]" />
            </button>
          </div>
          <p className="text-xs p-2 text-center opacity-[60%]">
            ChatGPT can make mistakes. Consider checking important information.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { SiGooglegemini } from "react-icons/si";
import { IoLogOutOutline } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import { IoIosMenu, IoIosStats } from "react-icons/io";

export default function SideBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [option, setOption] = useState("");

  const navigate = useNavigate();

  const handleOnClick = (page) => {
    console.log("Page: ", page);

    setOption(page);
    navigate(`${page}`);
    setShowMenu(false);
  };

  const handleLogout = () => {
    alert("logged out...");

    localStorage.removeItem("key");
    navigate("/");
    // // navigate("https://baymax-med-connect.vercel.app/user");
    // window.location.href = "https://baymax-medconnect.vercel.app";

    // onLogout();
  };

  return (
    <div>
      <div className="md:hidden max-md:absolute">
        <IoIosMenu size={35} onClick={() => setShowMenu(!showMenu)} />
      </div>
      <div
        className={`max-md:fixed flex flex-col p-5 max-sm:bg-red-500 bg-gradient-to-b from-[#8f5555f3] to-[#d862624a] bg-opacity-20 w-screen sm:w-80 h-screen z-50 transition-all ${
          showMenu ? "left-0 top-0" : "right-[100%]"
        }`}
      >
        <div className="flex justify-end md:hidden">
          <IoClose size={40} onClick={() => setShowMenu(!showMenu)} />
        </div>
        <img
          className="mx-auto h-40 w-auto cursor-pointer"
          src="/baymax2.png"
          alt="Your Company"
          onClick={() => handleOnClick("/homepage")}
        />
        {/* <span
        className="text-[40px] font-bold font-mono border-2 rounded-2xl p-3 text-center bg-red-400 cursor-pointer"
        onClick={() => navigate("/homepage")}
      >
        Baymax
      </span> */}
        <div className="flex flex-col gap-3 items-center p-5">
          <div
            class={`w-full flex items-center gap-1 text-blue-400 h-10 pl-4  hover:bg-white hover:bg-opacity-20 rounded-lg cursor-pointer ${
              option == "uploads" ? "bg-white bg-opacity-50" : ""
            }`}
            onClick={() => handleOnClick("uploads")}
          >
            <MdPeopleAlt size={25} />

            <span class="text-white">Uploads</span>
          </div>
          <div
            class={`w-full flex items-center gap-1 text-blue-400 h-10 pl-4  hover:bg-white hover:bg-opacity-20 rounded-lg cursor-pointer ${
              option == "chatBot" ? "bg-white bg-opacity-50" : ""
            }`}
            onClick={() => handleOnClick("chatBot")}
          >
            <SiGooglegemini size={25} />

            <span class="text-white">AI Chat</span>
          </div>

          <div
            class={`w-full flex items-center gap-1 text-blue-400 h-10 pl-4  hover:bg-white hover:bg-opacity-20 rounded-lg cursor-pointer ${
              option == "report" ? "bg-white bg-opacity-50" : ""
            }`}
            onClick={() => handleOnClick("report")}
          >
            {/* <svg class="h-6 w-6 fill-current mr-2" viewBox="0 0 20 20">
            <path d="M17.431,2.156h-3.715c-0.228,0-0.413,0.186-0.413,0.413v6.973h-2.89V6.687c0-0.229-0.186-0.413-0x`.413-0.413H6.285c-0.228,0-0.413,0.184-0.413,0.413v6.388H2.569c-0.227,0-0.413,0.187-0.413,0.413v3.942c0,0.228,0.186,0.413,0.413,0.413h14.862c0.228,0,0.413-0.186,0.413-0.413V2.569C17.844,2.342,17.658,2.156,17.431,2.156 M5.872,17.019h-2.89v-3.117h2.89V17.019zM9.587,17.019h-2.89V7.1h2.89V17.019z M13.303,17.019h-2.89v-6.651h2.89V17.019z M17.019,17.019h-2.891V2.982h2.891V17.019z"></path>
          </svg> */}
            <IoIosStats size={25} />

            <span class="text-white">Reports</span>
          </div>
        </div>
        <div
          class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-white hover:bg-opacity-20 rounded-lg cursor-pointer"
          onClick={() => handleLogout()}
        >
          <IoLogOutOutline size={25} />

          <span class="text-gray-700">Logout</span>
        </div>
      </div>
    </div>
  );
}

// <div
//         class={`w-screen sm:w-64  md:top-0 md:left-0 h-screen lg:block bg-gray-100 border-r z-30 max-md:fixed transition-all ${
//           showMenu ? "left-0 top-0" : "-left-[100%]"
//         }`}
//         id="main-nav"
//       >
//         <div className="flex justify-end md:hidden">
//           <IoClose size={40} onClick={() => setShowMenu(!showMenu)} />
//         </div>

//         {/* <div class="w-1/2 md:w-1/3 lg:w-64 fixed md:top-0 md:left-0 h-screen lg:block bg-gray-100 border-r z-30" :class="sideBarOpen ? '' : 'hidden'" id="main-nav"> */}

//         <div class="w-full py-5 border-b flex px-4 items-center mb-8">
//           {/* <p class="font-semibold text-3xl text-blue-400 pl-4 cursor-pointer" onClick={()=>navigate("/")}>MedConnect</p> */}
//           <img
//             className="mx-auto h-32 w-auto cursor-pointer"
//             src="/logo.png"
//             al
//             onClick={() => navigate("/")}
//           />
//         </div>

//         <div class="mb-4 px-4">
//           <p class="pl-4 text-sm font-semibold mb-1">MAIN</p>

//           <div
//             class={`w-full flex items-center gap-1 text-blue-400 h-10 pl-4  hover:bg-gray-200 rounded-lg cursor-pointer ${
//               option == "patient" ? "bg-gray-200" : ""
//             }`}
//             onClick={() => handleOnClick("patient")}
//           >
//             {/* <MdPeopleAlt size={25} /> */}

//             <span class="text-gray-700">Patients</span>
//           </div>
//           <div
//             class={`w-full flex items-center gap-1 text-blue-400 h-10 pl-4  hover:bg-gray-200 rounded-lg cursor-pointer ${
//               option == "ai" ? "bg-gray-200" : ""
//             }`}
//             onClick={() => handleOnClick("ai")}
//           >
//             <SiGooglegemini size={25} />

//             <span class="text-gray-700">AI Assistant</span>
//           </div>

//           <div
//             class={`w-full flex items-center text-blue-400 h-10 pl-4  hover:bg-gray-200 rounded-lg cursor-pointer ${
//               option == "community" ? "bg-gray-200" : ""
//             }`}
//             onClick={() => handleOnClick("community")}
//           >
//             <svg class="h-6 w-6 fill-current mr-2" viewBox="0 0 20 20">
//               <path d="M17.431,2.156h-3.715c-0.228,0-0.413,0.186-0.413,0.413v6.973h-2.89V6.687c0-0.229-0.186-0.413-0.413-0.413H6.285c-0.228,0-0.413,0.184-0.413,0.413v6.388H2.569c-0.227,0-0.413,0.187-0.413,0.413v3.942c0,0.228,0.186,0.413,0.413,0.413h14.862c0.228,0,0.413-0.186,0.413-0.413V2.569C17.844,2.342,17.658,2.156,17.431,2.156 M5.872,17.019h-2.89v-3.117h2.89V17.019zM9.587,17.019h-2.89V7.1h2.89V17.019z M13.303,17.019h-2.89v-6.651h2.89V17.019z M17.019,17.019h-2.891V2.982h2.891V17.019z"></path>
//             </svg>
//             <span class="text-gray-700">Community</span>
//           </div>
//         </div>

//         <div
//           class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"
//           // onClick={() => handleLogout()}
//         >
//           <IoLogOutOutline size={25} />

//           <span class="text-gray-700">Logout</span>
//         </div>
//       </div>

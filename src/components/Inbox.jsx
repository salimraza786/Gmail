import { MdCropSquare } from "react-icons/md";
import { FaCaretDown, FaUserFriends } from "react-icons/fa";
import { IoMdRefresh, IoMdMore } from "react-icons/io";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdInbox,
} from "react-icons/md";
import { GoTag } from "react-icons/go";
import { useState } from "react";
import Messages from "./Messages";

const mailType = [
  {
    icon:<MdInbox size={"20px"}/>,
    text:"Primary"
  },
  {
    icon:<GoTag size={"20px"}/>,
    text:"Promotions"
  },
  {
    icon:<FaUserFriends size={"20px"}/>,
    text:"Social"
  },
]

const Inbox = () => {
  const [mailTypeSelected , setmailTypeSelected] = useState(0)
  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <div className="flex items-center gap-1">
            <MdCropSquare size={"20px"} />
            <FaCaretDown size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100">
            <IoMdRefresh size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100">
            <IoMdMore size={"20px"} />
          </div>
        </div>
        <div className="flex items-center gap-2">
           <p className="text-sm text-gray-500">1-50 of 1000</p>
           <button className="hover:rounded-full hover:bg-gray-100"><MdKeyboardArrowLeft size={"24px"}/></button>
           <button className="hover:rounded-full hover:bg-gray-100"><MdKeyboardArrowRight size={"24px"}/></button>
        </div>
      </div>
      <div className="h-[90vh] overflow-y-auto">
        <div className="flex items-center gap-1">
            {
              mailType.map((item , index) => {
                 return (
                   <button 
                   key={index}
                    className={`${mailTypeSelected === index ? 'border-b-4 border-b-blue-600 text-blue-600' : 'border-b-4 border-b-transparent'} w-52 bg-gray-100 flex items-center gap-5 p-4`}
                    onClick={() => {setmailTypeSelected(index)}}
                   >
                    {item.icon}
                    <span>{item.text}</span>
                   </button>
                 )
              })
            }
        </div>
        <Messages/>
      </div>
    </div>
  );
};

export default Inbox;

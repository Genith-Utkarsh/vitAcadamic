import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { GrAnnounce } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { IoIosNotifications } from "react-icons/io";
import { lectureData } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const Lectures = () => {
  const { modules } = useParams();
 const [input,setInput] = useState("")
 const navigate = useNavigate()
  const module = lectureData.find(item => item.ModuleName === modules);

  const subjects = module?.subjects || [];
  const subjects2 = subjects.filter((item)=>item.name.toLowerCase().includes(input.toLowerCase()))
  return (
 <div>
     <div className="bg-white shadow p-4 rounded-md">
      {/* Header */}
        <div className='lg:absolute lg:top-5 lg:left-155 mb-4'>
         <h1 className='font-bold text-2xl'>Lectures</h1>
        </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full md:w-auto">
          <input
            
            type="text"
            placeholder="Search Subject..."
            onChange={(e)=>setInput(e.target.value)}
            value={input}
            className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#33A491] w-full sm:w-64"
          />
          <button className="bg-[#33A491] hover:bg-[#2e907e] text-white px-4 py-2 rounded-md transition w-full sm:w-auto">
            Search
          </button>
        </div>

        <div className="flex flex-wrap gap-4 text-gray-700 font-medium justify-start md:justify-end w-full md:w-auto">
          <p className="hover:text-[#33A491] cursor-pointer flex items-center gap-2">
            <GrAnnounce /> Announcement
          </p>
          <p className="hover:text-[#33A491] cursor-pointer flex items-center gap-2">
            <IoIosNotifications /> Notification
          </p>
          <p className="hover:text-[#33A491] cursor-pointer flex items-center gap-2">
            <CgProfile /> Profile
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {subjects2.map((subject, index) => (
          <div
            key={index}
            onClick={()=>navigate(`${subject.name}`)}
            className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition border-1 border-[#33A491]"
          >
            <img
              src={subject.image}
              alt={subject.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-bold text-gray-800">{subject.name}</h2>
            <p className="text-sm text-gray-600">{subject.text}</p>
          </div>
        ))}
      </div>
      
    </div>
    <Footer/>
 </div>
  );
};

export default Lectures;

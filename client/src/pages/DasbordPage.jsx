import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {  dummyLectureData, dummyPyqs } from '../assets/assets';
import { FaPhotoVideo } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { FaCalculator } from "react-icons/fa";
import Footer from '../components/Footer';
const DashboardPage = () => {
  const { sub } = useParams(); // e.g., "math", "physics"
  const filteredData = dummyLectureData.find(
    item => item.subject.toLowerCase() === sub.toLowerCase()
  );

  const [openUnitIndex, setOpenUnitIndex] = useState(null);

  const toggleUnit = (index) => {
    setOpenUnitIndex(prevIndex => (prevIndex === index ? null : index));
  };

  if (!filteredData) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-red-600">
        ❌ Subject "{sub}" not found.
      </div>
    );
  }

  return (
   <div>
     <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-12 lg:px-32 ">
      <h1 className="text-4xl font-bold text-center text-[#136457] mb-12">
        {filteredData.subject} 
      </h1>
{
  filteredData.mainTittle ?   <h1 className='mb-10 ml-2  font-bold bg-[#abe4da] p-2 rounded-sm '>{filteredData.mainTittle}</h1>:null
}
      {filteredData.units.map((unit, unitIndex) => (
        <div
          key={unitIndex}
          className="mb-6 rounded-xl shadow-lg bg-white border border-gray-200 overflow-hidden"
        >
          <button
            className="w-full px-6 py-5 bg-[#e8f5f2] text-left text-xl font-semibold text-[#136457] flex justify-between items-center focus:outline-none"
            onClick={() => toggleUnit(unitIndex)}
          >
            {unit.unit}
            <span className="text-2xl">
              {openUnitIndex === unitIndex ? '−' : '+'}
            </span>
          </button>

          {openUnitIndex === unitIndex && (
            <div className="px-6 py-4 space-y-4 bg-white">
              {unit.subtopics.map((lecture, i) => (
                <div
                  key={i}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center bg-gray-50 rounded-lg p-4 hover:shadow-sm transition"
                >
                  <p className="text-gray-800 font-medium mb-2 md:mb-0 flex gap-2 items-center">
                    <FaCalculator/> {lecture.title}
                  </p>
                  <div className="flex gap-4 flex-wrap">
                    <a
                      href={lecture.videoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#136457] flex items-center gap-2 text-white px-4 py-1.5 roundedtransition"
                    >
                      <FaPhotoVideo/> Watch Video
                    </a>
                    <a
                      href={lecture.notesLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#136457] flex items-center gap-2 text-white px-4 py-1.5  transition"
                    >
                      <CgNotes/> Handwritten Notes
                    </a>
                  </div>
                  
                </div>
              ))}
             
            </div>
          )}
        
        </div>
      ))}
        
    </div>
     <Footer/> 
   </div>
  );
};

export default DashboardPage;

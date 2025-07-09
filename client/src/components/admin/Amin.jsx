import React from 'react';
import Sug from './components/sugesting';
import Fedu from './components/Fedu';

const Admin = () => {
    return (
        <div className="bg-white flex w-full h-screen">
            {/* Sidebar */}
            <div className="bg-[#33A491] text-white w-60 flex flex-col p-8">
                <div className="mt-20">
                    <h1 className="font-bold text-2xl p-2 px-3 flex justify-center items-center bg-[#dfebe9a2] rounded-2xl">
                        Dashboard
                    </h1>
                    <div className="mt-6">
                       
                     
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full flex flex-col ">
                {/* Header */}
                <div className="bg-[#33A491] py-6 flex justify-center items-center text-white">
                    <h1 className="text-4xl font-bold">Admin Panel</h1>
                </div>
                <div className=" py-6 flex  flec-col justify-evenly items-center text-white">
                  
                    <p className="mt-2 p-2 flex justify-center items-center bg-[#32a793e0] rounded-2xl cursor-pointer">
                            Suggestion Section
                        </p>
                    <p className="mt-2 p-2 flex justify-center items-center bg-[#32a793e0] rounded-2xl cursor-pointer">
                            Feedback Section
                        </p>
                </div>

                <div className='flex'>
                    {/* Suggestion List */}
                     
                    <div className=" flex flex-col items-start justify-start h-[400px] overflow-y-auto p-4 space-y-3 rounded-md">
                    
                        <Sug />
                    </div>
                    <div className='flex flex-col items-start justify-start h-[400px] overflow-y-auto p-4 space-y-3 rounded-md'>
                        <Fedu />
                        
                    </div>
                </div>
                 {/* Header */}
                {/* <div className="bg-[#33A491] py-12 flex justify-center items-center text-white gap-5 w-full">
                    <div className='w-[50%]' >
                        left
                    </div >
                    <div className=''>
                        <button className='bg-[#dfebe9a2]  rounded-2xl p-2'>Send Mail To Special Person!</button>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Admin;

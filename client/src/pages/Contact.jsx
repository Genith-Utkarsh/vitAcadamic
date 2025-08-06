import React from 'react';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='flex justify-center items-center w-full min-h-screen p-4 bg-gray-100'>
            <div className='w-full max-w-6xl bg-[#47c99ed5] rounded-[30px] p-6 md:p-10'>
                <div className="flex flex-col md:flex-row md:justify-center md:items-center flex-wrap gap-10 md:gap-20">

                    {/* Kiran Card */}
                    <div className="bg-white rounded-2xl overflow-hidden border border-gray-300 shadow-md w-full sm:w-72">
                        <img
                            className="w-full h-52 object-cover object-top"
                            src="/kiran01.jpg"
                            alt="Kiran Rathod"
                        />
                        <div className="flex flex-col items-center p-4">
                            <p className="font-semibold text-lg">Kiran Rathod</p>
                            <p className="text-gray-500 text-sm">kr551344@gmail.com</p>
                            <p className='text-[#0d8b7b] text-[18px] font-medium'>Developer</p>
                            <div className='flex gap-4 text-[20px] mt-2'>
                                <Link to="https://github.com/kiran04-code" target='_blank'><FaGithub /></Link>
                                <Link to="https://www.linkedin.com/in/kiran-rathod-66b009331/" target='_blank'><FaLinkedinIn /></Link>
                            </div>
                        </div>
                    </div>

                    {/* Shruti Card */}
                    <div className="bg-white rounded-2xl overflow-hidden border border-gray-300 shadow-md w-full sm:w-72">
                        <img
                            className="w-full h-52 object-cover object-top"
                            src="/shruti002.jpg"
                            alt="Shruti Rmteke"
                        />
                        <div className="flex flex-col items-center p-4">
                            <p className="font-semibold text-lg">Shruti Ramteke</p>
                            <p className="text-gray-500 text-sm">shrutiramteke028@gmail.com</p>
                            <p className='text-[#0d8b7b] text-[18px] font-medium'>Content Curator</p>
                            <div className='flex gap-4 text-[20px] mt-2'>
                                <Link to="https://github.com/shrutiramteke028" target='_blank'><FaGithub /></Link>
                                <Link to="https://www.linkedin.com/in/shruti-ramteke-735383332" target='_blank'><FaLinkedinIn /></Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;

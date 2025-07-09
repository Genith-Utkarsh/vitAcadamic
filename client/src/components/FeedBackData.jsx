import React from 'react';
import { useState } from 'react';
import { data, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth';
import toast from 'react-hot-toast';
const SuggestionForm = () => {
    const { siggFeed } = useParams()
    const { axios } = useAuth()
    const navigator = useNavigate()
    const [datas, setData] = useState({});
    const handlechange = (e) => {
        const { id, value } = e.target;
        setData(prevData => ({ ...prevData, [id]: value }));
    }
    console.log(datas)
    const sugesBox = async (e) => {
        try {
            e.preventDefault()
            const { data } = await axios.post("/api/suggestion", datas)

            if (data.success) {
                toast.success(data.message)
                navigator("/")
            }
        } catch (error) {
            console.log(error)
        }
    }


    const Feedback = async (e) => {
        try {
            e.preventDefault()
            const { data } = await axios.post("/api/Feedback", datas)
            if (data.success) {
                toast.success(data.message)
                navigator("/")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="min-h-screen bg-[#f4fdfc] py-12 px-4 md:px-16 flex items-center justify-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-xl border border-[#33A491]/30">
                <h2 className="text-3xl font-bold text-[#33A491] mb-6 text-center drop-shadow">
                    {siggFeed} Form
                </h2>
                <form className="space-y-4" onSubmit={async (e) => {
                    e.preventDefault(); 
                    if (siggFeed === "Suggestion") {
                        await sugesBox(e);
                    } else {
                        await Feedback(e);
                    }
                }}

                >
                    {
                        siggFeed === "Suggestion" ? (<div className='flex gap-4 flex-col'>
                            <input
                                type="text"
                                placeholder="Your Name"
                                id="name"
                                onChange={handlechange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#33A491] outline-none"
                            />
                            <input
                                type="email"
                                id="email"
                                onChange={handlechange}
                                placeholder="Your Email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#33A491] outline-none"
                            />
                            <textarea
                                rows="5"
                                id='suggestions'
                                onChange={handlechange}
                                placeholder="Write your suggestion..."
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm resize-none focus:ring-2 focus:ring-[#33A491] outline-none"
                            ></textarea>
                        </div>) : (<div className='flex gap-4 flex-col'>
                            <input
                                type="Name"
                                id="name"
                                onChange={handlechange}
                                placeholder="Your Name "
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#33A491] outline-none"
                            />
                            <select
                                id="branch" onChange={handlechange} className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#33A491] outline-none"
                            >
                                <option value="" disabled selected>
                                    Select Your Branch
                                </option>
                                <option value="Computer Science">Computer Science</option>
                                <option value="Information Technology">Information Technology</option>
                                <option value="Electronics & Communication">Electronics & Communication</option>
                                <option value="Mechanical Engineering">Mechanical Engineering</option>
                                <option value="Civil Engineering">Civil Engineering</option>
                                <option value="Computer Science(IOT)">Computer Science(IOT)</option>
                                <option value="Computer Science(AIML)">Computer Science(AIML)</option>
                                <option value="Computer Science(Software">Computer Science(Software)</option>
                                <option value="Computer Science(DS)">Computer Science(DS)</option>
                            </select>


                            <textarea
                                rows="5"
                                id="feedbacks"
                                onChange={handlechange}
                                placeholder="Write your FeedBack..."
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm resize-none focus:ring-2 focus:ring-[#33A491] outline-none"
                            ></textarea>
                        </div>)
                    }
                    <button
                        type="submit"
                        className="w-full bg-[#33A491] text-white py-2 rounded-lg hover:bg-[#2a8f78] transition"
                    >
                        {
                            siggFeed === "Suggestion" ? " Submit Your Suggestion" : "Submit Your FeedBack"
                        }
                    </button>
                    <button className="w-full bg-[#33A491] text-white py-2 rounded-lg hover:bg-[#2a8f78] transition " onClick={() => navigator("/")}>Back to Home</button>
                </form>
            </div>
        </div>
    );
};

export default SuggestionForm;

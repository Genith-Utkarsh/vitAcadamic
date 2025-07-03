import React from 'react';
import { useParams } from 'react-router-dom';
const SuggestionForm = () => {
    const { siggFeed } = useParams()
    console.log(siggFeed)
    return (
        <div className="min-h-screen bg-[#f4fdfc] py-12 px-4 md:px-16 flex items-center justify-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-xl border border-[#33A491]/30">
                <h2 className="text-3xl font-bold text-[#33A491] mb-6 text-center drop-shadow">
                    {siggFeed} Form
                </h2>
                <form className="space-y-4">
                    {
                        siggFeed === "Suggestion" ? (<div className='flex gap-4 flex-col'>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#33A491] outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#33A491] outline-none"
                            />
                            <textarea
                                rows="5"
                                placeholder="Write your suggestion..."
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm resize-none focus:ring-2 focus:ring-[#33A491] outline-none"
                            ></textarea>
                        </div>) : (<div className='flex gap-4 flex-col'>
                            <input
                                type="Name"
                                placeholder="Your Name "
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#33A491] outline-none"
                            />
                            <select
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#33A491] outline-none"
                            >
                                <option value="" disabled selected>
                                    Select Your Branch
                                </option>
                                <option value="cse">Computer Science</option>
                                <option value="it">Information Technology</option>
                                <option value="ece">Electronics & Communication</option>
                                <option value="me">Mechanical Engineering</option>
                                <option value="ce">Civil Engineering</option>
                                <option value="cse">Computer Science(IOT)</option>
                                <option value="it">Computer Science(AIML)</option>
                                <option value="ece">Computer Science(Software)</option>
                                <option value="me">Computer Science(DS)</option>
                            </select>


                            <textarea
                                rows="5"
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
                </form>
            </div>
        </div>
    );
};

export default SuggestionForm;

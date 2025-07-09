import { useEffect, useState } from 'react'
import React from 'react'
import { useAuth } from '../../../context/auth'
import toast from 'react-hot-toast'
const Sug= () => {
    const [sugesiondata ,setsuggesiondata] = useState([])
    const {axios} = useAuth()
    const alluSugesion = async()=>{
        const {data} =  await axios.get("/api/AllSugesion")
        if(data.success){
            setsuggesiondata(data.sugData)
        }
    }

    useEffect(()=>{
        alluSugesion()
    },[])
    return (
        <div>
            <div className="bg-gray-100 rounded shadow max-w-2xl mx-auto">
                <ul>
                    {sugesiondata.length > 0 ? (
                        sugesiondata.map((data, idx) => (
                            <div className='mt-2 p-2' key={idx}>
                                <li className="flex items-start gap-4 p-4 bg-white rounded shadow-sm hover:bg-gray-50 transition">
                                    <i className="fas fa-user-circle text-3xl text-blue-500 mt-1"></i>
                                    <div>
                                        <div className="flex gap-2">
                                            <p className="font-semibold text-gray-800">{data.name}</p>
                                            <p className="text-sm text-gray-500"> {data.email}</p>
                                        </div>
                                        <p className="text-sm text-gray-600 mt-1 w-[500px]">
                                            {data.suggestions}
                                        </p>
                                    </div>
                                </li>
                            </div>
                        ))
                    ) : (
                        <div className='mt-2 p-2'>
                            <li className="flex items-start gap-4 p-4 bg-white rounded shadow-sm hover:bg-gray-50 transition">
                                <i className="fas fa-user-circle text-3xl text-blue-500 mt-1"></i>
                                <div>
                                    <p className="text-sm text-gray-600 mt-1 w-[500px]">
                                        No Sugeesion Here
                                    </p>
                                </div>
                            </li>
                        </div>
                    )}

                </ul>
            </div>
        </div>
    )
}


export default Sug

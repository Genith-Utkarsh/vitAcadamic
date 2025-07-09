import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../context/auth'
import toast from 'react-hot-toast'
const Fedu = () => {
    const [datafeedback, setdatafeedback] = useState([])
    const { axios } = useAuth()
    const fetallfeddback = async () => {
        try {
            const { data } = await axios.get("/api/getallfeedback")
            if (data.success) {
                setdatafeedback(data.fedData)
            }
            else {
                setdatafeedback(null)
            }
        } catch (error) {
            console.log(error)
            setdatafeedback(null)
        }
    }

    useEffect(() => {
        fetallfeddback()
    }, [])
    console.log(datafeedback)
    return (
        <div>
            <div className="bg-gray-100 rounded shadow max-w-2xl mx-auto">
                <ul>
                    {datafeedback.length > 0 ? (
                        datafeedback.map((data, idx) => (
                            <div className='mt-2 p-2' key={idx}>
                                <li className="flex items-start gap-4 p-4 bg-white rounded shadow-sm hover:bg-gray-50 transition">
                                    <i className="fas fa-user-circle text-3xl text-blue-500 mt-1"></i>
                                    <div>
                                        <div className="flex gap-2">
                                            <p className="font-semibold text-gray-800">{data.name}</p>
                                            <p className="text-sm text-gray-500"> Branch: {data.branch}</p>
                                        </div>
                                        <p className="text-sm text-gray-600 mt-1 w-[500px]">
                                            {data.feedbacks}
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
                                        No Feedback Here
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

export default Fedu

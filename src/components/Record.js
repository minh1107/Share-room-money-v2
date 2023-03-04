import React, { useEffect, useState } from 'react'

function Record({ data }) {
    const currentRecord = (JSON.parse(localStorage.getItem("Record")))
    const [arrData, setArrData] = useState(currentRecord ? currentRecord : [])
    console.log(data)
    const handleSaveRecord = () => {
        setArrData(pre => [...pre, data])
    }
    useEffect(() => {
        localStorage.setItem('Record', JSON.stringify(arrData))
    }, [arrData])
    
    return (
        <div className='mt-2 flex justify-end mr-[5%]'>
            <button onClick={handleSaveRecord} className='border-2 my-2 px-2 py-2 bg-[#38518C] text-left text-white rounded-md'>Lưu bảng nháp hiện tại</button>
        </div>
    )
}

export default Record
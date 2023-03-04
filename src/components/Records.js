import React, { useEffect, useRef, useState } from 'react'

function Records() {
    const record = JSON.parse(localStorage.getItem('Record'))
    const tableData = JSON.parse(localStorage.getItem('TableData'))
    const [createResult, setCreateResult] = useState()
    useEffect(() => {
        const result = [
            { name: 'Hiếu', value: 0, id: "1" },
            { name: 'Vinh', value: 0, id: "2" },
            { name: 'Minh', value: 0, id: "3" },
            { name: 'Tiến Anh', value: 0, id: "4" },
        ]
        tableData.forEach(element => {
            element.forEach((item, index) => {
                if (result[index].id === item.id) result[index].value += item.value
            })
        });
        setCreateResult(result)
    }, [])

    console.log(record)
    const handleDeleteRecord = () => {
        localStorage.removeItem('Record')
    }
    const handlerSelectRecord = (index) => {
        localStorage.setItem('TableData', JSON.stringify(record[index]))
    }


    return (
        <div className='flex justify-between mt-8'>
            <div>
            Kết quả
                {
                    createResult?.map((item) => <div>
                        {item.name}: {new Intl.NumberFormat().format(item.value)} VND
                    </div>)
                }
            </div>
            <div className=''>
                <button className='font-normal border-2 rounded-md p-1 px-4  bg-[#38518C] text-white' onclick={handleDeleteRecord}>Xóa các bản record</button>

                <div>Các bản ghi: </div>
                {
                    record?.map((item, index) => (
                        <button onClick={() => handlerSelectRecord(index)} className='font-normal border-2 rounded-md p-1 my-2 px-4 bg-[#38518C] text-white'>{index}</button>
                    ))
                }
            </div>
        </div>
    )
}

export default Records
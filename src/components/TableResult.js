import React, { useEffect, useRef, useState } from 'react'
import Record from './Record';

function TableResult() {
    const dataLocal = JSON.parse(window.localStorage.getItem("TableData"))
    const [dataTable, setDataTable] = useState(dataLocal ? dataLocal : [])
    const roommate = useRef(['1', '2', '3', '4'])
    const handleAdd = () => {
        const data = JSON.parse(window.localStorage.getItem("Payer"));
        const eaterLength = data.eater.length
        const roommateList = [
            { value: 0, id: '1' },
            { value: 0, id: '2' },
            { value: 0, id: '3' },
            { value: 0, id: '4' }
        ]
        if(data.payer == null) {
            roommateList.forEach((i, index) => {
                roommateList[index].value = -data.money /4
            })
            setDataTable(pre => [...pre, roommateList])
        }
        roommate.current.forEach((item) => {
            if (data.payer === item && data.eater.find(i => i === data.payer)) {
                if (data.eater.find(i => i === "1")) roommateList[0].value = - data.money / eaterLength
                if (data.eater.find(i => i === "2")) roommateList[1].value = - data.money / eaterLength
                if (data.eater.find(i => i === "3")) roommateList[2].value = -data.money / eaterLength
                if (data.eater.find(i => i === "4")) roommateList[3].value = -data.money / eaterLength
                const moneyOfPayer = roommateList.find(i =>
                    i.id === item)
                roommateList[parseInt(moneyOfPayer.id) - 1].value = data.money / eaterLength * (eaterLength - 1)
                setDataTable(pre => [...pre, roommateList])
            }
        }
        )
    }
    const handleDelete = (e) => {
        console.log(e)
        const newArr = dataTable.filter((item, index) => index !== e)
        console.log(newArr)
        setDataTable(newArr)
        localStorage.setItem('TableData', JSON.stringify(newArr))
    }
    useEffect(() => {
      localStorage.setItem('TableData', JSON.stringify(dataTable))
    }, [dataTable])

    return (
        <div className='w-[100%] m-2 overflow-y-scroll h-[600px]'>
            <button onClick={handleAdd} className='p-2 border-[2px] my-2 rounded-lg mt-4 hover:bg-[#38518C] hover:text-white px-4'>Gửi lên</button>
            <table class="table-auto w-[95%] my-2 border-red-100 border-4">
                <thead >
                    <tr >
                        <th className='m-2 border-red-100 border-4 w-[7%]'>Số thứ tự</th>
                        <th className='m-2 border-red-100 border-4 w-[15%]'>Hiếu</th>
                        <th className='m-2 border-red-100 border-4 w-[15%]'>Vinh</th>
                        <th className='m-2 border-red-100 border-4 w-[15%]'>Minh</th>
                        <th className='m-2 border-red-100 border-4 w-[15%]'>Tiến Anh</th>
                        <th className='m-2 border-red-100 border-4 w-[15%]'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataTable?.map((item, index) => (
                            <tr>
                                <th className='m-2 border-red-100 border-4 w-[7%]'>{index+1}</th>
                                {item.map(i => (
                                    <th className='m-2 border-red-100 border-4 w-[15%]'>{i.value}</th>
                                ))}
                                <th className='m-2 border-red-100 border-4 w-[15%]'>
                                    <button onClick={() => handleDelete(index)} className='font-normal border-2 rounded-md p-1 px-4 m-2 bg-[#38518C] text-white'>
                                        Delete
                                    </button></th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Record data={dataTable}/>
        </div>
    )
}

export default TableResult
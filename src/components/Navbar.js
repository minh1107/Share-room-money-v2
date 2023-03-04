import React, { useEffect, useRef, useState } from 'react'
import { roommate } from '../util/data/roommate'

function Navbar() {
    const [payer, setPayer] = useState()
    const [eater, setEater] = useState([])
    const [money, setMoney] = useState(0)
    const inputRef = useRef()

    const handleSelectPayer = (e) => {
        setPayer(e.target.id)
    }
    const handleSelectEater = (e) => {
        const element = eater.find(item => item === e.target.id)
        if (element === undefined) setEater(pre => [...pre, e.target.id])
        else {
            const newEater = eater.filter((item) => item !== e.target.id)
            setEater(newEater)
        }
    }
    const handleSelectMoney = (e) => {
        setMoney(e.target.value)
    }
    useEffect(() => {
        localStorage.setItem('Payer',
            JSON.stringify({
                payer: payer,
                eater: eater,
                money: money
            })
        )
    }, [payer, eater, money])
    const handleShareRoomMoney = (e) => {
        setMoney(e.target.value)
    }
    const handleAllCheck = () => {
        setEater([1,2,3,4])
    }
    return (
        <div className=''>
            <div>
                <div>Chọn người chi tiền: </div>
                <div className='my-2'>
                    {
                        roommate?.map((item) => (
                            <span className='mx-2'>
                                <label className='mr-1' for={item.id}>{item.name}</label>
                                <input  onClick={handleSelectPayer} id={item.id} name='inputRoommate' type='radio' />
                            </span>
                        ))
                    }
                </div>
                <div>Chọn người tham gia chia tiền</div>
                <div className='my-2'>
                    {
                        roommate?.map((item,index) => {
                            return (
                                <span className='mx-2'>
                                    <label className='mr-1'>{item.name}</label>
                                    <input className={`allChecked_${index}`} onClick={handleSelectEater} id={item.id} type='checkbox' />
                                </span>
                            )
                        })
                    }
                    {/* <button onClick={handleAllCheck}>All checked</button> */}
                </div>
                <div className='my-2 '>
                    <label className='mr-2'>Điền số tiền vào đây: </label>
                    <input ref={inputRef} onChange={handleSelectMoney} type='text' placeholder='Điền số tiền vào đây' className='outline-transparent p-2 border-[2px] pl-2 rounded-md' />
                </div>
            </div>
            <div>
                <div>Người chi: {payer}</div>
                <div>Người ăn: {eater.map(item => <span>{' '}{item}</span>)}</div>
                <div>Tổng tiền: {new Intl.NumberFormat().format(money)}</div>
            </div>
            <div className='my-2 '>
                    <label className='mr-2'>Điền tiền nhà vào đây: </label>
                    <input ref={inputRef} onChange={handleShareRoomMoney} type='text' placeholder='Điền số tiền vào đây' className='outline-transparent p-2 border-[2px] pl-2 rounded-md' />
            </div>
        </div>
    )
}

export default Navbar
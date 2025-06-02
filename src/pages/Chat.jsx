import React, { useState } from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoMdPhotos } from "react-icons/io";
import { IoSendSharp } from "react-icons/io5";

const Chat = () => {

    const [dropD, setDropD] = useState(false)

    return (
        <div className='bg-blue-500 w-screen h-screen flex justify-center items-center'>
            <div className='w-[90%] max-w-[1100px] h-[75%] rounded-xl flex'>

                <div className='w-[25%] h-full bg-blue-950 rounded-l-xl p-5 overflow-y-auto'>
                    <div className='relative flex w-full justify-between items-center mb-1'>
                        <div className='flex items-center gap-2'>
                            <img className='w-8' src="https://www.svgrepo.com/show/514320/message.svg" alt="" />
                            <h1 className='text-white font-semibold'>Blue Chat</h1>
                        </div>
                        <button onClick={() => setDropD(!dropD)}>
                            <HiOutlineDotsVertical className='text-white text-lg' />
                        </button>
                       {dropD ?  <div className='w-30 h-15 rounded-md absolute top-10 right-0 bg-white flex flex-col justify-center items-center'>
                            <button className='w-full h-max hover:bg-zinc-200 border-b-1'>Edit</button>
                            <button className='hover:bg-zinc-200 w-full h-max'>Logout</button>
                        </div> : ''}
                    </div>

                    <input type="text" className='w-full bg-zinc-300 mt-3 rounded-md h-[40px] p-3 text-sm mb-5' placeholder='Search' />

                    <div className='flex w-full items-center gap-2 bg-blue-950 hover:bg-blue-900 p-2'>
                        <img className='w-12 h-12 rounded-full  object-cover' src="https://images.unsplash.com/photo-1536589961747-e239b2abbec2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                        <div><h1 className='text-white text-sm font-medium'>Alex Goggins</h1>
                            <p className='text-white text-sm opacity-80'>Those designs are really good!</p></div>
                    </div>
                    <div className='flex w-full items-center gap-2 bg-blue-950 mt-3 hover:bg-blue-900 p-2'>
                        <img className='w-12 h-12 rounded-full  object-cover' src="https://images.unsplash.com/photo-1552933529-e359b2477252?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhdHN8ZW58MHx8MHx8fDA%3D" alt="" />
                        <div><h1 className='text-white text-sm font-medium'>George Planks</h1>
                            <p className='text-white text-sm opacity-80'>Sure! I will handle that</p></div>
                    </div>
                    <div className='flex w-full items-center gap-2 bg-blue-950 mt-3 hover:bg-blue-900 p-2'>
                        <img className='w-12 h-12 rounded-full  object-cover' src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                        <div><h1 className='text-white text-sm font-medium'>Zeek Brad</h1>
                            <p className='text-white text-sm opacity-80'>Are you sure about Huxn Interiors?</p></div>
                    </div>
                </div>

                <div className='w-[50%] h-full bg-white'>

                    <div className='w-full h-[10%] border-b-1 border-blue-950 flex justify-between items-center px-4'>
                        <div className='flex items-center gap-3'>
                            <img className='w-10 h-10 object-cover rounded-full' src="https://images.unsplash.com/photo-1536589961747-e239b2abbec2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                            <h1 className='font-semibold text-lg'>Alex Goggins</h1>
                            <div className='w-[8px] h-[8.2px] bg-green-500 rounded-full mt-[3px]'></div>
                        </div>
                        <HiOutlineDotsVertical />
                    </div>

                    <div className='w-full h-[79%] px-5 py-3 flex flex-col gap-4 justify-end'>
                        <div className='h-max flex'>
                            <div className='mr-2 flex flex-col justify-end min-w-[45px] items-center'>
                                <img className='w-7 h-7 object-cover rounded-full' src="https://images.unsplash.com/photo-1536589961747-e239b2abbec2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                                <p className='text-xs'>2:39 PM</p>
                            </div>
                            <div className='bg-blue-500 px-3 py-1 rounded-t-md rounded-r-md w-max h-max text-white'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quidem aspernatur nulla illo ullam consequuntur voluptatem temporibus officiis iste voluptatibus, vel eius! Earum consectetur vel sequi modi! Alias, ipsa commodi quasi provident illo sit.</p>
                            </div>
                        </div>

                        <div className='h-max flex'>
                            <div className='bg-blue-500 px-3 py-1 rounded-t-md rounded-l-md w-max h-max text-white'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quidem aspernatur nulla illo ullam consequuntur voluptatem temporibus officii.</p>
                            </div>
                            <div className='ml-2 flex flex-col justify-end min-w-[45px] items-center'>
                                <img className='w-7 h-7 object-cover rounded-full' src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                                <p className='text-xs'>2:39 PM</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-full h-[11%] flex gap-2 items-center justify-center px-2'>
                        <input type="text" placeholder='Enter a message' className='w-[80%] border-2 border-blue-950 rounded-md px-4 py-2' />
                        <IoMdPhotos className='text-2xl text-blue-950' />
                        <IoSendSharp className='text-4xl text-white bg-blue-950 px-2 rounded-full hover:bg-blue-900' />
                    </div>
                </div>

                <div className='w-[25%] h-full bg-blue-950 rounded-r-xl'>
                    
                    <div className='h-[45%] w-full flex flex-col justify-end items-center p-5 border-b-1 opacity-90 border-white'>
                        <img className='w-[60%] h-[58%] object-cover rounded-full mb-2' src="https://images.unsplash.com/photo-1536589961747-e239b2abbec2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                        <div className='flex gap-2 items-center'>
                            <h1 className='text-white font-semibold text-xl'>Alex Goggins</h1>
                            <div className='w-[7px] h-[8.2px] bg-green-500 rounded-full'></div>
                        </div>
                        <p className='text-white text-sm opacity-90'>Hey there! I am using BlueChat</p>
                    </div>

                    <div className='h-[55.1%] w-full rounded-br-xl p-2 flex flex-col items-center'>

                        <h1 className='font-semibold text-blue-100 text-lg mt-2 mb-1'>Photos & Videos</h1>

                        <div className='grid grid-cols-3 grid-rows-4 h-max w-max gap-2 my-3 place-items-center'>
                            <img className='w-18 h-12 rounded-md hover:scale-105' src="https://images.unsplash.com/photo-1746959353917-7bd54f000913?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <img className='w-18 h-12 rounded-md hover:scale-105' src="https://images.unsplash.com/photo-1748680098951-a71c95f6c560?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <img className='w-18 h-12 rounded-md hover:scale-105' src="https://plus.unsplash.com/premium_photo-1706195311376-09b70337ea1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <img className='w-18 h-12 rounded-md hover:scale-105' src="https://images.unsplash.com/photo-1748818824529-22342cce856c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <img className='w-18 h-12 rounded-md hover:scale-105' src="https://images.unsplash.com/photo-1746959353917-7bd54f000913?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <img className='w-18 h-12 rounded-md hover:scale-105' src="https://images.unsplash.com/photo-1748680098951-a71c95f6c560?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <img className='w-18 h-12 rounded-md hover:scale-105' src="https://plus.unsplash.com/premium_photo-1706195311376-09b70337ea1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <img className='w-18 h-12 rounded-md hover:scale-105' src="https://images.unsplash.com/photo-1748818824529-22342cce856c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>

                        <button className='bg-blue-100 px-5 py-1 text-lg text-blue-900 font-semibold rounded-full h-max w-max mb-3 hover:bg-blue-900 hover:text-white'>Logout</button>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Chat
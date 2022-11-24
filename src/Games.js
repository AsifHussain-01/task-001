import React from 'react'
import { Link } from 'react-router-dom'
export const Games = () => {

    function myFunction() {
        alert("Worng Number!")
    }


    return (
        <div className='container lg:w-full lg:max-w-[1024px] h-full lg:max-h-[1555px] lg:mx-auto  mb:w-[420px] mb:mx-auto '>
            <div className='lg:w-full lg:max-[1024px] h-full lg:max-h-[1555px] lg:mx-auto lg:flex lg:flex justify-center mb:w-[420px]'>
                <img src='https://tuk-cdn.s3.amazonaws.com/can-uploader/image%201.svg' />
            </div>
            <div className='lg:w-full lg:max-w-[1024px] lg:mx-auto mb:w-[420px]'>
                <div>
                    <div className='lg:max-w-[1024px] lg:max-h-[24px]  mt-[0px] mb:w-[420px]'>
                        <h1 className='text-[24px] font-bold leading-6 text-gray-800 font-koh Santepheap'>Puzzle Game Test</h1>
                    </div>
                    <div className='lg:max-w-[1024px] lg:max-h-[16px] lg:mt-[20px] mb:w-[420px]'>
                        <h className='text-[16px] font-normal leading-4 text-gray-800 font-koh Santepheap'>Enter Numbers</h>
                    </div>
                </div>
                <div className='lg:mt-5 lg:max-w-[1024px] lg:w-full lg:flex lg:flex-row lg:h-full lg:mx-auto mb:w-[420px] mb:gap-[16px] mb:flex mb:flex-col'>
                    <div className='lg:max-w-[1024px] lg:max-h-[48px] mb:w-[420px]'>
                        <input type="number" id="quantity" name="quantity" min="1" max="24" className='lg:mx-auto lg:w-[360px] lg:h-[48px] bg-gray-200 rounded-[4px] p-[16px] gap-[10px] mb:w-[358px]'></input>
                    </div>
                    <div className='lg:max-w-[1024px] lg:max-h-[48px] mb:w-[420px]'>
                        < button onClick={() => { myFunction() }} className='lg:w-[119px] lg:h-[48px] bg-gray-200 rounded-[4px] pl-[32px] pr-[32px] pt-[16px] pb-[16px] bg-blue-600 ml-[28px] text-[16px] leading-4 font-koh Santepheap font-normal mb:w-[358px] ml-[0px]'>Submit</button>
                    </div>
                    <div className='lg:max-w-[1024px] lg:max-h-[48px] lg:ml-[390px] mb:w-[420px]'>
                        < button onClick={() => { window.location.replace("/") }} className='lg:w-[119px] lg:h-[48px] rounded-[4px] pl-[32px] pr-[32px] pt-[16px] pb-[16px] border-[1px] border-blue-600 text-blue-600 lg:ml-[0px] text-[16px] leading-4 font-koh Santepheap font-normal mb:w-[358px] ml-[1px]'>Reset</button>
                    </div>

                </div>

                {/* button  */}
                <div className='lg:w-[1024px] mt-[30px] h-[16px] mb:w-[420px] mt-[30px] flex'>
                    <div className='flex w-[110px] h-[20px] hover:border-b-[3px] border-red-500'>
                      
                        <button className='w-[16px] h-[16px] rounded-full bg-red-500'></button>
                        
                        <h1 className='w-[87px] h-[12px] pl-[7px] pt-[2px] text-[12px] leading-3'>Prime Number</h1>
                    </div>
                    <div className='flex ml-[10px] w-[110px] h-[20px] hover:border-b-[3px] border-green-900'>
                    
                        <button className='w-[16px] h-[16px] rounded-full bg-green-900'></button>
                        <h1 className='w-[87px] h-[12px] pl-[7px] pt-[2px] text-[12px] leading-3'>Even Number</h1>
                    </div>
                    <div className='flex ml-[10px] w-[110px] h-[20px] hover:border-b-[3px] border-blue-900'>
                    
                        <button className='w-[16px] h-[16px] rounded-full bg-blue-900'></button>
                        <h1 className='w-[87px] h-[12px] pl-[7px] pt-[2px] text-[12px] leading-3'>Odd Number</h1>
                    </div>
                </div>


                <div className='lg:w-[1024px] lg:h-[744px] bg-orange-100 border-orange-600 mt-[40px] p-[48px]
                 rounded-[24px] mb-[40px] flex
                 mb:place-content-center mb:w-[358px] mb:h-[500px] ml-[1px] gap-[16px] p-[24px] mx-auto mt-[32px]'>



                    {/* box one  */}
                    <div className='flex gap-[10px] mb:flex-col '>
                        <div className='rounded-[16px] bg-green-500 lg:w-[213px] lg:h-[150px] p-[16px] text-center mb:w-[66px] mb:h-[64px]'>
                            <h1 className='text-[32px] font-normal leading-8 text-white lg:pl-[24px] lg:pt-[16px] mb:pl-[0px] mb:pt-[0x]'>1</h1>
                        </div>
                        <div className='rounded-[16px] bg-yellow-500 lg:w-[213px] lg:h-[150px] p-[16px] text-center mb:w-[66px] mb:h-[64px]'>
                            <h1 className='text-[32px] font-normal leading-8 text-white lg:pl-[24px] lg:pt-[16px] mb:pl-[0px] mb:pt-[0x] '>2</h1>
                        </div>
                        <div className='rounded-[16px] bg-blue-500 lg:w-[213px] lg:h-[150px] p-[16px] text-center mb:w-[66px] mb:h-[64px]'>
                            <h1 className='text-[32px] font-normal leading-8 text-white lg:pl-[24px] lg:pt-[16px] mb:pl-[0px] mb:pt-[0x]'>3</h1>
                        </div>
                        <div className='rounded-[16px] bg-blue-500 lg:w-[213px] lg:h-[150px] p-[16px] text-center mb:w-[66px] mb:h-[64px]'>
                            <h1 className='text-[32px] font-normal leading-8 text-white lg:pl-[24px] lg:pt-[16px] mb:pl-[0px] mb:pt-[0x]'>4</h1>
                        </div>
                        <div className='rounded-[16px] bg-blue-500 lg:w-[213px] lg:h-[150px] p-[16px] text-center mb:w-[66px] mb:h-[64px]'>
                            <h1 className='text-[32px] font-normal leading-8 text-white lg:pl-[24px] lg:pt-[16px] mb:pl-[0px] mb:pt-[0x]'>5</h1>
                        </div>
                        <div className='rounded-[16px] bg-yellow-500 lg:w-[213px] lg:h-[150px] p-[16px] text-center mb:w-[66px] mb:h-[64px]'>
                            <h1 className='text-[32px] font-normal leading-8 text-white lg:pl-[24px] lg:pt-[16px] mb:pl-[0px] mb:pt-[0x]'>6</h1>
                        </div>

                    </div>



                    {/* box two  */}
                    <div className='flex gap-[10px] mb:flex-col'>
                        <div className='rounded-[16px] bg-yellow-500 lg:w-[213px] lg:h-[150px] p-[16px] text-center mb:w-[66px] mb:h-[64px]'>
                            <h1 className='text-[32px] font-normal leading-8 text-white lg:pl-[24px] lg:pt-[16px] mb:pl-[0px] mb:pt-[0x]'>7</h1>
                        </div>
                        <div className='rounded-[16px] bg-green-500 lg:w-[213px] lg:h-[150px] p-[16px] text-center mb:w-[66px] mb:h-[64px]'>
                            <h1 className='text-[32px] font-normal leading-8 text-white lg:pl-[24px] lg:pt-[16px] mb:pl-[0px] mb:pt-[0x]'>8</h1>
                        </div>
                        <div className='rounded-[16px] bg-green-500 lg:w-[213px] lg:h-[150px] p-[16px] text-center mb:w-[66px] mb:h-[64px]'>
                            <h1 className='text-[32px] font-normal leading-8 text-white lg:pl-[24px] lg:pt-[16px] mb:pl-[0px] mb:pt-[0x]'>9</h1>
                        </div>
                        <div className='rounded-[16px] bg-green-500 lg:w-[213px] lg:h-[150px] p-[16px] text-center mb:w-[66px] mb:h-[64px]'>
                            <h1 className='text-[32px] font-normal leading-8 text-white lg:pl-[24px] lg:pt-[16px] mb:pl-[0px] mb:pt-[0x]'>10</h1>
                        </div>
                        <div className='rounded-[16px] bg-blue-500 lg:w-[213px] lg:h-[150px] p-[16px] text-center mb:w-[66px] mb:h-[64px]'>
                            <h1 className='text-[32px] font-normal leading-8 text-white lg:pl-[24px] lg:pt-[16px] mb:pl-[0px] mb:pt-[0x]'>11</h1>
                        </div>
                        <div className='rounded-[16px] bg-yellow-500 lg:w-[213px] lg:h-[150px] p-[16px] text-center mb:w-[66px] mb:h-[64px]'>
                            <h1 className='text-[32px] font-normal leading-8 text-white lg:pl-[24px] lg:pt-[16px] mb:pl-[0px] mb:pt-[0x]'>12</h1>
                        </div>

                    </div>



                    {/* box three */}
                    <div className='flex  gap-[10px] mb:flex-col'>
                        <div className='rounded-[16px] bg-yellow-500 lg:w-[213px] lg:h-[150px] p-[16px] text-center mb:w-[66px] mb:h-[64px]'>
                            <h1 className='text-[32px] font-normal leading-8 text-white lg:pl-[24px] lg:pt-[16px] mb:pl-[0px] mb:pt-[0x]'>13</h1>
                        </div>
                        <div className='rounded-[16px] bg-green-500 lg:w-[213px] lg:h-[150px] p-[16px] text-center mb:w-[66px] mb:h-[64px]'>
                            <h1 className='text-[32px] font-normal leading-8 text-white lg:pl-[24px] lg:pt-[16px] mb:pl-[0px] mb:pt-[0x]'>14</h1>
                        </div>
                        <div className='rounded-[16px] bg-green-500 lg:w-[213px] lg:h-[150px] p-[16px] text-center mb:w-[66px] mb:h-[64px]'>
                            <h1 className='text-[32px] font-normal leading-8 text-white lg:pl-[24px] lg:pt-[16px] mb:pl-[0px] mb:pt-[0x]'>15</h1>
                        </div>
                        <div className='rounded-[16px] bg-green-500 lg:w-[213px] lg:h-[150px] p-[16px] text-center mb:w-[66px] mb:h-[64px]'>
                            <h1 className='text-[32px] font-normal leading-8 text-white lg:pl-[24px] lg:pt-[16px] mb:pl-[0px] mb:pt-[0x]'>16</h1>
                        </div>
                        <div className='rounded-[16px] bg-blue-500 lg:w-[213px] lg:h-[150px] p-[16px] text-center mb:w-[66px] mb:h-[64px]'>
                            <h1 className='text-[32px] font-normal leading-8 text-white lg:pl-[24px] lg:pt-[16px] mb:pl-[0px] mb:pt-[0x]'>17</h1>
                        </div>
                        <div className='rounded-[16px] bg-yellow-500 lg:w-[213px] lg:h-[150px] p-[16px] text-center mb:w-[66px] mb:h-[64px]'>
                            <h1 className='text-[32px] font-normal leading-8 text-white lg:pl-[24px] lg:pt-[16px] mb:pl-[0px] mb:pt-[0x]'>18</h1>
                        </div>

                    </div>

                    {/* box four  */}

                    <div className='flex  gap-[10px] mb:flex-col'>
                        <div className='rounded-[16px] bg-yellow-500 lg:w-[213px] lg:h-[150px] p-[16px] text-center mb:w-[66px] mb:h-[64px]'>
                            <h1 className='text-[32px] font-normal leading-8 text-white lg:pl-[24px] lg:pt-[16px] mb:pl-[0px] mb:pt-[0x]'>19</h1>
                        </div>
                        <div className='rounded-[16px] bg-green-500 lg:w-[213px] lg:h-[150px] p-[16px] text-center mb:w-[66px] mb:h-[64px]'>
                            <h1 className='text-[32px] font-normal leading-8 text-white lg:pl-[24px] lg:pt-[16px] mb:pl-[0px] mb:pt-[0x]'>20</h1>
                        </div>
                        <div className='rounded-[16px] bg-green-500 lg:w-[213px] lg:h-[150px] p-[16px] text-center mb:w-[66px] mb:h-[64px]'>
                            <h1 className='text-[32px] font-normal leading-8 text-white lg:pl-[24px] lg:pt-[16px] mb:pl-[0px] mb:pt-[0x]'>21</h1>
                        </div>
                        <div className='rounded-[16px] bg-green-500 lg:w-[213px] lg:h-[150px] p-[16px] text-center mb:w-[66px] h-[64px]'>
                            <h1 className='text-[32px] font-normal leading-8 text-white lg:pl-[24px] lg:pt-[16px] mb:pl-[0px] mb:pt-[0x]'>22</h1>
                        </div>
                        <div className='rounded-[16px] bg-blue-500 lg:w-[213px] lg:h-[150px] p-[16px] text-center mb:w-[66px] h-[64px]'>
                            <h1 className='text-[32px] font-normal leading-8 text-white lg:pl-[24px] lg:pt-[16px] mb:pl-[0px] mb:pt-[0x]'>23</h1>
                        </div>
                        <div className='rounded-[16px] bg-yellow-500 lg:w-[213px] lg:h-[150px] p-[16px] text-center mb:w-[66px] mb:h-[64px]'>
                            <h1 className='text-[32px] font-normal leading-8 text-white lg:pl-[24px] lg:pt-[16px] mb:pl-[0px] mb:pt-[0x]'>24</h1>
                        </div>

                    </div>
                </div>




            </div>



        </div>
    )
}
export default Games;
import React from 'react'

export const Games = () => {
    return (
        <div className='container w-full max-w-[1024px] h-full max-h-[1555px] mx-auto justify-center'>
            <div className='w-full max-[1024px] h-full max-h-[1555px] mx-auto flex justify-center'>
                <img src='https://tuk-cdn.s3.amazonaws.com/can-uploader/image%201.svg' />
            </div>
            <div className='w-full max-[200px] '>
                <div>
                    <div className='max-w-[1024px] max-h-[24px] mx-auto mt-[70px]'>
                        <h1 className='text-[24px] font-bold leading-6 text-gray-800 font-koh Santepheap'>Puzzle Game Test</h1>
                    </div>
                    <div className='max-w-[1024px] max-h-[16px] mx-auto mt-[20px]'>
                        <h className='text-[16px] font-normal leading-4 text-gray-800 font-koh Santepheap'>Enter Numbers</h>
                    </div>
                </div>
                <div className='mt-5 max-w-[1024px] w-full h-full flex  content-center'>
                    <div className='max-w-[1024px] max-h-[48px]'>
                        <input type="number" placeholder='Number' className='mx-auto w-[360px] h-[48px] bg-gray-200 rounded-[4px] p-[16px] gap-[10px]'></input>
                        </div>
                        <div>
                        < button className='w-[119px] h-[48px] bg-gray-200 rounded-[4px] pl-[32px] pr-[32px] pt-[16px] pb-[16px] bg-blue-600 ml-[28px] text-[16px] leading-4 font-koh Santepheap font-normal hover:bg-gray-700'>Submit</button>
                        </div>
                    <div>
                        < button className='w-[119px] h-[48px] rounded-[4px] pl-[32px] pr-[32px] pt-[16px] pb-[16px] border-[1px] border-blue-600 text-blue-600 ml-[400px] text-[16px] leading-4 font-koh Santepheap font-normal hover:bg-blue-500'>Reset</button>
                    </div>
                <div className='flex gap-[10px]'>
                    <div className='rounded-[16px] bg-green-500 w-[213px] h-[150px] p-[16px] text-center'>
                        <h1 className='w-[18px] h-[32px] mt-[50px] ml-[53px] text-[32px] font-normal leading-8 text-white'>1</h1>
                    </div>
                    <div className='rounded-[16px] bg-yellow-500 w-[213px] h-[150px] p-[16px]'>
                        <h1 className='w-[18px] h-[32px] mt-[50px] ml-[53px] text-[32px] font-normal leading-8 text-white'>2</h1>
                    </div>
                    <div className='rounded-[16px] bg-blue-500 w-[213px] h-[150px] p-[16px]'>
                        <h1 className='w-[18px] h-[32px] mt-[50px] ml-[53px] text-[32px] font-normal leading-8 text-white'>3</h1>
                    </div>
                    <div className='rounded-[16px] bg-blue-500 w-[213px] h-[150px] p-[16px]'>
                        <h1 className='w-[18px] h-[32px] mt-[50px] ml-[53px] text-[32px] font-normal leading-8 text-white'>4</h1>
                    </div>
                    <div className='rounded-[16px] bg-blue-500 w-[213px] h-[150px] p-[16px]'>
                        <h1 className='w-[18px] h-[32px] mt-[50px] ml-[53px] text-[32px] font-normal leading-8 text-white'>5</h1>
                    </div>
                    <div className='rounded-[16px] bg-yellow-500 w-[213px] h-[150px] p-[16px]'>
                        <h1 className='w-[18px] h-[32px] mt-[50px] ml-[53px] text-[32px] font-normal leading-8 text-white'>6</h1>
                    </div>

                </div>
                {/* box two  */}
                <div className='flex mt-[10px] gap-[10px]'>
                    <div className='rounded-[16px] bg-yellow-500 w-[213px] h-[150px] p-[16px]'>
                        <h1 className='w-[18px] h-[32px] mt-[50px] ml-[53px] text-[32px] font-normal leading-8 text-white'>7</h1>
                    </div>
                    <div className='rounded-[16px] bg-green-500 w-[213px] h-[150px] p-[16px]'>
                        <h1 className='w-[18px] h-[32px] mt-[50px] ml-[53px] text-[32px] font-normal leading-8 text-white'>8</h1>
                    </div>
                    <div className='rounded-[16px] bg-green-500 w-[213px] h-[150px] p-[16px]'>
                        <h1 className='w-[18px] h-[32px] mt-[50px] ml-[53px] text-[32px] font-normal leading-8 text-white'>9</h1>
                    </div>
                    <div className='rounded-[16px] bg-green-500 w-[213px] h-[150px] p-[16px]'>
                        <h1 className='w-[36px] h-[32px] mt-[50px] ml-[43px] text-[32px] font-normal leading-8 text-white'>10</h1>
                    </div>
                    <div className='rounded-[16px] bg-blue-500 w-[213px] h-[150px] p-[16px]'>
                        <h1 className='w-[36px] h-[32px] mt-[50px] ml-[43px] text-[32px] font-normal leading-8 text-white'>11</h1>
                    </div>
                    <div className='rounded-[16px] bg-yellow-500 w-[213px] h-[150px] p-[16px]'>
                        <h1 className='w-[36px] h-[32px] mt-[50px] ml-[43px] text-[32px] font-normal leading-8 text-white'>12</h1>
                    </div>

                </div>
                {/* box three */}
                <div className='flex mt-[10px] gap-[10px]'><div className='rounded-[16px] bg-green-500 w-[213px] h-[150px] p-[16px]'>
                    <h1 className='w-[36px] h-[32px] mt-[50px] ml-[43px] text-[32px] font-normal leading-8 text-white'>13</h1>
                </div>
                    <div className='rounded-[16px] bg-green-500 w-[213px] h-[150px] p-[16px]'>
                        <h1 className='w-[36px] h-[32px] mt-[50px] ml-[43px] text-[32px] font-normal leading-8 text-white'>14</h1>
                    </div>
                    <div className='rounded-[16px] bg-yellow-500 w-[213px] h-[150px] p-[16px]'>
                        <h1 className='w-[36px] h-[32px] mt-[50px] ml-[43px] text-[32px] font-normal leading-8 text-white'>15</h1>
                    </div>
                    <div className='rounded-[16px] bg-yellow-500 w-[213px] h-[150px] p-[16px]'>
                        <h1 className='w-[36px] h-[32px] mt-[50px] ml-[43px] text-[32px] font-normal leading-8 text-white'>16</h1>
                    </div>
                    <div className='rounded-[16px] bg-blue-500 w-[213px] h-[150px] p-[16px]'>
                        <h1 className='w-[36px] h-[32px] mt-[50px] ml-[43px] text-[32px] font-normal leading-8 text-white'>17</h1>
                    </div>
                    <div className='rounded-[16px] bg-yellow-500 w-[213px] h-[150px] p-[16px]'>
                        <h1 className='w-[36px] h-[32px] mt-[50px] ml-[43px] text-[32px] font-normal leading-8 text-white'>18</h1>
                    </div>

                </div>
                {/* box four  */}
                <div className='flex mt-[10px] gap-[10px]'>
                    <div className='rounded-[16px] bg-green-500 w-[213px] h-[150px] p-[16px]'>
                        <h1 className='w-[36px] h-[32px] mt-[50px] ml-[43px] text-[32px] font-normal leading-8 text-white'>19</h1>
                    </div>
                    <div className='rounded-[16px] bg-green-500 w-[213px] h-[150px] p-[16px]'>
                        <h1 className='w-[36px] h-[32px] mt-[50px] ml-[43px] text-[32px] font-normal leading-8 text-white'>20</h1>
                    </div>
                    <div className='rounded-[16px] bg-green-500 w-[213px] h-[150px] p-[16px]'>
                        <h1 className='w-[36px] h-[32px] mt-[50px] ml-[43px] text-[32px] font-normal leading-8 text-white'>21</h1>
                    </div>
                    <div className='rounded-[16px] bg-green-500 w-[213px] h-[150px] p-[16px]'>
                        <h1 className='w-[36px] h-[32px] mt-[50px] ml-[43px] text-[32px] font-normal leading-8 text-white'>22</h1>
                    </div>
                    <div className='rounded-[16px] bg-blue-500 w-[213px] h-[150px] p-[16px]'>
                        <h1 className='w-[36px] h-[32px] mt-[50px] ml-[43px] text-[32px] font-normal leading-8 text-white'>23</h1>
                    </div>

                    <div className='rounded-[16px] bg-yellow-500 w-[213px] h-[150px] p-[16px]'>
                        <h1 className='w-[36px] h-[32px] mt-[50px] ml-[43px] text-[32px] font-normal leading-8 text-white'>24</h1>
                    </div>
                </div>




            </div>



        </div>
    )
}
export default Games;
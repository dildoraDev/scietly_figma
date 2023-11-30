import React from 'react';

function Input() {
    return (
        <>
            <div className='flex justify-between'>
                <div className='w-[570px] p-[23px] text-[16px] leading-[24px] rounded-[10px] text-[#8C8C8C] border-current'>
                    <div className='flex justify-between pl-[27px] pt-[23px] pb-[23px]  mb-[33px] border-2 border-current rounded-[10px] align-center'>
                        <input type="text" placeholder='+ General' className='block  w-[570px] ' />
                        <div><img src="/public/mock-imges/icon/input.svg" alt="" className='block  pr-[27px] pt-[7px]' /></div>
                    </div>
                    <div className='flex justify-between pl-[27px] pt-[23px] pb-[23px]  mb-[33px] border-2 border-current rounded-[10px] align-center'>
                        <input type="text" placeholder='+ Registration' className='block  w-[570px] ' />
                        <div><img src="/public/mock-imges/icon/input.svg" alt="" className='block  pr-[27px] pt-[7px]' /></div>
                    </div>
                    <div className='flex justify-between pl-[27px] pt-[23px] pb-[23px]  mb-[33px] border-2 border-current rounded-[10px] align-center'>
                        <input type="text" placeholder='+ Trade Partners' className='block  w-[570px] ' />
                        <div><img src="/public/mock-imges/icon/input.svg" alt="" className='block  pr-[27px] pt-[7px]' /></div>
                    </div>
                    <div className='flex justify-between pl-[27px] pt-[23px] pb-[23px]  mb-[33px] border-2 border-current rounded-[10px] align-center'>
                        <input type="text" placeholder='+ My Showcase' className='block  w-[570px] ' />
                        <div><img src="/public/mock-imges/icon/input.svg" alt="" className='block  pr-[27px] pt-[7px]' /></div>
                    </div>
                </div>
                <div className='w-[570px] p-[23px] text-[16px] leading-[24px] rounded-[10px] text-[#8C8C8C] border-current'>
                    <div className='flex justify-between pl-[27px] pt-[23px] pb-[23px]  mb-[33px] border-2 border-current rounded-[10px] align-center'>
                        <input type="text" placeholder='+ All Showcase' className='block  w-[570px] ' />
                        <div><img src="/public/mock-imges/icon/input.svg" alt="" className='block  pr-[27px] pt-[7px]' /></div>
                    </div>
                    <div className='flex justify-between pl-[27px] pt-[23px] pb-[23px]  mb-[33px] border-2 border-current rounded-[10px] align-center'>
                        <input type="text" placeholder='+ My Account' className='block  w-[570px] ' />
                        <div><img src="/public/mock-imges/icon/input.svg" alt="" className='block  pr-[27px] pt-[7px]' /></div>
                    </div>
                    <div className='flex justify-between pl-[27px] pt-[23px] pb-[23px]  mb-[33px] border-2 border-current rounded-[10px] align-center'>
                        <input type="text" placeholder='+ Help' className='block  w-[570px] ' />
                        <div><img src="/public/mock-imges/icon/input.svg" alt="" className='block  pr-[27px] pt-[7px]' /></div>
                    </div>
                    <div className='flex justify-between pl-[27px] pt-[23px] pb-[23px]  mb-[33px] border-2 border-current rounded-[10px] align-center'>
                        <input type="text" placeholder='+ Support' className='block  w-[570px] ' />
                        <div><img src="/public/mock-imges/icon/input.svg" alt="" className='block  pr-[27px] pt-[7px]' /></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Input;
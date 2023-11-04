'use client';

import { useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import image2 from '../assets/images/image2.png';
import Menu from "../module/menu";

export default function Archive() {
    const router = useRouter();
    const menuRef = useRef();

    return (
        <div className="section1 w-screen h-[130vh] bg-yellow-500 overflow-y-hidden">
            <Image 
                src={image2} alt="..." 
                className="fixed w-[12vw] mt-12 ml-12 cursor-pointer z-[9999]" 
                style={{transform:"rotate(-10deg)"}} 
                onClick={()=>{router.push('./')}}
            />
            <div className="w-full flex justify-center items-center fixed mt-12 z-50">
                <p className="text-[6rem]" style={{fontFamily:'gmarket'}}>기록</p>
                <p className="text-[2rem] -mt-[4vh] " style={{fontFamily:'gmarket'}}>ARCHIVINGS</p>
            </div>
            <div className="w-screen h-[88vh] flex flex-col justify-center items-center">
                <div className="w-1/3 h-[55vh] mt-32 bg-yellow-600 grid grid-cols-3 grid-rows-3 gap-4 p-12 rounded-3xl">
                    <div className="w-[150px] h-[150px] rounded-3xl bg-yellow-700 flex flex-col justify-center items-center">
                        <Image 
                            alt="..."
                            src='/images/블로그.png' 
                            width={100} height={100} />
                        <p>네이버 블로그</p>
                    </div>
                    <div className="w-[150px] h-[150px] rounded-3xl bg-yellow-700 flex flex-col justify-center items-center ">
                        <Image 
                            alt="..."
                            src='/images/github.png' 
                            width={200} height={200} />
                        <p className="-mt-8">Github</p>
                    </div>
                </div>

            </div>

            <div ref={menuRef} className="">
                <Menu />
            </div>
        </div>
    )
}
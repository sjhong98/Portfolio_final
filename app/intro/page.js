'use client';

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import image2 from '../assets/images/image2.png';
import myImage from '../assets/images/myImage2.png';
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Intro() {
    const gridItem = "bg-black opacity-40 rounded-xl flex flex-col justify-center items-center";

    

    return (
        <div className="w-screen h-auto bg-blue-500">
            <Image src={image2} alt="..." className="fixed w-[12vw] mt-12 ml-12 cursor-pointer z-50" style={{transform:"rotate(-10deg)"}} />
            <div className="w-full flex justify-center items-center fixed mt-12">
                <p className="text-[6rem] " style={{fontFamily:'gmarket'}}>자기 소개</p>
                <p className="text-[2rem] -mt-[4vh] " style={{fontFamily:'gmarket'}}>SELF_INTRODUCTION</p>
            </div>
            <div className="w-full h-auto flex flex-row transform translate-y-[5vh]">
                <div className="w-1/2 mt-60 flex flex-col items-center">
                    <Image src={myImage} className="w-3/5 w-auto"/>
                </div>
                <div className="w-2/5 h-auto mt-[25vh]">
                    <div className="w-full h-auto grid grid-cols-3 grid-rows-6 gap-x-8 gap-y-8">
                        <div className={`${gridItem} h-[25vh]`}>
                            <p className="text-[2rem]">이름</p>
                            <p className="text-[3rem]">홍승재</p>
                        </div>
                        <div className={`${gridItem} h-[25vh]`}>
                            <p className="text-[2rem]">생년월일</p>
                            <p className="text-[3rem]">98.09.01</p>
                        </div>
                        <div className={`${gridItem} row-span-2`}>
                            <p className="text-[2rem]">주소</p>
                            <p className="text-[3rem] leading-[5.5vh]">서울시<br/>서대문구<br/>연희동</p>
                        </div>
                        <div className={`${gridItem} h-[25vh] col-span-2`}>
                            <p className="text-[2rem]">CONTACT</p>
                            <p className="text-[2rem]">010-2892-6408</p>
                            <p className="text-[2rem]">sjhong98@icloud.com</p>
                        </div>
                        <div className={`${gridItem} h-[25vh]`}>
                        <p className="text-[4rem]">ESTP</p>
                        </div>
                        <div className={`${gridItem} h-[25vh] col-span-2`}>
                            <p className="text-[2rem]">학력</p>
                            <p className="text-[3rem] leading-[5.5vh]">상명대학교<br/>역사콘텐츠학과 &<br/>컴퓨터과학과</p>
                        </div>
                        <div className={`${gridItem} row-span-3 col-span-3`}>
                            <p className="text-[2rem]">자기소개</p>
                            <p className="text-[1rem] leading-[5.5vh]"></p>
                        </div>

                    </div>
                    

                </div>
            </div>
        </div>
    )
}
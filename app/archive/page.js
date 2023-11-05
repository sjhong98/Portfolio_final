'use client';

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Menu from "../module/menu";
import Title from "../module/title";
import Logo from '../module/logo';
import './page.css';

export default function Archive() {
    const router = useRouter();
    const menuRef = useRef();
    const [active, setActive] = useState(-1);

    const itemStyle = "w-[150px] h-[150px] rounded-3xl bg-yellow-700 flex flex-col justify-center items-center cursor-pointer";

    const handleOver = (key) => {
        setActive(key);
    }
    const handleOut = () => {
        setActive(-1);
    }

    return (
        <div className="section1 w-screen h-[130vh] bg-yellow-500 overflow-y-hidden">
            <title>HSJ | Archives</title>
            <Logo />
            <Title title="기록" eng="ARCHIVES" />
            <div className="w-screen h-[88vh] flex flex-col justify-center items-center">
                <div className="w-1/3 h-[55vh] mt-32 bg-yellow-600 grid grid-cols-3 grid-rows-3 gap-4 p-12 rounded-3xl">
                    <div 
                        className={active===0 ? `${itemStyle} scale-up` : `${itemStyle} scale-down`}
                        onMouseOver={() => {handleOver(0)}}
                        onMouseOut={handleOut}
                        onClick={()=>{router.push('https://blog.naver.com/elyon98')}}
                    >
                        <Image 
                            alt="..."
                            src='/images/블로그.png' 
                            width={100} height={100} />
                        <p>네이버 블로그</p>
                    </div>
                    <div 
                        className={active===1 ? `${itemStyle} scale-up` : `${itemStyle} scale-down`}
                        onMouseOver={() => {handleOver(1)}}
                        onMouseOut={handleOut}
                        onClick={()=>{router.push('https://github.com/sjhong98')}}
                    >
                        <Image 
                            alt="..."
                            src='/images/github.png' 
                            width={100} height={100} />
                        <p>Github</p>
                    </div>
                    <div 
                        className={active===2 ? `${itemStyle} scale-up` : `${itemStyle} scale-down`}
                        onMouseOver={() => {handleOver(2)}}
                        onMouseOut={handleOut}
                        onClick={()=>{router.push('https://www.instagram.com/hong_seung_jae_/')}}
                    >
                        <Image 
                            alt="..."
                            src='/images/instagram.png' 
                            width={100} height={100} />
                        <p>Instagram</p>
                    </div>
                </div>

            </div>

            <div ref={menuRef} className="">
                <Menu />
            </div>
        </div>
    )
}
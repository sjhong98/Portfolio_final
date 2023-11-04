'use client';

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import image2 from '../assets/images/image2.png';
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Menu from "../module/menu";
import './page.css';

export default function Stack() {
    const router = useRouter();
    const menuRef = useRef();
    const [active, setActive] = useState(-1);
    const title = "text-[2rem] leading-[4vh]";
    const gridItem = "bg-red-700 rounded-2xl w-[8vw] aspect-square flex flex-col justify-center items-center text-[1rem]";
    const frontStack = [
        {title: "HTML", image: null},
        {title: "CSS", image: null},
        {title: "Javascript", image: null},
        {title: "Typescript", image: null},
        {title: "React", image: null},
        {title: "Redux", image: null},
        {title: "Next.js", image: null},
        {title: "Tailwind", image: null},
        {title: "Webpack", image: null},
        {title: "React Native", image: null},
        {title: "Greensock", image: null},
        {title: "socket.io", image: null},
        {title: "Cypress", image: null},
    ]
    const dbStack = [
        {title: "FireStore", image: null},
    ]
    const deployStack = [
        {title: "Firebase", image: null},
        {title: "Vercel", image: null},
        {title: "Github Actions", image: null},
    ]
    const config = [
        {title: "NPM", image: null},
    ]
    const vcStack = [
        {title: "Git", image: null},
        {title: "Github", image: null},
    ]
    const communicationStack = [
        {title: "Notion", image: null},
        {title: "Discord", image: null},
    ]

    const handleOver = (key) => {
        setActive(key);
    }

    const handleOut = () => {
        setActive(-1);
    }

    useEffect(() => {  // menu appear
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            markers: false,
            trigger: '.tr',
            start: '60% 93%', 
            end: '70% 83%',  
            scrub: 3,
            onUpdate: (self) => {
            gsap.to(menuRef.current, {
                y:(self.progress * -500),
            });
            },
        });
        ScrollTrigger.update();
    }, [])

    return (
        <div className="w-screen h-[181vh] bg-red-500 overflow-y-hidden">
            <Image 
                src={image2} alt="..." 
                className="fixed w-[12vw] mt-12 ml-12 cursor-pointer z-[9999]" 
                style={{transform:"rotate(-10deg)"}} 
                onClick={()=>{router.push('./')}}
            />
            <div className="w-full flex justify-center items-center fixed mt-12 z-50">
                <p className="text-[6rem]" style={{fontFamily:'gmarket'}}>기술 스택</p>
                <p className="text-[2rem] -mt-[4vh] " style={{fontFamily:'gmarket'}}>EXPERIENCED_SKILLS</p>
            </div>
            <div className="w-full h-[191vh] transform translate-y-[20vh] flex flex-col items-center">
                
                <div className="section1 grid grid-cols-5 grid-rows-2 gap-x-8 gap-y-8 mt-20" >
                    <div className={`${title}`} >
                        <p className="text-[2rem] leading-[4vh]">Front-<br/>End</p>
                    </div>
                    { frontStack.map((item, index) => {
                        return (
                            <div 
                                key={index} 
                                className={active===index ? `${gridItem} scale-up` : `${gridItem} scale-down`}
                                onMouseOver={() => handleOver(index)}
                                onMouseOut={handleOut}
                            >
                                <Image src={`/images/${item.title}.png`} width={80} height={80} />
                                <p>{item.title}</p>
                            </div>
                    
                        )
                    })}
                </div>

                <div className="grid grid-cols-5 grid-rows-3 gap-x-8 gap-y-8 mt-12">
                    <div className={`${title}`} >
                        <p className="text-[2rem] leading-[4vh]">Data-<br/>Base</p>
                    </div>
                    <div 
                        key={13} 
                        className={active===13 ? `${gridItem} scale-up` : `${gridItem} scale-down`} 
                        onMouseOver={() => handleOver(13)}
                        onMouseOut={handleOut}
                    >
                        <Image src="/images/firestore.png" width={130} height={130} />
                        <p>FireStore</p>
                    </div>
                    <div className={`${title}`} >
                        <p>Deploy-<br/>Ment</p>
                    </div>
                    <div 
                        key={14} 
                        className={active===14 ? `${gridItem} scale-up` : `${gridItem} scale-down`} 
                        onMouseOver={() => handleOver(14)}
                        onMouseOut={handleOut}
                    >
                        <Image src="/images/firebase.png" width={100} height={100} />
                        <p>Firebase</p>
                    </div>
                    <div 
                        key={15} 
                        className={active===15 ? `${gridItem} scale-up` : `${gridItem} scale-down`} 
                        onMouseOver={() => handleOver(15)}
                        onMouseOut={handleOut}
                    >
                        <Image src="/images/vercel.png" width={90} height={90} />
                        <p>Vercel</p>
                    </div>
                    <div className={`${title}`} >
                        <p className="text-[2rem] leading-[4vh]">Configu-<br/>ration</p>
                    </div>
                    <div 
                        key={16} 
                        className={active===16 ? `${gridItem} scale-up` : `${gridItem} scale-down`} 
                        onMouseOver={() => handleOver(16)}
                        onMouseOut={handleOut}
                    >
                        <Image src="/images/npm.png" width={100} height={100} />
                        <p>NPM</p>
                    </div>
                    <div />
                    <div 
                        key={17} 
                        className={active===17 ? `${gridItem} scale-up` : `${gridItem} scale-down`} 
                        onMouseOver={() => handleOver(17)}
                        onMouseOut={handleOut}
                    >
                        <Image src="/images/github actions.png" width={80} height={80} />
                        <p className="mt-2">Github Actions</p>
                    </div>
                    <div />
                    <div className={`${title}`} >
                        <p className="text-[2rem] leading-[4vh]">Commu-<br/>nication</p>
                    </div>
                    <div 
                        key={18} 
                        className={active===18 ? `${gridItem} scale-up` : `${gridItem} scale-down`} 
                        onMouseOver={() => handleOver(18)}
                        onMouseOut={handleOut}
                    >
                        <Image src="/images/notion.png" width={80} height={80} />
                        <p className="mt-2">Notion</p>
                    </div>
                    <div 
                        key={19} 
                        className={active===19 ? `${gridItem} tr scale-up` : `${gridItem} tr scale-down`} 
                        onMouseOver={() => handleOver(19)}
                        onMouseOut={handleOut}
                    >
                        <Image src="/images/discord.png" width={80} height={80} />
                        <p className="mt-2">Discord</p>
                    </div>
                </div>
                
            </div>

            <div ref={menuRef} className="">
                <Menu />
            </div>
        </div>
    )
}
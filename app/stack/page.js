'use client';

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from '../module/logo';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Menu from "../module/menu";
import Title from "../module/title";
import './page.css';

export default function Stack() {
    const router = useRouter();
    const menuRef = useRef();
    const [active, setActive] = useState(-1);
    const title = "sm:text-[2rem] text-[1rem] leading-[4vh]";
    const gridItem = "bg-red-700 rounded-2xl sm:w-[8vw] w-[20vw] aspect-square flex flex-col justify-center items-center sm:text-[1rem] text-[0.6rem]";
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
        <div className="w-screen sm:h-[181vh] h-auto bg-red-500 overflow-y-hidden">
            <title>HSJ | Skills</title>
            <Logo />
            <Title title="기술 스택" eng="EXPERIENCED_SKILLS" />
            <div className="w-full sm:h-[191vh] h-auto transform translate-y-[20vh] flex flex-col items-center">
                
                <div className="section1 grid sm:grid-cols-5 grid-cols-3 grid-rows-2 gap-x-8 gap-y-8 mt-20" >
                    <div className={`${title}`} >
                        <p className="sm:text-[2rem] text-[1rem] leading-[4vh]">Front-<br/>End</p>
                    </div>
                    { frontStack.map((item, index) => {
                        return (
                            <div 
                                key={index} 
                                className={active===index ? `${gridItem} scale-up` : `${gridItem} scale-down`}
                                onMouseOver={() => handleOver(index)}
                                onMouseOut={handleOut}
                            >
                                <Image 
                                    alt="..."
                                    src={`/images/${item.title}.png`} 
                                    width={80} height={80} />
                                <p>{item.title}</p>
                            </div>
                    
                        )
                    })}
                </div>

                <div className="grid sm:grid-cols-5 grid-cols-3 grid-rows-3 gap-x-8 gap-y-8 mt-12">
                    <div className={`${title}`} >
                        <p className="sm:text-[2rem] text-[1rem] leading-[4vh]">Data-<br/>Base</p>
                    </div>
                    <div 
                        key={13} 
                        className={active===13 ? `${gridItem} scale-up` : `${gridItem} scale-down`} 
                        onMouseOver={() => handleOver(13)}
                        onMouseOut={handleOut}
                    >
                        <Image 
                            alt="..."
                            src="/images/Firestore.png" 
                            width={130} height={130} />
                        <p>FireStore</p>
                    </div>
                    <div className="sm:hidden flex" /> 
                    <div className={`${title}`} >
                        <p>Deploy-<br/>Ment</p>
                    </div>
                    <div 
                        key={14} 
                        className={active===14 ? `${gridItem} scale-up` : `${gridItem} scale-down`} 
                        onMouseOver={() => handleOver(14)}
                        onMouseOut={handleOut}
                    >
                        <Image 
                            alt="..."
                            src="/images/Firebase.png" 
                            width={100} height={100} />
                        <p>Firebase</p>
                    </div>
                    <div 
                        key={15} 
                        className={active===15 ? `${gridItem} scale-up` : `${gridItem} scale-down`} 
                        onMouseOver={() => handleOver(15)}
                        onMouseOut={handleOut}
                    >
                        <Image 
                            alt="..."
                            src="/images/Vercel.png" 
                            width={90} height={90} />
                        <p>Vercel</p>
                    </div>
                    <div className={`${title}`} >
                        <p className="sm:text-[2rem] text-[1rem] leading-[4vh]">Configu-<br/>ration</p>
                    </div>
                    <div 
                        key={16} 
                        className={active===16 ? `${gridItem} scale-up` : `${gridItem} scale-down`} 
                        onMouseOver={() => handleOver(16)}
                        onMouseOut={handleOut}
                    >
                        <Image 
                            alt="..."
                            src="/images/NPM.png" 
                            width={100} height={100} />
                        <p>NPM</p>
                    </div>
                    <div />
                    <div 
                        key={17} 
                        className={active===17 ? `${gridItem} scale-up` : `${gridItem} scale-down`} 
                        onMouseOver={() => handleOver(17)}
                        onMouseOut={handleOut}
                    >
                        <Image
                            alt="..." 
                            src="/images/Github Actions.png"
                            width={80} height={80} />
                        <p className="mt-2">Github Actions</p>
                    </div>
                    <div className="sm:flex hidden" />
                    <div className={`${title} sm:flex hidden`} >
                        <p className="sm:text-[2rem] text-[1rem] leading-[4vh]">Commu-<br/>nication</p>
                    </div>
                    <div 
                        key={18} 
                        className={active===18 ? `${gridItem} scale-up` : `${gridItem} scale-down`} 
                        onMouseOver={() => handleOver(18)}
                        onMouseOut={handleOut}
                    >
                        <Image 
                            alt="..."
                            src="/images/Notion.png" 
                            width={80} height={80} 
                        />
                        <p className="mt-2">Notion</p>
                    </div>
                    <div 
                        key={19} 
                        className={active===19 ? `${gridItem} tr scale-up` : `${gridItem} tr scale-down`} 
                        onMouseOver={() => handleOver(19)}
                        onMouseOut={handleOut}
                    >
                        <Image 
                            alt="..."
                            src="/images/Discord.png" 
                            width={80} height={80} />
                        <p className="mt-2">Discord</p>
                    </div>
                </div>
                
            </div>

            <div ref={menuRef} className="sm:mt-0 mt-[90vh]">
                <Menu />
            </div>
        </div>
    )
}
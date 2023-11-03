'use client';

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import image2 from '../assets/images/image2.png';
import './page.css';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Projects() {

    const [active, setActive] = useState(-1);

    const projects = [
        {
            title: "SCRAPPER",
            simpleExp : "텍스트 기반 SNS 서비스",
            content: "Scrapper는 텍스트 기반 SNS 서비스로, Twitter나 Thread와 같이 텍스트를 기반으로 하면서도 인스타그램 스토리처럼 업로드의 부담을 낮추어, 쉽게 공유하고 쉽게 상호작용할 수 있는 SNS로서 구상하였습니다. 또한 텍스트의 특성을 살려, 원하는 구체적인 부분에 좋아요를 표시할 수 있도록 하였습니다.",
            functions : ["텍스트 기반 포스트 CRUD", "텍스트 드래그 방식 좋아요", "색으로 좋아요 수 표시", "포스트 스크랩"],
            skill: ["typescript", "react", "next.js", "tailwind", "firestore", "vercel"],
            url: ["https://scrapper-zeta.vercel.app/"],
        },
        {
            title: "SCRAPPER",
            simpleExp : "텍스트 기반 SNS 서비스",
            content: "Scrapper는 텍스트 기반 SNS 서비스로, Twitter나 Thread와 같이 텍스트를 기반으로 하면서도 인스타그램 스토리처럼\n업로드의 부담을 낮추어, 쉽게 공유하고 쉽게 상호작용할 수 있는 SNS로서 구상하였습니다. 또한 텍스트의 특성을 살려, 원하는 구체적인 부분에 좋아요를 표시할 수 있도록 하였습니다.",
            functions : ["텍스트 기반 포스트 CRUD", "텍스트 드래그 방식 좋아요", "색으로 좋아요 수 표시", "포스트 스크랩"],
            skill: ["typescript", "react", "next.js", "tailwind", "firestore", "vercel"],
            url: ["https://scrapper-zeta.vercel.app/"],
        }
    ]

    const handleOver = (index) => {
        setActive(index)
    }

    const handleOut = (index) => {
        setActive(-1)
    }

    return (
        <div className="w-screen h-[200vh] bg-green-500 overflow-y-hidden">
            <Image src={image2} alt="..." className="fixed w-[12vw] mt-12 ml-12 cursor-pointer z-[9999]" style={{transform:"rotate(-10deg)"}} />
            <div className="w-full flex justify-center items-center fixed mt-12 z-50">
                <p className="text-[6rem]" style={{fontFamily:'gmarket'}}>프로젝트</p>
                <p className="text-[2rem] -mt-[4vh] " style={{fontFamily:'gmarket'}}>PROJECTS</p>
            </div>

            <div className="w-full h-auto transform translate-y-[30vh] flex flex-col items-center">
                { projects.map((item, index) => {
                    return (
                        <div 
                            key={index} 
                            onMouseOver={() => handleOver(index)}
                            onMouseOut={() => {handleOut(index)}}
                            className={active===index? "w-2/3 h-[40vh] flex mb-20 mouse-over" : "w-2/3 h-[40vh] flex mb-20 mouse-out"}>
                            <Image src={`/images/${item.title}.png`} className="w-[28vw] h-[30vh]" width={540} height={100} />
                            <div className="ml-12 -mt-2 flex flex-col h-full">
                                <p className="text-[3rem]">{item.title}</p>
                                <p className="text-[1.2rem] -mt-2">: {item.simpleExp}</p>
                                <p className="text-[1rem] leading-[2.1vh] mt-3 mb-6">{item.content}</p>
                                <div className="flex flex-row">
                                    <div className="flex flex-col">
                                        { item.functions.map((item, index) => {
                                            return (
                                                    <p key={index} className="text-[1rem] -mb-1">· {item}</p>
                                            )
                                        })}
                                    </div>
                                    <div className="flex flex-row ml-12 ">
                                        { item.skill.map((item, index) => {
                                            return (
                                                <div className="mr-2">
                                                    <div className="rounded-2xl w-[3vw] h-[6vh] bg-green-600 flex justify-center items-center">
                                                        <Image 
                                                            key={index} 
                                                            src={`/images/${item}.png`} 
                                                            className="w-[2vw] h-[4.5vh]" 
                                                            width={100} height={70} 
                                                        />
                                                    </div>
                                                    <p className="text-[0.7rem] text-center">{item}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })

                }
            </div>

        </div>
    )
}
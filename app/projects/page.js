'use client';

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import image2 from '../assets/images/image2.png';
import './page.css';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Projects() {
    const router = useRouter();

    const [active, setActive] = useState(-1);

    const contentStyle = "text-[1rem] leading-[2.1vh] mt-3 mb-6";

    const projects = [
        {
            title: "대동유어지도",
            simpleExp : "사진 기반 여행 콘텐츠 SNS 플랫폼",
            content: <p className={`${contentStyle}`}>대동유어지도는 여행자를 위한 SNS입니다. 여행을 계획하는 과정에서 지역별로 트렌디하고 유용한 정보를 얻을 수 있고, 여행을 다녀온 사람들이 의미 있는 기록을 할 수 있도록 도와줍니다.<br/><br/>졸업 프로젝트이자 저의 첫번째 결과물로서 의미가 있는 프로젝트입니다. 디자인과 프론트엔드 개발 전반을 담당하였고, 리액트, API 등 웹 개발의 기본적인 기술들을 익힐 수 있었습니다. 이외에도 웹팩 번들링, cypress 테스트 자동화, github actions를 이용한 CI/CD 등 다양한 실무 기술들을 경험해볼 수 있었던 기회였습니다.</p>,
            functions : ["사진 기반 포스트 CRUD", "회원정보 CRUD", "카카오맵 API 활용한 지도 구현", "히트맵으로 지역별 게시물 수 표현"],
            skill: ["typescript", "react", "next.js", "tailwind", "firestore", "vercel"],
            url: ["https://scrapper-zeta.vercel.app/"],
        },
        {
            title: "SCRAPPER",
            simpleExp : "텍스트 기반 SNS 플랫폼",
            content: <p className={`${contentStyle}`}>Scrapper는 텍스트 기반 SNS 플랫폼으로, Twitter나 Thread와 같이 텍스트를 기반으로 하면서도<br/>인스타그램 스토리처럼 업로드의 부담을 낮추어, 쉽게 공유하고 쉽게 상호작용할 수 있는 SNS로<br/>구상하였습니다. 또한 텍스트의 특성을 살려, 원하는 구체적인 부분에 좋아요를 표시할 수 있도록 하였습니다.</p>,
            functions : ["텍스트 기반 포스트 CRUD", "텍스트 드래그 방식 좋아요", "색으로 좋아요 수 표시", "포스트 스크랩"],
            skill: ["typescript", "react", "next.js", "tailwind", "firestore", "vercel"],
            url: ["https://scrapper-zeta.vercel.app/"],
        },
        
    ]

    const handleOver = (index) => {
        setActive(index)
    }

    const handleOut = (index) => {
        setActive(-1)
    }


    return (
        <div className="w-screen h-[300vh] bg-green-500 overflow-y-hidden">
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
                                <div className="flex flex-row justify-between">
                                    <p className="text-[3rem]">{item.title}</p>
                                    <div className="flex flex-row">
                                        <div className="w-[55px] h-[55px] bg-white rounded-lg mr-4 cursor-pointer flex justify-center items-center">
                                            <Image 
                                                src='/images/home.png' 
                                                className="w-[40px] h-[40px]" 
                                                onClick={() => {router.push(`${item.url}`)}}
                                                width={100} height={100} />
                                        </div>
                                        <div className="w-[55px] h-[55px] bg-white rounded-lg cursor-pointer">
                                            <Image 
                                                src='/images/github.png' 
                                                className="w-[55px] h-[55px]" 
                                                onClick={() => {router.push(`${item.github}`)}}
                                                width={100} height={100} />
                                        </div>
                                    </div>
                                </div>
                                <p className="text-[1.2rem] -mt-2">: {item.simpleExp}</p>
                                {item.content}
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
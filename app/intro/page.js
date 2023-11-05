'use client';

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import myImage from '../assets/images/myImage3.png';
import Image from "next/image";
import './page.css';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Menu from "../module/menu";
import Title from "../module/title";
import Logo from '../module/logo';

export default function Intro() {
    const gridRef = useRef();
    const imageRef = useRef();
    const menuRef = useRef();
    const gridMoveRef = useRef();
    const router = useRouter();
    const gridItem = "bg-black opacity-40 rounded-xl flex flex-col justify-center items-center";

    useEffect(() => {
        gridRef.current.classList.add("grid-pop-up")
    }, [])

    useEffect(() => {  // grid move
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
          markers: false,
          trigger: '.section1',
          start: '10% 30%', 
          end: 'bottom 0%',  
          scrub: 3,
          onUpdate: (self) => {
            gsap.to(gridMoveRef.current, {
              y: (self.progress * -1000),
                overwrite: true,
            });
          },
        });
        ScrollTrigger.update();
      }, [])

    useEffect(() => {  // image move
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
        markers: false,
        trigger: '.section1',
        start: '10% 30%', 
        end: 'bottom 0%',  
        scrub: 3,
        onUpdate: (self) => {
        gsap.to(imageRef.current, {
            y: (self.progress * -500),
            overwrite: true,
        });
        },
    });
    ScrollTrigger.update();
    }, [])

    // useEffect(() => {  // menu appear
    //     gsap.registerPlugin(ScrollTrigger);
    //     if(!clicked)
    //     ScrollTrigger.create({
    //         markers: true,
    //         trigger: '.section1',
    //         start: '70% 30%', 
    //         end: '70% 40%',  
    //         scrub: 3,
    //         onUpdate: (self) => {
    //         gsap.to(menuRef.current, {
    //             opacity: 0+self.progress*2
    //         });
    //         },
    //     });
    //     ScrollTrigger.update();
    // }, [])

    return (
        <div className="w-screen h-[220vh] bg-blue-500 overflow-hidden">
            <title>HSJ | Intro</title>
            <Logo />
            <Title title="자기 소개" eng="SELF_INTRODUCTION" />
            <div className="section1 w-full sm:h-[180vh] h-[120vh] flex flex-row transform translate-y-[5vh]">
                <div ref={imageRef} className="sm:w-1/2 w- mt-60 sm:flex hidden flex-col items-center">
                    <Image 
                        alt="..."
                        src={myImage} 
                        className="w-3/5 z-50"/>
                </div>
                <div ref={gridRef} className="sm:w-2/5 w-5/6 sm:ml-0 ml-8 h-auto mt-[25vh] opacity-0">
                    <div ref={gridMoveRef} className="w-full sm:h-auto h-[78vh] grid grid-cols-3 grid-rows-6 gap-x-8 gap-y-8">
                        <div className={`${gridItem} sm:h-[25vh] h-[11vh]`}>
                            <p className="sm:text-[2rem] text-[1rem]">이름</p>
                            <p className="sm:text-[2.5rem] text-[1.2rem]">홍승재</p>
                        </div>
                        <div className={`${gridItem} sm:h-[25vh] h-[11vh]`}>
                            <p className="sm:text-[2rem] text-[1rem]">생년월일</p>
                            <p className="sm:text-[2.5rem] text-[1.2rem]">98.09.01</p>
                        </div>
                        <div className={`${gridItem} row-span-2 sm:h-auto h-[24vh]`}>
                            <p className="sm:text-[2rem] text-[1rem]">주소</p>
                            <p className="sm:text-[2.5rem] text-[1.2rem] leading-[4.5vh]">서울시<br/>서대문구<br/>연희동</p>
                        </div>
                        <div className={`${gridItem} sm:h-[25vh] h-[11vh] col-span-2`}>
                            <p className="sm:text-[2rem] text-[1rem]">CONTACT</p>
                            <p className="sm:text-[2rem] text-[1rem]">010-2892-6408</p>
                            <p className="sm:text-[2rem] text-[1rem]">sjhong98@icloud.com</p>
                        </div>
                        <div className={`${gridItem} sm:h-[25vh] h-[11vh]`}>
                        <p className="sm:text-[2.5rem] text-[1.2rem]">ESTP</p>
                        </div>
                        <div className={`${gridItem} sm:h-[25vh] h-[11vh] col-span-2`}>
                            <p className="sm:text-[2rem] text-[1rem]">학력</p>
                            <p className="sm:text-[2.5rem] text-[1rem] sm:leading-[4.5vh] leading-[2.3vh]">상명대학교<br/>역사콘텐츠학과 &<br/>컴퓨터과학과</p>
                        </div>
                        <div className={`${gridItem} row-span-3 col-span-3 pl-[2vw] pr-[2vw] sm:h-auto h-[85vh]`}>
                            <p className="text-[1.5rem]">자기소개</p>
                            <p className="sm:text-[2rem] text-[1.1rem] mb-[3vh]">" 사람에게 다가가는 콘텐츠를 만들고 싶습니다 "</p>
                            <p className="sm:text-[1.1rem] text-[0.9rem] leading-[3vh]">
                                대학에서 역사콘텐츠학과 컴퓨터과학을 전공하였습니다.<br/><br/> 역사콘텐츠학을 통해 다양한 미디어를 통해 인문학을 콘텐츠화하여 대중에게 전달하는 방법에<br/>관하여 공부하였고, 컴퓨터과학을 통해 콘텐츠를 직접 만들어내는 기술에 대하여 공부하였습니다.
                                <br/><br/>제가 개발자라는 직업에 매력을 느끼게 된 이유 역시, '콘텐츠'라는 연결고리 때문이었습니다.<br/>개발자는 소프트웨어라는 콘텐츠를 개발하고 적합한 미디어를 통해 사람들에게 전달하는<br/>사람이기 때문입니다.
                                <br/><br/>특히,<br/>프론트엔드 개발자는 사람들과 직접적으로 접촉하는 콘텐츠를 만들어내는 만큼,<br/>좋은 콘텐츠에 대한 욕심은 동일하다고 생각합니다.
                                <br/><br/>배움을 두려워하지 않고 끊임없이 공부하며,리더쉽과 책임감, 그리고 커뮤니케이션 능력을 갖춘<br/>개발자가 되기 위해 오늘도 노력하고 있습니다.
                            </p>
                        </div>

                    </div>
                    

                </div>
            </div>
            <div ref={menuRef} className="">
                <Menu />
            </div>
        </div>
    )
}
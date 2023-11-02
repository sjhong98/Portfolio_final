'use client';

import { useState, useEffect, useRef } from "react";
import image1 from './assets/images/image.png';
import image2 from './assets/images/image2.png';
import Image from "next/image";
import './page.css';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Main() {
  const image1Ref = useRef();
  const section0Ref = useRef();
  const section1Ref = useRef();
  const tx1Ref = useRef();
  const tx2Ref = useRef();
  const tx2_1Ref = useRef();
  const tx2_2Ref = useRef();
  const tx3Ref = useRef();
  const menuRef = useRef();
  const blueMenuRef = useRef();
  const greenMenuRef = useRef();
  const redMenuRef = useRef();
  const yellowMenuRef = useRef();
  const blueCircleRef = useRef();
  const greenCircleRef = useRef();
  const redCircleRef = useRef();
  const yellowCircleRef = useRef();
  const blueSubCircleRef = useRef();
  const greenSubCircleRef = useRef();
  const redSubCircleRef = useRef();
  const yellowSubCircleRef = useRef();
  

  useEffect(() => {  // tx1 move
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      markers: false,
      trigger: '.text1',
      start: 'top 30%', 
      end: 'bottom 0%',  
      scrub: 3,
      onUpdate: (self) => {
        gsap.to(tx1Ref.current, {
            y: (self.progress * -1000),
            overwrite: true,
        });
      },
    });
    ScrollTrigger.update();
  }, [])

  useEffect(() => {  // tx3 move
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      markers: false,
      trigger: '.text1',
      start: 'top 30%', 
      end: 'bottom 0%',  
      scrub: 3,
      onUpdate: (self) => {
        gsap.to(tx3Ref.current, {
            y: (self.progress * -2000),
            overwrite: true,
        });
      },
    });
    ScrollTrigger.update();
  }, [])

  useEffect(() => {  // tx2 move
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      markers: false,
      trigger: '.text1',
      start: 'top 30%', 
      end: 'bottom 0%',  
      scrub: 3,
      onUpdate: (self) => {
        gsap.to(tx2Ref.current, {
          y: (self.progress * -100),
            overwrite: true,
        });
      },
    });
    ScrollTrigger.update();
  }, [])

  useEffect(() => {  // tx appear
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      markers: false,
      trigger: '.text1',
      start: '50% 40%', 
      end: '70% 30%',  
      scrub: 3,
      onUpdate: (self) => {
        gsap.to(tx2_2Ref.current, {
          opacity: 0+self.progress
        });
      },
    });
    ScrollTrigger.update();
  }, [])

  useEffect(() => {  // image1 disappear
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      markers: false,
      trigger: '.text1',
      start: '50% 40%', 
      end: '70% 30%',  
      scrub: 3,
      onUpdate: (self) => {
        gsap.to(image1Ref.current, {
          opacity: 1-self.progress*2
        });
      },
    });
    ScrollTrigger.update();
  }, [])

  useEffect(() => {  // bg change
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      markers: false,
      trigger: '.text1',
      start: '45% 40%', 
      end: '100% 0%',  
      scrub: 3,
      onUpdate: (self) => {
        if (self.isActive) {      // 원래 색상으로 돌아가기
          gsap.to(section0Ref.current, {
            backgroundColor: '#FFD42C',
            duration: 0.8,
          });
        } else {
          gsap.to(section0Ref.current, {
            backgroundColor: '#FEE832', 
            duration: 0.8,
          });
        }
      },
    });
    ScrollTrigger.update();
  }, [])

  useEffect(() => {  // menu appear
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      markers: true,
      trigger: '.text1',
      start: '50% 40%', 
      end: '70% 30%',  
      scrub: 3,
      onUpdate: (self) => {
        gsap.to(menuRef.current, {
          y: self.progress * -400,
        });
      },
    });
    ScrollTrigger.update();
  }, [])

  const handleMenuOver = (color) => {
    switch(color) {
      case "blue" :
        blueMenuRef.current.classList.add('menu-up');
        break;
      case "green" :
        greenMenuRef.current.classList.add('menu-up');
        break;
      case "red" :
        redMenuRef.current.classList.add('menu-up');
        break;
      case "yellow" :
        yellowMenuRef.current.classList.add('menu-up');
        break;
      default:
        break;
    }
  }

  const handleMenuOut = (color) => {
    switch(color) {
      case "blue" :
        blueMenuRef.current.classList.remove('menu-up');
        blueMenuRef.current.classList.add('menu-down');
        break;
      case "green" :
        greenMenuRef.current.classList.remove('menu-up');
        greenMenuRef.current.classList.add('menu-down');
        break;
      case "red" :
        redMenuRef.current.classList.remove('menu-up');
        redMenuRef.current.classList.add('menu-down');
        break;
      case "yellow" :
        yellowMenuRef.current.classList.remove('menu-up');
        yellowMenuRef.current.classList.add('menu-down');
        break;
      default:
        break;
    }
  }

  const handleMenuClick = (color) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    switch(color) {
      case "blue" :
        blueCircleRef.current.classList.add("menu-scale-up");
        blueSubCircleRef.current.classList.add("menu-scale-sub-up");
        break;
      case "green" :
        greenCircleRef.current.classList.add("menu-scale-up");
        greenSubCircleRef.current.classList.add("menu-scale-sub-up");
        break;
      case "red" :
        redCircleRef.current.classList.add("menu-scale-up");
        redSubCircleRef.current.classList.add("menu-scale-sub-up");
        break;
      case "yellow" :
        yellowCircleRef.current.classList.add("menu-scale-up");
        yellowSubCircleRef.current.classList.add("menu-scale-sub-up");
        break;
      default :
        break;
    }
  }

  

  return (
    <div ref={section0Ref} className="section0 w-screen h-[130vh] bg-theme overflow-y-hidden">
      {/* <Image src={image2} alt="..." className="fixed w-[12vw] mt-12 ml-12 cursor-pointer z-50" style={{transform:"rotate(-10deg)"}} /> */}
      <div ref={section1Ref} className="section1 w-screen h-screen flex flex-col justify-center items-center">
        <div ref={image1Ref} className="fixed flex justify-center items-center" style={{transform:"rotate(-15deg)"}}>
          <Image src={image1} alt="..." className="myImage opacity-30 z-10 w-1/4 mr-[2vw] mb-12 show-up-img" />
        </div>
        <div className="text1 w-1/2 h-1/3 flex flex-col justify-center ml-[8vw]">
          <div ref={tx1Ref}>
            <p className="text-black text-[5rem] -mb-[2vh] show-up-1 transform translate-y-[1000px]" style={{fontFamily:'gmarket'}}>안녕하세요</p>
          </div>
          <div ref={tx2Ref}>
            <p className="text-black text-[6rem] leading-[90px] show-up-2 transform translate-y-[1000px]" style={{fontFamily:'gmarket_thick'}}>FRONTEND</p>
            <p className="text-black text-[6rem] leading-[90px] show-up-2 transform translate-y-[1000px]" style={{fontFamily:'gmarket_thick'}}>DEVELOPER</p>
            <div ref={tx2_2Ref} className="opacity-0">
              <p className="text-black text-[6rem] leading-[90px] show-up-2 transform translate-y-[1000px]" style={{fontFamily:'gmarket_thick'}}>PORTFOLIO</p>
            </div>
          </div>
          <div ref={tx3Ref}>
            <p className="text-black text-[5rem] -mt-[11vh] show-up-3 transform translate-y-[1000px]" style={{fontFamily:'gmarket_thick'}}>홍승재 입니다</p>
          </div>
        </div>
      </div>

      <div className="empty-space h-[30vh]" />

      <div className="menu h-[40vh] w-screen flex flex-row justify-center">
        <div ref={menuRef} className="h-[45vh] w-4/5 flex flex-row">

          <div 
            ref={blueMenuRef} 
            className="w-1/4 bg-blue-500 cursor-pointer z-50 flex justify-center items-center" 
            onMouseOver={() => {handleMenuOver("blue")}} 
            onMouseOut={() => handleMenuOut("blue")}
            onClick={() => handleMenuClick("blue")}
          >
            <p className="absolute z-50 text-[4rem]" style={{fontFamily:'gmarket'}}>자기소개</p>
            <div ref={blueCircleRef} className="w-[20vw] h-[40vh] rounded-full bg-blue-500 absolute z-30" />
            <div ref={blueSubCircleRef} className="w-[19.5vw] h-[39.5vh] rounded-full bg-blue-400" />
            
          </div>
          <div 
            ref={greenMenuRef} 
            className="w-1/4 bg-green-500 cursor-pointer z-50 flex justify-center items-center" 
            onMouseOver={() => {handleMenuOver("green")}} 
            onMouseOut={() => handleMenuOut("green")}
            onClick={() => handleMenuClick("green")}
          >
            <p className="absolute z-50 text-[4rem]" style={{fontFamily:'gmarket'}}>프로젝트</p>
            <div ref={greenCircleRef} className="w-[20vw] h-[40vh] rounded-full bg-green-500 absolute z-30" />
            <div ref={greenSubCircleRef} className="w-[19.5vw] h-[39.5vh] rounded-full bg-green-400" />

          </div>
          <div 
            ref={redMenuRef} 
            className="w-1/4 bg-red-500 cursor-pointer z-50 flex justify-center items-center" 
            onMouseOver={() => {handleMenuOver("red")}} 
            onMouseOut={() => handleMenuOut("red")}
            onClick={() => handleMenuClick("red")}
          >
            <p className="absolute z-50 text-[4rem]" style={{fontFamily:'gmarket'}}>기술스택</p>
            <div ref={redCircleRef} className="w-[20vw] h-[40vh] rounded-full bg-red-500 absolute z-30" />
            <div ref={redSubCircleRef} className="w-[19.5vw] h-[39.5vh] rounded-full bg-red-400" />

          </div>
          <div 
            ref={yellowMenuRef} 
            className="w-1/4 bg-yellow-500 cursor-pointer z-50 flex justify-center items-center" 
            onMouseOver={() => {handleMenuOver("yellow")}} 
            onMouseOut={() => handleMenuOut("yellow")}
            onClick={() => handleMenuClick("yellow")}
          >
            <p className="absolute z-50 text-[4rem]" style={{fontFamily:'gmarket'}}>기록</p>
            <div ref={yellowCircleRef} className="w-[20vw] h-[40vh] rounded-full bg-yellow-500 absolute z-30" />
            <div ref={yellowSubCircleRef} className="w-[19.5vw] h-[39.5vh] rounded-full bg-yellow-400" />

          </div> 
        </div>

      </div>

    </div>
  )
}

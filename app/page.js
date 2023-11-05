'use client';

import { useEffect, useRef } from "react";
import image1 from './assets/images/image.png';
import image2 from './assets/images/image2.png';
import Image from "next/image";
import './page.css';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Menu from "./module/menu";

export default function Main() {
  const image1Ref = useRef();
  const section0Ref = useRef();
  const section1Ref = useRef();
  const tx1Ref = useRef();
  const tx2Ref = useRef();
  const tx2_2Ref = useRef();
  const tx3Ref = useRef();
  const menuRef = useRef();
  

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
      markers: false,
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
  

  return (
    <div ref={section0Ref} className="section0 w-screen h-[130vh] bg-theme overflow-y-hidden">
      <title>HSJ | Portfolio</title>
      <Image 
        src={image2} 
        alt="..." 
        className="fixed w-[12vw] mt-12 ml-12 cursor-pointer z-50" 
        style={{transform:"rotate(-10deg)"}} />
      <div ref={section1Ref} className="section1 w-screen h-screen flex flex-col justify-center items-center">
        <div ref={image1Ref} className="fixed flex justify-center items-center" style={{transform:"rotate(-15deg)"}}>
          <Image 
            src={image1} 
            alt="..." 
            className="myImage opacity-30 z-10 sm:w-1/4 w-3/4 mr-[2vw] mb-12" />
        </div>
        <div className="text1 sm:w-1/2 w-5/6 h-1/3 flex flex-col justify-center sm:ml-[12vw] ml-[4vw]">
          <div ref={tx1Ref}>
            <p 
              className="text-black sm:text-[5rem] text-[3rem] -mb-[2vh] show-up-1 transform translate-y-[1000px]" 
              style={{fontFamily:'gmarket'}}>
                안녕하세요
            </p>
          </div>
          <div ref={tx2Ref}>
            <p 
              className="text-black sm:text-[6rem] text-[3rem] sm:leading-[90px] leading-[60px] show-up-2 transform translate-y-[1000px]" 
              style={{fontFamily:'gmarket_thick'}}>
                FRONTEND
            </p>
            <p 
              className="text-black sm:text-[6rem] text-[3rem] sm:leading-[90px] show-up-2 transform translate-y-[1000px]" 
              style={{fontFamily:'gmarket_thick'}}>
                DEVELOPER
            </p>
            <div ref={tx2_2Ref} className="opacity-0">
              <p 
                className="text-black sm:text-[6rem] text-[3rem] sm:leading-[90px] leading-[60px] show-up-2 transform translate-y-[1000px]" 
                style={{fontFamily:'gmarket_thick'}}>
                  PORTFOLIO
              </p>
            </div>
          </div>
          <div ref={tx3Ref}>
            <p className="text-black sm:text-[5rem] text-[3rem] -mt-[11vh] show-up-3 transform translate-y-[1000px]" style={{fontFamily:'gmarket_thick'}}>홍승재 입니다</p>
          </div>
        </div>
      </div>

      <div className="empty-space h-[30vh]" />

      <div ref={menuRef}>
        <Menu />
      </div>
      
    </div>
  )
}

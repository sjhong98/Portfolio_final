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
  const section1Ref = useRef();
  const tx1Ref = useRef();
  const tx2Ref = useRef();
  const tx2_1Ref = useRef();
  const tx2_2Ref = useRef();
  const tx3Ref = useRef();

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
      markers: true,
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

  useEffect(() => {  // tx2 move
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

  return (
    <div className="section0 w-screen h-[130vh] bg-theme">
      <Image src={image2} alt="..." className="fixed w-[12vw] mt-12 ml-12 cursor-pointer z-50" style={{transform:"rotate(-15deg)"}} />
      <div ref={section1Ref} className="section1 w-screen h-screen flex flex-col justify-center items-center">
        <Image src={image1} alt="..." className="myImage fixed opacity-30 z-10 w-1/4 mr-[2vw] show-up-img" style={{transform:"rotate(-10deg)"}}/>
        <div className="text1 w-1/2 h-1/3 flex flex-col justify-center ml-[8vw] z-20">
          <div ref={tx1Ref}>
            <p className="text-black text-[5rem] mb-6 show-up-1 transform translate-y-[1000px]" style={{fontFamily:'korean'}}>안녕하세요</p>
          </div>
          <div ref={tx2Ref}>
            <p className="text-black text-[6rem] leading-[70px] show-up-2 transform translate-y-[1000px]" style={{fontFamily:'akira'}}>FRONTEND</p>
            <p className="text-black text-[6rem] leading-[70px] show-up-2 transform translate-y-[1000px]" style={{fontFamily:'akira'}}>DEVELOPER</p>
            <div ref={tx2_2Ref} className="opacity-0">
              <p className="text-black text-[6rem] leading-[70px] show-up-2 transform translate-y-[1000px]" style={{fontFamily:'akira'}}>PORTFOLIO</p>
            </div>
          </div>
          <div ref={tx3Ref}>
            <p className="text-black text-[5rem] mt-6 show-up-3 transform translate-y-[1000px]" style={{fontFamily:'korean'}}>홍승재 입니다</p>
          </div>
          
        </div>
      </div>

    </div>
  )
}

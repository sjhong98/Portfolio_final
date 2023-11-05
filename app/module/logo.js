'use client';

import { useRouter } from "next/navigation";
import Image from "next/image";
import image2 from '../assets/images/image2.png';

export default function Logo() {
    const router = useRouter();

    return (
        <Image 
            src={image2} alt="..." 
            className="fixed w-[12vw] mt-12 ml-12 cursor-pointer z-[9999]" 
            style={{transform:"rotate(-10deg)"}} 
            onClick={()=>{router.push('./')}}
        />
    )
}
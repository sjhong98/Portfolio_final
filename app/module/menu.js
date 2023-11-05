import { useRef } from "react";
import { useRouter } from "next/navigation";
import './menu.css';

export default function Menu() {
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
    const router = useRouter();

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
            setTimeout(() => {
              router.push('./intro');
            }, 800)
            break;
          case "green" :
            greenCircleRef.current.classList.add("menu-scale-up");
            greenSubCircleRef.current.classList.add("menu-scale-sub-up");
            setTimeout(() => {
              router.push('./projects');
            }, 800)
            break;
          case "red" :
            redCircleRef.current.classList.add("menu-scale-up");
            redSubCircleRef.current.classList.add("menu-scale-sub-up");
            setTimeout(() => {
              router.push('./stack');
            }, 800)
            break;
          case "yellow" :
            yellowCircleRef.current.classList.add("menu-scale-up");
            yellowSubCircleRef.current.classList.add("menu-scale-sub-up");
            setTimeout(() => {
              router.push('./archive');
            }, 800)
            break;
          default :
            break;
        }
      }

    const menuStyle = "w-1/4 cursor-pointer z-50 flex justify-center items-center";
    const circleStyle = "w-[20vw] h-[40vh] rounded-full absolute z-30 opacity-0";
    const subCircleStyle = "w-[19.5vw] h-[39.5vh] rounded-full opacity-0";
    const menuTitleStyle = "absolute z-50 sm:text-[4rem] text-[1.5rem]";

    return (
        <div className="menu h-[40vh] w-screen flex flex-row justify-center">
            <div className="h-[45vh] sm:w-4/5 w-screen flex flex-row">
                <div 
                    ref={blueMenuRef} 
                    className={`${menuStyle} bg-blue-500`}
                    onMouseOver={() => {handleMenuOver("blue")}} 
                    onMouseOut={() => handleMenuOut("blue")}
                    onClick={() => handleMenuClick("blue")}
                >
                    <p className={`${menuTitleStyle}`} style={{fontFamily:'gmarket'}}>자기소개</p>
                    <div ref={blueCircleRef} className={`${circleStyle} bg-blue-500`}/>
                    <div ref={blueSubCircleRef} className={`${subCircleStyle} bg-blue-400`} />
                    
                </div>
                <div 
                    ref={greenMenuRef} 
                    className={`${menuStyle} bg-green-500`}
                    onMouseOver={() => {handleMenuOver("green")}} 
                    onMouseOut={() => handleMenuOut("green")}
                    onClick={() => handleMenuClick("green")}
                >
                    <p className={`${menuTitleStyle}`} style={{fontFamily:'gmarket'}}>프로젝트</p>
                    <div ref={greenCircleRef} className={`${circleStyle} bg-green-500`} />
                    <div ref={greenSubCircleRef} className={`${subCircleStyle} bg-green-400`} />

                </div>
                <div 
                    ref={redMenuRef} 
                    className={`${menuStyle} bg-red-500`}
                    onMouseOver={() => {handleMenuOver("red")}} 
                    onMouseOut={() => handleMenuOut("red")}
                    onClick={() => handleMenuClick("red")}
                >
                    <p className={`${menuTitleStyle}`} style={{fontFamily:'gmarket'}}>기술스택</p>
                    <div ref={redCircleRef} className={`${circleStyle} bg-red-500`} />
                    <div ref={redSubCircleRef} className={`${subCircleStyle} bg-red-400`} />

                </div>
                <div 
                    ref={yellowMenuRef} 
                    className={`${menuStyle} bg-yellow-500`}
                    onMouseOver={() => {handleMenuOver("yellow")}} 
                    onMouseOut={() => handleMenuOut("yellow")}
                    onClick={() => handleMenuClick("yellow")}
                >
                    <p className={`${menuTitleStyle}`} style={{fontFamily:'gmarket'}}>기록</p>
                    <div ref={yellowCircleRef} className={`${circleStyle} bg-yellow-500`} />
                    <div ref={yellowSubCircleRef} className={`${subCircleStyle} bg-yellow-400`} />

                </div> 
            </div>
        </div>
    )
}


'use client';

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProjectsComponent() {
    const [active, setActive] = useState(-1);
    const router = useRouter();

    const contentStyle = "text-[1rem] leading-[2.1vh] mt-3 mb-6";
    const boxStyle = "sm:w-2/3 w-5/6 h-[40vh] flex sm:flex-row flex-col sm:mb-[10vh] mb-[90vh]";

    const projects = [
        {
            title: "대동유어지도",
            simpleExp : "사진 기반 여행 콘텐츠 SNS 플랫폼",
            content: <p className={`${contentStyle}`}>대동유어지도는 여행자를 위한 SNS입니다. 여행을 계획하는 과정에서 지역별로 트렌디하고 유용한 정보를 얻을 수 있고, 여행을 다녀온 사람들이 의미 있는 기록을 할 수 있도록 도와줍니다.<br/><br/>졸업 프로젝트이자 저의 첫번째 결과물로서 의미가 있는 프로젝트입니다. 디자인과 프론트엔드 개발 전반을 담당하였고, 리액트, API 등 웹 개발의 기본적인 기술들을 익힐 수 있었습니다. 이외에도 웹팩 번들링, cypress 테스트 자동화, github actions를 이용한 CI/CD 등 다양한 실무 기술들을 경험해볼 수 있었던 기회였습니다.</p>,
            functions : ["사진 기반 포스트 CRUD", "회원정보 CRUD", "좋아요, 댓글, 알림 등 상호작용", "카카오맵 API 활용한 지도 구현", "히트맵으로 지역별 게시물 수 표현"],
            skill: ["Javascript", "React", "Redux", "Webpack", "Github Actions", "Cypress"],
            url: "https://climbing-streetcar-f9a.notion.site/685128dc31e94839873d13e93520079e?v=93540477e8e743e8b87cd9da816e3ef0&pvs=4",
            github: "https://github.com/daedongyourjido",
            dur: "23.01-09"
        },
        {
            title: "넌P해 난J할게",
            simpleExp : "카카오맵, 공공데이터 API를 활용한 여행계획 세우기 페이지",
            content: <p className={`${contentStyle}`}>UPMJ는 쉽고 편하게 여행계획을 세울 수 있도록 도와주는 서비스입니다. 관광지 공공데이터를 활용하여 원하는 여행지를 블록으로 만들고, 이를 드래그앤드롭으로 블록 쌓듯 여행 일정을 세울 수 있습니다. 본 프로젝트를 통해 소셜로그인 기능을 처음 구현해보았고, 드래그앤드롭 등 원하는 기능을 구현하기 위해 필요한 라이브러리를 찾아서 사용법을 익히고 직접 사용해 볼 수 있었습니다. 또한 socket.io를 활용하여 실시간 통신을 구현해보았으며, 컴포넌트 구조가 복잡해짐에 따라 필요성에 의해 Redux를 사용하였다는 점에서 의미 있는 프로젝트였습니다. 또한 제가 구상한 아이디어를 바탕으로 백엔드 팀원과 함께 작업하며, 협업 과정에서 원하는 결과를 얻기 위해 어떻게 소통해야할 것인지 고민해보게 된 계기가 되었습니다.</p>,
            functions : ["카카오 소셜로그인", "블록 생성", "드래그앤드롭 블록 쌓기", "일정별 여행 동선 확인", "일정 및 수정 실시간 반영", "그룹 채팅"],
            skill: ["Javascript", "React", "Redux", "Firebase", "Github Actions", "socket.io", "Webpack"],
            url: "https://github.com/sjhong98/uPmJ",
            github: "https://github.com/sjhong98/uPmJ",
            dur: "23.06"
        },
        {
            title: "ShowMe",
            simpleExp : "GSAP을 활용한 자기소개 페이지",
            content: <p className={`${contentStyle}`}>GSAP을 통한 스크롤 이벤트에 따른 에니메이션 효과를 활용해보고 싶어서 제작한 페이지입니다. GSAP을 사용해볼 수 있었고, 디자인 웹페이지 레퍼런스들을 많이 찾아볼 수 있는 기회가 되었습니다. 또한, 제작한 웹페이지를 직접 Firebase를 이용하여 배포해보았다는데에 의미가 있습니다.</p>,
            functions : ["GSAP을 활용한 에니메이션"],
            skill: ["React", "Greensock", "Firebase"],
            url: "https://george-ed6f3.web.app/",
            github: "https://github.com/sjhong98/showMeGSAP",
            dur: "23.07"
        },
        {
            title: "DMRS",
            simpleExp : "블록체인 기반 신원정보 DID를 활용한 진료기록 관리 시스템",
            content: <p className={`${contentStyle}`}>DMRS은 DID를 활용하여 환자가 자신의 진료정보를 원하는 범위에서 의사에게 전달할 수 있으며, 의사는 이 정보를 바탕으로 진료기록을 조회하고 수정할 수 있습니다. DMRS는 제가 프론트엔드 개발로 참여한 프로젝트이며, React 기반으로 주어진 요구조건에 따라 제작하였습니다. React Native를 이용하여 처음으로 모바일 앱도 제작해보았으며, DID 정보가 서버를 통하지 않도록 하기 위해 서버 통신대신 socket.io를 사용하기도 하였습니다.</p>,
            functions : ["카카오 소셜로그인", "진료기록 관리", "앱)QR코드로 진료기록 제공", "앱)QR코드 스캐너로 진료기록 접근"],
            skill: ["Javascript", "React", "React Native", "socket.io"],
            url: "https://github.com/sjhong98/did",
            github: "https://github.com/sjhong98/did",
            dur: "23.07"
        },
        {
            title: "SCRAPPER",
            simpleExp : "텍스트 기반 SNS 플랫폼",
            content: <p className={`${contentStyle}`}>Scrapper는 텍스트 기반 SNS 플랫폼으로, Twitter나 Thread와 같이 텍스트를 기반으로 하면서도<br/>인스타그램 스토리처럼 업로드의 부담을 낮추어, 쉽게 공유하고 쉽게 상호작용할 수 있는 SNS로<br/>구상하였습니다. 또한 텍스트의 특성을 살려, 원하는 구체적인 부분에 좋아요를 표시할 수 있도록 하였습니다. Next.js과 TSX을 사용해보았고, vercel을 통해 배포하였습니다. 또한 Tailwind CSS를 사용하여 빠르고 간단하게 디자인을 구성해볼 수 있었습니다.</p>,
            functions : ["텍스트 기반 포스트 CRUD", "텍스트 드래그 방식 좋아요", "색으로 좋아요 수 표시", "포스트 스크랩"],
            skill: ["Typescript", "React", "Next.js", "Firestore", "Vercel", "Tailwind"],
            url: "https://scrapper-zeta.vercel.app/",
            github: "https://github.com/sjhong98/scrapper",
            dur: "23.10"
        },
        {
            title: "Portfolio",
            simpleExp : "포트폴리오 페이지",
            content: <p className={`${contentStyle}`}>포트폴리오를 정리하기 위해 제작한 페이지입니다. Greensock과 CSS keyframes 에니메이션을 사용하여 보기 즐거운 페이지를 만들고자 노력했고, 다양한 포트폴리오 레퍼런스들을 참고하여 제작하였습니다.</p>,
            functions : ["카카오 소셜로그인", "진료기록 관리", "모바일 앱에서 QR코드를 통해 진료기록 제공", "모바일 앱에서 QR코드 스캐너를 통해 진료기록 접근"],
            skill: ["Next.js", "Greensock", "CSS", "Vercel"],
            url: "https://hongseungjae.info/",
            github: "https://github.com/sjhong98/Portfolio_final",
            dur: "23.11"
        },
        
    ]

    const handleOver = (index) => {
        setActive(index)
    }

    const handleOut = (index) => {
        setActive(-1)
    }

    return (
        <div className="w-full sm:h-[320vh] h-auto transform translate-y-[30vh] flex flex-col items-center">
                { projects.map((item, index) => {
                    return (
                        <div 
                            key={index} 
                            onMouseOver={() => handleOver(index)}
                            onMouseOut={() => {handleOut(index)}}
                            className={active===index? `${boxStyle} mouse-over` : `${boxStyle} mouse-out`}
                        >
                            <Image 
                                alt="..."
                                src={`/images/${item.title}.png`} 
                                className="sm:w-[28vw] sm:h-[30vh] w-[80vw]" 
                                width={540} height={100} 
                            />
                            <div className="sm:ml-12 ml-0 -mt-2 flex flex-col h-full">
                                <div className="flex sm:flex-row flex-col justify-between">
                                    <p className="sm:text-[3rem] text-[2rem] sm:mt-0 mt-4">{item.title}</p>
                                    <div className="flex flex-row">
                                        <div 
                                            className="w-[55px] h-[55px] bg-white rounded-lg mr-4 cursor-pointer flex justify-center items-center"
                                            onClick={() => {router.push(`${item.url}`)}}
                                        >
                                            <Image 
                                                alt="..."
                                                src='/images/home.png' 
                                                className="sm:w-[40px] sm:h-[40px]" 
                                                width={100} height={100} />
                                        </div>
                                        <div 
                                            className="w-[55px] h-[55px] bg-white rounded-lg cursor-pointer flex justify-center items-center"
                                            onClick={() => {router.push(`${item.github}`)}}
                                        >
                                            <Image 
                                                alt="..."
                                                src='/images/Github.png' 
                                                className="w-[40px] h-[40px]" 
                                                
                                                width={80} height={80} />
                                        </div>
                                    </div>
                                </div>
                                <p className="text-[1.2rem] sm:-mt-2 mt-4">: {item.simpleExp}</p>
                                {item.content}
                                <p className="text-[1rem] -mt-2">{item.dur}</p>
                                <div className="flex sm:flex-row flex-col justify-between">
                                    <div className="flex flex-col">
                                        { item.functions.map((item, index) => {
                                            return (
                                                    <p key={index} className="text-[1rem] -mb-1">· {item}</p>
                                            )
                                        })}
                                    </div>
                                    <div className="grid grid-cols-4 grid-row-3 sm:w-[15vw] w-[70vw] sm:ml-12 ml-0 sm:mt-0 mt-4">
                                        { item.skill.map((item, index) => {
                                            return (
                                                <div key={index} className="mr-2">
                                                    <div className="rounded-2xl w-[50px] h-[50px] bg-green-600 flex justify-center items-center">
                                                        <Image 
                                                            alt="..."
                                                            key={index} 
                                                            src={`/images/${item}.png`} 
                                                            className="w-[30px] h-[30px]" 
                                                            width={30} height={30} 
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
    )
}
'use client';

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

export default function ProjectsComponent() {
    const [active, setActive] = useState(-1);
    const [expand, setExpand] = useState(-1);
    const [boxStyle, setBoxStyle] = useState("sm:w-2/3 w-5/6 flex sm:flex-row flex-col sm:mb-[10vh] mb-[90vh] overflow-hidden bg-green-500");
    const router = useRouter();

    const contentStyle = "text-[1rem] leading-[2.1vh] mt-3 mb-6";
    const gradient = "absolute h-2/3 w-full top-[5vh] bg-gradient-to-b from-transparent to-green-500 flex justify-center items-center text-2xl mt-20 cursor-pointer";

    const projects = [
        {
            title: "대동유어지도",
            simpleExp : "사진 기반 여행 콘텐츠 SNS 플랫폼",
            content: <p className={`${contentStyle}`}>대동유어지도는 여행자를 위한 SNS입니다. 여행을 계획하는 과정에서 지역별로 트렌디하고 유용한 정보를 얻을 수 있고, 여행을 다녀온 사람들이 의미 있는 기록을 할 수 있도록 도와줍니다.<br/><br/>졸업 프로젝트이자 저의 첫번째 결과물로서 의미가 있으며, 아이디어 기획 및 UI/UX 디자인, 프론트엔드 개발 전반을 맡았습니다. 본 프로젝트를 통해 React / API / Github 등의 기본적인 기술들을 배우기 시작하였으며, 빠르게 습득하여 프론트엔드 전반을 맡아 주어진 기간 내에 완성된 결과물을 만들어낼 수 있을 정도로 성장하게 된 계기가 되었습니다.<br/><br/>프로젝트를 진행하며 프론트엔드 개발에 대한 흥미를 키웠고, 현업 개발자와의 멘토링을 통해 코드/디렉토리 리팩토링, webpack 번들링, cypress 자동화 테스트, github actions를 이용한 CI/CD 등 다양한 실무 기술들을 접하고 직접 적용해보았던 경험이었습니다. <br/><br/>백엔드 개발자와 활발히 소통하며 웹 개발의 프로세스를 배울 수 있었고, 개발이 완료된 후에는 팀원들의 피드백을 적극적으로 반영하여 결과물의 완성도를 높이기 위해 노력하였습니다.<br/><br/>평가 교수님과 팀원들로부터 빠른 실력 성장과 배움에 대한 열정, 결과물의 UI/UX 디자인 등에 대한 칭찬을 받았던 경험은, 프론트엔드 개발자라는 꿈을 가지게 해준 계기가 되었습니다.</p>,
            functions : ["사진 기반 포스트 CRUD", "회원정보 CRUD", "좋아요, 댓글, 알림 등 상호작용", "카카오맵 API 활용한 지도 구현", "히트맵으로 지역별 게시물 수 표현"],
            skill: ["Javascript", "React", "Redux", "Webpack", "Github Actions", "Cypress"],
            url: "https://climbing-streetcar-f9a.notion.site/685128dc31e94839873d13e93520079e?v=93540477e8e743e8b87cd9da816e3ef0&pvs=4",
            github: "https://github.com/daedongyourjido",
            dur: "23.01-09"
        },
        {
            title: "넌P해 난J할게",
            simpleExp : "카카오맵, 공공데이터 API를 활용한 여행계획 세우기 페이지",
            content: <p className={`${contentStyle}`}>UPMJ는 쉽고 편하게 여행계획을 세울 수 있도록 도와주는 서비스입니다. 관광지 공공데이터를 활용하여 원하는 여행지를 블록으로 만들고, 이를 드래그앤드롭으로 블록 쌓듯 여행 일정을 세울 수 있습니다. 본 프로젝트에서 아이디어 기획 및 프론트엔드 개발을 맡아 진행하였습니다. React를 기반으로 개발하였고, 필요한 기능을 구현하기 위해 카카오 소셜로그인, 카카오맵 API, 공공데이터 API, 드래그앤드롭 라이브러리, socket.io 통신 라이브러리 등 다양한 라이브러리와 API를 활용해 볼 수 있었던 경험이었습니다.<br/><br/>드래그앤드롭 시에 블록 정보를 배열에 저장하고, 변경 사항이 있을 때마다 블록 내부 정보와 위치 인덱스 정보를 socket.io로 통신하도록 하여 실시간 여행 계획 세우기 기능을 구현하였습니다. 또한 그룹 생성 또는 그룹 참여 기능을 구현하여 socket.io 통신 시에 room 기반 통신을 할 수 있도록 하였습니다. 이외에도 socket.io를 통해 간단한 채팅, 마우스 커서 공유 기능을 구현하였습니다.<br/><br/>또한, 프로젝트가 다양한 컴포넌트를 포함하게 되고, 컴포넌트 간 데이터 이동 과정이 복잡해짐에 따라 redux를 적용하여 유지보수가 간단해지는 것을 경험하였습니다. 서버와 DB가 필요해짐에 따라 백엔드 멤버와 함께 작업하였으며, 협업 과정에서 원하는 결과를 얻기 위해 제가 필요한 바를 정확히 전달하는 커뮤니케이션 능력을 키울 수 있었던 계기가 되었습니다. <br/><br/>모바일 대응 반응형 웹도 구현하였습니다. 웹과 모바일에서 각각 사용 가능한 기능이 달랐기 때문에 Media Query를 사용하여 모바일 화면에서 다른 컴포넌트를 렌더링하도록 하였습니다.</p>,
            functions : ["카카오 소셜로그인", "블록 생성", "드래그앤드롭 블록 쌓기", "일정별 여행 동선 확인", "일정 및 수정 실시간 반영", "그룹 채팅"],
            skill: ["Javascript", "React", "Redux", "Firebase", "Github Actions", "socket.io", "Webpack"],
            url: "https://github.com/sjhong98/uPmJ",
            github: "https://github.com/sjhong98/uPmJ",
            dur: "23.06"
        },
        {
            title: "ShowMe",
            simpleExp : "GSAP을 활용한 자기소개 페이지",
            content: <p className={`${contentStyle}`}>GSAP을 이용하여 스크롤 이벤트를 구현해보고자 제작한 페이지입니다.<br/><br/>페이지 횡스크롤, 컴포넌트 별 스크롤 속도조절, 고정(pin) 등 GSAP에서 제공하는 기능들을 활용하여 자기소개 페이지를 구현하였으며, 페이지 디자인을 위해 다양한 레퍼런스들을 참고할 수 있는 기회가 되었습니다.xs<br/><br/>또한 제작한 프로젝트를 직접 firebase를 통해 배포해보았다는 점에서 의미 있는 프로젝트였습니다.</p>,
            functions : ["GSAP을 활용한 에니메이션"],
            skill: ["React", "Greensock", "Firebase"],
            url: "https://george-ed6f3.web.app/",
            github: "https://github.com/sjhong98/showMeGSAP",
            dur: "23.07"
        },
        {
            title: "DMRS",
            simpleExp : "블록체인 기반 신원정보 DID를 활용한 진료기록 관리 시스템",
            content: <p className={`${contentStyle}`}>DMRS은 블록체인 기반 신원정보 체계인 DID를 활용하여 환자가 자신의 진료정보를 원하는 범위에서 의사에게 전달할 수 있으며, 의사는 이 정보를 바탕으로 진료기록을 조회하고 수정할 수 있습니다. DMRS는 제가 프론트엔드 개발로 참여한 프로젝트이며, React 기반으로 주어진 요구조건에 따라 구현하였습니다. 구체적인 API 명세서를 바탕으로 데이터 통신을 하도록 구현하였으며, 프로젝트의 전체적인 구조를 파악하여 필요한 API를 요청하였습니다. <br/><br/>QR 코드를 통해 JWT로 암호화된 진료기록을 제공하는 기능을 구현하기 위해 React Native로 QR 코드 생성과 QR 코드 스캐너를 사용할 수 있는 모바일 앱을 제작하였습니다. 또한 로비 접근 시에 진료기록이 담긴 VP를 업데이트하여 최신화된 진료기록을 제공할 수 있고, 환자가 직접 진료기록을 열람할 수 있는 기능을 구현하였습니다.<br/><br/>또한, 복잡한 프로세스를 쉽게 테스트할 수 있도록 테스트용 컴포넌트를 만들어 API 상태, 프로세스 구조 등을 쉽게 확인할 수 있도록 하였습니다.</p>,
            functions : ["카카오 소셜로그인", "진료기록 관리", "앱)QR코드로 진료기록 제공", "앱)QR코드 스캐너로 진료기록 접근"],
            skill: ["Javascript", "React", "React Native", "socket.io"],
            url: "https://github.com/sjhong98/did",
            github: "https://github.com/sjhong98/did",
            dur: "23.07"
        },
        {
            title: "SCRAPPER",
            simpleExp : "텍스트 기반 SNS 플랫폼",
            content: <p className={`${contentStyle}`}>Scrapper는 텍스트 기반 SNS 플랫폼으로, Twitter나 Thread와 같이 텍스트를 기반으로 하면서도 인스타그램 스토리처럼 업로드의 부담을 낮추어, 쉽게 공유하고 쉽게 상호작용할 수 있는 SNS로<br/>구상하였습니다. 또한 텍스트의 특성을 살려, 원하는 구체적인 부분에 좋아요를 표시할 수 있도록 하였습니다. 1인 프로젝트로 진행하였으며, Next.js 프레임워크와 typescript를 사용하였고 vercel로 배포하였으며, fire base에서 제공하는 NoSQL 데이터베이스인 firestore를 사용하여 직접 데이터베이스를 구축하였습니다. <br/><br/>텍스트 드래그 방식 좋아요 기능을 구현하기 위해서 텍스트 드래그 시, 선택된 텍스트의 인덱스를 문자열화하여 저장하였고, 문자열을 다시 인덱스로 변환하여 각 인덱스의 등장빈도 색을 다르게 적용하여, 마치 형광펜을 칠하는 듯한 좋아요 기능을 구현하였습니다.<br/><br/>Tailwind CSS를 이용하여 빠르고 간편하게 디자인을 적용하였으며, 텍스트가 주가 되는 웹인만큼 깔끔한 디자인을 사용하여 통일성을 주었습니다. 또한 Tailwind CSS의 className 동적 생성을 활용하여 모바일 화면에 대응되는 반응형 웹도 구현하였습니다.</p>,
            functions : ["텍스트 기반 포스트 CRUD", "텍스트 드래그 방식 좋아요", "색으로 좋아요 수 표시", "포스트 스크랩"],
            skill: ["Typescript", "React", "Next.js", "Firestore", "Vercel", "Tailwind"],
            url: "https://scrapper-zeta.vercel.app/",
            github: "https://github.com/sjhong98/scrapper",
            dur: "23.10"
        },
        {
            title: "Portfolio",
            simpleExp : "포트폴리오 페이지",
            content: <p className={`${contentStyle}`}>포트폴리오를 정리하기 위해 제작한 페이지입니다. GSAP과 CSS keyframes 에니메이션을 사용하여 보기 즐거운 페이지를 만들고자 노력했고, 다양한 포트폴리오 레퍼런스들을 참고하여 제작하였습니다. AWS Route 53을 이용하여 도메인을 등록하였습니다.</p>,
            functions : ["GSAP/CSS를 사용한 에니메이션", "이벤트 핸들러를 사용한 UI/UX"],
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

    const handleExpand = (index) => {
        setExpand(index);
    }

    return (
        <div className="w-full sm:h-auto h-auto transform translate-y-[30vh] flex flex-col items-center">
                { projects.map((item, index) => {
                    return (
                        <div 
                            key={index} 
                            onMouseOver={() => handleOver(index)}
                            onMouseOut={() => {handleOut(index)}}
                            className=
                            { active===index? 
                                    expand===index ? `${boxStyle} h-auto mouse-over` : `${boxStyle} h-[40vh] mouse-over`
                                    : 
                                    expand===index ? `${boxStyle} h-auto mouse-out` : `${boxStyle} h-[40vh] mouse-out`
                            }
                        >
                            <div 
                                className={expand===index ? `${gradient} hidden` : `${gradient}`}
                                onClick={()=>handleExpand(index)}
                            >
                                <KeyboardDoubleArrowDownIcon 
                                    sx={{marginTop:25}} 
                                    className="text-[2rem]" 
                                />
                            </div>
                            <Image 
                                alt="..."
                                src={`/images/${item.title}.png`} 
                                className="sm:w-[28vw] sm:h-[30vh] w-[80vw]" 
                                width={540} height={100} 
                            />
                            <div className="sm:ml-12 ml-0 -mt-2 flex flex-col h-full">
                                <div className="flex sm:flex-row flex-col justify-between">
                                    <p className="sm:text-[3rem] text-[2rem] sm:mt-0 mt-4">{item.title}</p>
                                    <div className="flex flex-row mt-2">
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
                <div className="h-[30vh] w-screen" />
            </div>
    )
}
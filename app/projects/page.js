import './page.css';
import Menu from "../module/menu";
import Title from "../module/title";
import Logo from '../module/logo';
import ProjectsComponent from "./projects";

export default function Projects() {
    return (
        <div className="w-screen sm:h-[360vh] h-auto bg-green-500 overflow-y-hidden">
            <title>HSJ | Projects</title>
            <Logo />
            <Title title="프로젝트" eng="Projects" />
            <ProjectsComponent />

            <div className="">
                <Menu />
            </div>
        </div>
    )
}
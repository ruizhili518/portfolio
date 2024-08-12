import NavBar from "@/components/NavBar";
import {BackgroundBoxes} from "@/components/BackgroundBoxes";
import EducationCard from "@/components/EducationCard";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";

export default function Home() {
  return (
      <div className="mx-auto relative">
          <div className="fixed top-0 z-50 w-full flex justify-center bg-black">
              <NavBar/>
          </div>
          <div className="w-10/12 mx-auto">
              <BackgroundBoxes/>
              <ProjectCard/>
              <EducationCard/>
              <SkillCard/>
          </div>
      </div>
  );
}

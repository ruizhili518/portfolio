import NavBar from "@/components/NavBar";
import {BackgroundBoxes} from "@/components/BackgroundBoxes";
import EducationCard from "@/components/EducationCard";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
      <div className="mx-auto py-6 w-9/12 relative">
          <NavBar/>
          <BackgroundBoxes/>
          <EducationCard/>
          <ProjectCard/>
      </div>
  );
}

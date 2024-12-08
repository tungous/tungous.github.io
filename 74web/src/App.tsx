import { useState } from "react";
import Navigation from "./components/navigation";
import { WorkContainer } from "./components/work-container";
import { Project } from "./components/project";
import { Creatives } from "./components/creatives";

interface Creative {
  role: string;
  name: string;
}

export interface Project {
  projectName: string;
  description: string;
  creatives: Creative[];
  link: string;
  text: string;
}

export function App() {
  const [isLogoClicked, setIsLogoClicked] = useState(false);
  const [isWorkClicked, setIsWorkClicked] = useState(false);
  const [isCreativesClicked, setIsCreativesClicked] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project>();

  return (
    <div
      className={`flex transition-colors duration-500 ease-in-out overflow-hidden h-screen
          ${isWorkClicked ? "bg-black" : ""}
        `}
    >
      <div className="mix-blend-difference w-1/2 flex">
        <Navigation
          setLogo={setIsLogoClicked}
          isLogoClicked={isLogoClicked}
          setIsWorkClicked={setIsWorkClicked}
          isWorkClicked={isWorkClicked}
          setIsCreativesClicked={setIsCreativesClicked}
          isCreativesClicked={isCreativesClicked}
        />
        <WorkContainer
          isWorkClicked={isWorkClicked}
          setCurrentProject={setCurrentProject}
        />
      </div>
      {isWorkClicked && <Project project={currentProject} />}
      {isCreativesClicked && <Creatives></Creatives>}
    </div>
  );
}

export default App;

import React from "react";
import { workItems, projectsData } from "../assets/work";
import { Project } from "../App";

interface WorkContainerProps {
  isWorkClicked: boolean;
  setCurrentProject: (project: Project) => void;
}

interface WorkItem {
  month: string;
  year: number;
  title: string;
  projectId: string;
}

export function WorkContainer({
  isWorkClicked,
  setCurrentProject,
}: WorkContainerProps) {
  const groupedByYear = workItems.reduce((acc, item) => {
    if (!acc[item.year]) {
      acc[item.year] = [];
    }
    acc[item.year].push(item);
    return acc;
  }, {} as Record<number, WorkItem[]>);

  const sortedYears = Object.keys(groupedByYear)
    .map(Number)
    .sort((a, b) => b - a);

  const handleProjectClick = (projectId: string) => {
    setCurrentProject(projectsData[projectId as keyof typeof projectsData]);
  };

  return (
    <div className="min-h-screen items-center flex w-1/2">
      <div
        id="work-container"
        className={`
          py-2
          transition-all
          duration-700
          ease-in-out
          ${isWorkClicked ? "opacity-100" : "opacity-0"}
          ${isWorkClicked ? "visible" : "invisible"}
        `}
      >
        {sortedYears.map((year) => (
          <React.Fragment key={year}>
            <p className="py-2 font-semibold">{year}</p>
            {groupedByYear[year].map((item, index) => (
              <p key={index}>
                {item.month}/{" "}
                <span
                  onClick={() => handleProjectClick(item.projectId)}
                  className="underline transition-all duration-500 hover:decoration-black cursor-pointer"
                >
                  {item.title}
                </span>
              </p>
            ))}
          </React.Fragment>
        ))}
        <p className="py-4 text-sm font-extrabold">
          Copyright © 2024 Seventyfour, All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

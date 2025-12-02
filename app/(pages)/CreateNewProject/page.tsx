"use client";
import React, { useRef, useState } from "react";
import SideBar from "@/components/CreateNewProject/SideBar";
import NoPageSelected from "@/components/CreateNewProject/NoPageSelected";
import ProjectForm from "@/components/CreateNewProject/ProjectForm";

type ProjectData = {
  title: string;
  description: string;
  dueDate: string;
};
type Project = ProjectData & {
  id: number;
};

const Page = () => {
  const [projectState, setProjectState] = useState<{
    selectedProjectID: undefined | null | number;
    projects: Project[];
  }>({
    selectedProjectID: undefined,
    projects: [],
  });

  function handleAddProjectButton() {
    setProjectState((prev) => ({
      ...prev,
      selectedProjectID: null, // ✔ allowed
    }));
  }

  function handleSaveProject(projectData: ProjectData) {
    setProjectState((prev) => {
      const newProject: Project = {
        id: Math.random(),
        ...projectData,
      };

      return {
        ...prev,
        selectedProjectID: undefined,
        projects: [...prev.projects, newProject], // ✔ now iterable
      };
    });
  }
  console.log(projectState.projects);

  function handelCancelButton() {
    setProjectState((prev) => ({
      ...prev,
      selectedProjectID: undefined,
    }));
  }

  let content;
  if (projectState.selectedProjectID === undefined) {
    content = (
      <NoPageSelected handleAddProjectButton={handleAddProjectButton} />
    );
  } else if (projectState.selectedProjectID === null) {
    content = (
      <ProjectForm
        handelSavedData={handleSaveProject}
        handelCancelButton={handelCancelButton}
      />
    );
  }
  console.log("page", projectState.projects);

  return (
    <>
      <div className="min-h-screen flex">
        <SideBar
          projects={projectState.projects}
          handleAddProjectButton={handleAddProjectButton}
        />
        {content}
      </div>
    </>
  );
};

export default Page;

"use client";
import { useState } from "react";
import SideBar from "@/components/5)CreateNewProject/SideBar";
import NoPageSelected from "@/components/5)CreateNewProject/NoPageSelected";
import ProjectForm from "@/components/5)CreateNewProject/ProjectForm";
import SelectedProject from "@/components/5)CreateNewProject/SelectedProject";

export type ProjectData = {
  title: string;
  description: string;
  dueDate: string;
};
export type Project = ProjectData & {
  id: number | string;
};
export type Tasktype = {
  taskId: string | number;
  text: string;
  projectID: string | undefined | null | number;
};

const Page = () => {

  const [projectState, setProjectState] = useState<{
    selectedProjectID: undefined | null | number;
    projects: Project[];
    tasks: Tasktype[]
  }>({
    selectedProjectID: undefined,
    projects: [],
    tasks:[]
  });

  function handleSelectProject(id: number) {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectID: id, // ✔ allowed
      };
    });
  }

  function handelDeleteProject() {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectID: undefined,
        projects: prev.projects.filter((project)=> project.id !== prev.selectedProjectID)
      };
    });
  }

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
      projects: [...prev.projects, newProject],
    };
  });
}
//   console.log(projectState.projects);

  function handelCancelButton() {
    setProjectState((prev) => ({
      ...prev,
      selectedProjectID: undefined,
    }));
  }

  function handelAddTask(text : string){
    setProjectState((prev) => {
        const taskId = Math.random();
      const newTask: Tasktype = {
        taskId,
        text,
        projectID : prev.selectedProjectID
      };

      return {
        ...prev,
        tasks: [...prev.tasks, newTask], // ✔ now iterable
      };
    });
  }

  function handelDeleteTask(id? : string | number){
    setProjectState((prev) => {
      return {
        ...prev,
        tasks: prev.tasks.filter((task)=> task.taskId !== id)
      };
    });
  }

  const selectProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectID
  );

  let content = (
    <SelectedProject
      project={selectProject}
      handelDeleteProject={handelDeleteProject}
      handelAddTask={handelAddTask} 
      handelDeleteTask={handelDeleteTask}
      tasks={projectState.tasks}
    />
  );
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
          handleSelectProject={handleSelectProject}
          selectedProjectID={projectState.selectedProjectID}
        />
        {content}
      </div>
    </>
  );
};

export default Page;

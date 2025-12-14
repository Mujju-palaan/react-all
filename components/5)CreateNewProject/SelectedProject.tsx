import type { Project, Tasktype } from "@/app/(practice)/CreateNewProject/page";
import Task from "./Task";

type Props = {
  handelAddTask: (text: string) => void;
  handelDeleteTask: (id?: string | number) => void;
  handelDeleteProject: () => void;
  project?: Project;
  tasks: Tasktype[];
};

const SelectedProject = ({
  project,
  handelDeleteProject,
  handelAddTask,
  handelDeleteTask,
  tasks,
}: Props) => {

   // ⛔ Add this guard before accessing project
  if (!project) {
    return (
      <div className="w-[35rem] mt-16 ml-6 text-stone-500 text-xl">
        No project selected.
      </div>
    );
  }

  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-[35rem] mt-16 ml-6">
      <header className="pb-4 mb-4 border-b-4 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button
            onClick={handelDeleteProject}
            className="text-stone-600 hover:text-stone-950"
          >
            DELETE
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Task handelAddTask={handelAddTask} handelDeleteTask={handelDeleteTask} tasks={tasks}/>
    </div>
  );
};

export default SelectedProject;

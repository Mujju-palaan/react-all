import type { Project } from "@/app/(practice)/CreateNewProject/page";

type Props = {
  handleAddProjectButton: () => void;
  handleSelectProject: (id: number) => void;
  selectedProjectID: number | null | undefined;
  projects: Project[]; // <-- ADD THIS
};

const SideBar = (props: Props) => {
  console.log("SideBar", props.projects);
  return (
    <div className="bg-black w-1/5 rounded justify0-self-center text-center px-8 py-8 text-amber-50">
      <h1 className="text-2xl font-bold">YOUR PROJECTS</h1>
      <div className="p-4">
        <button
          onClick={props.handleAddProjectButton}
          className="bg-stone-800 rounded px-2 py-1 text-[12px] cursor-pointer"
        >
          +Add Project
        </button>
      </div>

      <ul>
        {props.projects.length === 0 && (
          <p className="text-sm text-gray-400">No projects yet</p>
        )}

        {props.projects.map((project: Project) => {
          let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 cursor-pointer"

          if(project.id === props.selectedProjectID){
            cssClasses += ' bg-stone-800 text-stone-200'
          }else{
            cssClasses += ' text-stone-400'
          }

          return (
            <li className="m-2" key={project.id}>
              <button
                onClick={() => props.handleSelectProject(project.id)}
                className={cssClasses}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;

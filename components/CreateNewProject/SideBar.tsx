type Project = {
  id: number;
  title: string;
  description: string;
  dueDate: string;
};

type Props = {
  handleAddProjectButton: () => void;
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

        {props.projects.map((project: Project) => (
          <li className="m-2" key={project.id}>
            <button className="w-full bg-stone-900 rounded text-[12px] py-1 px-2 text-amber-50 cursor-pointer">
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;

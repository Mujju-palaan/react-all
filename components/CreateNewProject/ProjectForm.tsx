"use client";
import { useRef, useState } from "react";
import Input from "./Input";
import Modal from "./Modal";

type ProjectData = {
  title: string;
  description: string;
  dueDate: string;
};

type Props = {
  handelCancelButton: () => void;
  handelSavedData: (data: ProjectData) => void;
};

const ProjectForm = (props: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const titelRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const dueDateRef = useRef<HTMLInputElement>(null);

  function handelSaveButton() {
    const enteredTitle = titelRef.current?.value;
    const enteredDescription = descriptionRef.current?.value;
    const enteredDueDate = dueDateRef.current?.value;

    if(enteredTitle?.trim()==='' || enteredDescription?.trim()==='' || enteredDueDate?.trim()==''){
      setIsModalOpen(true); // 🔥 Open modal
    return;
    }

    props.handelSavedData({
      title: enteredTitle || "",
      description: enteredDescription || "",
      dueDate: enteredDueDate || "",
    });

    // if (titelRef.current) titelRef.current.value = "";
    // if (descriptionRef.current) descriptionRef.current.value = "";
    // if (dueDateRef.current) dueDateRef.current.value = "";
  }

  return (
    <>
    <Modal open={isModalOpen} onOpenChange={setIsModalOpen} />
    <div className="w-1/3 p-10 text-stone-600">
      <div className="flex gap-4 p-4 justify-end">
        <button onClick={props.handelCancelButton} className="cursor-pointer">
          Cancel
        </button>
        <button
          onClick={handelSaveButton}
          className="bg-stone-800 rounded text-amber-50 px-2 py-1 cursor-pointer"
        >
          Save
        </button>
      </div>
      <div className="gap-4 flex flex-col">
        <Input type="text" title="TITLE" ref={titelRef} />
        <Input title="DESCRIPTION" ref={descriptionRef} />
        <Input type="date" title="DUE DATE" ref={dueDateRef} />
      </div>
    </div>
    

    </>
  );
};

export default ProjectForm;

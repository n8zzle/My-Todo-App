"use client";
import { ITask } from "@/types/tasks";
import React, { FormEventHandler, useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "@/api";

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<string>(task.text);
  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editTodo({
      id: task.id,
      text: taskToEdit,
    });
    setTaskToEdit("");
    setOpenModalEdit(false);
    router.refresh();
  };
  const handleDeleteTask = async (id: string) => {
    await deleteTodo(id);
    setOpenModalDelete(false);
    router.refresh();
  };

  return (
    <tr key={task.key}>
      <td>{task.text}</td>
      <td className="flex gap-5">
        <MdModeEdit
          onClick={() => setOpenModalEdit(true)}
          cursor={"pointer"}
          size={25}
          className="text-blue-500"
        />{" "}
        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className="font-bold text-lg">Edit task</h3>
            <div className="modal-action">
              <input
                value={taskToEdit}
                onChange={(e) => setTaskToEdit(e.target.value)}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
              <button className="btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </Modal>
        <FaTrash
          onClick={() => setOpenModalDelete(true)}
          cursor={"pointer"}
          size={25}
          className="text-red-500"
        />
        <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
          <h3 className="text-lg">
            Are you sure, you want to delete this task?
          </h3>
          <div className="modal-action">
            <button onClick={() => handleDeleteTask(task.id)} className="btn">
              Yes
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};

export default Task;

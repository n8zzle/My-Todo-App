"use client";
import React, { FormEventHandler, useState } from "react";
import { FaPlus } from "react-icons/fa";
import Modal from "./Modal";
import { addTodo } from "@/api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

type Props = {};

const AddTask = (props: Props) => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [newTaskValue, setNewTaskValue] = useState<string>("");

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTodo({
      id: uuidv4(),
      text: newTaskValue,
    });
    setNewTaskValue("");
    setModalOpen(false);
    router.refresh();
  };

  return (
    <div>
      <button
        className="btn btn-primary w-full font-bold"
        onClick={() => setModalOpen(true)}
      >
        Add new task <FaPlus />
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className="font-bold text-lg">Add new task</h3>
          <div className="modal-action">
            <input
              value={newTaskValue}
              onChange={(e) => setNewTaskValue(e.target.value)}
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
    </div>
  );
};

export default AddTask;

"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Modal from "./Modal";

type Props = {};

const AddTask = (props: Props) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <button
        className="btn btn-primary w-full font-bold"
        onClick={() => setModalOpen(true)}
      >
        Add new task <FaPlus />
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        Modal for add todo
      </Modal>
    </div>
  );
};

export default AddTask;

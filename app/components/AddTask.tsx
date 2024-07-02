import React from "react";
import { FaPlus } from "react-icons/fa";

type Props = {};

const AddTask = (props: Props) => {
  return (
    <div>
      <button className="btn btn-primary w-full">
        Add new task <FaPlus />
      </button>
    </div>
  );
};

export default AddTask;

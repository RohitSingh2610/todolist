"use client"
import React, { useState } from "react";

const Page = () => {
  /* use state in set a data */
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    /* cheack a condition fill the on data not enter both enter a data alow the data enter show alert  */
    if (title.trim() === "" || desc.trim() === "") {
      alert("Please fill in both title and description.");
      return;
    }
    const newTask = { title, desc };
    setMainTask([...mainTask, newTask]);
    setTitle("");
    setDesc("");
  };
  /* task delete  */
  const deleteHandler = (i)=>{
   let copyTask = [...mainTask];
   /* delete one task one by one  */
   copyTask.splice(i,1);
   setMainTask(copyTask);
  }
/* set a render task */
  const renderTasks = () => {
    /* chaeck condition */
    if (mainTask.length === 0) {
      return <h2>No Tasks Available</h2>;
    }

    return mainTask.map((task, index) => (
      <li key={index} className="flex justify-between items-center mb-5">
        <div className="flex items-center justify-between mb-5 w-2/3">
          <h5 className="text-2xl font-semibold">{task.title}</h5>
          <h6 className="text-lg font-medium">{task.desc}</h6>
        </div>
        <button onClick={()=>{
          deleteHandler(index);
        }} className="bg-red-400 p-4 text-white rounded font-bold " >Delete</button>
      </li>
    ));
  };

  return (
    <>
      <h1 className="bg-black w-100% h-100% text-white p-5 text-5xl font-bold text-center">
        My's Todo List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          className="border-zinc-800 border-3 px-4 py-2 m-5 text-2xl"
          type="text"
          placeholder="Enter Task here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="border-zinc-800 border-3 px-4 py-2 m-5 text-2xl"
          type="text"
          placeholder="Enter Description here"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button className="bg-black text-white font-bold px-4 py-2 text-2xl rounded m-5">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
        <ul>{renderTasks()}</ul>
      </div>
    </>
  );
};

export default Page;

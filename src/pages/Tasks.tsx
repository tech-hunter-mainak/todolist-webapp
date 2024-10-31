import AddTaskForm from "@/payments/AddTaskForm";
import { DataTableDemo, Task } from "@/payments/Page";
import React, { useState, useEffect } from "react";
import { db } from "@/Firebase"; // Import Firestore instance
import { collection, addDoc, getDocs, onSnapshot } from "firebase/firestore";

function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Fetch tasks from Firestore on component mount
  useEffect(() => {
    const fetchTasks = async () => {
      const tasksCollection = collection(db, "tasks");
      const taskSnapshot = await getDocs(tasksCollection);
      const tasksData = taskSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as Task[];
      setTasks(tasksData);
    };

    fetchTasks();

    // Real-time listener for tasks collection
    const unsubscribe = onSnapshot(collection(db, "tasks"), (snapshot) => {
      const updatedTasks = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as Task[];
      setTasks(updatedTasks);
    });

    return () => unsubscribe();
  }, []);

  // Add a new task to Firestore
  const handleAddTask = async (newTask: Task) => {
    try {
      const taskWithId = { ...newTask, id: Date.now().toString() }; // Ensure unique ID
      await addDoc(collection(db, "tasks"), taskWithId);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <React.Fragment>
      <div className="font-semibold text-lg mb-4">Add New Tasks</div>
      <div className="gap-5 w-full grid grid-cols-2 h-auto">
        <div className="h-auto bg-slate-400 text-slate-900 rounded-xl p-3">
          <div className="font-bold text-xl mb-2">Important Tasks</div>
          <AddTaskForm onAddTask={handleAddTask} />
          <DataTableDemo tasks={tasks} />
        </div>

        <div className="h-auto bg-slate-400 text-slate-900 rounded-xl p-3">
          <div className="font-bold text-xl mb-2">Pending Tasks</div>
          <DataTableDemo tasks={tasks.filter((task) => task.status === "pending")} />
        </div>

        <div className="h-auto bg-slate-400 text-slate-900 rounded-xl p-3">
          <div className="font-bold text-xl mb-2">Processing Tasks</div>
          <DataTableDemo tasks={tasks.filter((task) => task.status === "processing")} />
        </div>

        <div className="h-auto bg-slate-400 text-slate-900 rounded-xl p-3">
          <div className="font-bold text-xl mb-2">Completed Tasks</div>
          <DataTableDemo tasks={tasks.filter((task) => task.status === "completed")} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Tasks;

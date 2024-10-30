import React, { useState, useEffect } from "react";
import { Task } from "./Page"; // Import Task type
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Define the properties for the form component
interface AddTaskFormProps {
  onAddTask: (task: Task) => void;
}

function getCookie(cname: string) {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// AddTaskForm component
const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAddTask }) => {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [completionDate, setCompletionDate] = useState("");
  const [status, setStatus] = useState<"pending" | "processing" | "completed" | "failed">("pending");

  // Initialize email from cookie on mount
  useEffect(() => {
    const userEmail = getCookie("user_mail");
    console.log(userEmail)
    setEmail(userEmail || ""); // Set to empty string if no email found
  }, []);

  const handleAddTask = () => {
    if (type && name && description && completionDate && status && email) {
      const newTask: Task = {
        id: Date.now().toString(),
        type,
        name,
        description,
        completionDate,
        status,
        email,
      };
      onAddTask(newTask);
      setType("");
      setName("");
      setDescription("");
      setCompletionDate("");
      setStatus("pending");
    }
  };

  return (
    <div className="p-4 border rounded mb-4">
      <h2 className="text-lg font-bold mb-2">Add New Task</h2>
      <div className="mb-2">
        <Input
          placeholder="Task Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full mb-2"
        />
        <Input
          placeholder="Task Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-2"
        />
        <Input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full mb-2"
        />
        <Input
          type="date"
          value={completionDate}
          onChange={(e) => setCompletionDate(e.target.value)}
          className="w-full mb-2"
        />
        <Select value={status} onValueChange={(value) => setStatus(value as Task["status"])}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="processing">Processing</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="failed">Failed</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button onClick={handleAddTask} className="w-full">
        Add Task
      </Button>
    </div>
  );
};

export default AddTaskForm;

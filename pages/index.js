import FilterList from "@/components/FilterList";
import TasksList from "@/components/TasksList";
import Link from "next/link";
import { useState } from "react";

const initialTasks = [
  {
    id: "1",
    title: "Grocery Shopping",
    category: "Errands",
    priority: "High",
    dueDate: "2024-03-10",
    assignedTo: ["1", "2"],
  },
  {
    id: "2",
    title: "Pay Electricity Bill",
    category: "Bills",
    priority: "Medium",
    dueDate: "2024-03-12",
    assignedTo: ["1", "2"],
  },
  {
    id: "3",
    title: "Car Maintenance",
    category: "Maintenance",
    priority: "Low",
    dueDate: "2024-04-01",
    assignedTo: ["1", "2"],
  },
  {
    id: "4",
    title: "Parent-Teacher Meeting",
    category: "School",
    priority: "High",
    dueDate: "2024-03-15",
    assignedTo: ["1", "2"],
  },
  {
    id: "5",
    title: "Book Club Meeting",
    category: "Social",
    priority: "Low",
    dueDate: "2024-03-20",
    assignedTo: ["1", "2"],
  },
  {
    id: "6",
    title: "Garden Weeding",
    category: "Maintenance",
    priority: "Medium",
    dueDate: "2024-03-18",
    assignedTo: ["1", "2"],
  },
  {
    id: "7",
    title: "Vet Appointment for Max",
    category: "Pets",
    priority: "High",
    dueDate: "2024-03-22",
    assignedTo: ["1", "2"],
  },
  {
    id: "8",
    title: "Dentist Appointment",
    category: "Health",
    priority: "Medium",
    dueDate: "2024-03-25",
    assignedTo: ["1", "2"],
  },
  {
    id: "9",
    title: "Replace Smoke Detector Batteries",
    category: "Maintenance",
    priority: "Low",
    dueDate: "2024-04-05",
    assignedTo: ["1", "2"],
  },
  {
    id: "10",
    title: "Prepare Guest Room for Visitors",
    category: "Social",
    priority: "Medium",
    dueDate: "2024-03-30",
    assignedTo: ["1", "2"],
  },
];

export default function HomePage() {
  const [tasks, setTasks] = useState(initialTasks);

  return (
    <div>
      <Link href="/family">Family</Link>
      <FilterList />
      <TasksList tasks={tasks} />
    </div>
  );
}

export default function TasksList({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title} {task.category} {task.dueDate}
        </li>
      ))}
    </ul>
  );
}

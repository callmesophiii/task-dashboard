import type { Task } from '../../types';

interface Props {
  task: Task;
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: Task['status']) => void;
}

const TaskItem = ({ task, onDelete, onStatusChange }: Props) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow flex justify-between items-start">
      <div>
        <h3 className="font-bold">{task.title}</h3>
        <p>{task.description}</p>
        <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
        <div className="flex gap-2 text-sm">
          <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">{task.priority}</span>
          <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">{task.status}</span>
        </div>
      </div>
      <div className="flex flex-col gap-1 items-end">
        <select value={task.status} onChange={(e) => onStatusChange(task.id, e.target.value as Task['status'])} className="p-1 rounded">
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
        <button onClick={() => onDelete(task.id)} className="text-red-500">Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;

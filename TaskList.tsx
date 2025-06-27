import type { Task } from '../../types';
import TaskItem from './TaskItem';

interface Props {
  tasks: Task[];
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: Task['status']) => void;
}

const TaskList = ({ tasks, onDelete, onStatusChange }: Props) => {
  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDelete={onDelete} onStatusChange={onStatusChange} />
      ))}
    </div>
  );
};

export default TaskList;
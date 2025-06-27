import { useState } from 'react';
import type { TaskFormData } from '../../types';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  onAdd: (task: { id: string } & TaskFormData) => void;
}

const TaskForm = ({ onAdd }: Props) => {
  const [formData, setFormData] = useState<TaskFormData>({
    title: '',
    description: '',
    priority: 'Medium',
    status: 'Pending',
    dueDate: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.dueDate) return;
    onAdd({ ...formData, id: uuidv4() });
    setFormData({ title: '', description: '', priority: 'Medium', status: 'Pending', dueDate: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-4 rounded shadow space-y-2">
      <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} className="w-full p-2 rounded" />
      <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="w-full p-2 rounded" />
      <input type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} className="w-full p-2 rounded" />
      <select name="priority" value={formData.priority} onChange={handleChange} className="w-full p-2 rounded">
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <select name="status" value={formData.status} onChange={handleChange} className="w-full p-2 rounded">
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Task</button>
    </form>
  );
};

export default TaskForm;

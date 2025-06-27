import { useEffect, useState } from 'react';
import type { Task, TaskFilterOptions } from '../../types';
import TaskForm from '../TaskForm/TaskForm';
import TaskList from '../TaskList/TaskList';
import TaskFilter from '../TaskFilter/TaskFilter';
import { filterTasks } from '../../utils/taskUtils';

const Dashboard = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filters, setFilters] = useState<TaskFilterOptions>({});

  useEffect(() => {
    const stored = localStorage.getItem('tasks');
    if (stored) setTasks(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: Task) => setTasks((prev) => [...prev, task]);
  const deleteTask = (id: string) => setTasks((prev) => prev.filter((t) => t.id !== id));
  const updateStatus = (id: string, status: Task['status']) =>
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, status } : t)));

  return (
    <div className="p-4 space-y-4">
      <TaskForm onAdd={addTask} />
      <TaskFilter filters={filters} setFilters={setFilters} />
      <TaskList tasks={filterTasks(tasks, filters)} onDelete={deleteTask} onStatusChange={updateStatus} />
    </div>
  );
};

export default Dashboard;
import type { Task, TaskFilterOptions } from '../types';

export const filterTasks = (tasks: Task[], filters: TaskFilterOptions): Task[] => {
  return tasks.filter((task) => {
    const matchesStatus = filters.status ? task.status === filters.status : true;
    const matchesPriority = filters.priority ? task.priority === filters.priority : true;
    const matchesSearch = filters.search
      ? task.title.toLowerCase().includes(filters.search.toLowerCase())
      : true;
    return matchesStatus && matchesPriority && matchesSearch;
  });
};
export interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'Low' | 'Medium' | 'High';
  status: 'Pending' | 'In Progress' | 'Completed';
  dueDate: string;
}

export interface TaskFormData extends Omit<Task, 'id'> {}

export interface TaskFilterOptions {
  search?: string;
  status?: 'Pending' | 'In Progress' | 'Completed' | '';
  priority?: 'Low' | 'Medium' | 'High' | '';
}

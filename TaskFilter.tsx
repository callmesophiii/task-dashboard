import type { TaskFilterOptions } from '../../types';

interface Props {
  filters: TaskFilterOptions;
  setFilters: React.Dispatch<React.SetStateAction<TaskFilterOptions>>;
}

const TaskFilter = ({ filters, setFilters }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex gap-2 flex-wrap">
      <input
        name="search"
        value={filters.search ?? ''}
        placeholder="Search..."
        onChange={handleChange}
        className="p-2 rounded"
      />
      <select
        name="status"
        value={filters.status ?? ''}
        onChange={handleChange}
        className="p-2 rounded"
      >
        <option value="">All Status</option>
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
      <select
        name="priority"
        value={filters.priority ?? ''}
        onChange={handleChange}
        className="p-2 rounded"
      >
        <option value="">All Priority</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
    </div>
  );
};

export default TaskFilter;

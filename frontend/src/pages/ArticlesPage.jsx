import { useState } from "react";
import ArticlesComponent from "../components/ArticlesCard";

export default function ArticlesPage() {
    const [filter, setFilter] = useState('help environment recycling');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div>
      <ArticlesComponent filter={filter} />
    </div>
  );
}
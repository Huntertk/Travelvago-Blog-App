import { useState } from 'react';
import FilterBar from '../components/home/FilterBar';
import Hero from '../components/home/Hero';
import '../styles/home.scss';

const Home = () => {
  const [filter, setFilter] = useState<string>("all posts");
  const categories:string[] = ["all posts", "malaysia", "dubai", "thailand", "singapore"]
  const handleFilter = (filterVal:string) => {
    setFilter(filterVal)
  }

  return (
    <div className='home_main_container'>
      <Hero />
      <FilterBar
        filter={filter}
        handleFilter={handleFilter}
        categories={categories}
      />
    </div>
  )
}

export default Home
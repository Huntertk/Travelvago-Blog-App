import { useState } from 'react';
import FilterBar from '../components/home/FilterBar';
import Hero from '../components/home/Hero';
import '../styles/home.scss';
import FeaturedPost from '../components/home/FeaturedPost';
import RecentPost from '../components/home/RecentPost';

const Home = () => {
  const [filter, setFilter] = useState<string>("all posts");
  const categories:string[] = ["all posts", "malaysia", "dubai", "thailand", "singapore"]
  const handleFilter = (filterVal:string) => {
    setFilter(filterVal)
  }

  return (
    <div className='home_main_container'>
      <Hero />
      <FeaturedPost />
      <FilterBar
        filter={filter}
        handleFilter={handleFilter}
        categories={categories}
      />
      <RecentPost />
    </div>
  )
}

export default Home
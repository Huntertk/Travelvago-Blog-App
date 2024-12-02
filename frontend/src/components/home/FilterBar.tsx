import '../../styles/filterbar.scss';

type TypeFilterBarProps = {
    filter:string;
    handleFilter:(filterVal:string) => void;
    categories:string[]
}

const FilterBar = ({filter, handleFilter, categories}:TypeFilterBarProps) => {
    
  return (
    <div className="filter_bar_container"
    style={{
        gridTemplateColumns: `repeat(${categories.length}, 100px)`
    }}
    >
        {
            categories.map((category, index) => (
                <button
                className={`${filter === category ? "selected_filter" : ""}`}
                key={index} onClick={() => handleFilter(category)}
                >{category}</button>
            ))
        }
    </div>
  )
}

export default FilterBar
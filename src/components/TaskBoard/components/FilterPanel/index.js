import React, {useState} from 'react';
import './FilterPanel.css';

const FilterPanel = (props) => {
    const {onChangeFilter} = props;
    const [filterParams, setFilterParams] = useState({});
    const onChangeParam = (value, name) => {
        const newFilters = {...filterParams, [name]: value};
        setFilterParams(newFilters);
    }
    const onSearch = () => {
        onChangeFilter && onChangeFilter(filterParams);
    }

    return (
        <div className="FilterPanel">
            <label>By Title:<input value={filterParams.title} type={"text"} onChange={(e) => onChangeParam(e.target.value, 'title')}/>
            </label>
            <button onClick={onSearch}>Search</button>
        </div>
    );
}

export default FilterPanel;

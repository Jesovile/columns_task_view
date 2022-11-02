import React, { useCallback, useEffect, useState } from 'react';
import './FilterPanel.css';



const FilterPanel = (props) => {
    const { onChangeFilter, debounceTimer = 1000 } = props;
    const [filterParams, setFilterParams] = useState({});
    const onChangeParam = (value, name) => {
        const newFilters = { ...filterParams, [name]: value };
        setFilterParams(newFilters);
    }

    const onSearch = () => {
        onChangeFilter && onChangeFilter(filterParams);
    }

    let lastCall = Date.now();
    let lastCallTimer;

    const debounce = useCallback(function (f, t) {
        return function (args) {
            let previousCall = lastCall;
            lastCall = Date.now();
            if (previousCall && (lastCall - previousCall <= t)) {
                clearTimeout(lastCallTimer);
            }
            lastCallTimer = setTimeout(()=>{f(args)}, t);
        }
    }, []);

    useEffect(debounce(onSearch, debounceTimer), [filterParams])

    return (
        <div className="FilterPanel">
            <label>By Title:<input value={filterParams.title} type={"text"} onChange={(e) => onChangeParam(e.target.value, 'title')}/>
            </label>
        </div>
    );
}

export default FilterPanel;

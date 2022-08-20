import React from 'react'

const Search = (props) => {
    return (
        <div className={`Search ${`${props.darkMode ? "Dark" : ""}-Search`}`}>
            <input
                type="text"
                placeholder="Search for your notes..."
                onChange={(event) => props.handleSearch(event.target.value)} />
        </div>
    )
}

export default Search;
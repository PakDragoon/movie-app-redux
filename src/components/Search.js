import React from 'react'
import { useDispatch } from "react-redux"
import { filterMovies } from "../redux/search"

function Search() {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault()
    const value = e.target.value
    dispatch(filterMovies(value))
  }

  return (
    <section className='layout-row justify-content-center mb-40'>
      <input 
        type='text'
        placeholder='Search for movie by name' 
        className='w-75 py-2'
        data-testid='search'
        onChange={handleSearch}
      />
    </section>
  )
}

export default Search

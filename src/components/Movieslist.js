import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { size, removeMovies } from "../redux/movie"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBucket } from "@fortawesome/free-solid-svg-icons"

function Movieslist() {
  const dispatch = useDispatch()
  const { movies, search } = useSelector((state) => state.movieData)
  const [filteredList, setFilteredList] = useState(movies)

  useEffect(() => {
    const filter = () => {
      if (search.length > 1) {
        const filteredMovies = movies.filter((row) => {
          return row.movieName.toLowerCase().startsWith(search.toLowerCase())
        })
        dispatch(size(filteredMovies.length > 0))
        filteredMovies.sort((a, b) => b.movieDuration - a.movieDuration)
        setFilteredList(filteredMovies)
      } else {
        const arr = [...movies]
        arr.sort((a, b) => b.movieDuration - a.movieDuration)
        dispatch(size(true))
        setFilteredList(arr)
      }
    }
    filter()
    // eslint-disable-next-line
  }, [search, movies])

  return (
    <section>
      {movies.length > 0 ? (
        <ul className="styled w-100 pl-0" data-testid="moviesList">
          {filteredList.map((row, index) => {
            return (
              <li key={row.id} className="flex slide-up-fade-in justify-content-between" style={{ borderBottom: "2px solid var(--primary-color)" }}>
                <div className="layout-column w-40">
                  <h3 className="my-3">{row.movieName}</h3>
                  <p className="my-0">Ratings: {row.movieRating}/100</p>
                </div>
                <div className="layout-row my-auto mr-20">
                  <p className="justify-content-end">{row.movieDuration} Hrs</p>
                </div>
                <div>
                  <a href="#top" onClick={() => dispatch(removeMovies(row.id))}>
                    <FontAwesomeIcon style={{ color: "red" }} icon={faBucket} />
                  </a>
                </div>
              </li>
            )
          })}
        </ul>
      ) : (
        ""
      )}
    </section>
  )
}

export default Movieslist

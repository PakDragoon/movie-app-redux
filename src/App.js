import React from "react"
import { Movieform, Movieslist, Search } from "./components"
import { useSelector } from "react-redux"
import "./App.css"
import "h8k-components"

const title = "Favorite Movie Directory"

function App() {
  const { size } = useSelector((state) => state.movieData)
  return (
    <div>
      <h8k-navbar header={title} />
      <div className="layout-row justify-content-center mt-100">
        <div className="w-30 mr-75">
          <Movieform />
        </div>
        <div className="layout-column w-30">
          <Search />
          <Movieslist />
          {size === false ? (
            <div data-testid="noResult">
              <h3 className="text-center">No Results Found</h3>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  )
}

export default App

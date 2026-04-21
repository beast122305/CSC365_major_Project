import PropTypes from 'prop-types'

function SearchBar({ searchTerm, setSearchTerm, onSearch }) {
  function handleSubmit(e) {
    e.preventDefault()
    onSearch()
  }

  return (
    <form className="card p-3 mb-3" onSubmit={handleSubmit}>
      <label htmlFor="meal-search" className="form-label">
        Search for a recipe
      </label>

      <div className="row g-2">
        <div className="col-md-9">
          <input
            id="meal-search"
            type="text"
            className="form-control"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter meal name"
          />
        </div>

        <div className="col-md-3">
          <button type="submit" className="btn btn-primary w-100">
            Search
          </button>
        </div>
      </div>
    </form>
  )
}

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
}

export default SearchBar
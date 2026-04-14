import PropTypes from 'prop-types'

function SortSelect({ sortOrder, setSortOrder }) {
  return (
    <div className="card p-3 mb-3">
      <label htmlFor="sort-select" className="form-label">
        Sort meals
      </label>

      <select
        id="sort-select"
        className="form-select"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="asc">A to Z</option>
        <option value="desc">Z to A</option>
      </select>
    </div>
  )
}

SortSelect.propTypes = {
  sortOrder: PropTypes.string.isRequired,
  setSortOrder: PropTypes.func.isRequired,
}

export default SortSelect
import PropTypes from 'prop-types'

function FilterPanel({
  categories,
  areas,
  ingredients,
  onCategoryChange,
  onAreaChange,
  onIngredientClick,
}) {
  return (
    <div className="card p-3 mb-3">
      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="category-select" className="form-label">
            Filter by category
          </label>
          <select
            id="category-select"
            className="form-select"
            defaultValue=""
            onChange={(e) => onCategoryChange(e.target.value)}
          >
            <option value="">Choose category</option>
            {categories.map((category) => (
              <option key={category.strCategory} value={category.strCategory}>
                {category.strCategory}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-6">
          <label htmlFor="area-select" className="form-label">
            Filter by area
          </label>
          <select
            id="area-select"
            className="form-select"
            defaultValue=""
            onChange={(e) => onAreaChange(e.target.value)}
          >
            <option value="">Choose area</option>
            {areas.map((area) => (
              <option key={area.strArea} value={area.strArea}>
                {area.strArea}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-3">
        <p className="mb-2 fw-semibold">Quick ingredient filters</p>
        <div className="d-flex flex-wrap gap-2">
          {ingredients.map((ingredient) => (
            <button
              key={ingredient.strIngredient}
              type="button"
              className="btn btn-outline-secondary btn-sm"
              onClick={() => onIngredientClick(ingredient.strIngredient)}
            >
              {ingredient.strIngredient}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

FilterPanel.propTypes = {
  categories: PropTypes.array.isRequired,
  areas: PropTypes.array.isRequired,
  ingredients: PropTypes.array.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  onAreaChange: PropTypes.func.isRequired,
  onIngredientClick: PropTypes.func.isRequired,
}

export default FilterPanel
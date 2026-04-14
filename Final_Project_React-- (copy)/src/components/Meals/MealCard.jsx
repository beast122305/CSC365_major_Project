import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function MealCard({ meal, isFavorite, onToggleFavorite }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img src={meal.strMealThumb} className="card-img-top" alt={meal.strMeal} />

        <div className="card-body d-flex flex-column">
          <h5>{meal.strMeal}</h5>

          <p className="mb-2">
            <strong>Category:</strong> {meal.strCategory || 'N/A'}
          </p>

          <div className="mt-auto d-flex gap-2">
            <Link className="btn btn-primary" to={`/recipe/${meal.idMeal}`}>
              View Details
            </Link>

            <button
              className="btn btn-outline-success"
              onClick={() => onToggleFavorite(meal)}
            >
              {isFavorite ? 'Unsave' : 'Save'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

MealCard.propTypes = {
  meal: PropTypes.object.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
}

export default MealCard
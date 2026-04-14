import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function FavoritesPanel({ favorites, onRemove }) {
  return (
    <div className="card p-3 mb-4">
      <h3>Saved Favorites</h3>

      {favorites.length === 0 ? (
        <p>You have not saved any favorites yet.</p>
      ) : (
        <div className="row">
          {favorites.map((meal) => (
            <div className="col-md-3 mb-3" key={meal.idMeal}>
              <div className="card h-100">
                <img src={meal.strMealThumb} className="card-img-top" alt={meal.strMeal} />
                <div className="card-body">
                  <h6>{meal.strMeal}</h6>

                  <div className="d-flex gap-2 flex-wrap">
                    <Link className="btn btn-sm btn-outline-primary" to={`/recipe/${meal.idMeal}`}>
                      Details
                    </Link>

                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => onRemove(meal)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

FavoritesPanel.propTypes = {
  favorites: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
}

export default FavoritesPanel
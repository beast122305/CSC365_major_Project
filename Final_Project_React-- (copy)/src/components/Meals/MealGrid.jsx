import PropTypes from 'prop-types'
import MealCard from './MealCard'

function MealGrid({ meals, favorites, onToggleFavorite }) {
  if (!meals.length) {
    return <p className="text-center">No meals found. Try a search or filter.</p>
  }

  return (
    <div className="row">
      {meals.map((meal) => (
        <MealCard
          key={meal.idMeal}
          meal={meal}
          isFavorite={favorites.some((fav) => fav.idMeal === meal.idMeal)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  )
}

MealGrid.propTypes = {
  meals: PropTypes.array.isRequired,
  favorites: PropTypes.array.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
}

export default MealGrid
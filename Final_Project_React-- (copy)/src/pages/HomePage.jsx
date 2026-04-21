import SearchBar from '../components/Meals/SearchBar'
import FilterPanel from '../components/Meals/FilterPanel'
import SortSelect from '../components/Meals/SortSelect'
import MealGrid from '../components/Meals/MealGrid'
import FavoritesPanel from '../components/Meals/FavoritesPanel'
import LoadingSpinner from '../components/Common/LoadingSpinner'
import ErrorMessage from '../components/Common/ErrorMessage'
import useLocalStorage from '../hooks/useLocalStorage'
import useMeals from '../hooks/useMeals'

function HomePage() {
  const {
    meals,
    searchTerm,
    setSearchTerm,
    sortOrder,
    setSortOrder,
    categories,
    areas,
    ingredients,
    loading,
    error,
    handleSearch,
    handleCategoryFilter,
    handleAreaFilter,
    handleIngredientFilter,
  } = useMeals()

  const currentUser = localStorage.getItem('currentUser')

  const [favorites, setFavorites] = useLocalStorage(
    `favorites_${currentUser}`,
    []
  )

  const [ratings, setRatings] = useLocalStorage(
    `ratings_${currentUser}`,
    {}
  )

  function toggleFavorite(meal) {
    const exists = favorites.some((fav) => fav.idMeal === meal.idMeal)

    if (exists) {
      setFavorites(favorites.filter((fav) => fav.idMeal !== meal.idMeal))
    } else {
      setFavorites([...favorites, meal])
    }
  }

  function handleRate(mealId, stars) {
    setRatings({
      ...ratings,
      [mealId]: stars,
    })
  }

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={handleSearch}
      />

      <FilterPanel
        categories={categories}
        areas={areas}
        ingredients={ingredients}
        onCategoryChange={handleCategoryFilter}
        onAreaChange={handleAreaFilter}
        onIngredientClick={handleIngredientFilter}
      />

      <SortSelect
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      <FavoritesPanel
        favorites={favorites}
        onRemove={toggleFavorite}
      />

      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}

      {!loading && !error && (
        <MealGrid
          meals={meals}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          ratings={ratings}
          onRate={handleRate}
        />
      )}
    </>
  )
}

export default HomePage
import { useEffect, useMemo, useState } from 'react'
import {
  searchMealsByName,
  listCategories,
  listAreas,
  listIngredients,
  filterByCategory,
  filterByArea,
  filterByIngredient,
} from '../services/mealApi'
import { sortMealsByName } from '../utils/helpers'

function useMeals() {
  const [meals, setMeals] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [sortOrder, setSortOrder] = useState('asc')
  const [categories, setCategories] = useState([])
  const [areas, setAreas] = useState([])
  const [ingredients, setIngredients] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadLists() {
      try {
        const [catData, areaData, ingredientData] = await Promise.all([
          listCategories(),
          listAreas(),
          listIngredients(),
        ])

        setCategories(catData.meals || [])
        setAreas(areaData.meals || [])
        setIngredients((ingredientData.meals || []).slice(0, 30))
      } catch (err) {
        setError('Could not load filter data.')
      }
    }

    loadLists()
  }, [])

  const sortedMeals = useMemo(() => {
    return sortMealsByName(meals, sortOrder)
  }, [meals, sortOrder])

  async function handleSearch() {
    try {
      setLoading(true)
      setError('')
      const data = await searchMealsByName(searchTerm)
      setMeals(data.meals || [])
    } catch (err) {
      setError('Search failed.')
    } finally {
      setLoading(false)
    }
  }

  async function handleCategoryFilter(category) {
    try {
      setLoading(true)
      setError('')
      const data = await filterByCategory(category)
      setMeals(data.meals || [])
    } catch (err) {
      setError('Category filter failed.')
    } finally {
      setLoading(false)
    }
  }

  async function handleAreaFilter(area) {
    try {
      setLoading(true)
      setError('')
      const data = await filterByArea(area)
      setMeals(data.meals || [])
    } catch (err) {
      setError('Area filter failed.')
    } finally {
      setLoading(false)
    }
  }

  async function handleIngredientFilter(ingredient) {
    try {
      setLoading(true)
      setError('')
      const data = await filterByIngredient(ingredient)
      setMeals(data.meals || [])
    } catch (err) {
      setError('Ingredient filter failed.')
    } finally {
      setLoading(false)
    }
  }

  return {
    meals: sortedMeals,
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
  }
}

export default useMeals
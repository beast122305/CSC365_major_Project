import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NotesForm from '../components/Meals/NotesForm'
import LoadingSpinner from '../components/Common/LoadingSpinner'
import ErrorMessage from '../components/Common/ErrorMessage'
import StarRating from '../components/Meals/StarRating'
import { lookupMealById } from '../services/mealApi'
import { extractIngredients } from '../utils/helpers'
import useLocalStorage from '../hooks/useLocalStorage'

function RecipeDetailPage() {
  const { id } = useParams()
  const [meal, setMeal] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const currentUser = localStorage.getItem('currentUser')
  const [notes, setNotes] = useLocalStorage(`notes_${currentUser}`, {})
  const [ratings, setRatings] = useLocalStorage(`ratings_${currentUser}`, {})

  useEffect(() => {
    async function loadMeal() {
      try {
        setLoading(true)
        setError('')
        const data = await lookupMealById(id)
        setMeal(data.meals ? data.meals[0] : null)
      } catch (err) {
        setError('Could not load recipe details.')
      } finally {
        setLoading(false)
      }
    }

    loadMeal()
  }, [id])

  function handleSaveNote(noteText) {
    setNotes({
      ...notes,
      [id]: noteText,
    })
  }

  function handleRate(stars) {
    setRatings({
      ...ratings,
      [id]: stars,
    })
  }

  if (loading) return <LoadingSpinner />
  if (error) return <ErrorMessage message={error} />
  if (!meal) return <p>Recipe not found.</p>

  return (
    <div className="card p-4">
      <h1 className="mb-3">{meal.strMeal}</h1>

      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="img-fluid rounded mb-4 detail-image"
      />

      <p><strong>Category:</strong> {meal.strCategory}</p>
      <p><strong>Area:</strong> {meal.strArea}</p>

      <h2 className="mt-4">Your Rating</h2>
      <StarRating
        value={ratings[id] || 0}
        onRate={handleRate}
      />

      <h2 className="mt-4">Instructions</h2>
      <p>{meal.strInstructions}</p>

      <h2 className="mt-4">Ingredients</h2>
      <ul className="list-group">
        {extractIngredients(meal).map((item, index) => (
          <li key={`${item.ingredient}-${index}`} className="list-group-item">
            {item.ingredient} - {item.measure}
          </li>
        ))}
      </ul>

      {meal.strYoutube && (
        <a
          href={meal.strYoutube}
          target="_blank"
          rel="noreferrer"
          className="btn btn-danger mt-4"
        >
          Watch Video
        </a>
      )}

      <NotesForm
        existingNote={notes[id] || ''}
        onSaveNote={handleSaveNote}
      />
    </div>
  )
}

export default RecipeDetailPage
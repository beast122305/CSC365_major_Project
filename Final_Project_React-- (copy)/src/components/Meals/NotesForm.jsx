import PropTypes from 'prop-types'
import { useState } from 'react'

function NotesForm({ onSaveNote, existingNote }) {
  const [note, setNote] = useState(existingNote || '')

  function handleSubmit(e) {
    e.preventDefault()
    onSaveNote(note)
  }

  return (
    <form onSubmit={handleSubmit} className="card p-3 mt-4">
      <label htmlFor="recipe-note" className="form-label">
        Personal note or review
      </label>

      <textarea
        id="recipe-note"
        className="form-control mb-3"
        rows="4"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write a note about this recipe"
      />

      <button type="submit" className="btn btn-primary">
        Save Note
      </button>
    </form>
  )
}

NotesForm.propTypes = {
  onSaveNote: PropTypes.func.isRequired,
  existingNote: PropTypes.string,
}

export default NotesForm
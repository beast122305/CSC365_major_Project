import PropTypes from 'prop-types'

function StarRating({ value, onRate }) {
  return (
    <div className="d-flex align-items-center gap-1 mb-2" aria-label="Recipe rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          className={`btn btn-sm ${value >= star ? 'btn-warning' : 'btn-outline-warning'}`}
          onClick={() => onRate(star)}
          aria-label={`Rate ${star} out of 5`}
        >
          ★
        </button>
      ))}
      <span className="ms-2">{value ? `${value}/5` : 'Not rated'}</span>
    </div>
  )
}

StarRating.propTypes = {
  value: PropTypes.number.isRequired,
  onRate: PropTypes.func.isRequired,
}

export default StarRating
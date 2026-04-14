import PropTypes from 'prop-types'

function EmptyState({ message }) {
  return <p className="text-center">{message}</p>
}

EmptyState.propTypes = {
  message: PropTypes.string.isRequired,
}

export default EmptyState
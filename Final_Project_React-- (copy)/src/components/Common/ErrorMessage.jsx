import PropTypes from 'prop-types'

function ErrorMessage({ message }) {
  return <p className="text-danger text-center">{message}</p>
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
}

export default ErrorMessage
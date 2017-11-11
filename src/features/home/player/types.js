import PropTypes from 'prop-types'

const Song = PropTypes.shape({
  id: PropTypes.number,
  file: PropTypes.string,
  title: PropTypes.string,
})

export default Song

import PropTypes from 'prop-types';

function Props({ name }) {
   return (
      <p>Hello, { name }</p>
   )
}

Props.propTypes = {
   name: PropTypes.string.isRequired,
}

export default Props
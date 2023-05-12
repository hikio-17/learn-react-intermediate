import PropTypes from 'prop-types';

const HomePage = () => {
  return (
    <p>This is HomePage</p>
  )
}

const AboutPage = () => {
   return (
      <p>This is About Page</p>
   )
}

const FaqPage = () => {
   return (
      <p>This is Faq Page</p>
   )
}

// eslint-disable-next-line react/prop-types
const Link = ({ target, navigate, children }) => {
   return (
      <a 
         href={target}
         onClick={(event) => {
            event.preventDefault();
            navigate(target);
         }}
      >
         { children }
      </a>
   )
}

Link.propTypes = {
   target: PropTypes.string.isRequired,
   navigate: PropTypes.func.isRequired,
}

export {
   HomePage,
   AboutPage,
   FaqPage,
   Link
}
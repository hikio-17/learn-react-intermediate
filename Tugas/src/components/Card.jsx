import { Link } from 'react-router-dom';
import '../styles/card.css'
import PropTypes from 'prop-types';

function Card ({ note }) {
  const {id, title, body, createdAt } = note;
  const dateFormatter = new Intl.DateTimeFormat('id', { day: 'numeric', month: 'long', weekday: "long", year: "numeric" });
  return (
    <div class='card'>
      <div class='upper-part'>
        <div class='upper-part-face'>{title}</div>
        <div class='upper-part-back'>
          {body.slice(0, 90) + '...'}
        </div>
      </div>
      <div class='lower-part'>
        <div class='lower-part-face'>{dateFormatter.format(new Date(createdAt))}</div>
        <div class='lower-part-back'>
            <Link to={`/notes/${id}`}>Read more</Link>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  note: PropTypes.object,
}

export default Card

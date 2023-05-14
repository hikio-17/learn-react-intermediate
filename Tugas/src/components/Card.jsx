import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/card.css'
import PropTypes from 'prop-types'
import { dateFormatter } from '../utils/local-data'
import parser from 'html-react-parser'

function Card ({ note }) {
  const { id, title, body, createdAt } = note
  return (
    <div class='card'>
      <div class='upper-part'>
        <div class='upper-part-face'>{title}</div>
        <div class='upper-part-back'>{parser(body.slice(0, 90) + '...')}</div>
      </div>
      <div class='lower-part'>
        <div class='lower-part-face'>
          {dateFormatter.format(new Date(createdAt))}
        </div>
        <div class='lower-part-back'>
          <Link to={`/notes/${id}`}>Read more</Link>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  note: PropTypes.object
}

export default Card

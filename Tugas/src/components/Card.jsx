import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/card.css'
import PropTypes from 'prop-types'
import { dateFormatter } from '../utils/local-data'
import parser from 'html-react-parser'

function Card ({ note }) {
  const { id, title, body, createdAt } = note
  return (
    <div className='card'>
      <div className='upper-part'>
        <div className='upper-part-face'>{title}</div>
        <div className='upper-part-back'>{parser(body.slice(0, 90) + '...')}</div>
      </div>
      <div className='lower-part'>
        <div className='lower-part-face'>
          {dateFormatter.format(new Date(createdAt))}
        </div>
        <div className='lower-part-back'>
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

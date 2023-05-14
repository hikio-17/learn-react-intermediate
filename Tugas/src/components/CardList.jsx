import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'

function CardList ({ notes }) {
  return (
    <section className='list-cards'>
      {notes.map((note, i) => (
        <Card note={note} />
      ))}
    </section>
  )
}

CardList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object)
}

export default CardList

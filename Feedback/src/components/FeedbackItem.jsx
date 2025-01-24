import React from 'react'
import {FaTimes} from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from './shared/Card'
import { useState } from 'react'

function FeedbackItem({item, handleDelete }) {

  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick={() => handleDelete(item.id)} className='close'>
          <FaTimes color='purple' />
        </button>
        <div className='text-display'>
            {item.text}
        </div>
    </Card>
  )
}

FeedbackItem.protoType = {
  item: PropTypes.object.isRequired

}
export default FeedbackItem
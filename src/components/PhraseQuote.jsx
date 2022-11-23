import React from 'react'

const PhraseQuote = ({quoteRandom}) => {
  return (
   <>
    <p className='card__quote'>{quoteRandom.quote}</p> 
    
    </>
  )
}

export default PhraseQuote
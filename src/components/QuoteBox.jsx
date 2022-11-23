import React from 'react'
import AauthorQuote from './AauthorQuote'
import BtnQuote from './BtnQuote'
import PhraseQuote from './PhraseQuote'




const QuoteBox = ({quoteRandom, handleClick, colorRandom}) => {

const objStyle = {
    color:colorRandom
}

const objStyleBtn ={
backgroundColor: colorRandom
}



  return (

    <article className='card' style={objStyle}>
      <div className='title__One'>
      <h1 className='title' style={objStyle}>Thoughts of Life</h1>
      <br />
      <br />
        <i className="card__icon fa-solid fa-quote-left"></i>
      </div>              
    <PhraseQuote
    quoteRandom={quoteRandom}
    />  

    <AauthorQuote
    quoteRandom={quoteRandom}
    />

    <BtnQuote
    objStyleBtn={objStyleBtn}
    handleClick={handleClick}
    />
    </article>
    
  )
}

export default QuoteBox
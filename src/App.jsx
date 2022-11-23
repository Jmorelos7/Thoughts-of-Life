import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'
import colors from './json/colors.json'
import { useState } from 'react'


function App() {
  
  const getRandomFromArray = arr =>{
    const indexRandom = Math.floor(arr.length * Math.random())
    return arr[indexRandom]
    
}

const [quoteRandom, setQuoteRandom] = useState(getRandomFromArray(quotes))
const [colorRandom, setColorRandom] = useState(getRandomFromArray(colors))



const handleClick = () =>{
  setQuoteRandom(getRandomFromArray(quotes))
  setColorRandom(getRandomFromArray(colors))

const body = document.querySelector('body');
for (var i =1; i<=100; i++){
  const blocks = document.createElement('div')
  blocks.classList.add('block');
  body.appendChild(blocks);
}
function generate(){
  anime({
    targets: '.block',
    translateX: function(){
    return anime.random(-1200, 12000)
  },
    translateY: function(){
    return anime.random(-750,750)
  },
  scale: function(){
    return anime.random(1,5)
  },
  
  
  

})
}
generate()
}


const objStyle = {
  backgroundColor: colorRandom
}

return (
    
  <div className="App" style={objStyle}>     
    
  <QuoteBox  
  quoteRandom={quoteRandom} 
  handleClick={handleClick}
  colorRandom={colorRandom}
  />
  </div>
  
  
)
  
}

export default App

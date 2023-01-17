import React from 'react'

const LearnMore = ({drink}) => {
  const {
    idDrink,
    strCategory,
    strDrink,
    strDrinkThumb,
    strGlass,
    strInstructions,
  } = drink;
  console.log(drink)
  return (
    <div className='drink-learn'>
      <div className="learn-name">
        <h3 className='1'>Name:</h3>
        <h3 className="2">{strDrink}</h3>
      </div>
      <div className="learn-name">
        <h3 className='1'>Category:</h3>
        <h3 className="2">{strCategory}</h3>
      </div>
      <div className="learn-name">
        <h3 className='1'>Category:</h3>
        <h3 className="2">{strCategory}</h3>
      </div>
      <div className="learn-name">
        <h3 className='1'>Category:</h3>
        <h3 className="2">{strCategory}</h3>
      </div>
    </div>
  )
}

export default LearnMore

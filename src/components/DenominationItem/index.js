// Write your code here

import './index.css'

const GetDenomination = props => {
  const {denomination, clickedAmount} = props
  const {id, value} = denomination

  const clicked = () => {
    clickedAmount(id)
  }

  return (
    <li className="li">
      <button className="button" type="button" onClick={clicked}>
        {value}
      </button>
    </li>
  )
}

export default GetDenomination

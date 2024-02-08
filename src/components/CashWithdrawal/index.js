// Write your code here
import {Component} from 'react'

import './index.css'

import GetDenomination from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  changeAmount = id => {
    const {amount} = this.state
    if (id === 1 && amount >= 50) {
      this.setState(previousValue => ({amount: previousValue.amount - 50}))
    } else if (id === 2 && amount >= 100) {
      this.setState(previousValue => ({amount: previousValue.amount - 100}))
    } else if (id === 3 && amount >= 200) {
      this.setState(previousValue => ({amount: previousValue.amount - 200}))
    } else if (id === 4 && amount >= 500) {
      this.setState(previousValue => ({amount: previousValue.amount - 500}))
    }
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state
    return (
      <div className="main">
        <div className="card">
          <div className="heading">
            <div className="d1">s</div>
            <p className="p1">Sarah Williams</p>
          </div>
          <div className="balanceContainer">
            <p className="p2">Your Balance</p>
            <p className="p3">{amount}</p>
          </div>
          <p className="p4">In Rupees</p>

          <p className="p5">Withdraw</p>
          <p className="p6">CHOOSE SUM (IN RUPEES)</p>
          <ul className="ul">
            {denominationsList.map(eachItem => (
              <GetDenomination
                clickedAmount={this.changeAmount}
                denomination={eachItem}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

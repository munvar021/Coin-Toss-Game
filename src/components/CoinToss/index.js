// Write your code here

import {Component} from 'react'
import './index.css'

const headsImgUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImgUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: headsImgUrl,
    totalCount: 0,
    headsCount: 0,
    tailsCount: 0,
  }

  onCoinToss = () => {
    const {totalCount, headsCount, tailsCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)

    let tossImage = ''
    let updatedTotalCount = totalCount
    let updatedHeadsCount = headsCount
    let updatedTailsCount = tailsCount

    if (tossResult === 0) {
      tossImage = headsImgUrl
      updatedTotalCount += 1
      updatedHeadsCount += 1
    } else {
      tossImage = tailsImgUrl
      updatedTotalCount += 1
      updatedTailsCount += 1
    }

    this.setState({
      tossResultImage: tossImage,
      totalCount: updatedTotalCount,
      headsCount: updatedHeadsCount,
      tailsCount: updatedTailsCount,
    })
  }

  render() {
    const {tossResultImage, totalCount, headsCount, tailsCount} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img className="coin-image" src={tossResultImage} alt="toss result" />
          <button
            className="toss-button"
            onClick={this.onCoinToss}
            type="button"
          >
            Toss Coin
          </button>
          <div className="counter-container">
            <p className="counter-name">Total: {totalCount}</p>
            <p className="counter-name">Heads: {headsCount}</p>
            <p className="counter-name">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss

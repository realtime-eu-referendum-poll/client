import React from 'react'
import axios from 'axios'
import Pusher from 'pusher-js'
import config from 'Config'

const Results = React.createClass({
  getInitialState () {
    return {
      remainCount: 0,
      leaveCount: 0
    }
  },

  subscribe () {
    this.pusher = new Pusher(config.PUSHER_KEY, {
      encrypted: true
    })
    this.channel = this.pusher.subscribe('mainChannel')
    this.channel.bind('newVote', data => {
      this.setState({
        remainCount: data.remainCount,
        leaveCount: data.leaveCount
      })
    })
  },

  componentDidMount () {
    axios
      .get('http://localhost:3000/api/results')
      .then(response => {
        this.setState({
          remainCount: response.data.remainCount,
          leaveCount: response.data.leaveCount
        })
      })
    this.subscribe()
  },

  componentWillUnmount () {
    this.channel.unsubscribe()
  },

  renderResultText (voteFor, count) {
    if (this.props.location.query.voteFor === voteFor) { // eslint-disable-line react/prop-types
      const firstVote = count === 1
      if (firstVote) {
        return (
          <p className='resultText'>
            You are the first to vote to
            <em className='resultText__verb'>{voteFor}</em>!
          </p>
          )
      }
      return <p className='resultText'>You and {count - 1} others voted to <em className='resultText__verb'>{voteFor}</em></p>
    }
    return <p className='resultText'>{count} have voted to <em className='resultText__verb'>{voteFor}</em></p>
  },

  render () {
    return (
      <div className='columns'>
        <div className='columns__column columns__column--remain'>
          {this.renderResultText('Remain', this.state.remainCount)}
        </div>
        <div className='columns__column columns__column-leave'>
          {this.renderResultText('Leave', this.state.leaveCount)}
        </div>
      </div>
    )
  }
})
export default Results

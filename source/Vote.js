import React from 'react'
import { hashHistory } from 'react-router'
import axios from 'axios'

const Vote = React.createClass({
  submitVote (voteFor) {
    axios
      .post('http://localhost:3000/api/votes', {
        voteFor
      })
      .then(() => hashHistory.push(`/results?voteFor=${voteFor}`))
      .catch(error => {
        if (error.status === 409) {
          alert(error.data.message)
        } else {
          console.error('An error occured when submitting your vote', error)
          alert('An error occured. Check the console for details.')
        }
      })
  },

  render () {
    return (
      <div className='content'>
        <p className='question'>
          Should the United Kingdom remain a member of the European Union or
          leave the European Union?
        </p>
        <div className='columns'>
          <div className='columns__column columns__column--remain'>
            <button
              onClick={() => this.submitVote('Remain')}
              className='button button--remain'>
              Remain
            </button>
          </div>
          <div className='columns__column columns__column-leave'>
            <button
              onClick={() => this.submitVote('Leave')}
              className='button button--leave'>
              Leave
            </button>
          </div>
        </div>
      </div>
    )
  }
})

export default Vote

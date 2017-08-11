import React from 'react'
import ReactDOM from 'react-dom'

function Tweet(props) {
  return (
    <div className="Tweet">
      <div className="Author">
        {props.tweet.author}
      </div>
      <div className="Text">
        {props.tweet.text}
      </div>
      <div className="Date">
        {props.tweet.date}
      </div>
    </div>
  )
}

class PiscoTweets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numTweets: 0,
      latestTweet: {
        author: '',
        text: '',
        date: new Date().toLocaleString(),
        status: 'ok'
      },
      country: props.country
    }
  }

  increaseTweets() {
    this.numTweets += 1
  }

  addLatestTweet(tweet) {
    if (tweet.status == 'ok') {
      this.state.latestTweet[author] = tweet.author
      this.state.latestTweet[text] = tweet.text
      this.state.latesTweet[date] = new Date().toLocaleString()
      increaseTweets()
    }
  }

  render() {
    return (
      <div className="Pisco">
        <Tweet tweet={this.state.latestTweet} />
        <div className="Title">
          <h1>Latest Pisco {this.state.country} Tweet</h1>
        </div>
        <div className="TotalTweets">
          {this.state.numTweets}
        </div>
      </div>
    )
  }
}

class PiscoCountries extends React.Component {
  render() {
    return (
      <div>
        <PiscoTweets country="Peru" />
        <PiscoTweets country="Chile" />
      </div>
    );
  }
}

ReactDOM.render(
  <PiscoCountries />,
  document.getElementById('tweets')
)

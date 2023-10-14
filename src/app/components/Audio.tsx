import React from 'react'
import ReactAudioPlayer from 'react-audio-player'

const audioURL = 'https://www.bensound.com/bensound-music/bensound-memories.mp3'

export default class App extends React.Component {
  constructor (props: any) {
    super(props)
    this.state = {
      muted: true,
      playing: false
    }
    this.audio = React.createRef()
    this.start = this.start.bind(this)
  }

  start () {
    this.audio.current.audioEl.current.play()
  }

  render () {
    return (
      <div>
        <button onClick={this.start}>Start</button>
        <ReactAudioPlayer
          src={audioURL}
          ref={this.audio}
          controls
        />
      </div>
    )
  }
}

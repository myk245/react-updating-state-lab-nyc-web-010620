import React from 'react'; 

class YouTubeDebugger extends React.Component {
   constructor() {
      super()
      this.state = {
         errors: [],
         user: null,
         settings: {
            bitrate: 8,
            video: {
               resolution: '1080p'
            }
         }
      }
   }

   bitrateChangeHandler = () => {
      this.setState({
         settings: {
            ...this.state.settings, 
            bitrate: 12
         }
      })
   }

   resolutionChangeHandler = () => {
      this.setState({
         settings: { 
            ...this.state.settings, 
               video: {
                  ...this.state.settings.video,
                  resolution: '720p'
               }
         }
      })
   }

   render() {
      return (
         <div>
            <button className="bitrate" onClick={this.bitrateChangeHandler}>Bitrate Changer</button>
            <button className="resolution" onClick={this.resolutionChangeHandler}>Resolution Changer</button>
         </div>
      )
   }

}

export default YouTubeDebugger; 
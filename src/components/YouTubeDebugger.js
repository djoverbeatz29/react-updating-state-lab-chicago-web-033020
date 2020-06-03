import React from 'react'

export default class YouTubeDebugger extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            errors: props.errors,
            user: props.user,
            settings: {
                bitrate: props.settings.bitrate,
                video: {
                    resolution: props.settings.video.resolution
                }
            }
        }
    }

    changeBitrate = () => {
        this.setState({
            settings: Object.assign({},
                this.state.settings, {
                bitrate: 12
            })
        })
    }

    changeResolution = () => {
        this.setState({
            settings: Object.assign({},
                this.state.settings, {
                video: {
                    resolution: '720p'
                }
            })
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.changeBitrate} className='bitrate'>Bitrate: {this.state.settings.bitrate}</button>
                <button onClick={this.changeResolution} className='resolution'>Resolution: {this.state.settings.video.resolution}</button>
            </div>
        )
    }

}

YouTubeDebugger.defaultProps = {
    errors: [],
    user: null,
    settings: {
        bitrate: 8,
        video: {
        resolution: '1080p'
        }
    }
}
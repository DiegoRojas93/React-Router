import React, {Component} from 'react';

import VideoPlayer from '../../player/containers/video-player';
import { connect } from 'react-redux';
import NotFound from '../component/not-found';

class Video extends Compoent {
	render(){
		if(this.props.existId){
			return(
				<VideoPlayer
					id={this.props.id}
				/>
			)
		}

		return <NotFound />
	}
}

function mapStateToProps(state, props) {
	const id = props.match.param.id;
	return {
		existId:state.get('data').get('entities').get('media').has(props.id)
	}
}

export default Video;
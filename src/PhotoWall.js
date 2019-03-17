import React, {Component} from 'react'
import Photo from './Photo'

class PhotoWall extends Component{

    render(){
        return <div className="photoGrid">
            {this.props.photos.map((photo, index) =><Photo key={index} post={photo}/>)}
        </div>
    }
}

export default PhotoWall
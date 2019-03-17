import React, {Component} from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'

class Main extends Component {
    posts = [{
        id: "0",
        description: 'The Rock Point',
        imageLink: "https://tse2.mm.bing.net/th?id=OIP.ez3ACDP9Jk2Yh-RFUk9gQgHaEK&pid=Api&dpr=1"
    }, {
        id: "1",
        description: "The Rock Smell",
        imageLink: "https://img.bleacherreport.net/img/images/photos/001/609/188/the_rock_wwe_raw_sunglasses_02_crop_exact.jpg?w=1200&h=1200&q=75"
    }, {
        id: "2",
        description: "The Rock Stop Punch With Mind",
        imageLink: "https://pbs.twimg.com/ext_tw_video_thumb/867717082485600256/pu/img/BzJ-Ush3gZJvgw94.jpg"
    }
    ];

    render() {
        return <div>
            <Title title={'Photowall'}/>
            <PhotoWall photos={this.posts}/>
        </div>
    }
}

export default Main
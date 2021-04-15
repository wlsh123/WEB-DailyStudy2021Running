import React, { Component } from 'react';
import HomeHotView from '../HomeHotView';
import api from '../../../api'
class HomeHot extends Component {
  constructor(props){
    super(props)
    this.state={
      homehot1:[
        {
          id: Math.random().toString().slice(2),
          title: '储物柜',
          img: 'http://iwenwiki.com/api/livable/homehot/img_chuwugui.png',
          link: 'https://www.ygyg.cn/'
        },
        {
          id: Math.random().toString().slice(2),
          title: '照明灯',
          img: 'http://iwenwiki.com/api/livable/homehot/img_zhaoming.png',
          link: 'https://www.ygyg.cn/'
        },
        {
          id: Math.random().toString().slice(2),
          title: '抱枕',
          img: 'http://iwenwiki.com/api/livable/homehot/img_baozhen.png',
          link: 'https://www.ygyg.cn/'
        },
        {
          id: Math.random().toString().slice(2),
          title: '化妆镜',
          img: 'http://iwenwiki.com/api/livable/homehot/img_jingzi.png',
          link: 'https://www.ygyg.cn/'
        }
      ],
      homehot2: [
        {
          id: Math.random().toString().slice(2),
          title: '闸阀',
          img: 'http://res.ygyg.cn/userbusipub/M00/05/3B/CiZNMlyF_ueABnQqAAIxhWt4aug230.png',
          link: 'https://www.ygyg.cn/'
        },
        {
          id: Math.random().toString().slice(2),
          title: 'PE球阀',
          img: 'http://res.ygyg.cn/userbusipub/M00/00/07/CiZNMls97waAZgXdAAGsyUwIjFo636.jpg',
          link: 'https://www.ygyg.cn/'
        },
        {
          id: Math.random().toString().slice(2),
          title: '电磁阀',
          img: 'http://res.ygyg.cn/userbusipub/M00/00/02/CiZNMls9gv-ANW8jAADdzBhsLeU888.jpg',
          link: 'https://www.ygyg.cn/'
        },
        {
          id: Math.random().toString().slice(2),
          title: '截止阀',
          img: 'http://res.ygyg.cn/userbusipub/M00/06/1B/CvAAEV37NsiAcjWeAAD4QE_T5uM045.jpg',
          link: 'https://www.ygyg.cn/'
        }
      ]
    }
  }

  /* ---还有bug，暂时用假数据
  componentDidMount(){
    api.getHomehot1({
      city:this.props.cityName
    }).then(res => res.json()).then(data => {
      // console.log(data);
      this.setState({
        homehot1:data
      })
    })

    api.getHomehot2({
      city:this.props.cityName
    }).then(res => res.json()).then(data => {
      this.setState({
        homehot2:data
      })
    })
   }
   */
  render() { 
    const {homehot1, homehot2} = this.state
    // console.log(homehot1);
    return ( 
      <div>
        {/* {
          homehot1 > 0 ? <HomeHotView data={homehot1} title={"热销单品"} /> : <div>等待数据加载...</div>
        } */}
        {/* {
          homehot2 > 0 ? <HomeHotView data={homehot2} title={"家庭常用"} /> : <div>等待数据加载...</div>
        } */}
        <HomeHotView data={homehot1} title={'热销单品'} />
        <HomeHotView data={homehot2} title={'阀门类'} />
      </div>
     );
  }
}
 
export default HomeHot;
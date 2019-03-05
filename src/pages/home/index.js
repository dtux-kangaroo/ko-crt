import React from 'react';
import './style.scss'
import Header from '../../components/header'

import { API } from "@/api/index.js";
export default class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      testData: []
    }
  }
   
  componentDidMount () {
  }
  helloWord=()=>{
    alert("hello 你可以尝试点击 按钮")
  }
  startKeyNote=()=>{
    let hostName='com.dtstack.chrome.demo'
    //let port = chrome.runtime.connectNative(hostName);
    alert("启动成功",JSON.stringify(port));
  }
  render(){
 
    return (<div className="test">
       <div onClick={this.startKeyNote}> 按钮 </div>
    </div>)
  }
}
import React, { Component } from 'react';
// 引入css
import './App.css'
// 引入axios
import axios from 'axios'
class App extends Component {
  state = {
    repName: '', // 技术名字
    repUrl: '' // 地址
  }
  // 界面渲染后发送异步请求
  componentDidMount() {
    // 地址
    const url = `https://api.github.com/search/repositories?q=r&sort=stars`
    // 通过axios发送异步请求
    axios.get(url)
      .then(response => {
        const result = response.data
        const { name, html_url } = result.items[0]
        this.setState({
          repName: name,
          repUrl: html_url
        })
      })
      .catch((error => {
        console.log('请求错误' + error)
      }))
  }
  render() {
    // 获取状态数据
    const { repName, repUrl } = this.state
    // 判断技术名字是否存在
    if (!repName) {
      return (
        <h2>Loading...</h2>
      )
    } else {
      return (
        <div>
          <h2>most star rep is <a href={repUrl}>{repName}</a></h2>
        </div>
      )
    }

  }
}

export default App;
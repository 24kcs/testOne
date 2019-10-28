import React, { Component } from 'react';
// 引入css
import './App.css'
class App extends Component {
  state = {
    repName: '', // 技术名字
    repUrl: '' // 地址
  }
  // 界面渲染后发送异步请求
  componentDidMount() {
    // 地址
    const url = `https://api.github.com/search/repositories?q=r&sort=stars`
    fetch(url)
      .then(function (response) {
        // 判断ok属性是否是true
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('request status code =' + response.status)
        }
      }).then((result) => {
        const { name, html_url } = result.items[0]
        // 更新状态数据
        this.setState({
          repName: name,
          repUrl: html_url
        })
      }).catch(function (error) {
        console.log('请求错误:' + error)
      })

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
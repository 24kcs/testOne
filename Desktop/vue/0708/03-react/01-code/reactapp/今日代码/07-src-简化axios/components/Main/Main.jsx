import React, { Component } from 'react';
// 引入axios
import axios from 'axios'
// 引入PropTypes
import PropTypes from 'prop-types'
// 引入样式
import './Main.css'
class Main extends Component {
  state = {
    firstView: true, // 默认第一个显示内容
    loading: false, // 加载的时候要显示的内容
    errorMsg: '', // 请求失败显示的错误消息
    users: [] // 用来存储用户的数组
  }
  static propTypes = {
    searchName: PropTypes.string.isRequired
  }
 
  // 组件将要更新props最新数据的时候执行该回调
  async componentWillReceiveProps(nextProps) {
    // 先获取父级组件传来的搜索数据
    const { searchName } = nextProps
    // 根据地址,发送异步请求
    const url = `https://api.github.com/search/users?q=${searchName}`
    // 此时代码执行到这里,就意味着要发送请求了,所以,先更新数据
    this.setState({
      firstView: false,
      loading: true
    })
    // 发送请求
    try {
        const response = await axios.get(url)
        const result = response.data
        const users = result.items.map((user) => ({
          name: user.name,
          html_url: user.html_url,
          avatar_url: user.avatar_url
        }))
        // 更新用户信息的数据状态
        this.setState({
          loading: false,
          users
        })
    } catch (error) {
        // 更新错误信息的数据状态
        this.setState({
          loading: false,
          errorMsg: '请求失败:' + error.message
        })
    }

  }
  render() {
    // 获取状态数据
    const { firstView, loading, errorMsg, users } = this.state
    // 根据状态数据的不同渲染不同的界面
    if (firstView) {
      return <h1>请输入搜索内容</h1>
    } else if (loading) {
      return <h1>正在加载中...</h1>
    } else if (errorMsg) {
      return <h1>{errorMsg}</h1>
    } else {
      return (
        <div className="row">
          {
            users.map((user, index) => (
              <div className="card" key={index}>
                <a href={user.html_url} >
                  <img src={user.avatar_url} style={{ width: 100 }} alt="avatar" />
                </a>
                <p className="card-text">{user.name}</p>
              </div>
            ))
          }
        </div>
      );
    }

  }
}

export default Main;
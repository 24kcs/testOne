import React, { Component } from 'react';
// 引入两个组件
import Main from './components/Main/Main.jsx'
import Search from './components/Search/Search.jsx'
// 引入样式
import './App.css'
class App extends Component {
  state = {
    searchName: '' // 搜索的内容
  }
  // 搜索操作的方法
  search = (searchName) => {
    //更新状态数据
    this.setState({
      searchName
    })
  }
  render() {
    const {searchName}=this.state
    return (
      <div className="container">
        <Search search={this.search} />
        <Main searchName={searchName} />
      </div>
    );
  }
}

export default App;
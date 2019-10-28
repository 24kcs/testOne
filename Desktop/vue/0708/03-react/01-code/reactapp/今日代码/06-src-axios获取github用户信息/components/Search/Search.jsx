import React, { Component } from 'react';
// 引入PropTypes
import PropTypes from 'prop-types'
// 引入css
import './Search.css'
class Search extends Component {
  // 限定传入过来的数据的类型及是否是必须的
  static propTypes={
    search:PropTypes.func.isRequired
  }
  // 搜索操作
  search=()=>{
    // 获取文本框的数据
    const searchName=this.refs.content.value.trim()
    if(searchName){
      this.props.search(searchName)
    }
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" ref="content" />
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    );
  }
}

export default Search;
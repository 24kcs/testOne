import React, { Component } from 'react';
// 引入prop-types
import PropTypes from 'prop-types'
// 引入样式
import './Item.css'
class Item extends Component {
  // 限定数据的类型及是否是必须的
  static propTypes={
    comment:PropTypes.object.isRequired,
    deleteComment:PropTypes.func.isRequired,
    index:PropTypes.number.isRequired
  }
  delComment=()=>{
    if(window.confirm('确定要删除吗')){
      this.props.deleteComment(this.props.index)
    }
  }
  render() {
    // 解构出来
    const {comment}=this.props
    return (
      <li className="list-group-item">
        <div className="handle">
          <a href="###" onClick={this.delComment}>删除</a>
        </div>
        <p className="user"><span >{comment.name}</span><span>说:</span></p>
        <p className="centence">{comment.content}</p>
      </li>
    );
  }
}

export default Item;
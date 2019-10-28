import React, { Component } from 'react';
// 引入PropTypes
import PropTypes from 'prop-types'
// 引入样式
import './Add.css'
class Add extends Component {
  // 设置数据类型及是否是必须的
  static propTypes={
    addComment:PropTypes.func.isRequired
  }
  add=()=>{
    // 获取用户名和评论内容及设置id值
    const name=this.refs.name.value.trim()
    const content=this.refs.content.value.trim()
    if(!name||!content){
      return
    }
    const comment={
      id:Date.now(),
      name,
      content
    }
    this.props.addComment(comment)
    // 清空
    this.refs.name.value=''
    this.refs.content.value=''
  }
  render() {
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input type="text" className="form-control" placeholder="用户名" ref="name" />
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea className="form-control" rows="6" placeholder="评论内容" ref="content" ></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button" className="btn btn-default pull-right" onClick={this.add}>提交</button>
            </div>
          </div>
        </form>
      </div>

    )
  }
}

export default Add;
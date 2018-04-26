import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as blogActions from 'store/modules/blog';

import styles from './BlogWrite.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class BlogWrite extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: {
        title: '',
        text: '',
        md: '',
      },
    }
  }

  handleForm = (e) => {
    e.preventDefault();
    let formData = new FormData();
    // formData.append('title', this.inputTitle.value);
    // formData.append('text', this.inputBody.value);
    formData.append('files', this.inputFiles.files);
    // console.log(formData);

    let data = {};
    data.email = this.props.user.email;
    data.name = this.props.user.name;
    data.title = this.inputTitle.value;
    data.text = this.inputText.value;
    data.md = this.inputMd.value;
    data.files = this.inputFiles.files;

    const { BlogActions } = this.props;
    BlogActions.postBlogWrite(data)
  }

  handleInputChange = (e) => {
    const type = 'input';
    const name = e.target.name;
    const value = e.target.value;
    console.log(e.target);
    console.log(e.target.files);
    console.log(e.target.value);

    this.setState({
      [type]: {
        ...this.state[type],
        [name]: value
      }
    })
  }

  render() {
    return (
      <div className={cx('blog-write')}>
        <div className={cx('blog-title')}>
          작성하기
        </div>
        <form onSubmit={this.handleForm}>
          <label htmlFor={`title`}>title</label>
          <input id={`title`}
            type={`text`}
            ref={ref => this.inputTitle = ref}
            name={`title`}
            placeholder={`require`}
            value={this.state.input.title}
            onChange={this.handleInputChange}
            className={cx('input', 'title')}
          />
          <label htmlFor={`text`}>text</label>
          <textarea id={`text`}
            type={`text`}
            ref={ref => this.inputText = ref}
            name={`text`}
            placeholder={`require`}
            value={this.state.input.text}
            onChange={this.handleInputChange}
            className={cx('input', 'textarea', 'text')}
            rows={6}
            cols={50}
          />
          <label htmlFor={`md`}>md</label>
          <textarea id={`md`}
            type={`text`}
            ref={ref => this.inputMd = ref}
            name={`md`}
            placeholder={`require`}
            value={this.state.input.md}
            onChange={this.handleInputChange}
            className={cx('input', 'textarea', 'md')}
            rows={6}
            cols={50}
          />
          <label htmlFor={`files`}>files</label>
          <input id={`files`}
            type={`file`}
            ref={ref => this.inputFiles = ref}
            name={`files`}
            placeholder={`require`}
            // value={this.state.files}
            onChange={this.handleInputChange}
            className={cx('input', 'files')}
          />
          <div className={cx('button-group')}>
            <button type={`submit`} onClick={this.handleForm}>작성하기</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    user: state.base.get('user').toJS(),
    list: state.blog.get('list').toJS(),
  }),
  (dispatch) => ({
    BlogActions: bindActionCreators(blogActions, dispatch),
  })
)(BlogWrite);
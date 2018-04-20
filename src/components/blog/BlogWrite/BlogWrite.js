import React, { Component } from 'react';
import styles from './BlogWrite.scss';
import classNames from 'classnames/bind';
import axios from 'axios';

const cx = classNames.bind(styles);

class BlogWrite extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: {
        title: '',
        body: '',
      },
    }
  }

  handleForm = (e) => {
    e.preventDefault();
    let formData = new FormData();
    // formData.append('title', this.inputTitle.value);
    // formData.append('text', this.inputBody.value);
    formData.append('file', this.inputFiles.files);
    console.log(formData);

    let data = {};
    data.title = this.inputTitle.value;
    data.text = this.inputBody.value;
    data.file = formData;

    const config = {
      onUploadProgress: this.onUploadProgress
    }

    axios.post('/api/blog/write', data, config)
      .then((res) => {
        console.log(`axios.post('/api/blog/write', data, config)`)
        console.log(res);
      })
      .catch((e) => {
        console.log(`axios.post('/api/blog/write', data, config)`)
        console.error(e);
      })
  }

  onUploadProgress = (progressEvent) => {
    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total); 
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
          <label htmlFor={`body`}>body</label>
          <textarea id={`body`}
            type={`text`}
            ref={ref => this.inputBody = ref}
            name={`body`}
            placeholder={`require`}
            value={this.state.input.body}
            onChange={this.handleInputChange}
            className={cx('input', 'textarea', 'body')}
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

export default BlogWrite;
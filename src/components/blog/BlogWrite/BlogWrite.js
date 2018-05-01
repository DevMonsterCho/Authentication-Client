import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as blogActions from 'store/modules/blog';

import moment from 'moment';

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
      files: [],
    }
  }

  handleForm = (e) => {
    e.preventDefault();
    let data = {};
    data.title = this.inputTitle.value;
    data.text = this.inputText.value;
    data.md = this.inputMd.value;
    data.files = this.state.files;

    const { BlogActions } = this.props;
    BlogActions.postBlogWrite(data)
  }

  handleUploadFile = (e) => {
    const { BlogActions } = this.props;
    e.preventDefault();
    console.log('e.target.files :: ', e.target.files);
    let keys = Object.keys(e.target.files);
    console.log(`keys :: `, keys);

    keys.forEach((key, i) => {
      let formData = new FormData();
      formData.append('files', e.target.files[key]);
      BlogActions.postFileUpload(formData).then(file => {
        let files = this.state.files;
        file && files.push(file);
        console.log(`postFileUpload :: `, file);
      }).then(() => {
        console.log(`this.state.files :: `, this.state.files);
      })
    })
  }

  handleInputChange = (e) => {
    const type = 'input';
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [type]: {
        ...this.state[type],
        [name]: value
      }
    })
  }

  render() {
    const { user, view } = this.props;
    return (
      <div className={cx('blog-write')}>
        <form onSubmit={this.handleForm}>
          <section className={cx('title-section')}>
            <h1 className={cx('title')}>
              <label htmlFor={`title`}>Title</label>
              <input id={`title`}
                type={`text`}
                ref={ref => this.inputTitle = ref}
                name={`title`}
                placeholder={`require`}
                value={this.state.input.title}
                onChange={this.handleInputChange}
                className={cx('input', 'title')}
              />
            </h1>
            <div className={cx('name')}>
              {user.name} : 작성자
            </div>
            <div className={cx('date')}>
              <div className={cx('create')}>
                {`${moment(new Date()).format('ll')}`} : 작성일
              </div>
            </div>
          </section>
          <section className={cx('content-section')}>
            <div className={cx('text-area')}>
              <label htmlFor={`text`}>Text Editor</label>
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
            </div>
            <div className={cx('md-area')}>
              <label htmlFor={`md`}>Markdown Editor</label>
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
            </div>
            <div className={cx('files-area')}>
              <label htmlFor={`files`}>Files</label>
              <input id={`files`}
                type={`file`}
                ref={ref => this.inputFiles = ref}
                name={`files`}
                multiple={true}
                placeholder={`require`}
                // value={this.state.files}
                onChange={this.handleUploadFile}
                className={cx('input', 'files')}
              />
            </div>

            <div className={cx('button-group')}>
              <button type={`submit`} onClick={this.handleForm}>작성하기</button>
            </div>

          </section>

        </form>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    user: state.base.get('user').toJS(),
    view: state.blog.get('view').toJS(),
  }),
  (dispatch) => ({
    BlogActions: bindActionCreators(blogActions, dispatch),
  })
)(BlogWrite);
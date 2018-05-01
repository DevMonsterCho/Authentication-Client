import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as blogActions from 'store/modules/blog';

import BlogExtendComponent from 'components/blog/BlogExtendComponent';
import axios from 'lib/axios';

import styles from './FileList.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class FileList extends BlogExtendComponent.WrappedComponent {
  componentDidMount() {
    const { BlogActions } = this.props;
    BlogActions.getFileList();
  }

  render() {
    console.log('this.props.list');
    console.log();

    let listJSX = this.props.list.map((item, i) => {
      return (
        <li className={cx('blog-item')}>
          <img src={`http://dev.api.authentication.dmcho.com/api/file/read/${item.path}`} alt={item.name}/>
          <Link to={`/blog/view/${item._id}`}>
            <div className={cx('title')}>{item.name}</div>
            <div className={cx('text')}>{item.path}</div>
            <div className={cx('uploader')}>{item.uploader}</div>
          </Link>
        </li>
      )
    })

    return (
      <div className={cx('blog-list-wrap')}>
        FileList
        <ul className={cx('blog-list')}>
          {listJSX}
        </ul>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    list: state.blog.get('list').toJS(),
  }),
  (dispatch) => ({
    BlogActions: bindActionCreators(blogActions, dispatch),
  })
)(FileList);
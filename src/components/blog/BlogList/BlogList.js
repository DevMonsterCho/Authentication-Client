import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as blogActions from 'store/modules/blog';

import BlogExtendComponent from 'components/blog/BlogExtendComponent';
import axios from 'lib/axios';
import moment from 'moment';

import styles from './BlogList.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class BlogList extends BlogExtendComponent.WrappedComponent {
  componentDidMount() {
    const { BlogActions } = this.props;
    BlogActions.getBlogListAll();
  }

  render() {
    console.log('this.props.list');

    let listJSX = this.props.list.map((item, i) => {
      return (
        <li className={cx('blog-item')}>
          <Link to={`/blog/view/${item._id}`}>
            <div className={cx('title')}><span>{item.title}</span></div>
            <div className={cx('date')}>{`${moment(item.createDate).format('ll')}`}</div>
            <div className={cx('content')}>
              {item.text && (<p className={cx('text')}>{item.text}</p>)}
              {item.md && (<p className={cx('md')}>{item.md}</p>)}
            </div>
          </Link>
        </li>
      )
    })

    return (
      <div className={cx('blog-list-wrap')}>
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
)(BlogList);
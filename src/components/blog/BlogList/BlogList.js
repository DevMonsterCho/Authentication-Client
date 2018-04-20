import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './BlogList.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class BlogList extends Component {
  render() {
    return (
      <div className={cx('blog-list-wrap')}>
        BlogList
        <ul className={cx('blog-list')}>

          <li className={cx('blog-item')}>
            <Link to={`/blog/1`}>
              <div className={cx('image')} style={{backgroundImage: `url('http://via.placeholder.com/200x200')`}}/>
              <div className={cx('title')}>item1</div>
            </Link>
          </li>
          <li className={cx('blog-item')}>
            <Link to={`/blog/1`}>
              <div className={cx('image')} style={{backgroundImage: `url('http://via.placeholder.com/200x200')`}}/>
              <div className={cx('title')}>item1</div>
            </Link>
          </li>
          <li className={cx('blog-item')}>
            <Link to={`/blog/1`}>
              <div className={cx('image')} style={{backgroundImage: `url('http://via.placeholder.com/200x200')`}}/>
              <div className={cx('title')}>item1</div>
            </Link>
          </li>
          <li className={cx('blog-item')}>
            <Link to={`/blog/1`}>
              <div className={cx('image')} style={{backgroundImage: `url('http://via.placeholder.com/200x200')`}}/>
              <div className={cx('title')}>item1</div>
            </Link>
          </li>
          <li className={cx('blog-item')}>
            <Link to={`/blog/1`}>
              <div className={cx('image')} style={{backgroundImage: `url('http://via.placeholder.com/200x200')`}}/>
              <div className={cx('title')}>item1</div>
            </Link>
          </li>
          <li className={cx('blog-item')}>
            <Link to={`/blog/1`}>
              <div className={cx('image')} style={{backgroundImage: `url('http://via.placeholder.com/200x200')`}}/>
              <div className={cx('title')}>item1</div>
            </Link>
          </li>
          <li className={cx('blog-item')}>
            <Link to={`/blog/1`}>
              <div className={cx('image')} style={{backgroundImage: `url('http://via.placeholder.com/200x200')`}}/>
              <div className={cx('title')}>item1</div>
            </Link>
          </li>
          <li className={cx('blog-item')}>
            <Link to={`/blog/1`}>
              <div className={cx('image')} style={{backgroundImage: `url('http://via.placeholder.com/200x200')`}}/>
              <div className={cx('title')}>item1</div>
            </Link>
          </li>
          <li className={cx('blog-item')}>
            <Link to={`/blog/1`}>
              <div className={cx('image')} style={{backgroundImage: `url('http://via.placeholder.com/200x200')`}}/>
              <div className={cx('title')}>item1</div>
            </Link>
          </li>
          <li className={cx('blog-item')}>
            <Link to={`/blog/1`}>
              <div className={cx('image')} style={{backgroundImage: `url('http://via.placeholder.com/200x200')`}}/>
              <div className={cx('title')}>item1</div>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default BlogList;
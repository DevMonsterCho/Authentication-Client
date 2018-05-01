import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as blogActions from 'store/modules/blog';

import moment from 'moment';

import styles from '../BlogWrite/BlogWrite.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class BlogView extends Component {
  componentDidMount() {
    const { BlogActions } = this.props;
    const { id } = this.props.match.params;
    BlogActions.getBlogItem(id);
  }
  handleDelete = (e) => {
    e.preventDefault();
    alert('delete');
  }

  render() {
    const { user, view } = this.props;
    const c = new Date(view.createDate);
    const m = new Date(view.modifyDate);
    const betweenAtoB = m - c;
    return (
      <div className={cx('blog-view')}>
        <section className={cx('title-section')}>
          <h1 className={cx('title')}>{view.title}</h1>
          <div className={cx('name')}>{view.name} : 작성자</div>
          <div className={cx('date')}>
            {
              +betweenAtoB > 0 ? (
                <div className={cx('modify')}>{`${moment(view.modifyDate).format('ll')}`} : 수정일</div>
              ) : (<div className={cx('create')}>{`${moment(view.createDate).format('ll')}`} : 작성일</div>)
            }
          </div>
          {
            user.email === view.email ? (
              <div className={cx('controller')}>
                <Link to={`/blog/modify/${this.props.match.params.id}`} className={cx('modify')}>수정</Link>
                <Link to={`#`} onClick={this.handleDelete} className={cx('delete')}>삭제</Link>
              </div>
            ) : ''
          }
        </section>
        <section className={cx('content-section')}>
          {view.text && (
            <div className={cx('text-area')}>
              { view.text }
            </div>
          )}
          {view.md && (
            <div className={cx('md-area')}>
              { view.md }
            </div>
          )}
          {
            view.files.length ? (
              <Files files={view.files} />
            ) : ''
          }
        </section>

      </div>
    );
  }
}

export const Files = (props) => {
  let files = props.files.length > 0 ? props.files.map((file, i) => {
    let type = file.type.split('/')[0];
    return (
      <div key={`file-${file._id}`} className={cx('file')}>
        {type === 'image' && (<div className={cx('file-img')}><img src={`${process.env.file}/${file.path}`} alt={`${file.name}`} className={cx('image')} /></div>)}
        <div className={cx('file-name')}>{file.name}</div>
      </div>
    )
  }) : ''
  return (
    <section className={cx('files-area')}>
      {files}
    </section>
  );
}


export default connect(
  (state) => ({
    user: state.base.get('user').toJS(),
    view: state.blog.get('view').toJS(),
  }),
  (dispatch) => ({
    BlogActions: bindActionCreators(blogActions, dispatch),
  })
)(withRouter(BlogView))
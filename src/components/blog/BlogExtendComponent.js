import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as blogActions from 'store/modules/blog';

class BlogExtendComponent extends Component {
  componentDidMount() {
    const { BlogActions } = this.props;
    BlogActions.getBlogListAll();
  }

  render() {
    return (<div/>)
  }
}

export default connect(
  (state) => ({
    list: state.blog.get('list').toJS(),
  }),
  (dispatch) => ({
    BlogActions: bindActionCreators(blogActions, dispatch),
  })
)(BlogExtendComponent);
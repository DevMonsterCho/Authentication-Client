import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage, BlogPage, LoginPage, JoinPage, UserModifyPage,  NotFoundPage } from 'pages/index';
import LoginCheck from 'components/common/LoginCheck';

const App = () => {
  return (
    <Fragment>
      <Route path="/" component={LoginCheck} />
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/about" component={HomePage}/>
        <Route path="/blog" component={BlogPage}/>
        <Route exact path="/user/login" component={LoginPage}/>
        <Route exact path="/user/join" component={JoinPage}/>
        <Route exact path="/user/modify" component={UserModifyPage}/>

        <Route component={NotFoundPage}/>
      </Switch>
    </Fragment>
  );
};

export default App;
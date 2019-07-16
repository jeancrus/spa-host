import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

export default props => {
    return (
        <Switch>
            <Route exact path='/spa-host' component={Home}></Route>
            <Route path='/users' component={UserCrud}></Route>
            <Redirect from='*' to='/spa-host'></Redirect>
        </Switch>
    )
}
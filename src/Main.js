import React, {Component} from 'react';
import App from './App';
import Category from './Category';

import { HashRouter, Link } from 'react-router-dom'

import { Switch, Route } from 'react-router-dom'
import {AppBar, Toolbar, Tabs, ListItem, Typography} from "material-ui";
class Main extends Component{
    state = {
        value: 0,
        categories : [
            {
                id: 1,
                name: 'Concert',
                readOnly: true,
                disabled: true
            },
            {
                id: 2,
                name: 'InHouse',
                readOnly: true,
                disabled: true
            },
            {
                id: 3,
                name: 'Club',
                readOnly: true,
                disabled: true
            },
            {
                id: 4,
                name: 'Bla-bla',
                readOnly: true,
                disabled: true
            }
        ]
    };

    render() {
        return(
    <HashRouter>
        <Switch>
            <div>
                <AppBar position="static" color="primary">
                    <Toolbar>
                    <Tabs scrollButtons='on'>
                        <ListItem><Link to='/'><Typography variant='header'>Personal parties</Typography></Link></ListItem>
                            <ListItem><Link to='/category'><Typography variant='header'>Categories</Typography></Link></ListItem>
                    </Tabs>
                    </Toolbar>
                </AppBar>
                <Route exact path='/' render={(props) => (
                    <App {...props} categories={this.state.categories}/>
                )}/>
                <Route path='/category' render={(props) => (
                    <Category {...props} categories={this.state.categories}/>
                )}/>
            </div>
        </Switch>
    </HashRouter>
    )}
}

export default Main;
import React, {Component} from 'react';
import App from './App';
import Category from './Category';

import { HashRouter, Link } from 'react-router-dom'

import { Switch, Route } from 'react-router-dom'
import {AppBar, Toolbar, Tabs, Button} from "material-ui";
class Main extends Component{
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };
    render() {
        return(
    <HashRouter>
        <Switch>
            <div>
                <AppBar position="static" color="primary">
                    <Toolbar>
                    <Tabs>
                        <Button component={Link} to="/">
                            Personal parties
                        </Button>
                        <Button component={Link} to="/category">
                            Categories
                        </Button>
{/*                        <ListItem><Link to='/'><Typography variant='header' color='textSecondary'>Personal parties</Typography></Link></ListItem>
                            <ListItem><Link to='/category'><Typography variant='header' color='textSecondary'>Categories</Typography></Link></ListItem>*/}
                    </Tabs>
                    </Toolbar>
                </AppBar>
                <Route exact path='/' component={App}/>
                <Route path='/category' component={Category}/>
            </div>
        </Switch>
    </HashRouter>
    )}
}

export default Main;
import React, {Component} from "react";
import App from "./App";
import Category from "./Category";
import {I18nextProvider, translate, Trans} from "react-i18next";
import {t} from "i18next";
import {HashRouter, Link, Switch, Route} from "react-router-dom";
import {AppBar, Toolbar, Tabs, ListItem, Typography} from "material-ui";
class Main extends Component {
    state = {
        value: 0,
        categories: [
            {
                id: 1,
                name: t('concert'),
                readOnly: true,
                disabled: true
            },
            {
                id: 2,
                name: t('in_house'),
                readOnly: true,
                disabled: true
            },
            {
                id: 3,
                name: t('club'),
                readOnly: true,
                disabled: true
            },
            {
                id: 4,
                name: t('bla_bla'),
                readOnly: true,
                disabled: true
            }
        ]
    };

    render() {
        const {t, i18n} = this.props;

        const changeLanguage = (lng) => {
            i18n.changeLanguage(lng);
        };
        return (
            <HashRouter>
                <Switch>
                    <div>
                        <AppBar position="static" color="primary">
                            <Toolbar>
                                <Tabs scrollButtons='on'>
                                    <ListItem><Link to='/'><Typography
                                        variant='header'>{t('personal_parties')}</Typography></Link></ListItem>
                                    <ListItem><Link to='/category'><Typography
                                        variant='header'>{t('categories')}</Typography></Link></ListItem>
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
        )
    }
}

export default translate('translations')(Main);
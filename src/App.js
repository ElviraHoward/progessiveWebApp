import React, {Component} from 'react';
import './App.css';
import _ from "underscore";
import {
    AppBar,
    Toolbar,
    Typography
} from 'material-ui';
import {FAB} from 'react-material-design';
import PartyCard from "./PartyCard";

class App extends Component {

    constructor(props) {
        super(props);
        let parties = [
            {
                id: 1,
                name: 'Party1',
                description: 'Lorem ipsum dolor sit amet',
                entry: true,
                date: '2018-04-25T14:30',
                cost: '600',
                address: 'Tower Hill, EC3',
                category: 'Concert',
                readOnly: true,
                disabled: true
            },
            {
                id: 2,
                name: 'Party2',
                description: 'Lorem ipsum dolor sit amet',
                entry: true,
                date: '2018-04-26T16:00',
                cost: '600',
                address: 'Tower Hill, EC3',
                category: 'InHouse',
                readOnly: true,
                disabled: true
            },
            {
                id: 3,
                name: 'Party3',
                description: 'Lorem ipsum dolor sit amet',
                entry: true,
                date: '2018-04-27T23:00',
                cost: '600',
                address: 'Tower Hill, EC3',
                category: 'Club',
                readOnly: true,
                disabled: true
            }
        ];

        let inputs =
            {
                id: ' ',
                name: ' ',
                description: ' ',
                entry: true,
                date: ' ',
                cost: ' ',
                address: ' ',
                category: ' ',
                readOnly: false,
                disabled: false
            };
        this.state = {
            parties: parties,
            inputs: inputs,
            isOpen: false,
            checked: true
        }
    }

    handleCheck() {
        this.setState({checked: !this.state.checked});
    }

    onEditHandler(party) {
        let parties = this.state.parties;
        parties = _.map(parties, function (t) {
            if (t.id === party.id) {
                t.readOnly = false;
                t.disabled = false;
            }
            return t;
        });
        this.setState({parties: parties})
    }

    onSaveHandler(party) {
        let parties = this.state.parties;
        parties = _.map(parties, function (t) {
            if (t.id === party.id) {
                t.readOnly = true;
                t.disabled = true;
            }
            return t;
        });
        this.setState({parties: parties})
    }

    onAddHandler() {

    }

    onDeleteHandler(party) {
        let parties = this.state.parties;
        parties = _.filter(parties, function (t) {
            return t.id !== party.id;
        });
        this.setState({parties: parties})
    }

    onNameChange(e, party) {
        let parties = this.state.parties;
        parties = _.map(parties, function (t) {
            if (t.id === party.id) {
                t.name = e.target.value;
            }
            return t;
        });
        this.setState({parties: parties})
    }

    onDescriptionChange(e, party) {
        let parties = this.state.parties;
        parties = _.map(parties, function (t) {
            if (t.id === party.id) {
                t.description = e.target.value;
            }
            return t;
        });
        this.setState({parties: parties})
    }

    onCostChange(e, party) {
        let parties = this.state.parties;
        parties = _.map(parties, function (t) {
            if (t.id === party.id) {
                t.cost = e.target.value;
            }
            return t;
        });
        this.setState({parties: parties})
    }

    onAddressChange(e, party) {
        let parties = this.state.parties;
        parties = _.map(parties, function (t) {
            if (t.id === party.id) {
                t.address = e.target.value;
            }
            return t;
        });
        this.setState({parties: parties})
    }

    render() {
        return (
            <div className="App">
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            Personal parties
                        </Typography>
                    </Toolbar>
                </AppBar>
                <PartyCard parties={this.state.parties} onEditHandler={this.onEditHandler.bind(this)}
                           onSaveHandler={this.onSaveHandler.bind(this)} onDeleteHandler={this.onDeleteHandler.bind(this)}
                           onDescriptionChange={this.onDescriptionChange.bind(this)} onNameChange={this.onNameChange.bind(this)}
                handleCheck={this.handleCheck.bind(this)} onCostChange={this.onCostChange.bind(this)} onAddressChange={this.onAddressChange.bind(this)}/>
                <FAB onClick={this.onAddHandler}
                     location="floating-bottom-right"
                     icon="+"
                />
            </div>
        );
    }
}

export default App;

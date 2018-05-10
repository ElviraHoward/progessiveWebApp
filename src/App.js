import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Date from "./Date";
import _ from "underscore";

class App extends Component {

    constructor(props) {
        super(props);
        let parties = [
            {
                id: 1,
                name: 'Party1',
                description: 'Lorem ipsum dolor sit amet',
                entry: true,
                date: '04/25/2018',
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
                date: '04/26/2018',
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
                date: '04/27/2018',
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

    onEditHandler() {

    }

    onSaveHandler() {

    }

    onDeleteHandler(party) {
        let parties = this.state.parties;
        parties = _.filter(parties, function (t) {
            return t.id !== party.id;
        });
        this.setState({parties: parties})
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                {_.map(this.state.parties,
                    function (party) {
                        return <div className="Party">
                            <div><p>Name</p><input type="text" value={party.name} readOnly={party.readonly}/></div>
                            <div><p>Description</p><input type="text" value={party.description}
                                                          readOnly={party.readonly}/></div>
                            <div><p>Entry</p><input type="checkbox" defaultChecked={party.checked}
                                                    readOnly={party.readonly} onChange={() => party.handleCheck}/></div>
                            <div><p>Date</p><Date className="input-date" value={party.date} disabled={party.readOnly}
                                                  placeholder="date"/></div>
                            <div><p>Cost</p><input type="text" value={party.cost} readOnly={party.readonly}/></div>
                            <div><p>Address</p><input type="text" value={party.address} readOnly={party.readonly}/>
                            </div>
                            <div><p>Category</p><select className="input-select" value={party.category}
                                                        disabled={party.readonly}>
                                <option value="Concert" selected={party.category === 'Concert'}>Concert</option>
                                <option value="InHouse" selected={party.category === 'InHouse'}>InHouse</option>
                                <option value="Club" selected={party.category === 'Club'}>Club</option>
                            </select></div>
                            <div>
                                {/*{party.readOnly ? <button className="edit-btn"
                                                          onClick={() => party.onEditHandler(props.task)}>Edit</button> :
                                    <button className="save-btn"
                                            onClick={() => party.onSaveHandler(props.task)}>Save</button>}
                                <button className="delete-btn"
                                        onClick={() => party.onDeleteHandler(props.task)}>Delete
                                </button>            */ }
                            </div>
                        </div>
                    })
                }
            </div>
        );
    }
}

export default App;

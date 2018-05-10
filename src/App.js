import React, {Component} from 'react';
import './App.css';
import _ from "underscore";
import {
    AppBar,
    Toolbar,
    Typography,
    Dialog,
    Button,
    IconButton,
    Card,
    CardContent,
    Input,
    Select,
    TextField,
    Checkbox
} from 'material-ui';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
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

    toggleDialog() {
        this.setState({isOpen: !this.state.isOpen});
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
        let input = this.state.inputs;
        input.readOnly = false;
        this.setState({inputs: input})
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

    onEntryChange(e, party) {
        let parties = this.state.parties;
        parties = _.map(parties, function (t) {
            if (t.id === party.id) {
                t.entry = e.target.value;
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

    onDateChange(e, party) {
        let parties = this.state.parties;
        parties = _.map(parties, function (t) {
            if (t.id === party.id) {
                t.date = e.target.value;
            }
            return t;
        });
        this.setState({parties: parties})
    }

    onCategoryChange(e, party) {
        let parties = this.state.parties;
        parties = _.map(parties, function (t) {
            if (t.id === party.id) {
                t.category = e.target.value;
            }
            return t;
        });
        this.setState({parties: parties})
    }

    onNameAdd(e) {
        let input = this.state.inputs;
        input.name = e.target.value;
        this.setState({inputs: input})
    }
    onDescriptionAdd(e) {
        let input = this.state.inputs;
        input.description = e.target.value;
        this.setState({inputs: input})
    }
    onDateAdd(e) {
        let input = this.state.inputs;
        input.date = e.target.value;
        this.setState({inputs: input})
    }
    onEntryAdd(e) {
        let input = this.state.inputs;
        input.entry = e.target.value;
        this.setState({inputs: input})
    }
    onCostAdd(e) {
        let input = this.state.inputs;
        input.cost = e.target.value;
        this.setState({inputs: input})
    }
    onAddressAdd(e) {
        let input = this.state.inputs;
        input.address = e.target.value;
        this.setState({inputs: input})
    }

    onCategoryAdd(e) {
        let input = this.state.inputs;
        input.category = e.target.value;
        this.setState({inputs: input})
    }

    onSaveInputHandler() {
        let input = this.state.inputs;
        let parties = this.state.parties;
        input.readOnly = true;
        input.id = parties[parties.length - 1].id + 1;
        parties.push(input);
        this.setState({
            inputs: {
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
            }, parties: parties
        })
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
                <PartyCard parties={this.state.parties} onEditHandler={this.onEditHandler.bind(this)} onSaveHandler={this.onSaveHandler.bind(this)} onDeleteHandler={this.onDeleteHandler.bind(this)}
                           onDescriptionChange={this.onDescriptionChange.bind(this)} onNameChange={this.onNameChange.bind(this)} onEntryChange={this.onEntryChange.bind(this)}
                           onCostChange={this.onCostChange.bind(this)} onAddressChange={this.onAddressChange.bind(this)} onDateChange={this.onDateChange.bind(this)}
                           onCategoryChange={this.onCategoryChange.bind(this)} onDescriptionAdd={this.onDescriptionAdd.bind(this)} onNameAdd={this.onNameAdd.bind(this)}
                           onDateAdd={this.onDateAdd.bind(this)} onCostAdd={this.onCostAdd.bind(this)} onAddressAdd={this.onAddressAdd.bind(this)} onCategoryAdd={this.onCategoryAdd.bind(this)}
                           onEntryAdd={this.onEntryAdd.bind(this)}/>

                <Button variant="fab" color="primary" aria-label="add"  onClick={() => this.toggleDialog()}>
                    <AddIcon/>
                </Button>
                <Dialog
                    fullScreen={true}
                    open={this.state.isOpen}
                    onClose={() => this.toggleDialog()}>
                    <AppBar>
                        <Toolbar>
                            <IconButton color="inherit" onClick={() => this.toggleDialog()} aria-label="Close">
                                <CloseIcon />
                            </IconButton>
                            <Typography variant="title" color="inherit">
                                Add new party
                            </Typography>
                            <Button color="inherit" onClick={() => this.onSaveInputHandler()}>
                                save
                            </Button>
                        </Toolbar>
                        <Card>
                            <CardContent>
                                <Typography>Name</Typography><Input className="InputName" type="text" value={this.state.inputs.name}
                                                                    disabled={this.state.inputs.disabled} onChange={(e) => this.onNameAdd(e)}/>
                                <Typography>Description</Typography><Input type="text" value={this.state.inputs.description}
                                                                           disabled={this.state.inputs.disabled} onChange={(e) => this.onDescriptionAdd(e)}/>
                                <Typography>Entry</Typography><Checkbox checked={this.state.inputs.entry} disabled={this.state.inputs.disabled}
                                                                        onChange={(e) => this.onEntryAdd(e)}/>
                                <Typography>Date and time</Typography><TextField id="datetime-local" type="datetime-local"
                                                                                 value={this.state.inputs.date} disabled={this.state.inputs.disabled} onChange={(e) => this.onDateAdd(e)}/>
                                <Typography>Cost</Typography><Input type="number" value={this.state.inputs.cost}
                                                                    disabled={this.state.inputs.disabled} onChange={(e) => this.onCostAdd(e)}/>
                                <Typography>Address</Typography><Input type="text" value={this.state.inputs.address}
                                                                       disabled={this.state.inputs.disabled} onChange={(e) => this.onAddressAdd(e)}/>
                                <Typography>Category</Typography><Select className="input-select"
                                                                         value={this.state.inputs.category}
                                                                         disabled={this.state.inputs.disabled} onChange={(e) => this.onCategoryAdd(e)}>
                                <option value="Concert">Concert</option>
                                <option value="InHouse">InHouse</option>
                                <option value="Club">Club</option>
                            </Select>
                            </CardContent>
                        </Card>
                    </AppBar>
                </Dialog>
            </div>
        );
    }
}

export default App;

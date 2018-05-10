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

    handleCheck() {
        this.setState({checked: !this.state.checked});
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
                handleCheck={this.handleCheck.bind(this)} onCostChange={this.onCostChange.bind(this)} onAddressChange={this.onAddressChange.bind(this)}
                           onDateChange={this.onDateChange.bind(this)} onCategoryChange={this.onCategoryChange.bind(this)}/>
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
                            <Button color="inherit" onClick={() => this.toggleDialog()}>
                                save
                            </Button>
                        </Toolbar>
                        <Card>
                            <CardContent>
                                <Typography>Name</Typography><Input className="InputName" type="text" value={this.state.inputs.name}
                                                                    disabled={this.state.inputs.disabled} onChange={(e) => this.onNameChange(e)} disableUnderline={true}/>
                                <Typography>Description</Typography><Input type="text" value={this.state.inputs.description}
                                                                           disabled={this.state.inputs.disabled} onChange={(e) => this.onDescriptionChange(e)} disableUnderline={true}/>
                                <Typography>Entry</Typography><Checkbox checked={this.state.inputs.entry} disabled={this.state.inputs.disabled}
                                                                        onChange={() => this.handleCheck}/>
                                <Typography>Date and time</Typography><TextField id="datetime-local" type="datetime-local"
                                                                                 value={this.state.inputs.date} disabled={this.state.inputs.disabled} onChange={(e) => this.onDateChange(e)}/>
                                {/*                                    <Typography>Date and time</Typography><Date className="input-date" value={party.date}
                                                                                disabled={party.readOnly} placeholder="date"/>*/}
                                <Typography>Cost</Typography><Input type="number" value={this.state.inputs.cost}
                                                                    disabled={this.state.inputs.disabled} onChange={(e) => this.onCostChange(e)} disableUnderline={true}/>
                                <Typography>Address</Typography><Input type="text" value={this.state.inputs.address}
                                                                       disabled={this.state.inputs.disabled} onChange={(e) => this.onAddressChange(e)} disableUnderline={true}/>
                                <Typography>Category</Typography><Select className="input-select"
                                                                         value={this.state.inputs.category}
                                                                         disabled={this.state.inputs.disabled} onChange={(e) => this.onCategoryChange(e)}>
                                <option value="Concert">Concert</option>
                                <option value="InHouse">InHouse</option>
                                <option value="Club">Club</option>
                            </Select>
                            </CardContent>
                            <CardContent>
{/*                                <div>
                                    {party.readOnly ? <Button className="edit-btn"  onClick={() => props.onEditHandler(party)}>Edit</Button> :
                                        <Button className="save-btn" onClick={() => props.onSaveHandler(party)}>Save</Button>}
                                    <Button className="delete-btn"
                                            onClick={() => props.onDeleteHandler(party)}>Delete
                                    </Button>
                                </div>*/}
                            </CardContent>
                        </Card>
                    </AppBar>
                </Dialog>
            </div>
        );
    }
}

export default App;

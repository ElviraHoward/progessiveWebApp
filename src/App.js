import React, {Component} from "react";
import "./App.css";
import _ from "underscore";
import {translate, Trans} from "react-i18next";
import {
    AppBar,
    Toolbar,
    Typography,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    IconButton,
    Card,
    CardContent,
    Input,
    Select,
    TextField,
    Checkbox,
    MenuItem
} from "material-ui";
import PartyCard from "./PartyCard";
import {t} from "i18next";

class App extends Component {

    constructor(props) {
        super(props);
        let parties = [
            {
                id: 1,
                name: t('party1'),
                description: 'Lorem ipsum dolor sit amet',
                entry: true,
                date: '2018-04-25T14:30',
                cost: '600',
                address: 'Tower Hill, EC3',
                category: 1,
                readOnly: true,
                disabled: true
            },
            {
                id: 2,
                name: t('party2'),
                description: 'Lorem ipsum dolor sit amet',
                entry: true,
                date: '2018-04-26T16:00',
                cost: '600',
                address: 'Tower Hill, EC3',
                category: 3,
                readOnly: true,
                disabled: true
            },
            {
                id: 3,
                name: t('party3'),
                description: 'Lorem ipsum dolor sit amet',
                entry: true,
                date: '2018-04-27T23:00',
                cost: '600',
                address: 'Tower Hill, EC3',
                category: 2,
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
            checked: true,
            categories: props.categories,
            category: 1
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

    onEditCategoryHandler(category) {
        let categories = this.state.categories;
        categories = _.map(categories, function (t) {
            if (t.id === category.id) {
                t.readOnly = false;
                t.disabled = false;
            }
            return t;
        });
        this.setState({categories: categories})
    }

    onSaveCategoryHandler(category) {
        let categories = this.state.categories;
        categories = _.map(categories, function (t) {
            if (t.id === category.id) {
                t.readOnly = true;
                t.disabled = true;
            }
            return t;
        });
        this.setState({categories: categories})
    }

    onAddCategoryHandler() {
        let input = this.state.inputs;
        input.readOnly = false;
        this.setState({inputs: input})
    }

    onDeleteCategoryHandler(category) {
        let categories = this.state.categories;
        categories = _.filter(categories, function (t) {
            return t.id !== category.id;
        });
        this.setState({categories: categories})
    }

    onNameCategoryChange(e, category) {
        let categories = this.state.categories;
        categories = _.map(categories, function (t) {
            if (t.id === category.id) {
                t.name = e.target.value;
            }
            return t;
        });
        this.setState({categories: categories})
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

    onButtonClick() {
        this.onSaveInputHandler();
        this.toggleDialog();
    }

    render() {
        const { t, i18n } = this.props;

        const changeLanguage = (lng) => {
            i18n.changeLanguage(lng);
        };
        return (
            <div>
                {
                    _.map(this.state.parties,
                        function (party) {
                            return <PartyCard party={party} onEditHandler={this.onEditHandler.bind(this)}
                                              onSaveHandler={this.onSaveHandler.bind(this)}
                                              onDeleteHandler={this.onDeleteHandler.bind(this)}
                                              onDescriptionChange={this.onDescriptionChange.bind(this)}
                                              onNameChange={this.onNameChange.bind(this)}
                                              onEntryChange={this.onEntryChange.bind(this)}
                                              onCostChange={this.onCostChange.bind(this)}
                                              onAddressChange={this.onAddressChange.bind(this)}
                                              onDateChange={this.onDateChange.bind(this)}
                                              onCategoryChange={this.onCategoryChange.bind(this)}
                                              onDescriptionAdd={this.onDescriptionAdd.bind(this)}
                                              onNameAdd={this.onNameAdd.bind(this)}
                                              onDateAdd={this.onDateAdd.bind(this)}
                                              onCostAdd={this.onCostAdd.bind(this)}
                                              onAddressAdd={this.onAddressAdd.bind(this)}
                                              onCategoryAdd={this.onCategoryAdd.bind(this)}
                                              onEntryAdd={this.onEntryAdd.bind(this)}
                                              categories={this.state.categories}/>
                        }.bind(this))
                }
                <div className="fab-add-button">
                    <Button variant="fab" color="primary" aria-label="add" onClick={() => this.toggleDialog()}>
                        +
                    </Button>
                </div>
                <Dialog
                    aria-labelledby="form-dialog-title"
                    maxWidth='xs'
                    open={this.state.isOpen}
                    onClose={() => this.toggleDialog()}>
                    <div className="dialog-bar"><DialogTitle> {t('add_new_party')} </DialogTitle>
                    <Button color="inherit" onClick={() => this.toggleDialog()}>
                        x
                    </Button></div>
                    <DialogContent>
                        <Typography>{t('name')}: </Typography><Input className="InputName" type="text"
                                                              value={this.state.inputs.name}
                                                              disabled={this.state.inputs.disabled}
                                                              onChange={(e) => this.onNameAdd(e)}/>
                        <Typography>{t('description')}: </Typography><Input type="text"
                                                                     value={this.state.inputs.description}
                                                                     disabled={this.state.inputs.disabled}
                                                                     onChange={(e) => this.onDescriptionAdd(e)}/>
                        <Typography>{t('free_entry')}: </Typography><Checkbox checked={this.state.inputs.entry}
                                                                       disabled={this.state.inputs.disabled}
                                                                       onChange={(e) => this.onEntryAdd(e)}/>
                        <Typography>{t('date_and_time')}: </Typography><TextField id="datetime-local"
                                                                           type="datetime-local"
                                                                           value={this.state.inputs.date}
                                                                           disabled={this.state.inputs.disabled}
                                                                           onChange={(e) => this.onDateAdd(e)}/>
                        <Typography>{t('cost')}: </Typography><Input type="number" value={this.state.inputs.cost}
                                                              disabled={this.state.inputs.disabled}
                                                              onChange={(e) => this.onCostAdd(e)}/>
                        <Typography>{t('address')}: </Typography><Input type="text" value={this.state.inputs.address}
                                                                 disabled={this.state.inputs.disabled}
                                                                 onChange={(e) => this.onAddressAdd(e)}/>
                        <Typography>{t('category')}: </Typography>
                        <Select className="input-select"
                                value={this.state.category}
                                disabled={this.state.inputs.disabled} onChange={(e) => this.onCategoryAdd(e)}>
                            {
                                _.map(this.state.categories, function (category) {
                                    return <MenuItem value={category.id}>{category.name}</MenuItem>
                                })
                            };
                        </Select>
                    </DialogContent>
                    <DialogActions>
                        <Button color="inherit" onClick={() => this.onButtonClick()}>
                            {t('save')}
                        </Button></DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default translate('translations')(App);

import React, {Component} from "react";
import _ from "underscore";
import { Close, Add } from '@material-ui/icons';
import {
    Button,
    Dialog,
    IconButton,
    Toolbar,
    Typography,
    Input,
    DialogTitle,
    DialogContent,
    DialogActions
} from "material-ui";
import {t} from "i18next";
import {translate, Trans} from "react-i18next";
import CategoryCard from "./CategoryCard";
import "./Category.css";

class Category extends Component {

    constructor(props) {
        super(props);

        let inputs =
            {
                id: ' ',
                name: ' ',
                readOnly: false,
                disabled: false
            };
        this.state = {
            categories: props.categories,
            inputs: inputs,
            isOpen: false,
        }
    }

    toggleDialog() {
        this.setState({isOpen: !this.state.isOpen});
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

    onNameCategoryAdd(e) {
        let input = this.state.inputs;
        input.name = e.target.value;
        this.setState({inputs: input})
    }

    onSaveInputCategoryHandler() {
        let input = this.state.inputs;
        let categories = this.state.categories;
        input.disabled = true;
        input.readOnly = true;
        input.id = categories[categories.length - 1].id + 1;
        categories.push(input);
        this.setState({
            inputs: {
                id: ' ',
                name: ' ',
                readOnly: false,
                disabled: false
            }, categories: categories
        })
    }

    onButtonClick() {
        this.onSaveInputCategoryHandler();
        this.toggleDialog();
    }

    render() {
        const { t, i18n } = this.props;
        return (<div>
                <CategoryCard categories={this.state.categories}
                              onEditCategoryHandler={this.onEditCategoryHandler.bind(this)}
                              onSaveCategoryHandler={this.onSaveCategoryHandler.bind(this)}
                              onDeleteCategoryHandler={this.onDeleteCategoryHandler.bind(this)}
                              onNameCategoryChange={this.onNameCategoryChange.bind(this)}/>
                <div className="fab-add-button">
                    <Button variant="fab" color="primary" aria-label="add" onClick={() => this.toggleDialog()}>
                        +
                    </Button>
                </div>
                <Dialog
                    open={this.state.isOpen}
                    onClose={() => this.toggleDialog()}>
                    <div className="dialog-bar"> <DialogTitle className="dialog-title"> {t('add_new_category')} </DialogTitle>
                    <IconButton color="inherit" onClick={() => this.toggleDialog()}>
                    </IconButton></div>
                    <DialogContent>
                    <Typography>{t('name')}</Typography><Input className="InputName" type="text" value={this.state.inputs.name}
                                                        disabled={this.state.inputs.disabled}
                                                        onChange={(e) => this.onNameCategoryAdd(e)}/>
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

export default translate('translations')(Category);
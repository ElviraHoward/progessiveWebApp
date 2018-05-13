import React, {Component}  from 'react';
import _ from 'underscore';
import {
    Button,
    Input,
    List
} from 'material-ui';
import AddIcon from '@material-ui/icons/Add'
class Category extends Component {

    constructor(props) {
        super(props);
        let categories = [
            {
                id: 1,
                name: 'Concert',
                readOnly: true,
                disabled: true
            },
            {
                id:2,
                name: 'InHouse',
                readOnly: true,
                disabled: true
            },
            {
                id:3,
                name: 'Club',
                readOnly: true,
                disabled: true
            }
        ];
        this.state = {
            categories: categories,
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
        this.setState({categories : categories })
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
    render() {
        return (<div>
                {_.map(this.state.categories,
                    function (category) {
                        return <List className="input-select">
                            <Input className="input" type="text" value={category.name} disabled={category.readOnly} disableUnderline={true} onChange={category.onNameCategoryChange}/>
                            <div>
                                {category.readOnly ? <Button className="edit-category-btn"  onClick={category.onEditCategoryHandler}>Edit</Button> :
                                    <Button className="save-category-btn" onClick={() => category.onSaveCategoryHandler()}>Save</Button>}
                                <Button className="delete-category-btn" onClick={() => category.onDeleteCategoryHandler(category)}>Delete
                                </Button>
                            </div>
                        </List>
                    })
                }
                <Button variant="fab" color="primary" aria-label="add"  onClick={() => this.toggleDialog()} className="button"> <AddIcon/>
                </Button>
            </div>
        );
    }
}

export default Category;
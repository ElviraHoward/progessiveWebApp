import React  from 'react';
import _ from 'underscore';
import {
    Button,
    Input,
    List
} from 'material-ui';
function CategoryCard(props) {
        return (<div>
                {_.map(props.categories,
                    function (category) {
                        return <List className="input-select">
                            <Input className="input" type="text" value={category.name} disabled={category.disabled} disableUnderline={true} onChange={(e) => props.onNameCategoryChange(e, category)}/>
                            <div>
                                {category.readOnly ? <Button className="edit-category-btn"  onClick={() => props.onEditCategoryHandler(category)}> Edit</Button> :
                                    <Button className="save-category-btn" onClick={() => props.onSaveCategoryHandler(category)}>Save</Button>}
                                <Button className="delete-category-btn" onClick={() => props.onDeleteCategoryHandler(category)}>Delete</Button>
                            </div>
                        </List>
                    })
                }
            </div>
        );
}

export default CategoryCard;
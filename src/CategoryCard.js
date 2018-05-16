import React  from 'react';
import _ from 'underscore';
import {
    Button,
    Input,
    CardContent,
    Card
} from 'material-ui';
import './CategoryCard.css';
function CategoryCard(props) {
        return (<div>
                {_.map(props.categories,
                    function (category) {
                        return <Card className="category-card">
                            <div className="category-content">
                            <CardContent>
                            <div><Input className="input" type="text" value={category.name} disabled={category.disabled} disableUnderline={true} onChange={(e) => props.onNameCategoryChange(e, category)}/></div>
                            <div>
                                {category.readOnly ? <Button className="edit-category-btn"  onClick={() => props.onEditCategoryHandler(category)}> Edit</Button> :
                                    <Button className="save-category-btn" onClick={() => props.onSaveCategoryHandler(category)}>Save</Button>}
                                <Button className="delete-category-btn" onClick={() => props.onDeleteCategoryHandler(category)}>Delete</Button>
                            </div>
                        </CardContent>
                            </div>
                        </Card>
                    })
                }
            </div>
        );
}

export default CategoryCard;
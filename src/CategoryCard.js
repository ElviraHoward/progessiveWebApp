import React from "react";
import _ from "underscore";
import {Button, Input, CardContent, Card} from "material-ui";
import "./CategoryCard.css";
import {t} from "i18next";
function CategoryCard(props) {
    return (<div className="categories">
            {_.map(props.categories,
                function (category) {
                    return <Card className="category-card">
                        <div className="category-content">
                            <CardContent>
                                <img className="pic" src={(category.pic)}/>
                                <div><Input className="input" type="text" value={category.name}
                                            disabled={category.disabled} disableUnderline={true}
                                            onChange={(e) => props.onNameCategoryChange(e, category)}/></div>
                                <div>
                                    {category.readOnly ? <Button className="edit-category-btn"
                                                                 onClick={() => props.onEditCategoryHandler(category)}>{t('edit')}</Button> :
                                        <Button className="save-category-btn"
                                                onClick={() => props.onSaveCategoryHandler(category)}>{t('save')}</Button>}
                                    <Button className="delete-category-btn"
                                            onClick={() => props.onDeleteCategoryHandler(category)}>{t('delete')}</Button>
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
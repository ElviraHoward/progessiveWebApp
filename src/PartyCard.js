import React from "react";
import _ from "underscore";
import {translate, Trans} from "react-i18next";
import {Checkbox, Card, CardContent, Input, Typography, Select, TextField, Button, MenuItem} from "material-ui";
import {t} from "i18next";
function PartyCard(props) {
    return <Card className="parties-card">
        <div className="parties-card-content">
            <CardContent>
                <div className="parties"><Input className="input-name" type="text" value={props.party.name}
                                                disabled={props.party.readOnly}
                                                onChange={(e) => props.onNameChange(e, props.party)}
                                                disableUnderline={true}/></div>
                <div className="parties"><Typography variant="subheading"
                                                     className="title">{t('description')}: </Typography><Input
                    type="text" value={props.party.description}
                    disabled={props.party.readOnly} onChange={(e) => props.onDescriptionChange(e, props.party)}
                    disableUnderline={true}/></div>
                <div className="parties"><Typography variant="subheading"
                                                     className="title">{t('free_entry')}: </Typography><Checkbox
                    checked={props.party.entry} disabled={props.party.readOnly}
                    onChange={(e) => props.onEntryChange(e, props.party)}/></div>
                <div className="parties"><Typography variant="subheading"
                                                     className="title">{t('date_and_time')}: </Typography><TextField
                    id="datetime-local" type="datetime-local"
                    value={props.party.date} disabled={props.party.readOnly}
                    onChange={(e) => props.onDateChange(e, props.party)}/></div>
                <div className="parties"><Typography variant="subheading"
                                                     className="title">{t('cost')}: </Typography><Input type="number"
                                                                                                        value={props.party.cost}
                                                                                                        disabled={props.party.readOnly}
                                                                                                        onChange={(e) => props.onCostChange(e, props.party)}
                                                                                                        disableUnderline={true}/>
                </div>
                <div className="parties"><Typography variant="subheading"
                                                     className="title">{t('address')}: </Typography><Input type="text"
                                                                                                           value={props.party.address}
                                                                                                           disabled={props.party.readOnly}
                                                                                                           onChange={(e) => props.onAddressChange(e, props.party)}
                                                                                                           disableUnderline={true}/>
                </div>
                <div className="parties"><Typography variant="subheading"
                                                     className="title">{t('category')}: </Typography>
                    <Select className="input-select" value={props.party.category} disabled={props.party.readOnly}
                            onChange={(e) => props.onCategoryChange(e, props.party)}>
                        {
                            _.map(props.categories, function (category) {
                                return <MenuItem value={category.id}>{category.name}</MenuItem>
                            })
                        };

                    </Select></div>
            </CardContent>
        </div>
        <div className="parties-card-content">
            <CardContent>
                <div>
                    {props.party.readOnly ? <Button className="edit-btn"
                                                    onClick={() => props.onEditHandler(props.party)}>{t('edit')}</Button> :
                        <Button className="save-btn"
                                onClick={() => props.onSaveHandler(props.party)}>{t('save')}</Button>}
                    <Button className="delete-btn" onClick={() => props.onDeleteHandler(props.party)}>{t('delete')}
                    </Button>
                </div>
            </CardContent>
        </div>
    </Card>
}

export default PartyCard;
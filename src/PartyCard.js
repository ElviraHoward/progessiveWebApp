import React from 'react';
import _ from 'underscore';
import {
    Checkbox,
    Card,
    CardContent,
    Input,
    Typography,
    Select,
    TextField,
    Button,
    MenuItem
} from 'material-ui';
function PartyCard(props) {
        return <Card className="parties-card">
            <div className="parties-card-content">
                <CardContent>
                   <div className="parties"> <Typography className="title">Name: </Typography><Input className="input-name" type="text" value={props.party.name}
                                                             disabled={props.party.readOnly} onChange={(e) => props.onNameChange(e, props.party)} disableUnderline={true}/></div>
                   <div className="parties"> <Typography variant="subheading" className="title">Description: </Typography><Input type="text" value={props.party.description}
                                                                    disabled={props.party.readOnly} onChange={(e) => props.onDescriptionChange(e, props.party)} disableUnderline={true}/> </div>
                    <div className="parties"> <Typography variant="subheading" className="title">Free entry: </Typography><Checkbox checked={props.party.entry} disabled={props.party.readOnly}
                                                            onChange={(e) => props.onEntryChange(e, props.party)}/></div>
                    <div className="parties">  <Typography variant="subheading" className="title">Date and time: </Typography><TextField id="datetime-local" type="datetime-local"
                                                                                                value={props.party.date} disabled={props.party.readOnly} onChange={(e) => props.onDateChange(e, props.party)}/></div>
                    <div className="parties"> <Typography variant="subheading" className="title">Cost: </Typography><Input type="number" value={props.party.cost}
                                                                                  disabled={props.party.readOnly} onChange={(e) => props.onCostChange(e, props.party)} disableUnderline={true}/></div>
                    <div className="parties"><Typography variant="subheading" className="title">Address: </Typography><Input type="text" value={props.party.address}
                                                                                    disabled={props.party.readOnly} onChange={(e) => props.onAddressChange(e, props.party)} disableUnderline={true}/></div>
                    <div className="parties"><Typography variant="subheading"  className="title">Category: </Typography>
                    <Select className="input-select" value={props.party.category} disabled={props.party.readOnly} onChange={(e) => props.onCategoryChange(e, props.party)}>
                    {
                        _.map(props.categories, function(category){
                            return  <MenuItem value={category.id}>{category.name}</MenuItem>
                        })
                    };

                    </Select></div>
                </CardContent>
            </div>
            <div className="parties-card-content">
                <CardContent>
                    <div>
                        {props.party.readOnly ? <Button className="edit-btn" onClick={() => props.onEditHandler(props.party)}>Edit</Button> :
                            <Button className="save-btn" onClick={() => props.onSaveHandler(props.party)}>Save</Button>}
                        <Button className="delete-btn" onClick={() => props.onDeleteHandler(props.party)}>Delete
                        </Button>
                    </div>
                </CardContent>
            </div>
        </Card>
}

export default PartyCard;
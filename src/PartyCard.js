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
        return <Card className="party">
                <CardContent>
                    <Typography>Name</Typography><Input className="InputName" type="text" value={props.party.name}
                                                        disabled={props.party.readOnly} onChange={(e) => props.onNameChange(e, props.party)} disableUnderline={true}/>
                    <Typography>Description</Typography><Input type="text" value={props.party.description}
                                                               disabled={props.party.readOnly} onChange={(e) => props.onDescriptionChange(e, props.party)} disableUnderline={true}/>
                    <Typography>Entry</Typography><Checkbox checked={props.party.entry} disabled={props.party.readOnly}
                                                            onChange={(e) => props.onEntryChange(e, props.party)}/>
                    <Typography>Date and time</Typography><TextField id="datetime-local" type="datetime-local"
                                                                     value={props.party.date} disabled={props.party.readOnly} onChange={(e) => props.onDateChange(e, props.party)}/>
                    <Typography>Cost</Typography><Input type="number" value={props.party.cost}
                                                        disabled={props.party.readOnly} onChange={(e) => props.onCostChange(e, props.party)} disableUnderline={true}/>
                    <Typography>Address</Typography><Input type="text" value={props.party.address}
                                                           disabled={props.party.readOnly} onChange={(e) => props.onAddressChange(e, props.party)} disableUnderline={true}/>
                    <Typography>Category</Typography>
                    <Select className="input-select" value={props.party.category} disabled={props.party.readOnly} onChange={(e) => props.onCategoryChange(e, props.party)}>
                    {
                        _.map(props.categories, function(category){
                            return  <MenuItem value={category.id}>{category.name}</MenuItem>
                        })
                    };

                </Select>
                </CardContent>
                <CardContent>
                    <div>
                        {props.party.readOnly ? <Button className="edit-btn"  onClick={() => props.onEditHandler(props.party)}>Edit</Button> :
                            <Button className="save-btn" onClick={() => props.onSaveHandler(props.party)}>Save</Button>}
                        <Button className="delete-btn" onClick={() => props.onDeleteHandler(props.party)}>Delete
                        </Button>
                    </div>
                </CardContent>
        </Card>
}

export default PartyCard;
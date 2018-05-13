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
        return ( <div>
                {_.map(props.parties,
                    function (party) {
                        return <Card className="party">
                                <CardContent>
                                    <Typography>Name</Typography><Input className="InputName" type="text" value={party.name}
                                                                        disabled={party.readOnly} onChange={(e) => props.onNameChange(e, party)} disableUnderline={true}/>
                                    <Typography>Description</Typography><Input type="text" value={party.description}
                                                                               disabled={party.readOnly} onChange={(e) => props.onDescriptionChange(e, party)} disableUnderline={true}/>
                                    <Typography>Entry</Typography><Checkbox checked={party.entry} disabled={party.readOnly}
                                                                            onChange={(e) => props.onEntryChange(e, party)}/>
                                    <Typography>Date and time</Typography><TextField id="datetime-local" type="datetime-local"
                                                                                     value={party.date} disabled={party.readOnly} onChange={(e) => props.onDateChange(e, party)}/>
                                    <Typography>Cost</Typography><Input type="number" value={party.cost}
                                                                        disabled={party.readOnly} onChange={(e) => props.onCostChange(e, party)} disableUnderline={true}/>
                                    <Typography>Address</Typography><Input type="text" value={party.address}
                                                                           disabled={party.readOnly} onChange={(e) => props.onAddressChange(e, party)} disableUnderline={true}/>
                                    <Typography>Category</Typography><Select className="input-select" value={party.category}
                                                                             disabled={party.readOnly} onChange={(e) => props.onCategoryChange(e, party)}>
                                    <MenuItem value={props.category} selected={props.categories}>Concert</MenuItem>
                                    <MenuItem value={props.category} selected={props.categories}>InHouse</MenuItem>
                                    <MenuItem value={props.category} selected={props.categories}>Club</MenuItem>
                                </Select>
                                </CardContent>
                                <CardContent>
                                    <div>
                                        {party.readOnly ? <Button className="edit-btn"  onClick={() => props.onEditHandler(party)}>Edit</Button> :
                                            <Button className="save-btn" onClick={() => props.onSaveHandler(party)}>Save</Button>}
                                        <Button className="delete-btn" onClick={() => props.onDeleteHandler(party)}>Delete
                                        </Button>
                                    </div>
                                </CardContent>
                        </Card>
                    })
                }
            </div>
        );
}

export default PartyCard;
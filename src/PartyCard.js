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
    Button
} from 'material-ui';

function PartyCard(props) {
        return ( <div>
                {_.map(props.parties,
                    function (party) {
                        return <Card className="Party">
                                <CardContent>
                                    <Typography>Name</Typography><Input className="InputName" type="text" value={party.name}
                                                                        disabled={party.readOnly} onChange={(e) => props.onNameChange(e, party)}/>
                                    <Typography>Description</Typography><Input type="text" value={party.description}
                                                                               disabled={party.readOnly} onChange={(e) => props.onDescriptionChange(e, party)}/>
                                    <Typography>Entry</Typography><Checkbox checked={party.entry} disabled={party.readOnly}
                                                                            onChange={() => props.handleCheck}/>
                                    <Typography>Date and time</Typography><TextField id="datetime-local" type="datetime-local"
                                                                                     value={party.date} disabled={party.readOnly}/>
{/*                                    <Typography>Date and time</Typography><Date className="input-date" value={party.date}
                                                                                disabled={party.readOnly} placeholder="date"/>*/}
                                    <Typography>Cost</Typography><Input type="number" value={party.cost}
                                                                        disabled={party.readOnly} onChange={(e) => props.onCostChange(e, party)}/>
                                    <Typography>Address</Typography><Input type="text" value={party.address}
                                                                           disabled={party.readOnly} onChange={(e) => props.onAddressChange(e, party)}/>
                                    <Typography>Category</Typography><Select className="input-select"
                                                                             value={party.category}
                                                                             disabled={party.readOnly}>
                                    <option value="Concert" selected={party.category === 'Concert'}>Concert</option>
                                    <option value="InHouse" selected={party.category === 'InHouse'}>InHouse</option>
                                    <option value="Club" selected={party.category === 'Club'}>Club</option>
                                </Select>
                                </CardContent>
                                <CardContent>
                                    <div>
                                        {party.readOnly ? <Button className="edit-btn"  onClick={() => props.onEditHandler(party)}>Edit</Button> :
                                            <Button className="save-btn" onClick={() => props.onSaveHandler(party)}>Save</Button>}
                                        <Button className="delete-btn"
                                                onClick={() => props.onDeleteHandler(party)}>Delete
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
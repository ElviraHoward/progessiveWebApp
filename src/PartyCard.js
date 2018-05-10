import React from 'react';
import Date from "./Date";
import _ from 'underscore';

function PartyCard(props) {
        return ( <div>
                {_.map(props.parties,
                    function (party) {
                        return <div party={party}>
                            <input type="text" value={props.party.id} readOnly={true}/>
                            <input type="text" value={props.party.description} readOnly={true}/>
                            <input type="text" value={props.party.entry} readOnly={true}/>
                            <Date className="input-date" value={props.party.date} disabled={props.party.readOnly} placeholder="date" />
                        </div>
                    })
                }
            </div>
        );
}

export default PartyCard;
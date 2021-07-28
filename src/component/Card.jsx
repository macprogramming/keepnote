import React from "react";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';

import EditIcon from '@material-ui/icons/Edit';
const Card = (props) => {    
    //const boxShadow = "lightgrey";
    const boxShadow = props.color;
    return(
        <>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card custom-card mt-2">
                    <div className="card-body" style={{boxShadow: `2px 2px 2px ${boxShadow}`}}>
                        <div className="card-header">
                            <p className="bold">{props.title}
                            <Tooltip title="Edit Note">
                                <Button className="float-right btn_edit btn-sm btn-default" onClick={() => {
                                    props.onEdit(props.id)
                                }}><EditIcon /></Button>
                            </Tooltip>
                            </p>
                        </div>
                        <div className="card-text">
                            <p>{props.content}</p>
                        </div>
                        <div className="card-footer">
                            <Tooltip title="Delete Note">
                                <Button type="button" className="btn_delete btn-sm btn-default float-right" onClick={() => {
                                    props.onSelect(props.id)
                                }}><DeleteIcon /></Button>
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;
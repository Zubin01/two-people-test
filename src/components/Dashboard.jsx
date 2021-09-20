import React from "react";
import {Card, CardGroup, SplitButton, Dropdown, Col, Row} from "react-bootstrap";

import "./dashboard.css";

const Dashboard = ({templateArr}) => {
    let DateTime = new Date().toString();

    return (
        <div className="container">
            <div className="d-flex flex-row-reverse">
                <div className="p-2">
                    <SplitButton
                        id={`dropdown-split-variants`}
                        variant={"transparent"}
                        title="Sort By"
                    >
                        <Dropdown.Item eventKey="1">Ascending</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Descending</Dropdown.Item>
                    </SplitButton>
                </div>
            </div>
            <div className="row">
            <CardGroup>
                {templateArr.length? templateArr.map((template, ix)=>{
                    return (
                        <div key={ix} className="card-main-section">
                            <Card className="card-section">
                                <div style={{position: "relative", height: "30vh"}}>
                                    <Row>
                                    {template.map((area, ix)=>{
                                        return (
                                            <Col key={ix} className="block-one" style={{width: `${area.width}%`, height: `${area.height}%`, position: "absolute", top: `${area.y}%`, left: `${area.x}%`}}>
                                                Area {ix+1}
                                            </Col>
                                        )
                                    })}
                                    </Row>
                                </div>
                                <Card.Body>
                                    <div className="row mt-35">
                                        <div className="col">
                                            <h1>{ix+1}</h1>
                                            <label className="float-right">Template {ix+1}</label> <br/>
                                            <small className="text-muted f-9">{DateTime.split("02:15:10 GMT+0530 (India Standard Time)")}</small>
                                        </div>
                                        <div className="col">
                                            <div className="avatar-group"> +2</div>
                                            <div className="avatar-group pl-4"> AB</div>
                                            <div className="avatar-group pl-4"> AD</div>
                                            <div className="avatar-group"> DA</div>
                                        </div>
                                        <div className="test"/>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        )
                }): <div className='text-center'>No Templates . . .</div>}
            </CardGroup>
        </div>
    </div>
    )
}

export default Dashboard;
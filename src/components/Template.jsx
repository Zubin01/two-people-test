import React, {useState} from "react";
import {Form, Button, Row, Col} from "react-bootstrap";
import Modal from 'react-bootstrap/Modal'

import "./template.css";

const Template = (props) => {
    const [template, setTemplate] = useState([{
        height: 88,
        width: 48,
        x: 0,
        y:0,
    },{
        height: 88,
        width: 48,
        x: 50,
        y:0,
    },{
        height: 10,
        width: 98,
        x: 0,
        y:90,
    }]);

    const saveTemplate = () => {
        props.addNewTemplate(template)
        props.onHide(false);
    }

    const handleInputChange = (e, ix) => {
        setTemplate((prevState)=>{
            prevState[ix][e.target.name]=e.target.value
            return [...prevState]
        })
    }

    return (
        <>
            <Modal
                onShow={props.openModal}
                onHide={props.onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={props.open}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <div className="d-inline-flex justify-content-between w-100">
                            <p>Create Template</p>
                        <div className="d-inline-flex ">
                            <Button className="br-25" variant="primary">
                                <label className="link-light prl-3" onClick={saveTemplate}>
                                    Save
                                </label>
                            </Button>
                            <Button className="br-25" variant="primary">
                                <label className="link-light prl-3" onClick={props.onHide}>
                                    Close
                                </label>
                            </Button>
                        </div>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <Row>
                            <Col style={{position: "relative", height: "50vh"}}>
                                {template.map((templateArea, ix)=>{
                                    return (
                                        <Col key={ix} className="block-one" style={{width: `${templateArea.width}%`, height: `${templateArea.height}%`, position: "absolute", top: `${templateArea.y}%`, left: `${templateArea.x}%`}}>
                                        Area {ix+1}
                                        </Col>
                                    )
                                })}
                            </Col>
                            <Col className="mt-2"  style={{overflow: "auto",height: "70vh",}} lg={6}>
                                <Form>
                                    <Row>
                                        <Col lg={6} >
                                            Layout{" "}
                                        </Col>
                                        <Col lg={6} className="add-button">
                                            <Button variant="outline-primary float-right" disabled={true} onClick={saveTemplate}>+ Add New Area</Button>
                                        </Col>
                                    </Row>
                                    {template.map((templateArea, ix)=>{
                                        return (
                                            <Form.Group key={ix} className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Area {ix+1}</Form.Label>
                                                <Row>
                                                    <Col>
                                                        <Row>
                                                            <Col/>
                                                            <Col>Width</Col>
                                                            <Col>Height</Col>
                                                            <Row>
                                                                <Col>
                                                                    Size
                                                                </Col>
                                                                <Col>
                                                                    <Form.Control className="w-100" type="number" placeholder="" value={templateArea.width} name="width" onChange={(e)=>handleInputChange(e, ix)}/>
                                                                </Col>
                                                                <Col>
                                                                    <Form.Control className="w-100" type="number" placeholder=""  value={templateArea.height} name="height" onChange={(e)=>handleInputChange(e, ix)}/>
                                                                </Col>
                                                            </Row>
                                                        </Row>
                                                        <Row>
                                                            <Col/>
                                                            <Col>X</Col>
                                                            <Col>Y</Col>
                                                            <Row>
                                                                <Col>Position</Col>
                                                                <Col>
                                                                    <Form.Control className="w-100" type="number" placeholder="Enter X"  defaultValue={templateArea.x}  name="x" onChange={(e)=>handleInputChange(e, ix)}/>
                                                                </Col>
                                                                <Col>
                                                                    <Form.Control className="w-100" type="number" placeholder="Enter Y"  defaultValue={templateArea.y} name="y" onChange={(e)=>handleInputChange(e, ix)}/>
                                                                </Col>
                                                            </Row>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Form.Group>
                                        )
                                    })}
                                </Form>
                            </Col>
                        </Row>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Template;
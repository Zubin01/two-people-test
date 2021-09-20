import React, {useEffect} from "react";
import {Container, Navbar, Button} from "react-bootstrap";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./components/Dashboard";
import Template from "./components/Template";

function App() {
    const [modalShow, setModalShow] = React.useState(false);
    const [templateArr, setTemplateArr] = React.useState([]);

    const addNewTemplate = (template) => {
        setTemplateArr((prestate)=> {
            return [...prestate, template]
        })
    }
    useEffect(()=> {},[])

    const openModal = () => {
        setModalShow(true);
    }
    const hideModal = () => {
        setModalShow(false);
    }

  return (
      <React.Fragment>
        <div className="App">
            <div>
                <Navbar className="justify-content-end mt-lg-0" bg="transparent" expand="lg">
                    <Container>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Navbar.Brand className="dark-brand">
                                Templates
                            </Navbar.Brand>
                        </Navbar.Collapse>
                        <Button className="link-light prl-3 br-25" onClick={openModal}>
                            + New Template
                        </Button>
                    </Container>
                </Navbar>
            </div>
        </div>

      <Template open={modalShow} onHide={hideModal} addNewTemplate={addNewTemplate} openModal={openModal}/>
      <Dashboard templateArr={templateArr}/>
      </React.Fragment>
    )
}

export default App;

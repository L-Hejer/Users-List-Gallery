import React, { Component } from "react";
import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class AddUserModal extends Component {

    state= {
        show :false,
        name: "",
    surName: "",
    birthPlace: "",
    birthYear: ""

    }
 

   handeShow = () => this.setState({show: !this.state.show});

  //handleChanges
  handelChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };
//   handleAdd
 addUser = () => {
    //check valid birth Year
    if (
      this.state.birthYear < 1900 &&
      this.state.birthYear.toString().length !== 4
    )
      return alert("enter a valid Year of Birth ");
    else if (Object.values(this.state).indexOf("") === -1) {
      this.props.handleAdd({
         name: this.state.name,
         surName: this.state.surName,
         birthYear: this.state.birthYear,
         birthPlace: this.state.birthPlace
      });
      
      this.setState({
        name: this.state.name,
        surName: this.state.surName,
        birthYear: this.state.birthYear,
        birthPlace: this.state.birthPlace,
        show:false
     });
    } else alert("Plese enter Require Feilds");
  };
render(){
  return (
    <>
      <Button size={"sm"} variant="dark" onClick={this.handeShow}>
        +
      </Button>

      <Modal show={this.state.show} onHide={this.handeShow}>
        <Modal.Header closeButton>
          <Modal.Title>Add New User </Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={this.handelChange}
              type="text"
              className="mb-3"
              name="name"
              placeholder="Name ..."
              maxLength="16"
            />
            <Form.Label>SurName</Form.Label>
            <Form.Control
              onChange={this.handelChange}
              type="text"
              className="mb-3"
              name="surName"
              placeholder="Last Name ..."
              maxLength="16"
            />
            <Form.Label>Year Of Birth</Form.Label>
            <Form.Control
              onChange={this.handelChange}
              type="number"
              className="mb-3"
              name="birthYear"
              placeholder="Year of Birth ..."
              min="1800"
            />
            <Form.Label>Birth Place</Form.Label>
            <Form.Control
              onChange={this.handelChange}
              type="text"
              className="mb-3"
              name="birthPlace"
              placeholder="Birth Place ..."
              maxLength="16"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handeShow}>
              Close
            </Button>
            <Button variant="primary" onClick={this.addUser}>
              Add User
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )};
}

export default AddUserModal;

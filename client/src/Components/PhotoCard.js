import React, { Component } from "react";
import { Card, Image , Modal} from "react-bootstrap";
import remove from "../assets/icons/delete.svg";
import view from '../assets/icons/view.svg'

class PhotoCard extends Component {
  state = {
    show: false
  };

  handleShow = () => this.setState({ show: !this.state.show});
  render() {
      const { link, title} = this.props.photo
    return (
      <>
        <Card
          border="dark"
          style={{ width: "18rem", height: "18rem", margin: "1%" }}
        >
          <Card.Img
            variant="top"
            src={link}
            style={{ width: "18rem", height: "13rem" }}
          />
          <Card.Body className=" d-flex justify-content-center">
            <Card.Text className="font-weight-bold ">{title}</Card.Text>
            <Image
              onClick={this.handleShow}
              className="ml-3"
              as="input"
              type="submit"
              src={view}
            />
            <Modal show={this.state.show} onHide={this.handleShow}>
              <Image src={link} style={{ height: "30rem" }} />
            </Modal>{" "}
            <Image
              className="ml-3"
              src={remove}
              as="input"
              type="submit"
              onClick={() => this.props.deletePhoto(this.props.photo._id)}
            />
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default PhotoCard;

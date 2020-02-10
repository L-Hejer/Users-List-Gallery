import React, { Component } from "react";
import { connect } from "react-redux";

import { addPhoto, deletePhoto } from "../js/actions/galleryActions";
// import PhotoAddModal from "../components/Modals/PhotoAddModal";
import PhotoCard from "../Components/PhotoCard";
import search from "../assets/icons/search.svg";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Image,
  Spinner
} from "react-bootstrap";

class UserPhotoGallery extends Component {
  state = {
    searchFilter: ""
  };

  // handle Search
  searchPhoto = e => this.setState({ searchFilter: e.target.value });
  // filter Photo by Title
  filterPhoto = array =>
    array.filter(({ title }) => {
      const photoInfo = title;
      return photoInfo
        .toLowerCase()
        .includes(this.state.searchFilter.toLowerCase().trim());
    });

  //handleLoading
  comoponentIsLoading = component =>
    this.props.photos.isLoading ? (
      <Row className="d-flex justify-content-center mt-5">
        <Spinner animation="grow" />
      </Row>
    ) : (
      component
    );

  render() {
    const user = this.props.match.params.id;
    const userName = this.props.match.params.userName;
    return (
      <Container fluid>
        <Row className="pt-5 pb-4 ">
          <Col className="col-8">
            <h1>{`${userName} Gallery`}</h1>
          </Col>
          <Col className="col-2 align-self-center">
            <InputGroup>
              <InputGroup.Prepend>
                <Image src={search} className="mr-2" />
              </InputGroup.Prepend>
              <FormControl
                type="text"
                placeholder="Search..."
                onChange={this.searchPhoto}
              />
            </InputGroup>
          </Col>
          <Col className="col-1 d-flex  align-self-center">
            {/* <PhotoAddModal user={user} addPhoto={this.props.addPhoto} /> */}
          </Col>
        </Row>
        {this.comoponentIsLoading(
          <Row className="d-flex justify-content-center flex-wrap mt-3">
            {this.filterPhoto(this.props.photos.photos)
              .filter(e => e.user === user)
              .map(photo => (
                <PhotoCard
                  key={photo._id}
                  photo={photo}
                  deletePhoto={this.props.deletePhoto}
                />
              ))}
          </Row>
        )}
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  photos: state.photos,
  users: state.users.users
});

export default connect(mapStateToProps, { addPhoto, deletePhoto })(UserPhotoGallery);

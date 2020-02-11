import React, { Component } from "react";
import { connect } from "react-redux";
import {Container ,Row ,Col, FormControl, InputGroup, Image } from "react-bootstrap";

import {loadUser, addUser, editUser, deleteUser} from '../js/actions/usersActions'

import UsersTable from "../Components/UsersTable";
import UserAddModal from '../Components/Modals/UserAddModal';

import search from "../assets/icons/search.svg";




class UsersList extends Component {
    state = {
      searchFilter: ""
    };

    //Add a User
    handleAdd = newUser => this.props.addUser(newUser);

    // Edit user
    handleEdit = (id, newUser) => this.props.editUser(id, newUser);
  
    //handle Delete
    handleUserDelete = id => this.props.deleteUser(id);
  
    // handle Search
    handleSearch = e => this.setState({ searchFilter: e.target.value });
  
    // filter users
    filterUser = arrayOfUsers =>
      arrayOfUsers.filter(({ name, surName }) => {
        const userInfo = `${name} ${surName}`;
        return userInfo
          .toLowerCase()
          .includes(this.state.searchFilter.toLowerCase().trim());
      });
  
    render() {
      return (
        <Container fluid>
          <Row className="pt-5 pb-4  ">
            <Col className="col-8">
              <h1>Users List </h1>
            </Col>
            <Col className="col-2 align-self-center">
              <InputGroup>
                <InputGroup.Prepend>
                  <Image src={search} className="mr-2" />
                </InputGroup.Prepend>
                <FormControl
                  type="text"
                  placeholder="Search..."
                  onChange={this.handleSearch}
                />
              </InputGroup>
            </Col>
            <Col className="col-1 d-flex  align-self-center">
              <UserAddModal handleAdd={this.handleAdd} />
            </Col>
          </Row>
            <UsersTable
              users={this.filterUser(this.props.users.users)}
              handleEdit={this.handleEdit}
              handleUserDelete ={this.handleUserDelete }
            />
        </Container>
      );
    }
  }
  
  const mapStateToProps = state => ({
    users: state.users
  });
  
  export default connect(mapStateToProps, {
    loadUser,
    addUser,
    deleteUser,
    editUser
  })(UsersList);
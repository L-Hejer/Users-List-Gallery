import React from "react";
import Table from "react-bootstrap/Table";

import UserCard from "./UserCard";

function UsersTable({ users, handleEdit, handleUserDelete  }) {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th> </th>
          <th>Name </th>
          <th>SurName </th>
          <th>Birth Year </th>
          <th>Birth Place</th>
          <th>Actions </th>
        </tr>
      </thead>
      {users.map((user, i) => (
        <UserCard
          key={i}
          index={i}
          user={user}
          handleEdit={handleEdit}
          handleUserDelete ={handleUserDelete }
        />
      ))}
    </Table>
  );
}

export default UsersTable;
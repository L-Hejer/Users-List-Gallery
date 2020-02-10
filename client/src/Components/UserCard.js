import React from 'react';
import { Link } from "react-router-dom";
import EditUserModal from './Modals/UserEditModal'

import Image from "react-bootstrap/Image";

import edit from "../assets/icons/edit.svg";
import gallery from "../assets/icons/gallery.svg";
import remove from "../assets/icons/delete.svg";

function UserCard({ user, index, handleUserDelete, handleEdit }) {
    return (
  
            <>
<tbody>
    <tr>
    <td>{index + 1}</td>
        <td>
{user.name}
        </td>
        <td>
      {user.surName}      
        </td>
        <td>
        {user.birthYear}    
        </td>
        <td>
          {user.birthPlace}   
        </td>
        <td>
        <Link to={`/${user.name} ${user.surName}/${user._id}`}>
              {" "}
              <Image className=" mr-3" as="input" type="submit" src={gallery} />
            </Link>
            
            <EditUserModal user={user} handleEdit={handleEdit} /> 
            <Image
              className="ml-2 mr-2"
              as="input"
              type="submit"
              src={remove}
              onClick={() => handleUserDelete (user._id)}
            />
        </td>
    </tr>
</tbody>
            </>
 
    )
}

export default UserCard;

import React from "react";

const UserDetails = ({selectedUser, onEditClick}) => {
    return ( 
        <div className="user-details">
            <p><strong>ID:</strong> {selectedUser.id}</p>
            <p><strong>First Name:</strong> {selectedUser.firstName}</p>
            <p><strong>Last Name:</strong> {selectedUser.lastName}</p>
            <p><strong>Age:</strong> {selectedUser.age}</p>
            <p><strong>Gender: </strong> {selectedUser.gender}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Phone:</strong> {selectedUser.phone}</p>
            <button onClick={onEditClick}>Edit</button>
        </div>
     );
}
 
export default UserDetails;
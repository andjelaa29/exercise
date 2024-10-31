import React, { useState, useEffect } from "react";
import "./MainContent.css";
import EditUser from "./EditUser";
import UserDetails from "./UserDetails";

const MainContent = ({selectedUser}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [currentUser, setCurrentUser] = useState(selectedUser);

    useEffect(() => {
        setCurrentUser(selectedUser);
    }, [selectedUser]);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleUserUpdate = (updatedUser) => {
        setCurrentUser(updatedUser);
        setIsEditing(false);
    };

    return ( 
        <div className="main-content">
            <h1>User Details</h1>
            {currentUser ? (
                isEditing ? (
                    <EditUser selectedUser={currentUser} setIsEditing={setIsEditing} onUpdate={handleUserUpdate} />
                ) : (
                    <UserDetails selectedUser={currentUser} onEditClick={handleEditClick}/>
                )
            ) : (
                <p>No user selected.</p>
            )}
        </div>
     );
}
 
export default MainContent;
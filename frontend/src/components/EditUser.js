import React, {useState} from "react";
import axios from 'axios';

const EditUser = ({selectedUser, setIsEditing, onUpdate}) => {
    const [userData, setUserData] = useState(selectedUser);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSaveClick = () => {
        axios.put(`https://dummyjson.com/users/${userData.id}`, userData)
            .then(response => {
                onUpdate(response.data);
            })
            .catch(err => {
            console.error("Error updating user:", err);
        });
    }

    return ( 
        <div className="user-details">
            <input
                type="text"
                name="firstName"
                value={userData.firstName}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="lastName"
                value={userData.lastName}
                onChange={handleInputChange}
            />
            <input
                type="number"
                name="age"
                value={userData.age}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="gender"
                value={userData.gender}
                onChange={handleInputChange}
            />
            <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
            />
            <input
                type="tel"
                name="phone"
                value={userData.phone}
                onChange={handleInputChange}
            />
            <button onClick={handleSaveClick}>Save</button>
            <button className="cancel" onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
     );
}
 
export default EditUser;
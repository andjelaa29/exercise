import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Layout.css';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const Layout = () => {
    const [users, setUsers] = useState([])
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        axios.get('https://dummyjson.com/users?limit=20')
            .then(response => {
                setUsers(response.data.users);
            })
            .catch(err => {
                console.error("Error fetching users: ", err);
            })
    }, []);

    const handleUserClick = (user) => {
        setSelectedUser(user); 
    };

    return ( 
        <div className="layout">
            <Sidebar users={users} onUserClick={handleUserClick}/>
            <MainContent selectedUser={selectedUser} />
        </div>
     );
}
 
export default Layout;
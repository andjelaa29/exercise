import './Sidebar.css';

const Sidebar = ({users, onUserClick}) => {
    return ( 
        <div className='sidebar'>
            <h1>User List</h1>
                <ul>
                    {users.map(user => (
                        <li key={user.id} onClick={() => onUserClick(user)}>
                            {user.firstName} {user.lastName}
                        </li>
                    ))}
                </ul>
        </div>
     );
}
 
export default Sidebar;
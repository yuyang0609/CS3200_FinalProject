import userService from "./user-service"
const {Link, useHistory} = window.ReactRouterDOM;
const { useState, useEffect } = React;

const UserList = () => {
    const history = useHistory();
    const [users, setUsers] = useState([]);
    useEffect(() => {findAllUsers()}, []);
    const findAllUsers = () => userService.findAllUsers()
        .then(users => setUsers(users));
    return(
        <div>
            <h2>User List</h2>
            <button className="btn btn-primary"
                    onClick={() => history.push("/users/new")}>
                Add User
            </button>
            <ul className="list-group">
                {
                    users.map(user =>
                        <li key={user.id}>
                            <Link to={`/users/${user.id}`}>
                                {user.firstName},
                                {user.lastName},
                                {user.username},
                                {user.writerName},
                                {user.email},
                                {user.dateOfBirth}
                            </Link>
                            <Link to={`/users/${user.id}/writers`}>
                                <button className="btn btn-primary">
                                    Writers
                                </button>
                            </Link>
                        </li>
                    )
                }

            </ul>
        </div>
    )
}

export default UserList

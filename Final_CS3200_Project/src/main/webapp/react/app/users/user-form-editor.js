import userService from "./user-service"
const { useParams, useHistory } = window.ReactRouterDOM;
const { useState, useEffect } = React;

const UserFormEditor = () => {
    const {id} = useParams();
    const [user, setUser] = useState([]);
    const history = useHistory();
    useEffect(() => {
        if (id !== "new") {
            findUserById(id)
        }}, []);
    const findUserById = (id) => userService.findUserById(id)
        .then(user => setUser(user));
    const deleteUser = (id) => userService.deleteUser(id)
        .then(() => history.goBack());
    const createUser = (user) => userService.createUser(user)
        .then(() => history.goBack());
    const updateUser = (id, newUser) => userService.updateUser(id, newUser)
        .then(() => history.goBack());
    return (
        <div>
            <h2>User Editor</h2>
            <label>Id</label>
            <input disabled value={user.id}/><br/>
            <label>First Name</label>
            <input onChange={(e) =>
                setUser(user => ({...user, firstName: e.target.value}))}
                   value={user.firstName}/><br/>
            <label>Last Name</label>
            <input onChange={(e) =>
                setUser(user => ({...user, lastName: e.target.value}))}
                   value={user.lastName}/><br/>
            <label>Username</label>
            <input onChange={(e) =>
                setUser(user => ({...user, username: e.target.value}))}
                   value={user.username}/><br/>
            <label>Password</label>
            <input onChange={(e) =>
                setUser(user => ({...user, password: e.target.value}))}
                   value={user.password}/><br/>
            <label>Writer Name</label>
            <input onChange={(e) =>
                setUser(user => ({...user, writerName: e.target.value}))}
                   value={user.writerName}/><br/>
            <label>Email</label>
            <input onChange={(e) =>
                setUser(user => ({...user, email: e.target.value}))}
                   value={user.email}/><br/>
            <label>Date of Birth</label>
            <input type="date" onChange={(e) =>
                setUser(user => ({...user, dateOfBirth: e.target.value}))}
                   value={user.dateOfBirth}/><br/>
            <button className="btn btn-warning"
                    onClick={() => {history.goBack()}}>
                Cancel
            </button>
            <button className="btn btn-danger"
                    onClick={() => deleteUser(user.id)}>
                Delete
            </button>
            <button className="btn btn-success"
                    onClick={() => createUser(user)}>
                Create
            </button>
            <button className="btn btn-primary"
                    onClick={() => updateUser(user.id, user)}>
                Save
            </button>
        </div>
    )
}

export default UserFormEditor

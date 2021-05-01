import writerService from "./writer-service"
import userService from "../users/user-service";
const { Link, useHistory, useParams } = window.ReactRouterDOM;
const { useState, useEffect } = React;

const WriterList = () => {
    const {userId} = useParams();
    const [writers, setWriters] = useState([]);
    const [user, setUser] = useState([]);
    const history = useHistory();
    useEffect(() => {findAllWritersForUser(userId)}, []);
    useEffect(() => {findUserById(userId)}, []);
    const findAllWritersForUser = (userId) => writerService.findAllWritersForUser(userId)
        .then(writers => setWriters(writers));
    const findUserById = (id) => userService.findUserById(id)
        .then(user => setUser(user));
    return(
        <div>
            <h2>Writer List {user && <span> for <Link to={`/users/${userId}`}>{user.writerName}</Link></span>}</h2>
            <button className="btn btn-primary"
                    onClick={() => history.push(`/users/${userId}/writers/new`)}>
                Add Writer
            </button>
            <button className="btn btn-primary"
                    onClick={() => history.push(`/users/`)}>
                View users
            </button>
            <ul className="list-group">
                {
                    writers.map(writer =>
                        <li key={writer.id}>
                            <Link to={`/users/${userId}/writers/${writer.id}`}>
                                {writer.name},
                                {writer.nationality},
                            </Link>
                            <Link to={`/users/${userId}/writers/${writer.id}/literatures`}>
                                <button className="btn btn-primary">
                                    Literatures
                                </button>
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    )

}

export default WriterList

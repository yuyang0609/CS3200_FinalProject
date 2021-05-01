import literatureService from "./literature-service"
import userService from "../users/user-service";
import writerService from "../writers/writer-service";
const { Link, useHistory, useParams } = window.ReactRouterDOM;
const { useState, useEffect } = React;

const LiteratureList = () => {
    const {userId, writerId, id} = useParams();
    const [literatures, setLiteratures] = useState([]);
    const [writer, setWriter] = useState([]);
    const [user, setUser] = useState([]);
    const history = useHistory();
    useEffect(() => {findAllLiteraturesForWriter(writerId)}, []);
    useEffect(() => {findWriterById(writerId)}, []);
    useEffect(() => {findUserById(userId)}, []);
    const findUserById = (id) => userService.findUserById(id)
        .then(user => setUser(user));
    const findAllLiteraturesForWriter = (writerId) => literatureService.findAllLiteraturesForWriter(writerId)
        .then(literatures => setLiteratures(literatures));
    const findWriterById = (id) => writerService.findWriterById(id)
        .then(writer => setWriter(writer));
    return(
        <div>
            <h2>Literature List {writer && <span> for <Link to={`/users/${userId}/writers/${writerId}`}>{writer.name}</Link></span>}</h2>
            <button className="btn btn-primary"
                    onClick={() => history.push(`/users/${userId}/writers/${writerId}/literatures/new`)}>
                Add Literature
            </button>
            {user &&
            <button className="btn btn-primary"
                    onClick={() => history.push(`/users/${userId}/writers`)}>
                View writers for {user.writerName}
            </button>}
            <ul className="list-group">
                {
                    literatures.map(literature =>
                        <li key={literature.id}>
                            <Link to={`/users/${userId}/writers/${writerId}/literatures/${literature.id}`}>
                                {literature.title},
                                {literature.genre},
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    )

}

export default LiteratureList

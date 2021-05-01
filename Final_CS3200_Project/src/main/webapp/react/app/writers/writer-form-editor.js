import writerService from "./writer-service"
const { useParams, useHistory } = window.ReactRouterDOM;
const { useState, useEffect } = React;

const WriterFormEditor = () => {
    const {userId, id} = useParams();
    const [writer, setWriter] = useState([]);
    const history = useHistory();
    useEffect(() => {
        if (id !== "new") {
            findWriterById(id)
        }
    }, []);
    const findWriterById = (id) => writerService.findWriterById(id)
        .then(writer => setWriter(writer));
    const deleteWriter = (id) => writerService.deleteWriter(id)
        .then(() => history.goBack());
    const createWriterForUser = (userId, writer) => writerService.createWriterForUser(userId, writer)
        .then(() => history.goBack());
    const updateWriter = (id, newWriter) => writerService.updateWriter(id, newWriter)
        .then(() => history.goBack());
    return (
        <div>
            <h2>Writer Editor</h2>
            {writer.id && <span><button className="btn btn-primary"
                                       onClick={() => history.push(`/users/${userId}/writers/${writer.id}/literatures`)}>
                View literatures for {writer.name}
            </button><br/></span>}
            <button className="btn btn-primary"
                    onClick={() => history.push(`/users/${userId}`)}>
                Edit user
            </button>
            <br/>
            <label>Id</label>
            <input disabled value={writer.id}/><br/>
            <label>Name</label>
            <input onChange={(e) =>
                setWriter(writer => ({...writer, name: e.target.value}))}
                   value={writer.name}/><br/>
            <label>Date Of Birth</label>
            <input type="date" onChange={(e) =>
                setWriter(writer => ({...writer, dateOfBirth: e.target.value}))}
                   value={writer.dateOfBirth}/><br/>
            <label>Nationality</label>
            <input onChange={(e) =>
                setWriter(writer => ({...writer, nationality: e.target.value}))}
                   value={writer.nationality}/><br/>
            <button className="btn btn-warning"
                    onClick={() => {
                        history.goBack()
                    }}>
                Cancel
            </button>
            <button className="btn btn-danger"
                    onClick={() => deleteWriter(writer.id)}>
                Delete
            </button>
            <button className="btn btn-success"
                    onClick={() => createWriterForUser(userId, writer)}>
                Create
            </button>
            <button className="btn btn-primary"
                    onClick={() => updateWriter(writer.id, writer)}>
                Save
            </button>
        </div>
    )
}

export default WriterFormEditor

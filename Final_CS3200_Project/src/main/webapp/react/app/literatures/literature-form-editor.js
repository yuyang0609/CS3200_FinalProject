import LiteratureService from "./literature-service"
const { useParams, useHistory } = window.ReactRouterDOM;
const { useState, useEffect } = React;

const SongFormEditor = () => {
    const {userId, writerId, id} = useParams();
    const [literature, setLiterature] = useState([]);
    const history = useHistory();
    useEffect(() => {
        if (id !== "new") {
            findLiteratureById(id)
        }}, []);
    const findLiteratureById = (id) => LiteratureService.findLiteratureById(id)
        .then(literature => setLiterature(literature));
    const deleteLiterature = (id) => LiteratureService.deleteLiterature(id)
        .then(() => history.goBack());
    const createLiteratureForWriter = (writerId, literature) =>
        LiteratureService.createLiteratureForWriter(writerId, literature)
        .then(() => history.goBack());
    const updateLiterature = (id, newLiterature) => LiteratureService.updateLiterature(id, newLiterature)
        .then(() => history.goBack());
    return(
        <div>
            <h2>Literature Editor</h2>
            <button className="btn btn-primary"
                    onClick={() => history.push(`/users/${userId}/writers/${writerId}`)}>
                Edit writer
            </button><br/>
            <label>Id</label>
            <input disabled value={literature.id}/><br/>
            <label>Title</label>
            <input onChange={(e) =>
                setLiterature(literature => ({...literature, title: e.target.value}))}
                   value={literature.title}/><br/>
            <label>Genre</label>
            <select onChange={(e) =>
                setLiterature(literature => ({...literature, genre: e.target.value}))}
                   value={literature.genre}>
                <option>POEM</option>
                <option>NOVEL</option>
                <option>FICTION</option>
                <option>MYSTERY</option>
            </select><br/>
            <button className="btn btn-warning"
                    onClick={() => {history.goBack()}}>
                Cancel
            </button>
            <button className="btn btn-danger"
                    onClick={() => deleteLiterature(literature.id)}>
                Delete
            </button>
            <button className="btn btn-success"
                    onClick={() => createLiteratureForWriter(writerId, literature)}>
                Create
            </button>
            <button className="btn btn-primary"
                    onClick={() => updateLiterature(literature.id, literature)}>
                Save
            </button>
        </div>
    )

}

export default SongFormEditor

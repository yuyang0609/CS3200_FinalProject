const WRITERS_URL = "http://localhost:8080/api/writers"
const USERS_URL = "http://localhost:8080/api/users"

export const findAllWriters = () => fetch(WRITERS_URL).then(response => response.json());

export const findAllWritersForUser = (userId) => fetch(`${USERS_URL}/${userId}/writers`).then(response => response.json());

export const findWriterById = (id) => fetch(`${WRITERS_URL}/${id}`).then(response => response.json());

export const deleteWriter = (id) => fetch(`${WRITERS_URL}/${id}`, {method: "DELETE"});

export const createWriter = (writer) => fetch(WRITERS_URL,
    {method: "POST",
        body: JSON.stringify(writer),
        headers: {'content-type':'application/json'}}).then(response => response.json());

export const createWriterForUser = (userId, writer) => fetch(`${USERS_URL}/${userId}/writers`,
    {method: "POST",
        body: JSON.stringify(writer),
        headers: {'content-type':'application/json'}}).then(response => response.json());

export const updateWriter = (id, writer) => fetch(`${WRITERS_URL}/${id}`,
    {method: "PUT",
        body: JSON.stringify(writer),
        headers: {'content-type':'application/json'}}).then(response => response.json());

export default {
    findAllWriters,
    findAllWritersForUser,
    findWriterById,
    deleteWriter,
    createWriter,
    createWriterForUser,
    updateWriter
}

const LITERATURES_URL = "http://localhost:8080/api/literatures"
const WRITERS_URL = "http://localhost:8080/api/writers"

export const findAllLiteratures = () => fetch(LITERATURES_URL).then(response => response.json());

export const findAllLiteraturesForWriter = (writerId) => fetch(`${WRITERS_URL}/${writerId}/literatures`).then(response => response.json());

export const findLiteratureById = (id) => fetch(`${LITERATURES_URL}/${id}`).then(response => response.json());

export const deleteLiterature = (id) => fetch(`${LITERATURES_URL}/${id}`, {method: "DELETE"});

export const createLiterature = (literature) => fetch(LITERATURES_URL,
    {method: "POST",
        body: JSON.stringify(literature),
        headers: {'content-type':'application/json'}}).then(response => response.json());

export const createLiteratureForWriter = (writerId, literature) => fetch(`${WRITERS_URL}/${writerId}/literatures`,
    {method: "POST",
        body: JSON.stringify(literature),
        headers: {'content-type':'application/json'}}).then(response => response.json());

export const updateLiterature = (id, literature) => fetch(`${LITERATURES_URL}/${id}`,
    {method: "PUT",
        body: JSON.stringify(literature),
        headers: {'content-type':'application/json'}}).then(response => response.json());

export default {
    findAllLiteratures,
    findAllLiteraturesForWriter,
    findLiteratureById,
    deleteLiterature,
    createLiterature,
    createLiteratureForWriter,
    updateLiterature
}

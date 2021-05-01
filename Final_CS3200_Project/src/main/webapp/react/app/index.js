import ArtistList from "./users/user-list";
import ArtistFormEditor from "./users/user-form-editor";
import AlbumList from "./writers/writer-list";
import AlbumFormEditor from "./writers/writer-form-editor";
import SongList from "./literatures/literature-list";
import SongFormEditor from "./literatures/literature-form-editor";
const {HashRouter, Route} = window.ReactRouterDOM;
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/artists", "/"]} exact={true}>
                    <ArtistList/>
                </Route>
                <Route path="/artists/:id" exact={true}>
                    <ArtistFormEditor/>
                </Route>
                <Route path="/artists/:artistId/albums" exact={true}>
                    <AlbumList/>
                </Route>
                <Route path="/artists/:artistId/albums/:id" exact={true}>
                    <AlbumFormEditor/>
                </Route>
                <Route path="/artists/:artistId/albums/:albumId/songs" exact={true}>
                    <SongList/>
                </Route>
                <Route path="/artists/:artistId/albums/:albumId/songs/:id" exact={true}>
                    <SongFormEditor/>
                </Route>

            </HashRouter>
        </div>
    );
}

export default App;

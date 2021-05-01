import UserList from "./users/user-list";
import UserFormEditor from "./users/user-form-editor";
import WriterList from "./writers/writer-list";
import WriterFormEditor from "./writers/writer-form-editor";
import LiteratureList from "./literatures/literature-list";
import LiteratureFormEditor from "./literatures/literature-form-editor";
const {HashRouter, Route} = window.ReactRouterDOM;
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/users", "/"]} exact={true}>
                    <UserList/>
                </Route>
                <Route path="/users/:id" exact={true}>
                    <UserFormEditor/>
                </Route>
                <Route path="/users/:userId/writers" exact={true}>
                    <WriterList/>
                </Route>
                <Route path="/users/:userId/writers/:id" exact={true}>
                    <WriterFormEditor/>
                </Route>
                <Route path="/users/:userId/writers/:writerId/literatures" exact={true}>
                    <LiteratureList/>
                </Route>
                <Route path="/users/:userId/writers/:writerId/literatures/:id" exact={true}>
                    <LiteratureFormEditor/>
                </Route>

            </HashRouter>
        </div>
    );
}

export default App;

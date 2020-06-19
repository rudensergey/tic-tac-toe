import { createStore, compose } from "redux";
import { app } from "./reducers";

const store = createStore(
    app,
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;

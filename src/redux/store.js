import { createStore, compose } from "redux";
import { ticApp } from "./reducers";

const store = createStore(
    ticApp,
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;

// REACT
import React from "react";
import ReactDOM from "react-dom";

// REDUX
import { Provider } from "react-redux";

// STORE
import store from "./components/redux/store";

// ACTIONS

// COMPONENTS
import App from "./App";

// STYLES

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

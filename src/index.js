import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import Main from "./Main";
import {BrowserRouter} from "react-router-dom";
import {I18nextProvider} from "react-i18next";
import i18n from "./i18n";

ReactDOM.render(<I18nextProvider i18n={ i18n }>
    <BrowserRouter>
        <Main />
    </BrowserRouter>
</I18nextProvider>, document.getElementById('root'));
registerServiceWorker();

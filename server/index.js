import express from "express";

import React from 'react'
import ReactDOMServer from 'react-dom/server'

// import our main App component
import App from '../src/App';

const path = require("path");
const fs = require("fs");


const app = express();


const indexAction = (req, res) => {

    // point to the html file created by CRA's build tool
    const filePath = path.resolve(__dirname, '..', 'build', 'index.html');

    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('err', err);
            return res.status(404).end()
        }

        // render the app as a string
        const html = ReactDOMServer.renderToString(<App />);

        // inject the rendered app into our html and send it
        return res.send(
            htmlData.replace(
                '<div id="root"></div>',
                `<div id="root">${html}</div>`
            )
        );
    });
};

// serve / by injected index.html
app.get('^/$', indexAction);

// serve static resources as is
app.use( express.static( path.resolve( __dirname, "../build" ) ) );

// use injected index.html for unknown resources
app.get('*', indexAction);

app.listen(3000);

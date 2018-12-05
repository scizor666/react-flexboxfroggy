import express from "express";
import fs from "fs";
import 'ignore-styles';
import path from "path";
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {Provider} from 'react-redux';
import {Route, StaticRouter} from 'react-router-dom'
import App from '../src/App';
import configureStore, {getLevelData} from '../src/store/configureStore';


const app = express();


const indexAction = (req: any, res: any) => {

    // point to the html file created by CRA's build tool
    const filePath = path.resolve(__dirname, '..', 'build', 'index.html');

    // configure store by given level id
    const levelId = parseInt(req.params.id, 10) - 1 || 0;
    const store = configureStore({level: getLevelData(levelId)});

    fs.readFile(filePath, 'utf8', (err: any, htmlData: any) => {
        if (err) {
            return res.status(404).end()
        }

        // render the app as a string
        const html = ReactDOMServer.renderToString(<Provider store={store}>
            <StaticRouter location={req.url} context={{}}>
                <Route path={'/level/:id'} component={App}/>
            </StaticRouter>
        </Provider>);
        const reduxState = JSON.stringify(store.getState());
        // inject the rendered app into our html and send it
        return res.send(
            htmlData.replace(
                '<div id="root"></div>',
                `<div id="root">${html}</div>`
            ).replace('"__SERVER_REDUX_STATE__"', reduxState)
        );
    });
};

// redirect / to /level/1
app.get('^/$', (req: any, res: any) => res.redirect('/level/1'));

app.get('^/level/:id(\\d+)$', indexAction);

// serve static resources as is
app.use(express.static(path.resolve(__dirname, "../build")));

// redirect unknown resources to /level/1
app.get('*', (req: any, res: any) => res.redirect('/level/1'));

app.listen(process.env.PORT || 3000);


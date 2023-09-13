import {ReactPropTypes} from "react";

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app: { use: (arg0: string, arg1: any) => void; }) {
    app.use(
        '/api', // Это путь, по которому будут отправляться запросы на сервер
        createProxyMiddleware({
            target: 'http://roud-map/index.html', // Адрес вашего PHP сервера
            changeOrigin: true,
        })
    );
};
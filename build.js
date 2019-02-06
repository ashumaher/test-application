const path = require("path");
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const fs = require('fs');
const pug = require('pug');
const cleanCSS = require('clean-css');
const postCSS = require('postcss');
const autoprefixer = require('autoprefixer');
const prefixer = postCSS([autoprefixer({
    add: true,
    browsers: 'last 3 versions'
})]);
const express = require("express");
const compression = require('compression');
const app = express();

function minifySplashCss() {
    return new Promise(resolve => {
        prefixer
            .process(new cleanCSS().minify(
                fs.readFileSync(__dirname + '/src/assets/css/splash.css')
            ).styles, {
                from: undefined
            })
            .then((result) => {
                resolve(result.css);
            });
    });
}

function buildApplication() {
    return new Promise(resolve => {
        webpack(webpackConfig).run((err, data) => {
            resolve(data.hash);
        });
    });
}

function indexFile(hash, css) {
    return new Promise(resolve => {
        fs.writeFileSync(__dirname + '/out/index.html', pug.compileFile(__dirname + '/index.pug')({
            applicationScriptSrc: `/assets/js/application.${hash}.js`,
            splashCss: css
        }));

        resolve();
    });
}

async function build() {
    const hash = await buildApplication();
    const css = await minifySplashCss();

    await indexFile(hash, css);
}

build().then(() => {
    startServer();
});

function startServer() {
    app.use(compression());
    app.use(express.static(path.join(__dirname, 'out')));

    app.get('*', (request, response) => {
        response.sendFile(path.join(__dirname, 'out/index.html'));
    });

    app.listen(3001);

    console.log('Started');
}
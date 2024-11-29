
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { watchFile } = require("fs");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        f
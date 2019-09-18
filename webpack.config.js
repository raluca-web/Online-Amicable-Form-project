const path = require("path");
const entryPath = "./";
const entryFile = "main.js";

module.exports = {
    entry: `${entryPath}src/${entryFile}`,
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, `${entryPath}/js`)
    },
    devServer: {
        contentBase: path.join(__dirname, `${entryPath}`),
        publicPath: "/js/",
        compress: true,
        port: 3001
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
};

module.exports = {
    plugins: [
        require("postcss-nested"),
        require("autoprefixer"),
        require("postcss-import"),
        require("postcss-preset-env")({
            stage: 3
        })
    ]
};

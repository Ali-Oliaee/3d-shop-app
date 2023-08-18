const path = require("path")

module.exports = function (api) {
  api.cache(true)
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        require.resolve("babel-plugin-module-resolver"),
        {
          cwd: "babelrc",
          extensions: [".ts", ".tsx", ".js", ".ios.js", ".android.js"],
          alias: {
            "@components": path.resolve(__dirname, "src/components"),
            "@screens": path.resolve(__dirname, "src/containers/screens"),
            "@models": path.resolve(__dirname, "src/models"),
          },
        },
      ],
      "jest-hoist",
    ],
  }
}

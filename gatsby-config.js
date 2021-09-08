module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        sassOptions: {
          postCssPlugins: [
            require("tailwindcss"),
            require("./tailwind.config.js")
          ]
        }
      }
    }
  ],
};
# A super simple Gatsby Starter 

Includes Sass + Tailwind out of the box with absolute paths to components and styles directories.

Clone, remove the example component, code.

Based on [Gatsby Starter Hello World](https://www.gatsbyjs.com/starters-next/gatsbyjs/gatsby-starter-hello-world/)

## Getting started

- Clone this repo
- Run `yarn` to install dependencies
- Run `yarn dev` to start the development server

Note that for **Tailwind** to work you need to keep the classes `@import` on the global SASS file and then `import` that file on `gatsby-browser.js` or on your layout component.

You can `import` your components with the absolute `@components` path, say goodbye to `../../../my-component`
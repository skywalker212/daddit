### Simple React Template

A simple enough react boilerplate; built using `webpack`, served by
`webpack-dev-server`, comes with `lodash`, `axios` and `jquery`.


## Setup

- `yarn install`
- Build for dev- `yarn build-dev`
- Build for prod- `yarn build-prod`
- Running Tests- `yarn test`
- Run in localhost:3000 & open in browser(auto watch)- `yarn start`

## What's included

- `webpack` is used to build and bundle
- `scss` is used as `css` pre-processor
- `babel` is used to transpile `es6`-> `es5`
- `eslint` is used for linting
- `axios` is included as http request framework
- `jquery` is included
- `lodash` is included
- `bootstrap` is used for basic component styling & structure
- `font-awesome` is used for icon fonts

## How it's structured and should be

   ```
   |-- src
      |-- components
         |-- main (the component that's responsible for view switching based on route)
            |-- main.jsx
         |-- another.component
            |-- component.jsx
            |-- _component.scss
         |-- _components.scss (all the .scss partials defined in different components are referenced here)
      |-- views
          |-- home.jsx (or can be a directory of a view)
          |-- another.view
              |-- another.view.jsx
              |-- _another.view.scss
          |-- _views.scss (all the .scss partials defined in different views are referenced here)
      |-- index.scss (refers _components.scss, _views.scss and any other .scss partials)
      |-- index.jsx (the entry point where the app renders the main component and which eventually renders the views
          based on selected route)
   ```

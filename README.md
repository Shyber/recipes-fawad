# Introduction

My go-to stack is React-TypeScript-MobX using the Material-UI framework. (Check out [Mobx](https://github.com/mobxjs/mobx)).

However, this sample clearly mentioned the use of Redux for state management and Thunk, so I avoided MobX and even Typescript. However, I stuck with Material UI for UI needs.

Over time, I've created my own vanilla boiler plate for projects at Evolve, which just get updated and used from one project to another. Therefore, I looked around for a well crafted boiler-plate instead of starting from scratch and then made the necessary changes.

What I used:

* ⚛ React — 16.8.6
* ♻ Redux with Redux Thunk — State Management with middleware to handle async requests
* 🛠 Babel — ES6 syntax, Airbnb & React/Recommended config
* 🚀 Webpack — Hot Reloading, Code Splitting, Optimized Build
* 💅 UI/CSS — [Material-UI] (https://material-ui.com/)
* ✅ Tests — Jest, React Testing Library 
* 💖 Lint — ESlint

Heavily inspired from [React-BOLT] (https://github.com/leonardomso/react-bolt)

Commands:

* Lint: yarn lint
* Test: yarn test
* Debug: yarn start
* Build: yarn build

# Directory Structure

* Root                                  *Root Directory*
    * config                            *All configurations (eg Webpack, Jest, etc) go here in their own subfolders*
    * tests                             *Root Directory for all tests*
        * components_tests              *Directory for unit tests for components/containers
        * actions_tests                 *Directory for unit tests for actions
        * reducers_tests                *Directory for unit tests for reducers
    * src                               *Root Directory for app source*
        * *index.html*                  *Main landing page*
        * *index.js*                    *App entry point*
        * App                           *Application Code Folder*
            * actions                   *Root folder for redux actions*
            * providers                 *Custom hooks for the app
            * components                *Root folder for UI/Dumb Components*
                * COMPONENT1            *Sample Component (each component will have its own folder)*
                    * *COMPONENT1*.js   *The component implementation JS/JSX file*
                    * index.js          *The component export file*
                    * styles.js         *(Optional) Component style file. JS files are used for inline styling for Material-UI* 
            * constants                 *Constants root folder for literals, keys, etc.*
            * containers                *Larger Smart Components/Container Root folder. Similar heirarchy as above component*
            * reducers                  *Root reducers folder (index.js export individual reducers)*
            * services                  *Root services folder*
                * transforms            *Folder for storing json/data transforms on the data retrieved by services*
            * stores                    *Stores folder*


# Change Log
11th March 2021 Updates:
* Filtering feature added which accepts comma separated terms (using OR logic) to filter the list.
* Updated reducers/actions/tests for this feature. 

3rd March 2021 Updates:
* Replaced class components with functional. 
* Put in a sample hook to show feedback using modals/dialogs/drawers
* Some husky config updates

30th October 2019 Updates:
* I was going to skip writing tests again, but decided to give it a bit more time and write some basic tests.

29th October 2019 Updates:
* I've uploaded the source code to a temp Github account
* I'll be making all commits directly to master instead of a dev branch and then merge at end.


## Tests
* I've added some pretty basic component tests. If I had more time, I would've expanded upon click/load action of the button and fake actions.
* I've included an actions unit test.
* I've included a reducer unit test.

## Other points
* I haven't given much thought to routing, the hamburger icon can be used to navigate to other areas of the site like contact or about us, that will have their own routes (as shown in commented out code).
* I would've used an ID based routing to open up a particular recipe in detail view, for direct share etc.









Thanks!

- Fawad
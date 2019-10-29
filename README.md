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
    * src                               *Root Directory for app source*
        * *index.html*                  *Main landing page*
        * *index.js*                    *App entry point*
        * App                           *Application Code Folder*
            * actions                   *Root folder for redux actions*
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

29th October 2019 Updates:
* I've uploaded the source code to a temp Github account
* I'll be making all commits directly to master instead of a dev branch and then merge at end.
* Small disclaimer, I apologize for skipping the PDF *again* and started working off the points in the email response. 

## What I would've done next
* I left RecipeGalleryMain as a component instead of a pure function so that instead of the load recipes button loading data,
I'd use its componentDidMount method to dispatch the fetch action. 
* Change how the mockup data is loaded, possibly use [JSON-Server](https://github.com/typicode/json-server). For now, I haven't changed it much, just got it out of the src folder.
* Used more try-catches and corner case handling.

## Other points
* I haven't given much thought to routing, the hamburger icon can be used to navigate to other areas of the site like contact or about us, that will have their own routes (as shown in commented out code).
* I would've used an ID based routing to open up a particular recipe in detail view, for direct share etc.









Thanks!

- Fawad
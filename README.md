My go-to stack is React-TypeScript-MobX using the Material-UI framework. (Check out [Mobx](https://github.com/mobxjs/mobx)).

However, this sample clearly mentioned the use of Redux for state management and Thunk, so I avoided MobX and even Typescript. However, I stuck with Material UI for UI needs.

Over time, I've created my own vanilla boiler plate for projects at Evolve, which just get updated and used from one project to another. Therefore, I looked around for a well crafted boiler-plate instead of starting from scratch and then made the necessary changes.

What I used:

⚛ React — 16.8.6
♻ Redux with Redux Thunk — State Management with middleware to handle async requests
🛠 Babel — ES6 syntax, Airbnb & React/Recommended config
🚀 Webpack — Hot Reloading, Code Splitting, Optimized Build
💅 UI/CSS — Material UI (https://material-ui.com/)
✅ Tests — Jest, React Testing Library 
💖 Lint — ESlint

Heavily inspired from React-BOLT (https://github.com/leonardomso/react-bolt)

Commands:

Lint: yarn lint
Test: yarn test
Debug: yarn start
Build: yarn build

Usually we setup up .env files and use dotenv for configuring API urls and keys. Because we mostly use jwt tokens, we keep it saved in LocalMemory till we get a 401 from API and refresh it.

I also didn't get a time to write any test cases, it's just the test setup that runs but that came with the boiler.

Thanks!

- Fawad
# ReactNg

## Comparing React and Angular in a non-trivial application

## Pre-requisites
```
npm install -g webpack
npm install -g yarn 
npm install -g angular-cli
npm install -g json-server
```

## Install and run Angular Example
```
cd ng-web 
yarn (or npm install)
ng serve
```

## Install and run React Example (TODO)
```
cd react-web
yarn (or npm install)
npm start
```

## Running the backend
```
npm run backend
```

### Note on Backend Delay
The backend script has a deliberate 2 second delay on the rest interface to demonstrate how the application handles latency.  If this is annoying for you, change the script in the root package.json.

## Goals
Developers researching these frameworks need to see an example that is as comparable as possible so that the real differences between each framework can be clearly understood.

- Shared rest backend
- Identical Functionality
- Identical Design - It's a bit shite at the moment but it's identically shite ;)
- Identical design decisions
  - Granularity of components
  - Layout of folders
  - Synchronisation with backend
    - Redux pattern (redux and @ngrx/store) for application state
    - Side Effects pattern for updating
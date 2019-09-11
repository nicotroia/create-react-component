# React Component Scaffolder

## Installation 
  - `npm install -g https://github.com/nicotroia/create-react-component.git`

## Usage
  - `create-react-component init`

## Update
  - Bump package.json version
  - git push 
  - ~~npm publish~~

## Input
 - name (Sidebar)
 - dir (src/components/)
 - hasIndex (Y/n)
 - hasStyles (Y/n)
 - hasActions (Y/n)
 - hasConstants (Y/n)
 - hasReducers (Y/n)
 - hasSelectors (Y/n)
 - hasTests (Y/n)
 - hasStories (Y/n)
 - flavor
   - js
   - tsx

## Output
  - src
    - components
      - Sidebar
        - index.js
        - Sidebar.js
        - sidebar.styl
        - actions.js
        - constants.js
        - reducer.js
        - selectors.js
        - \_\_tests\_\_
          - Sidebar.spec.js
          - actions.spec.js
          - reducer.spec.js
          - selectors.spec.js
        - \_\_stories\_\_
          - Sidebar.story.js

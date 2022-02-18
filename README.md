# Project 2: Signal Information

## Project Description
Live Bitcoin inditcator using the Relative Strength Index (RSI: 1 hour).
Collect data from an API and display using React. 
Description of RSI.

## Requirements
### Website must:
[x] Be a working, interactive, React application.
[x] Include data from a third-party API.
[x] TRY OUT your API in the browser by making an fetch request before you get too emotionally invested in it, to make sure it works the way you think it does...YOU ARE REQUIRED TO SHOW US YOU CAN RECEIVE THE DATA FOR YOUR PROPOSAL
[x] Include React Router with at least 2 routes
[x] Have at least 5 separate components, using a readable file structure.
[x] Be built using Create React App.
[x] Implement responsive design using flexbox, grid, or another css framework.
[x] Use React Hooks
[x] Be deployed on github pages


### Code must:
[x] Be properly indented.
[x] Be written with semantic, camelCase JavaScript variable names.
[x] Be written with kebab-case (dashes) CSS class names.
[x] Contain no console.log() or commented out code in final version.
[x] Use only React for DOM manipulation.
[] No pre-loaded create-react-app files or code.

## Necessary Deliverables
[] Commits min. 15
[x] A Professional README
[x] A Complete Project Proposal

### API
Bitcoin Relative Strength Index
{
"value": 54.495770202288455
}

'https://api.taapi.io/'



## MVP
[x] Bitcoin RSI Data (API) on its own page
[x] RSI description (simplified)
[x] Routes using React Router

## Post MVP
[x] Enter/Exit signals on RSI page
Additional data from another indicator (API)
RSI chart
Bitcoin Price (API) on Home page

## Components

| Components | Priority | Estimated Time | Actual Time |
| ---------- | -------- | -------------- | ----------- |
| Link pages | H | 1.5hrs | 2hrs | 
| Nav Bar | H | 2.5hrs | 1hr |
| Colors/theme | L | 1hr | 2hrs |
| CSS grid and flex | H | 3hrs | 2hrs | 
| API's | H | 3hrs | 5hrs | 
| (PMVP) Javascript Entry/Exit signal | L | 5hrs | 3hrs |
| Routes | H | 2hrs | 2hr |
| Home Page | H | 3hrs | 3hrs |
| RSI Page | H | 6hrs | 5hrs |
| Footer | H | 1hr | 1.5hrs |


## Additional Libraries
Bootstrap

### Code Snippet

{// function result(rsiValue) {
            if (rsiValue.value >= 70) {
          result = 'exit';
        } 
        else if (rsiValue.value <= 30) {
            result = 'enter';
            }
        else {
          result = 'please wait for signal';
        }
        return (
            <p>{result}</p>
            );
    }}

### Architecture and Wireframe
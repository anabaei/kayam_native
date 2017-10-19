### Kayam Mobile Version

#### When React calls Render Function
* React has a virtual DOM and only updates the real DOM when required to re-render. A re-render can only be triggered if a component’s state has changed. The state can change from a props change, or from a direct setState change. 
* Not really smart now! Component changed? Re-render. Parent changed? Re-render. Section of props that doesn't actually impact the view changed? Re-render. re-rendering unnecessarily does waste cycles but React plays it safe and re-renders whenever there’s a change to the state, important or not.


##### shouldComponentUpdate 
* When React comes to render it will first check if the state has changed (or props) then React will evaluate if shouldComponentUpdate is true or false, and decide to render only if it is true.
* Notice Returning false does not prevent child components from re-rendering when their state changes but this only applies to the children’s state but not their props.

#### Check performance 
* it is suggested Use React’s Performance [Tools](https://reactjs.org/docs/perf.html) to find wasted cycles:

```javascript
Perf.start()
// Do the render
Perf.stop()
Perf.printWasted()
```

## Debug
* install and use debug tool 
```javascript
npm install -g react-devtools
```
* Then run
```javascript
react-devtools
```

#### JS notes
* Arrow functions dont have its own this and are best to use parent this. Also first arguments before arrow are params and after arrow are return object, good [resource](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

- React JS is a JavaScript Library used to enhance web interfaces. It was invented at Facebook back in 2013.
  It gives a web page more efficiency and takes a lot a weight off the browser. The purpose of React was to
  allow developers to build complex user interfaces without writing a lot of vanilla JavaScript. One of it's main core concepts is the implementation of the virtual DOM that helps reduces the number of renders on the browser by only updating the changed component not all the page.

1. What does it mean to think in react?

- Thinking in React means to think about you compose and structure your page based on components that have parent child relation.
  And also having every single component render a small part of web page, which makes it easier when debugging the code.

1. Describe state.

- A state in React is always related to its component is declared at. We can add states to components by use the useState hook.
  The state of a component is the data that belongs to that component over its life cycle that we can keep track of when it's changed or setting it to different values if we need to.

1. Describe props.

- Props in React are the same as arguments in JavaScript. They're passed when the component is called, so then when defining the
  component we can use the values passed by accessing the parameter variable and then the prop name.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

- Side effects in React are effects that happens outside of the scope of React. like "getting data from an API, using timers ..."
  In React we have to option to run blocks of code when a certain effect happens. We can do that using the useEffect hook.
  Its first argument is the a callback function specifying the code block we want to run and the second argument is the dependencies that
  we could sync to it. We can pass the variables in the dependency array to tell React to only run the code block when one or more dependency state changes. useEffect also can return a function which is used for cleanup of the older effects.

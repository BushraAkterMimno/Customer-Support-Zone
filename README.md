# b12a7-customer-support-zone-BushraAkterMimno


# 1. What is JSX, and why is it used?

Ans:
JSX is a syntax extension for JavaScript used in React. It allows you to write HTML-like code inside JavaScript.

👉 Makes code more readable and declarative.

👉 Allows combining UI (HTML) and logic (JS) in one place.

👉 Compiles down to React.createElement() calls.




# 2. What is the difference between State and Props?

Ans:

→ State

👉 Data managed within a component

👉 Component can change it

👉 Inside the component

👉 User input, toggle button, form data



→ Props

👉 Data passed to a component

👉 Read-only

👉 In the parent component

👉 Passing title, color, function to a child component




# 3. What is the useState hook, and how does it work?

Ans:
useState is a React Hook that lets you add state to functional components.


👉 count → current state value

👉 setCount → function to update state

👉 When setCount(newValue) is called → component re-renders with new state





# 4. How can you share state between components in React?

Ans:
State is local to a component, but sometimes needs to be shared. Ways to do it:

Lift state up → Move state to the nearest common parent and pass it as props.

Context API → For deeply nested components (avoid “prop drilling”).

State management libraries → Like Redux, Zustand, or Recoil for large apps.





# 5. How is event handling done in React?

Ans:
In React, events are handled similar to DOM events but with some differences:

👉 CamelCase naming (onClick, onChange) instead of lowercase (onclick).

👉 Pass a function instead of a string.

👉 React uses a synthetic event system for better cross-browser compatibility.
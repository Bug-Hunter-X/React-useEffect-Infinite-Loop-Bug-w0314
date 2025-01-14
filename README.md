# React useEffect Infinite Loop Bug
This repository demonstrates a common error in React applications: an infinite loop caused by improper use of the `useEffect` hook.

The `bug.js` file contains the buggy code. The `bugSolution.js` file shows the corrected implementation.

## Problem
The `useEffect` hook in `bug.js` attempts to update the `count` state within its callback function without any dependency array. This causes an infinite loop because the state update triggers a re-render, which in turn re-invokes the `useEffect` hook, leading to a continuous cycle of state updates.
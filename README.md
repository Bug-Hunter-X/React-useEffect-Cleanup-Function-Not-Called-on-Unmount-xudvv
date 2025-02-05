# React useEffect Cleanup Function Not Called on Unmount

This repository demonstrates a common error in React's `useEffect` hook where the cleanup function isn't called when the component unmounts. This can lead to memory leaks and unexpected behavior.

## The Bug

The `bug.js` file contains a component that uses `useEffect` to set up an interval. However, the interval is not cleared when the component unmounts due to an issue with the dependency array.

## The Solution

The `bugSolution.js` file provides the correct implementation. It adds the necessary dependency to the `useEffect` hook's dependency array, ensuring that the cleanup function is called on unmount.
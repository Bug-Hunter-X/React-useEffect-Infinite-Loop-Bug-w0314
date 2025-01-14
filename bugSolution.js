```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Only runs once on mount
    setCount(count + 1);
  }, []); // Empty dependency array ensures it only runs once

  return <div>Count: {count}</div>;
}
```
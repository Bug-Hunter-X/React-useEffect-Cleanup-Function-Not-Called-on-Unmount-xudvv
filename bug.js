```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: componentWillUnmount is not called when unmounting
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}
```
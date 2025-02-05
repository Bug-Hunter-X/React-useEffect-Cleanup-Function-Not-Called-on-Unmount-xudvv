```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []); // Fixed: empty dependency array

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}
```
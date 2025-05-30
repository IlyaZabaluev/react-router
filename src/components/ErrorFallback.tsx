export const ErrorFallback = () => (
  <div>
    <h2>Something went wrong</h2>
    <button onClick={() => window.location.reload()}>Reload Page</button>
  </div>
);
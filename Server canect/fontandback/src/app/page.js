
import { useEffect, useState } from 'react';

export default async function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/about');
      const result = await response.json();
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Welcome to the Page</h1>
      <p>{data ? data.message : 'Loading...'}</p>
    </div>
  );
}

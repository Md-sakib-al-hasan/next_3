import Image from "next/image";

export default async function Home() {
  const response = await fetch('/api/about');
  const data = await response.json();

  return (
    <div>
      <h1>Welcome to the Page</h1>
      <p>{data.message}</p>
    </div>

  );
}

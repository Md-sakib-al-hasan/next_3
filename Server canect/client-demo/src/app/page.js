import Image from "next/image";

export default async function Home() {
      const res = await fetch("https://demoserver-f08osd3ya-md-sakibs-projects-0c3367a4.vercel.app/booking")
      const result = await res.json();
      console.log(result)


  return (
    <div>
      <p className="text-2xl">sk</p>
      <ul>
      {
        result.map((person,id) => <li key={id}>Name: {person.customerName}</li> )
      }
      </ul>
    </div>
  );
}

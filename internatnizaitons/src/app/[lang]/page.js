import Image from "next/image";
import { getDictionary } from "../../../getDctionary";

export default async function Home({ params }) {
  console.log(params.lang)
  const data = await getDictionary(params.lang)
  console.log(data)
  return (
    <main>
      <p>page gs</p>
    </main>
  );
}

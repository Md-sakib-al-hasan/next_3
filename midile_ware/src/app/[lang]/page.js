import Image from "next/image";
import { getDictionary } from "../../../getDictionary";

export default async function Home({ params }) {
  const lang = await getDictionary(params.lang)
  console.log(lang)
  return (
    <main className="">
      <p>This is Home page</p>
    </main>
  );
}

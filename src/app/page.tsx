import Image from "next/image";
import { MyForm } from "~/components/MyForm";

export default function Home() {
  return (
    <main className="flex">
      <MyForm />
    </main>
  );
}

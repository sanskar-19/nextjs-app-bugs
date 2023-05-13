import Link from "next/link";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return <section>
    This is home page
    <Link href={"/random-not-existing"}>Go to not existing page</Link>
  </section>
}

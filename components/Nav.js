import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-gray-900 text-white" role="navigation" aria-label="main navigation">
      <div className="flex justify-center font-bold py-4">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a className="mx-4">About</a>
        </Link>
        <Link href="/sample">
          <a>mdx Sample Site</a>
        </Link>
      </div>
    </nav>
  )
}

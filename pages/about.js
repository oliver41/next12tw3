import Head from 'next/head'

export default function About() {
  return (
    <div>
      <Head>
        <title>About us</title>
      </Head>
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-4xl font-bold">About us</h1>
      </div>
    </div>
  )
}
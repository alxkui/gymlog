import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="p-1">
        <h1 className="text-5xl py-4 font-bold">Gym Log</h1>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

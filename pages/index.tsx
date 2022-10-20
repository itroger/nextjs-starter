import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <h2>The React Framework for Production.</h2>
      <h3>Page Rendering</h3>
      <ul>
        <li>
          <Link href="/ssg">Static Site Generation</Link>
        </li>
        <li>
          <Link href="/ssg-data">Static Site Generation With Data</Link>
        </li>
        <li>
          <Link href="/ssr">Server-side Rendering</Link>
        </li>
        <li>
          <Link href="/csr-fetch">Client-side Rendering Using Fetch</Link>
        </li>
        <li>
          <Link href="/csr-swr">Client-side Rendering Using SWR</Link>
        </li>
        <li>
          <Link href="/dynamic-routes/123">Dynamic Routes</Link>
        </li>
      </ul>
      <h3>API Routes</h3>
      <ul>
        <li>
          <Link href="/api-routes">API Routes</Link>
        </li>
        <li>
          <Link href="/dynamic-api-routes/123">Dynamic API Routes</Link>
        </li>
      </ul>
      <h3>Error Pages</h3>
      <ul>
        <li>
          <Link href="/404">404</Link>
        </li>
        <li>
          <Link href="/error">500</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home

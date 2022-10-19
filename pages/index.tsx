import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <h2>Example: Next.js</h2>
      <h3>The React Framework for Production.</h3>
      <h3>页面渲染</h3>
      <ul>
        <li>
          <Link href="/ssg">静态生成</Link>
        </li>
        <li>
          <Link href="/ssg-data">静态生成-有数据</Link>
        </li>
        <li>
          <Link href="/ssr">服务端渲染</Link>
        </li>
        <li>
          <Link href="/csr-fetch">客户端渲染-fetch</Link>
        </li>
        <li>
          <Link href="/csr-swr">客户端渲染-swr</Link>
        </li>

        <li>
          <Link href="/dynamic-routes/123">动态路由</Link>
        </li>
      </ul>
      <h3>API 路由</h3>
      <ul>
        <li>
          <Link href="/api-routes">API 路由</Link>
        </li>
        <li>
          <Link href="/dynamic-api-routes/123">动态 API 路由</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home

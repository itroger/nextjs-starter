import useSWR from 'swr'

// @ts-ignore
const fetcher = (...args) => fetch(...args).then(res => res.json())

const APIRoutes = () => {
  const { data } = useSWR('/api/api-routes', fetcher)

  return (
    <div>
      <h2>API Routes</h2>
      <p>
        使用 <code>pages/api</code> 创建 API 路由
      </p>
      <p>HTTP Request Method: {data?.method}</p>
    </div>
  )
}

export default APIRoutes

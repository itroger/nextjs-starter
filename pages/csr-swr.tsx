import useSWR from 'swr'

// @ts-ignore
const fetcher = (...args) => fetch(...args).then(res => res.json())

const CSRSWR = () => {
  const { data } = useSWR('/api/fetch-data?render=Client-side Rendering With SWR', fetcher)

  return (
    <div>
      <h2>Client-side Rendering With SWR</h2>
      <p>使用 SWR 获取数据</p>
      <p>Render: {data?.render}</p>
    </div>
  )
}

export default CSRSWR

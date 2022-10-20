import useSWR from 'swr'

// @ts-ignore
const fetcher = (...args) => fetch(...args).then(res => res.json())

const CSRSWR = () => {
  const { data } = useSWR('/api/fetch-data?render=Client-side Rendering Using SWR', fetcher)

  return (
    <div>
      <h2>Client-side Rendering Using SWR</h2>
      <p>
        使用 <code>SWR</code> 获取数据。
      </p>
      <h3>Example</h3>
      <p>Render: {data?.render}</p>
    </div>
  )
}

export default CSRSWR

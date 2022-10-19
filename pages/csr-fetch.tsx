import { useEffect, useState } from 'react'

const CSRFetch = () => {
  const [render, setRender] = useState<string>()

  useEffect(() => {
    fetch('/api/fetch-data?render=Client-side Rendering With Fetch')
      .then(res => res.json())
      .then(res => setRender(res.render))
  })

  return (
    <div>
      <h2>Client-side Rendering With Fetch</h2>
      <p>使用 fetch 和 useEffect 获取数据</p>
      <p>Render: {render}</p>
    </div>
  )
}

export default CSRFetch

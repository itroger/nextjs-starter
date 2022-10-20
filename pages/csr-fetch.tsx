import { useState, useEffect } from 'react'

const CSRFetch = () => {
  const [render, setRender] = useState<string>()

  useEffect(() => {
    fetch('/api/fetch-data?render=Client-side Rendering Using Fetch')
      .then(res => res.json())
      .then(res => setRender(res.render))
  })

  return (
    <div>
      <h2>Client-side Rendering Using Fetch</h2>
      <p>
        使用 <code>fetch</code> 和 <code>useEffect</code> 获取数据。
      </p>
      <h3>Example</h3>
      <p>Render: {render}</p>
    </div>
  )
}

export default CSRFetch

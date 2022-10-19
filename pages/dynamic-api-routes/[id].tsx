import { GetStaticPaths, GetStaticProps } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: '123' } }],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const { id } = context.params

  const { method } = await fetch(`http://localhost:3000/api/dynamic-api-routes/${id}`).then(res => res.json())

  return {
    props: { method },
    revalidate: 10
  }
}

const DynamicAPIRoutes = props => {
  const { method } = props

  return (
    <div>
      <h2>Dynamic API Routes</h2>
      <p>
        使用 <code>pages/api/xx/[id].ts</code> 创建动态 API 路由
      </p>
      <p>HTTP Request Method: {method}</p>
    </div>
  )
}

export default DynamicAPIRoutes

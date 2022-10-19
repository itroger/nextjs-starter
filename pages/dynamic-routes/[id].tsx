import { GetStaticPaths, GetStaticProps } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: '123' } }],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const { id } = context.params

  return {
    props: { id, render: 'Dynamic Routes' },
    revalidate: 10
  }
}

const DynamicRoutes = props => {
  const { id, render } = props

  return (
    <div>
      <h2>Dynamic Routes</h2>
      <p>
        使用 <code>page/xx/[id].tsx</code> 创建动态路由
      </p>
      <p>使用 getStaticPaths 和 getStaticProps 根据特定路由获取相应数据</p>
      <p>
        Render: {render} With {id}
      </p>
    </div>
  )
}

export default DynamicRoutes

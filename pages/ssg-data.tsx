import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      render: 'Static Generation With Data'
    }
  }
}

const SSGData = props => {
  const { render } = props

  return (
    <div>
      <h2>Static Site Generation With Data</h2>
      <p>
        使用 <code>getStaticProps</code> 通过 props 传递数据给页面组件。
      </p>
      <h3>Example</h3>
      <p>Render: {render}</p>
    </div>
  )
}

export default SSGData

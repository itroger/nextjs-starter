import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      render: 'Server-side Rendering'
    }
  }
}

const SSR = props => {
  const { render } = props

  return (
    <div>
      <h2>Server-side Rendering</h2>
      <p>使用 getServerSideProps 通过 props 传递数据给页面组件</p>
      <p>Render: {render}</p>
    </div>
  )
}

export default SSR

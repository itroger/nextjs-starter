import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async () => {
  throw 'Server-side Error'
  return {
    props: {}
  }
}

const Error = () => {
  return (
    <div>
      <h2>Error</h2>
      <p>仅发生在 Server-side Rendering 的错误</p>
    </div>
  )
}

export default Error

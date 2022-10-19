import Error from 'next/error'

const Custom500 = () => {
  return <Error statusCode={500} title="Internal Server Error" withDarkMode={false} />
}

export default Custom500

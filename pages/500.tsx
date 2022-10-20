import Error from 'next/error'

const Custom500 = () => {
  return (
    <div className="flex-grow flex justify-center items-center">
      <Error statusCode={500} title="Internal Server Error" withDarkMode={false} />
    </div>
  )
}

export default Custom500

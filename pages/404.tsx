const Custom404 = () => {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center">
      <div className="flex items-center gap-6">
        <h1 className="flex items-center text-2xl font-medium h-12 leading-10 m-0 pr-5 border-r border-gray-400">
          404
        </h1>
        <h2 className="flex items-center text-sm font-normal h-12 leading-10 m-0">Page Not Found.</h2>
      </div>
    </div>
  )
}

export default Custom404

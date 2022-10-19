const Layout = ({ children }) => {
  return (
    <div className="flex justify-center">
      <main className="max-w-5xl w-full prose">{children}</main>
    </div>
  )
}

export default Layout

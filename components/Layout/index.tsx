const Layout = ({ children }) => {
  return (
    <div className="flex justify-center">
      <main className="max-w-5xl w-full px-4 prose">{children}</main>
    </div>
  )
}

export default Layout

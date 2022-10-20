import Image from 'next/image'
import Link from 'next/link'

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <header className="max-w-5xl w-full px-4">
        <Link href="/">
          <a>
            <Image src="/favicon.svg" width={128} height={56} className="cursor-pointer" alt="logo" />
          </a>
        </Link>
      </header>
      <main className="flex-grow flex max-w-5xl w-full px-4 prose">{children}</main>
      <footer className="h-8">Developed by itroger</footer>
    </div>
  )
}

export default Layout

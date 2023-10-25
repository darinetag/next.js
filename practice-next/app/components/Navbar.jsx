import Link from 'next/link'


const Navbar = () => {
  return (
    <nav>
          <h2>navbar</h2>
          <Link href="/">Home</Link>
          <Link href="/tickets">Tickets</Link>
        </nav>
  )
}

export default Navbar
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/logo.png" width={150} height={77}  />
            </div>
            <Link href="/" id="home"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/sample"><a>Github</a></Link>
        </nav>
     );
}


 
export default Navbar;




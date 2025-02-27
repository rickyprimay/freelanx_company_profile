import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="pt-12.5 pb-10">
        <div className="container">
          <div className="flex lg:flex-row flex-col items-center justify-between gap-y-4">
            <div className="copyright-text">
              <p>Copyright <Link href="/" className="text-primary">&copy;DesignPro</Link> All Rights Reserved.</p>
            </div>
            <ul className="flex flex-wrap justify-center gap-x-7.5 gap-y-3">
              <li><Link href="">Latest Project</Link></li>
              <li><Link href="">Pricing</Link></li>
              <li><Link href="">Contact</Link></li>
              <li><Link href="">Privacy Policy</Link></li>
              <li><Link href="">Terms & conditions</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
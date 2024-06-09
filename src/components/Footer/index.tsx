import Image from "next/image";
import Link from "next/link";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  section: string;
  link: string[];
}

interface Social {
  imgsrc: string,
  href: string,
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Useful Links",
    link: ['Home', 'NFT-Collection'],
  }
]

const socialLinks: Social[] = [
  { imgsrc: '/images/Footer/insta.svg', href: "https://www.instagram.com/" },
  { imgsrc: '/images/Footer/dribble.svg', href: "https://dribble.com/" },
  { imgsrc: '/images/Footer/twitter.svg', href: "https://twitter.com/" },
  { imgsrc: '/images/Footer/youtube.svg', href: "https://youtube.com/" },
]


const footer = () => {
  return (
    <div className=" relative">
      <div className="radial-bg hidden lg:block"></div>
      <div className="mx-auto max-w-2xl mt-64 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

          <div className='col-span-6'>
          <h1 className="text-white text-3xl font-bold">Web3Template</h1>
            <h3 className='text-lightblue text-sm font-normal leading-9 mb-4 lg:mb-16'> XueDAO is the very first community in Taiwan focused on Student Developers led by Students!</h3>
            <div className='flex gap-4'>
              {socialLinks.map((items, i) => (
                <Link href={items.href} key={i}><Image src={items.imgsrc} alt={items.imgsrc} className='footer-icons' width={50} height={50} /></Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* All Rights Reserved */}

      <div className='py-8 px-4 border-t border-t-lightblue'>
        <h3 className='text-center text-offwhite'>@{new Date().getFullYear()} - All Rights Reserved by <Link href="https://github.com/crypto0627" target="_blank"> Jake Kuo</Link></h3>
      </div>

    </div>
  )
}

export default footer;

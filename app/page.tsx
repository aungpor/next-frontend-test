import Image from 'next/image'
import Link from 'next/link';
import Test from '../components/test'
import TableTest from '../components/table'
import backgroundImage from '../public/background.png'

export default function Home() {
  return (
    <div className='test'>
      <Image src={backgroundImage} alt="background" />
      <Test />
      <Link
        key={"test"}
        href={"http://localhost:3000/page2"}
        className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
      >
        <p>ทดสอบ Link</p>
      </Link>
      <TableTest />


    </div>
  )
}

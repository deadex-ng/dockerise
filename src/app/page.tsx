import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
  <div className="flex h-screen">
  <div className="m-auto">
    <button className='bg-gradient-to-r from-cyan-500 to-teal-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-white px-4 py-2 rounded-md ml-8' onClick={onButtonPress}>Login with Tonomy ID</button>
  </div>
 </div>
  )
}

'use client'

import Link from 'next/link'
import { Button } from '../ui/button';


function Header(){

   return (

       <div>
               
               <header className="flex shadow-md py-4 px-4 bg-white min-h-[70px] tracking-wide relative z-50">

                <div className="flex flex-wrap items-center justify-between gap-5 w-full">
                <Link href="/dashboard">Shopping Cart</Link>
                </div>

                

                  <ul className='flex gpa-6 space-x-4 items-center justify-center mr-10'>
                        <li className='text-lg font-semibold'>
                              <Link href={"/"}>Product</Link>
                        </li>

                        <li  className='text-lg font-semibold'>
                              <Link href={"/cart"}>Cart</Link>
                        </li>
                  </ul>
                  
                  <div>
                        <form className='flex space-x-3'>
                              <Button>Login</Button>
                        </form>
                  </div>


               </header>
            
         </div>
   )

}
export default Header;
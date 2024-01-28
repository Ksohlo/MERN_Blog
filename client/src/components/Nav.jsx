import React from 'react'
import { useLocation } from 'react-router-dom'
import { Button, Navbar, TextInput } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa'

export default function Nav() {
const path = useLocation().pathname
console.log(path);
  return (
    <Navbar className='border-b-2'>
        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
          <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>K_sohlo's</span>
          Blog
        </Link>
        <form>
          <TextInput 
            type='text'
            placeholder='search'
            rightIcon={AiOutlineSearch}
            className='hidden lg:inline'
          />
          
        </form>
        <Button className='w-12 h-10 inline lg:hidden' color='gray inline' pill>
            <AiOutlineSearch />
          </Button>
          <div className='flex gap-2 md:order-2'>
            <Button className="w-12 h-10 hidden sm:inline" color='gray' pill>
              <FaMoon />
            </Button>
            <Link to="/signin">
              <Button gradientDuoTone={'purpleToBlue'} outline>Sign in</Button>
            </Link>
          </div>
          <Navbar.Toggle className='w-10 h-10'/>
          <Navbar.Collapse className='lg:text-lg font-semibold'>
            <Navbar.Link as={'div'} active={path==='/Home'}>
              <Link to="/Home">Home</Link>
            </Navbar.Link>
            <Navbar.Link as={'div'} active={path==='/about'}>
              <Link to="/about">About</Link>
            </Navbar.Link>
            <Navbar.Link as={'div'} active={path==='/project'}>
              <Link to="/project">Projects</Link>
            </Navbar.Link>
          </Navbar.Collapse>
    </Navbar> 
  )
}

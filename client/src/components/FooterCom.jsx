import React from 'react'
import { Link } from 'react-router-dom'
import { Footer } from 'flowbite-react'
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs'

export default function FooterCom () {
    
    return (
        <Footer container className='border border-t-8 border-teal-500'>
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid w-full justify-between sm:flex md:grid-cols-5">
                    <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                    <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>K_sohlo's</span>
                    Blog
                    </Link>
                    <div className='grid grid-cols-2 gap-8 mt-4 sm:mt-4 sm:grid-cols-3 sm:gap-6'>
                        <div>
                            <Footer.Title title="About" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="http://www.100jsprojects.com" target='-blank' rel='noopener noreferrer{'>100 JS Projects
                                </Footer.Link>

                                <Footer.Link href="/about" target='-blank' rel='noopener noreferrer{'>K_sohlo's Blog
                                </Footer.Link>

                                
                            </Footer.LinkGroup>
                        </div>

                        <div>
                            <Footer.Title title="FOLLOW US" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="https://github.com/Ksohlo" target='-blank' rel='noopener noreferrer{'>Github
                                </Footer.Link>

                                <Footer.Link href="#" target='-blank' rel='noopener noreferrer{'>Discord
                                </Footer.Link>

                                
                            </Footer.LinkGroup>
                        </div>

                        <div>
                            <Footer.Title title="LEGAL" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#" target='-blank' rel='noopener noreferrer{'>Privacy Policy
                                </Footer.Link>

                                <Footer.Link href="#" target='-blank' rel='noopener noreferrer{'>Terms & Conditions
                                </Footer.Link>

                                
                            </Footer.LinkGroup>
                        </div>
                        
                    </div>
                </div>
                <Footer.Divider />
                <div className='w-full sm:flex sm:items-center sm:justify-between'>
                    <div>
                        <Footer.Copyright href='#' by="K_sohlo's Blog" year={new Date().getFullYear()} />
                    </div>
                    <div className="flex gap-5 sm:mt-3 mt-4 justify-center">
                        <Footer.Icon href='#' icon={BsFacebook}/>
                        <Footer.Icon href='#' icon={BsInstagram}/>
                        <Footer.Icon href='#' icon={BsTwitter}/>
                        <Footer.Icon href='https://github.com/Ksohlo' icon={BsGithub}/>
                        <Footer.Icon href='#' icon={BsDribbble}/>
                    </div>
                </div>
            </div>
        </Footer>
    )
    
}

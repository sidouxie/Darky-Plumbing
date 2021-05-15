import React from 'react'
import Link from 'next/link'
import {IoMenuOutline} from 'react-icons/io5'

function Menu({ toggle}) {
    return (
        <header>
            <nav>
                <div className="section-logo">

                </div>

                <div className="section-links">
                    <Link href="/services"><a>Services</a></Link>
                    <Link href="/about"><a>A propos</a></Link>
                    <Link href="/contact"><a>Contact</a></Link>
                </div>

                <div className="section-mobile">
                    <IoMenuOutline size="26"/>
                </div>
            </nav>
        </header>
    )
}

export default Menu

"use client";
import Link from 'next/link'

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-dark-blue">
            <header className="bg-dark-gray py-4">
                <nav className="container mx-auto flex justify-between items-center">
                    <Link href="/" className="text-2xl text-app-green font-bold">
                        HackerBlog
                    </Link>
                    <div>
                        <Link href="/about" className="text-light-gray hover:text-app-green mx-4">
                            About
                        </Link>
                        <Link href="/contact" className="text-light-gray hover:text-app-green">
                            Contact
                        </Link>
                    </div>
                </nav>
            </header>

            <main className="flex-grow container mx-auto p-6">
                {children}
            </main>

            <footer className="bg-dark-gray py-4 text-center text-light-gray">
                <p>&copy; 2024 HackerBlog. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Layout

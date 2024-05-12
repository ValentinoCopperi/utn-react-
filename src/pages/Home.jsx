import React from 'react'
import Nav from '../components/Nav'
import HomeBanner from '../components/home/HomeBanner'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function Home() {

    const stats = [
        {
            data: "35K",
            title: "Customers"
        },
        {
            data: "40+",
            title: "Countries"
        },
        {
            data: "30M+",
            title: "Total revenue"
        },
    ]

    return (
        <div>
            <Nav />
            <HomeBanner />
            <main className='min-h-[30vh]'>
                <section className='min-h-[80vh] flex flex-col justify-center'>
                    <div className='text-center w-[90%] h-full mx-auto'>
                        <h1 className='text-4xl p-4 text-purple-500'>Sky-Level</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore totam deleniti quod sapiente? Mollitia, dicta quaerat qui tempora dolore blanditiis explicabo ex, perferendis doloribus reprehenderit soluta, dolor natus quos autem.
                        </p>
                    </div>
                </section>
          
                <section className="py-28 bg-gray-900">
                    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                        <div className="max-w-2xl mx-auto text-center">
                            <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                                Our customers are always happy
                            </h3>

                        </div>
                        <div className="mt-12">
                            <ul className="flex flex-col gap-4 items-center justify-center sm:flex-row">
                                {
                                    stats.map((item, idx) => (
                                        <li key={idx} className="w-full text-center bg-gray-800 px-12 py-4 rounded-lg sm:w-auto">
                                            <h4 className="text-4xl text-white font-semibold">{item.data}</h4>
                                            <p className="mt-3 text-gray-400 font-medium">{item.title}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </section>

               
                    <section className="py-28" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.17) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}>
                        <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
                            <div className="max-w-xl space-y-3 md:mx-auto">
                                <h3 className="text-indigo-600 font-semibold">
                                    Professional services
                                </h3>
                                <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                                    Build the future with us
                                </p>
                                <p className="text-gray-600">
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.
                                </p>
                            </div>
                            <div className="mt-4">
                                <Link className="inline-block py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none">
                                    Get started
                                </Link>
                            </div>
                        </div>
                    </section>
                
            </main>
            <Footer />
        </div>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <section style={{ background: '#1f1f1f' }}>
    <div className='max-[600px]:items-center py-[80px] flex flex-col items-center justify-center'>
      <div>
        <h1 style={{ color: 'violet' , textAlign : 'center' }} className='lg : text-3xl py-2'>Sky-Level</h1>
        <div>
          <i className="fa-brands fa-instagram fa-2xl text-[#6a6a6a] cursor-pointer hover:text-white duration-200 mx-2"></i>
          <i className="fa-brands fa-whatsapp fa-2xl text-[#6a6a6a] cursor-pointer hover:text-white duration-200 mx-2"></i>
          <i className="fa-brands fa-x-twitter fa-2xl text-[#6a6a6a] cursor-pointer hover:text-white duration-200 mx-2"></i>
          <i className="fa-brands fa-facebook fa-2xl text-[#6a6a6a] cursor-pointer hover:text-white duration-200 mx-2"></i>
        </div>
      </div>
      <div className='max-[600px]:flex max-[600px]:flex-col  max-[600px]:items-center flex items-start justify-between py-10' style={{textAlign:'center'}}>
        <div className=' flex flex-col w-1/4  max-[600px]:w-1/2'>
          <h1 className='text-white'>SOBRE NOSOTROS</h1>
          <div>
            <h5 className='text-[#6a6a6a]  hover:text-white duration-200'><Link>Sobre Sky-Level</Link></h5>
          </div>
        </div>
        <div className=' flex flex-col w-1/4 lg:mx-[140px] max-[600px]:w-1/2 max-[600px]:py-[30px]'>
          <h1 className='text-white'>PRODUCTOS</h1>
          <div className='flex flex-col'>
            <h5 className='text-[#6a6a6a]  hover:text-white duration-200'><Link>Woman`s clothes</Link></h5>
            <h5 className='text-[#6a6a6a]  hover:text-white duration-200'><Link>Man`s clothes</Link></h5>
            <h5 className='text-[#6a6a6a]  hover:text-white duration-200'><Link>Jewerrly</Link></h5>
            <h5 className='text-[#6a6a6a]  hover:text-white duration-200'><Link>Monitores</Link></h5>
            <h5 className='text-[#6a6a6a]  hover:text-white duration-200'><Link>Technology</Link></h5>
            <h5 className='text-[#6a6a6a]  hover:text-white duration-200'><Link>Accessories</Link></h5>
          </div>
        </div>
        <div className=' flex flex-col w-1/4 max-[600px]:w-1/2'>
          <h1 className='text-white'>SERVICIO</h1>
          <div  className='flex flex-col'>
            <h5 className='text-[#6a6a6a]  hover:text-white duration-200'><Link>Encuentra Una Tienda</Link></h5>
            <h5 className='text-[#6a6a6a]  hover:text-white duration-200'><Link>Contactenos</Link></h5>
            <h5 className='text-[#6a6a6a]  hover:text-white duration-200'><Link>Encuentra Una Tienda</Link></h5>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

import React from 'react'

import Star from 'elements/Star'
import Button from 'elements/Button'
import TestimoniAccent from 'assets/images/testimonial-landingpages-frame.jpg'

export default function Testimoni({data}) {
  return (
    <section className='container'>
        <div className='row align-items-center'>
            <div className='col-auto' style={{ marginRight: 70 }}>
                <div className='testimonial-hero' 
                style={{ margin: `30px 0 0 30px` }}
                >
                    <img className='position-absolute' src={data.imageUrl} alt='testimonial' style={{ zIndex: 1 }}></img>
                    <img className='position-absolute' src={TestimoniAccent} alt='testimonial'  style={{ margin: `-30px 0 0 -30px` }}></img>
                </div>
            </div>
            <div className='col'>
                <h4 style={{ marginBottom: 40 }}>
                    {data.name}
                </h4>
                <Star value={data.rate} height={35} width={35} spacing={4}></Star>
                <h5 className='h2 font-weight-light line-height-2 my-3'>
                    {data.content}
                </h5>
                <span className='text-gray-500'>
                    {data.familyName}, {data.familyOccupation}
                </span>

                <div>
                    <Button className='btn px-5' style={{ marginTop: 40 }} isPrimary hasShadow type='link' href={`/testimonial/${data._id}`}>
                        Read Their Story
                    </Button>
                </div>
            </div>
        </div>
        {/* <Star value={4.5} width={35} height={35} spacing={4}></Star> */}
    </section>
  )
}

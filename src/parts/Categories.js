import React from 'react'
import Button from 'elements/Button'

export default function Categories({data}) {
  return data.map((cat,index)=>{
    return (<section className='container' key={`category-${index}`}>
        <h4 className='mb-3 font-weight-medium'>
            {cat.name}
        </h4>
        <div className='container-grid'>
            {
                cat.items.length === 0 ? <div className='row'>
                    <div className='col-auto align-items-center'>
                        There is no property at this category
                    </div>
                </div> : cat.items.map ((item,idx2) => {
                    return <div className='item column-3 row-1' key={`category-${index}-item-${idx2}`}>
                        <div className='card'>
                            {item.isPopular && (<div className='tag'>
                                Popular <span className='font-weight-light'>Choice</span>
                            </div>
                            )}
                            <figure className='img-wrapper' style={{ height: 180 }}>
                                <img className='img-cover' src={item.imageUrl} alt={item.name}></img>
                            </figure>
                            <div className='meta-wrapper'>
                                <Button type="link" href={`/properties/${item._id}`} className='stretch-link d-block text-gray-800'>
                                    <h5 className='h4'>{item.name}</h5>
                                </Button>
                                <span className='text-gray-500'>
                                    {item.city},{item.country}
                                </span>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    </section>)
  })
}

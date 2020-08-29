import React from 'react'

const Product = () => {
    return (
        <div>
            <h3 className='text-center pt-4 pb-5'>Product Name</h3>
            <div className='container d-flex flex-nowrap'>
                <div>
                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/14.jpg" alt="..." />
                </div>
                <div>
                    <div className='d-flex flex-nowrap'>
                        <button className='btn btn-sm btn-primary'>Category</button>
                        <button className='btn btn-sm btn-danger'>New</button>
                        <button className='btn btn-sm btn-primary'>BestSeller</button>
                    </div>
                    <p style={{fontSize: '1.5rem'}}><strike>$100</strike> $200</p>
                    <h3>Description</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente placeat hic nemo alias mollitia temporibus ducimus ullam eligendi, necessitatibus, nobis ipsam quo odit explicabo? Totam accusamus harum aspernatur temporibus eaque?</p>
                </div>
            </div>
        </div>
    )
}

export default Product

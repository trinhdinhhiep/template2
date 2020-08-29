import React, { useState } from 'react'
import NavBar from './Component/NavBar';
import Header from './Component/Header';
import ListCardImg from './Component/ListCardImg';
import SideBar from './Component/SideBar';
import Pagination from './Component/Pagination';
import Icon from './Component/Icon';
import Footer from './Component/Footer';
import Product from './Component/Product'
import BasicRouter from './Router/BasicRouter'

const Main = () => {
    const [ListImg, setListImg] = useState([{ link: "https://mdbootstrap.com/img/new/standard/nature/184.jpg" }, { link: "https://mdbootstrap.com/img/new/standard/nature/002.jpg" }, { link: 'https://mdbootstrap.com/img/new/standard/nature/023.jpg' }, { link: 'https://mdbootstrap.com/img/new/standard/nature/111.jpg' }])

    return (
        <div>
            <NavBar />
            <Header />
            {/* <Product/> */}

            <div className='container d-flex flex-nowrap pt-5'>
                <div>
                    {ListImg.map(ele => (
                        <ListCardImg linkImg={ele.link} />
                    ))}
                </div>
                <SideBar />
            </div>
            <Pagination />
            
            <hr />
            <Icon classIcon='d-flex flex-nowrap justify-content-center mb-3' />
            <Footer />
        </div>
    )
}

export default Main

import React from 'react'

const SideBar = () => {
    return (
        <div className='sticky-top'>
            <div className="card border-0" style={{ width: '18rem' }}>
                <div className='view overlay'>
                    <img src="https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/_mdb5/standard/about/assets/mdb5-about.webp" className="card-img-top" alt="..." />
                    <div className='mask text-center rgba-white-light'></div>
                </div>
                <div className="card-body text-center">
                    <h5 className="card-title">Material Design for Bootstrap 5</h5>
                    <p className="card-text">500+ components, free templates, 1-min installation, extensive tutorial, huge community. MIT license - free for personal & commercial use</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <hr />
            <div className='text-center'>
                <h5>Learn the newest Bootstrap 5</h5>
                <iframe title='my video' width={304} height={171} src="https://www.youtube.com/embed/c9B4TPnak1A" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
        </div>
    )
}

export default SideBar

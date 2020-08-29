import React from 'react'

const ListCardImg = (props) => {
    return (
        
            <div className="card border-0 mb-3" style={{ maxWidth: '940px' }}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <div className='view overlay'>
                            <img src={props.linkImg} className="card-img" alt="..." />
                            <div className='mask text-center rgba-white-light'></div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ratione necessitatibus itaque error alias repellendus nemo reiciendis aperiam quisquam minus ipsam reprehenderit commodi ducimus, in dicta aliquam eveniet dignissimos magni.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default ListCardImg

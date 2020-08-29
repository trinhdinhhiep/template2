import React from 'react'
import Icon from './Icon'
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top" style={{height:'50px'}}>
            <div className='container-fluid'>
                <a className="navbar-brand" href="/">
                    <img src="https://img.icons8.com/doodle/48/000000/boom.png" style={{ width: '3rem' }} alt="logoNavBar" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Link</a>
                        </li>
                    </ul>
                    <Icon classIcon="navbar-nav ml-auto"/>
                    {/* <div className="navbar-nav ml-auto">
                        <a className="nav-link" href="/">
                            <img src="https://img.icons8.com/doodle/48/000000/facebook-new.png" style={{ width: '2rem' }} alt='iconfb' />
                        </a>
                        <a className="nav-link" href="/">
                            <img src="https://img.icons8.com/doodle/48/000000/youtube-play.png" style={{ width: '2rem' }} alt='iconyt' />
                        </a>
                        <a className="nav-link" href="/">
                            <img src="https://img.icons8.com/doodle/48/000000/twitter-circled.png" style={{ width: '2rem' }} alt='icontw' />
                        </a>
                        <a className="nav-link" href="/">
                            <img src="https://img.icons8.com/doodle/48/000000/github--v1.png" style={{ width: '2rem' }} alt='icongit' />
                        </a>
                    </div> */}
                </div>
            </div>
        </nav>
    )
}

export default NavBar

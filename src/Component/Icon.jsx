import React from 'react'

const Icon = (props) => {
    const linkImg = [
        { link: "https://img.icons8.com/doodle/48/000000/facebook-new.png" },
        { link: 'https://img.icons8.com/doodle/48/000000/youtube-play.png' },
        { link: 'https://img.icons8.com/doodle/48/000000/twitter-circled.png' },
        { link: 'https://img.icons8.com/doodle/48/000000/github--v1.png' }
    ]
    return (
        <div className={props.classIcon}>
            {linkImg.map(ele => (
                <a className="nav-link" href="/">
                    <img src={ele.link} style={{ width: '2rem' }} alt='iconfb' />
                </a>
            ))}
        </div>
    )
}

export default Icon

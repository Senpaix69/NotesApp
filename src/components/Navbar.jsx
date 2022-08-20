import React, { useState } from 'react'

const Navbar = (props) => {
    const toggle = props.darkMode ? "Light" : "Dark";
    const [active, setActive] = useState(false);

    const isActive = () => {
        setActive(!active);
    }
    console.log(active);

    return (
        <div className='Navbar'>
            <div className='Navbar--Header'>
                <img className='logo' src={require('./images/logo512.png')} alt='logo' />
                <h1 className='head heade'>Senpai's</h1>
                <h1 className='head1' style={{ color: props.darkMode ? "white" : "black" }}
                >Notes</h1>
            </div>
            <div className={`dropdown`} onClick={isActive}>
                <button className="dropbtn">
                    <img className={`dropdown-img dropdown-img-${active ? 'active' : ''}`} src={require('./images/arrow-down.png')} alt='img' />
                </button>
                <div className={`dropdown-content ${active ? 'active' : ''}`}>
                    <ul className='btn-list'>
                        <li>
                            <button
                                onClick={props.toggleDarkMode}
                            ><img className='btn-img'
                                src={require('./images/night-mode.png')} alt='img' />
                                {toggle} Mode
                            </button>
                        </li>
                        <li>
                            <a href="https://drive.google.com/open?id=1V0D5VhRpySvrYpg-iRNlj22YbF6sxVLm&authuser=raohuraira331.rb%40gmail.com&usp=drive_fs"
                                target='_blank' rel='noreferrer'>
                                <button
                                ><img className='d-btn-img'
                                    src={require('./images/download.png')} alt='img' />
                                    Download
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
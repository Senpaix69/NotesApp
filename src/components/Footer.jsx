import React from 'react'

const Footer = (props) => {
    return (
        <div className='Footer'>
            <div className='Footer--con'>
                <img src={require('./images/senpai.png')} alt='logo' />
                <h1 className='head'>Connect With Me</h1>
            </div>
            <div className={`imag ${`${props.darkMode ? "Dark" : ""}-Footer`}`}>
                <a href="https://www.facebook.com/hurri.isbad"
                    target={'_blank'} rel='noreferrer'>
                    <img className="social" src={require('./images/facebook.png')} alt='facebook' />
                </a>
                <a href="https://youtube.com/channel/UCp33wgxMOVO165TJTCtKKjw"
                    target={'_blank'} rel='noreferrer'>
                    <img className="social" src={require('./images/youtube.png')} alt='youtube' />
                </a>
                <a href="https://github.com/Senpaix69"
                    target={'_blank'} rel='noreferrer'>
                    <img className="social" id='git' src={require('./images/github.png')} alt='github' />
                </a>
                <a href="https://www.linkedin.com/in/huraira-younas-a4362b229"
                    target={'_blank'} rel='noreferrer'>
                    <img className="social" src={require('./images/linkedin.png')} alt='linkedin' />
                </a>
                <a href="https://instagram.com/senpaii_x69?igshid=YmMyMTA2M2Y="
                    target={'_blank'} rel='noreferrer'>
                    <img className="social" src={require('./images/instagram.png')} alt='instagram' />
                </a>
            </div>
        </div>
    )
}

export default Footer

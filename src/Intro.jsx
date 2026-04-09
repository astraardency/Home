import './Intro.css'

function Intro({ isEntered, onEnter }) {
    return (
        <div className={`intro-screen ${isEntered ? 'hide' : ''}`} id="introScreen">
            <h1 className="intro-text">Our New Chapter</h1>
            <button className="enter-btn" onClick={onEnter}>Unlock the Door</button>
        </div>
    )
}

export default Intro;
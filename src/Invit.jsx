import './Invit.css'

function Invit({ isEntered }) {
    return (
        <div className={`main-content ${isEntered ? 'show' : ''}`} id="mainContent">
            <div className="invitation-card">
                <h1 className="stagger stagger-1">We've Moved!</h1>
                <div className="divider stagger stagger-1"></div>
                
                <p className="stagger stagger-2">
                    The paint is dry, the boxes are unpacked, and we are finally ready to turn our new house into a home. We would be absolutely thrilled if you would join us to celebrate!
                </p>

                <div className="details stagger stagger-3">
                    <div className="detail-block">
                        <h3>When</h3>
                        <p>Saturday, Oct 24<br />6:00 PM </p>
                    </div>
                    <div className="detail-block">
                        <h3>Where</h3>
                        <p>123 New Home Ave<br />Cityville, ST</p>
                    </div>
                </div>

                <a href="mailto:you@email.com" className="rsvp-btn stagger stagger-4">RSVP Now</a>
            </div>
        </div>
    )
}

export default Invit;
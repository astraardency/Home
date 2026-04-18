import './Invit.css'

function Invit({ isEntered }) {
    return (
        <div className={`main-content ${isEntered ? 'show' : ''}`} id="mainContent">
            <div className="invitation-card">
                <h1 className="stagger stagger-1">We've Moved!</h1>
                <div className="divider stagger stagger-1"></div>
                
                <p className="stagger stagger-2">
                    If you would join us to celebrate!
                </p>

                <div className="details stagger stagger-3">
                    <div className="detail-block">
                        <h3>When</h3>
                        <p>-------, --- --<br />6:00 AM </p>
                    </div>
                    <div className="detail-block">
                        <h3>Where</h3>
                        <p>123 --- ---- ---<br />-------, --</p>
                    </div>
                </div>

                <a 
                    href="https://www.google.com/maps/search/?api=1&query=10.931781,79.648595" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="rsvp-btn stagger stagger-4">
                    Get Directions</a>
            </div>
        </div>
    )
}

export default Invit;

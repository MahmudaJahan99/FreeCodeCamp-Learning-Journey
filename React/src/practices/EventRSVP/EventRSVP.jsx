import { useState } from 'react';
import './EventRSVP.css'

const EventRSVP = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [attendees, setAttendees] = useState(1)
    const [dietaryPreferences, setDietaryPreferences] = useState("")
    const [bringingOthers, setBringingOthers] = useState(false)
    const [formSubmitted, setFormSubmitted] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        setFormSubmitted(true)
    }

    return (
        <div className="event-rsvp-body">
            <div className='form-container'>
                <h2>Event RSVP Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name:
                            <input type="text" name='name' placeholder='Your Name' required value={name} onChange={(e) => setName(e.target.value)} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>Email:
                            <input type="email" name='email' placeholder='Your Email' required value={email} onChange={(e) => setEmail(e.target.value)} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>Number of Attendees:
                            <input type="number" name='attendees' min='1' placeholder='Number of Attendees' required value={attendees} onChange={(e) => setAttendees(parseInt(e.target.value))} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>Dietary Preferences:
                            <input type="text" name='dietaryPreferences' placeholder='Dietary Preferences (Optional)' value={dietaryPreferences} onChange={(e) => setDietaryPreferences(e.target.value)} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>Bringing additional guests?
                            <input type="checkbox" name='bringingOthers' checked={bringingOthers} onChange={(e) => setBringingOthers(e.target.checked)} />
                        </label>
                    </div>

                    <button className='rsvp-form-button' type="submit">Submit RSVP</button>
                </form>

                {formSubmitted && <div className='submitted-message'>
                    <h3>RSVP Submitted!</h3>
                    <p>Name: <span>{name}</span></p>
                    <p>Email: <span>{email}</span></p>
                    <p>Number of attendees: <span>{attendees}</span></p>
                    <p>Dietary preferences: <span>{dietaryPreferences || "None"}</span></p>
                    <p>Bringing additional guests: <span>{bringingOthers ? "Yes" : "No"}</span></p>
                </div>}
            </div>
        </div>
    );
};

export default EventRSVP;
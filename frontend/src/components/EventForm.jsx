const EventForm = ({ isOpen, onClose }) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const postData = {};
        for (let [key, value] of formData.entries()) {
            postData[key] = value;
        }
        e.target.reset()
        onClose()
        console.log(postData)
    }
    return (
        <div className={`modal ${isOpen ? 'is-active' : ''}`}>
            <div className="modal-background" onClick={onClose}></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Create an Event</p>
                    <button className="delete" onClick={onClose} aria-label="close"></button>
                </header>
                <section className="modal-card-body">

                    <form id='eventForm' onSubmit={handleSubmit}>
                        <div className='field'>
                            <label>Type</label>
                            <div className="select">
                                <select name='type' required>
                                    <option>Cleanup</option>
                                    <option>Exchange</option>
                                </select>
                            </div>
                            <label htmlFor='eventFormTitle'>Title</label>
                            <input className="input" name='title' id='eventFormTitle' type="text" required></input>
                            <label htmlFor='description'>Description</label>
                            <textarea className="textarea" id='description' name='description' placeholder="e.g. This is my event and why it is happening" required></textarea>
                            <label htmlFor="startDate">Select ending date:</label>
                            <input type="date" id="startDate" name="startDate" required></input>
                            <label htmlFor="startTime">Select a starting time:</label>
                            <input type="time" id="startTime" name="startTime" required></input>
                            <label htmlFor="startDate">Select ending date:</label>
                            <input type="date" id="endDate" name="endDate" required></input>
                            <label htmlFor="startTime">Select a ending time:</label>
                            <input type="time" id="endTime" name="endTime" required></input>
                            <label htmlFor='eventFormTitle'>Address</label>
                            <input className="input" name='address' id='eventFormTitle' type="text" placeholder="123 Address str 12345" required></input>
                            <label htmlFor='borough'>Borough</label>
                            <div className="select">
                                <select name='borough' id='borough' required>
                                    <option>Manhattan</option>
                                    <option>Brooklyn</option>
                                    <option>Bronx</option>
                                    <option>Queens</option>
                                    <option>Staten Island</option>
                                </select>
                            </div>
                        </div>
                    </form>

                </section>
                <footer className="modal-card-foot">
                    <button className='button' form='eventForm' type='submit'>Publish</button>
                    <button className="button" onClick={onClose}>Cancel</button>
                </footer>
            </div>
        </div>
    )
}

export default EventForm

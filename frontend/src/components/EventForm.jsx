import { useState } from 'react';
import { addTags, createEvent, joinAnEvent } from '../adapters/event-adapter';

export default function EventForm({ id }) {
  const [err, setErr] = useState({ color: null, text: null });
  const [selectedTags, setSelectedTags] = useState([]);

  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { title, location, description, date, startTime, endTime } =
      Object.fromEntries(formData);
    console.log(title, location, description, date, startTime, endTime);
    console.log(Object.fromEntries(formData));

    if (startTime > endTime) {
      setErr({
        color: 'red',
        text: 'You cannot have a start time later than an end time',
      });
      throw new Error('You cannot have a start time later than an end time');
    } else if (startTime === endTime) {
      setErr({
        color: 'red',
        text: 'You cannot have a start time ending at the same time',
      });

      throw new Error('You cannot have a start time ending at the same time');
    }

    setErr({ color: null, text: null });

    const event = await createEvent({
      title,
      location,
      description,
      date: `${date} ${startTime}`,
      end_date: `${date} ${endTime}`,
      user_id: id,
    });

    console.log(event);

    await addTags({
      event_id: event[0],
      event_tag_ids: selectedTags,
    });

    await joinAnEvent({ user_id: id, event_id: event[0] });

    setSelectedTags([]);

    e.target.reset();
  };

  const min = new Date().toISOString().split('T')[0];

  const handleCheckboxChange = (event) => {
    const value = Number(event.target.value); // Convert value to number
    const isChecked = event.target.checked;

    // Update the selectedTags array based on the checkbox change
    if (isChecked) {
      setSelectedTags((prevSelectedTags) => [...prevSelectedTags, value]);
    } else {
      setSelectedTags((prevSelectedTags) =>
        prevSelectedTags.filter((tag) => tag !== value)
      );
    }
  };

  console.log(selectedTags);

  return (
    <form onSubmit={submit}>
      <label htmlFor="title">Title for your event:</label>
      <input type="text" id="title" name="title" required />

      <label htmlFor="location">Select a park:</label>
      <select id="location" name="location" required defaultValue={''}>
        <option value="" disabled>
          Select a Park
        </option>
        <option value="Prospect Park, Brooklyn, NY">Prospect Park</option>
        <option value="Brooklyn Bridge Park, Brooklyn, NY">
          Brooklyn Bridge Park
        </option>
        <option value="McCarren Park, Brooklyn, NY">McCarren Park</option>
        <option value="Fort Greene Park, Brookly, NY">Fort Greene Park</option>
        <option value="Marine Park, Brookly, NY">Marine Park</option>
        <option value="Sunset Park, Brookly, NY">Sunset Park</option>
        <option value="Domino Park, Brookly, NY">Domino Park</option>
        <option value="Brooklyn Heights Promenade Park, Brookly, NY">
          Brooklyn Heights Promenade Park
        </option>
        <option value="Manhattan Beach Park, Brookly, NY">
          Manhattan Beach Park
        </option>
        <option value="WNYC Transmitter Park, Brookly, NY">
          WNYC Transmitter Park
        </option>
        <option value="Owls Head Park, Brookly, NY">Owls Head Park</option>
        <option value="Bushwich Inlet Park, Brookly, NY">
          Bushwich Inlet Park
        </option>
      </select>

      <label htmlFor="date">Visit Date:</label>
      <input type="date" id="date" name="date" required min={min} />

      <label htmlFor="startTime">Select a start time:</label>
      <input
        type="time"
        id="startTime"
        name="startTime"
        required
        style={{ color: err.color }}
      />

      <label htmlFor="endTime">Select an end time:</label>
      <input
        type="time"
        id="endTime"
        name="endTime"
        required
        style={{ color: err.color }}
      />

      <p style={{ color: 'red' }}>{err.text}</p>

      <fieldset>
        <legend>Select Tags:</legend>
        {['yoga', 'running', 'biking', 'weight-lifting', 'calisthenics'].map(
          (tag, idx) => (
            <label key={tag}>
              <input
                type="checkbox"
                id={tag}
                name="tags"
                value={idx + 1}
                checked={selectedTags.includes(idx + 1)}
                onChange={handleCheckboxChange}
              />
              {tag}
            </label>
          )
        )}
      </fieldset>

      <label htmlFor="description">Description:</label>
      <textarea id="description" name="description" rows="2"></textarea>

      <button type="submit">Submit</button>
    </form>
  );
}

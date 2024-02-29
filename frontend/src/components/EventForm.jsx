import { addTags, createEvent, joinAnEvent } from '../adapters/event-adapter';
import { validateTags, validateTime } from '../utils';
import { useEventFormStore } from '../store/store';

export default function EventForm({ id, loadUserEvents }) {
  const { selectedTags, addTag, emptyTags, setSelectedTags, err, setErr } =
    useEventFormStore((state) => state);

  console.log(selectedTags);

  const modal = document.querySelector('.modal');
  const modalWrap = document.querySelector('.modal-wrap');

  const closeModal = () => {
    modal.style.opacity = 0;
    modal.style.pointerEvents = 'none';
    modalWrap.style.opacity = 0;
    modalWrap.style.transform = 'scale(0.6)';
  };

  // const modalBtn = modalBtnRef.current;

  const tags = [
    'yoga',
    'running',
    'biking',
    'weight-lifting',
    'calisthenics',
    'coaching',
    'jogging',
  ];

  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { title, location, description, date, startTime, endTime } =
      Object.fromEntries(formData);
    console.log(title, location, description, date, startTime, endTime);
    console.log(Object.fromEntries(formData));
    const myDialogModal = document.querySelector('#dialogModal');

    const timeValidation = validateTime(startTime, endTime);
    const tagValidation = validateTags(selectedTags);

    setErr({ ...timeValidation, ...tagValidation });

    if (timeValidation.color || tagValidation.tagColor) {
      return;
    }

    setErr({ color: null, timeText: null, tagText: null, tagColor: null });

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

    emptyTags();

    e.target.reset();

    loadUserEvents();

    // myDialogModal.close();

    closeModal();
  };

  const min = new Date().toISOString().split('T')[0];

  const handleCheckboxChange = (event) => {
    const value = Number(event.target.value); // Convert value to number
    const isChecked = event.target.checked;

    // Update the selectedTags array based on the checkbox change
    if (isChecked) {
      addTag(value);
    } else {
      const filtered = selectedTags.filter((tag) => tag !== value);
      setSelectedTags(filtered);
    }
  };

  return (
    <div>
      <div className="mt-10 px-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={submit}
          aria-labelledby="login-heading"
          className="space-y-6"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Title for your event
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="title"
                name="title"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* py-1.5 pl-3 pr-10 */}
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Select a park
            </label>
            <select
              className="relative w-full cursor-default rounded-md bg-white p-2 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 sm:text-sm sm:leading-6"
              id="location"
              name="location"
              required
              defaultValue={''}
            >
              <option value="" disabled>
                Select a Park
              </option>
              <option value="Prospect Park, Brooklyn, NY">Prospect Park</option>
              <option value="Brooklyn Bridge Park, Brooklyn, NY">
                Brooklyn Bridge Park
              </option>
              <option value="McCarren Park, Brooklyn, NY">McCarren Park</option>
              <option value="Fort Greene Park, Brooklyn, NY">
                Fort Greene Park
              </option>
              <option value="Marine Park, Brooklyn, NY">Marine Park</option>
              <option value="Sunset Park, Brooklyn, NY">Sunset Park</option>
              <option value="Domino Park, Brooklyn, NY">Domino Park</option>
              <option value="Brooklyn Heights Promenade Park, Brooklyn, NY">
                Brooklyn Heights Promenade Park
              </option>
              <option value="Manhattan Beach Park, Brooklyn, NY">
                Manhattan Beach Park
              </option>
              <option value="WNYC Transmitter Park, Brooklyn, NY">
                WNYC Transmitter Park
              </option>
              <option value="Owls Head Park, Brooklyn, NY">
                Owls Head Park
              </option>
              <option value="Bushwich Inlet Park, Brooklyn, NY">
                Bushwich Inlet Park
              </option>
              <option value="Online Class">Online Class</option>
            </select>
          </div>

          <label
            className="block text-sm font-medium leading-6 text-gray-900"
            htmlFor="date"
          >
            Visit Date
          </label>
          <input
            className="relative w-full cursor-default rounded-md bg-white p-2 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 sm:text-sm sm:leading-6"
            type="date"
            id="date"
            name="date"
            required
            min={min}
            style={{ marginTop: '0px' }}
          />

          <label
            className="block text-sm font-medium leading-6 text-gray-900"
            htmlFor="startTime"
          >
            Select a start time
          </label>
          <input
            type="time"
            id="startTime"
            name="startTime"
            className="relative w-full cursor-default rounded-md bg-white p-2 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 sm:text-sm sm:leading-6"
            required
            style={{ color: err.color, marginTop: '0px' }}
          />

          <label
            className="block text-sm font-medium leading-6 text-gray-900"
            htmlFor="endTime"
          >
            Select an end time
          </label>
          <input
            type="time"
            id="endTime"
            name="endTime"
            required
            className="relative w-full cursor-default rounded-md bg-white p-2 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 sm:text-sm sm:leading-6"
            style={{ color: err.color, marginTop: '0px' }}
          />

          <fieldset style={{ color: err.tagColor }}>
            <legend className="block text-sm font-medium leading-6 text-gray-900">
              Select Tags
            </legend>
            <div className="flex flex-col">
              {tags.map((tag, idx) => (
                <label
                  key={tag}
                  className="flex flex-row text-center font-semibold"
                >
                  <input
                    type="checkbox"
                    id={tag}
                    name="tags"
                    className=" justify-center"
                    value={idx + 1}
                    checked={selectedTags.includes(idx + 1)}
                    onChange={handleCheckboxChange}
                  />
                  {tag}
                </label>
              ))}
            </div>
          </fieldset>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Description
            </label>
            <div className="h-20 mt-2">
              <textarea
                type="text"
                id="description"
                name="description"
                required
                className="block resize-none w-full h-full rounded-md border-0 p-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              className="flex w-full mt-12 justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              style={{
                borderRadius: '5px',
                background: 'linear-gradient(225deg, #FDBA74, #EA580C)',
                boxShadow:
                  '-5px 5px 10px rgba(253, 186, 116, 0.5), 5px -5px 10px rgba(234, 88, 12, 0.5)',
                transition: 'boxShadow 0.3s ease-in-out',
              }}
            >
              Submit
            </button>

            <p className="mt-10 text-center text-sm text-gray-500">
              {' '}
              Enjoy your Event{' '}
            </p>
          </div>
        </form>
      </div>
    </div>
    // <form onSubmit={submit} style={{ width: '400px' }} className='outline-0'>
    //   <label htmlFor="title">Title for your event:</label>
    //   <input type="text" id="title" name="title" required />

    //   <label htmlFor="location">Select a park:</label>
    //   <select id="location" name="location" required defaultValue={''}>
    //     <option value="" disabled>
    //       Select a Park
    //     </option>
    //     <option value="Prospect Park, Brooklyn, NY">Prospect Park</option>
    //     <option value="Brooklyn Bridge Park, Brooklyn, NY">
    //       Brooklyn Bridge Park
    //     </option>
    //     <option value="McCarren Park, Brooklyn, NY">McCarren Park</option>
    //     <option value="Fort Greene Park, Brooklyn, NY">Fort Greene Park</option>
    //     <option value="Marine Park, Brooklyn, NY">Marine Park</option>
    //     <option value="Sunset Park, Brooklyn, NY">Sunset Park</option>
    //     <option value="Domino Park, Brooklyn, NY">Domino Park</option>
    //     <option value="Brooklyn Heights Promenade Park, Brooklyn, NY">
    //       Brooklyn Heights Promenade Park
    //     </option>
    //     <option value="Manhattan Beach Park, Brooklyn, NY">
    //       Manhattan Beach Park
    //     </option>
    //     <option value="WNYC Transmitter Park, Brooklyn, NY">
    //       WNYC Transmitter Park
    //     </option>
    //     <option value="Owls Head Park, Brooklyn, NY">Owls Head Park</option>
    //     <option value="Bushwich Inlet Park, Brooklyn, NY">
    //       Bushwich Inlet Park
    //     </option>
    //     <option value="Online Class">Online Class</option>
    //   </select>

    //   <label htmlFor="date">Visit Date:</label>
    //   <input type="date" id="date" name="date" required min={min} />

    //   <label htmlFor="startTime">Select a start time:</label>
    //   <input
    //     type="time"
    //     id="startTime"
    //     name="startTime"
    //     required
    //     style={{ color: err.color }}
    //   />

    //   <label htmlFor="endTime">Select an end time:</label>
    //   <input
    //     type="time"
    //     id="endTime"
    //     name="endTime"
    //     required
    //     style={{ color: err.color }}
    //   />

    //   <p style={{ color: 'red' }}>{err.timeText}</p>

    //   <fieldset style={{ color: err.tagColor }}>
    //     <legend>Select Tags:</legend>
    //     <div className='flex flex-col'>
    //       {tags.map((tag, idx) => (
    //         <label key={tag} className='flex flex-row text-center'>
    //           <input
    //             type="checkbox"
    //             id={tag}
    //             name="tags"
    //             className=' justify-center'
    //             value={idx + 1}
    //             checked={selectedTags.includes(idx + 1)}
    //             onChange={handleCheckboxChange}
    //           />
    //           {tag}
    //         </label>
    //       ))}
    //     </div>

    //   </fieldset>

    //   <p style={{ color: 'red' }}>{err.tagText}</p>

    //   <div className='h-20 mb-10'>
    //     <label htmlFor="description">Description:</label>
    //     <textarea className='resize-none w-full h-full' id="description" name="description" rows="2"></textarea>
    //   </div>

    //   <button type="submit">Submit</button>
    // </form>
  );
}

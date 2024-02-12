export default function WorkoutsForm({ onChange }) {
  return (
    <>
      <label htmlFor="location">Select a park:</label>
      <select
        id="location"
        name="location"
        required
        defaultValue={''}
        onChange={onChange}
      >
        <option value="" disabled>
          Select Body Part
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
        <option value="Online Class">Online Class</option>
      </select>
    </>
  );
}

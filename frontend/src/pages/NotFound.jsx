import { useState } from 'react';

export default function AddInformation() {
  const [doctorInfo, setDoctorInfo] = useState({
    name: '',
    specialty: '',
    // Add more fields as needed
  });

  const [facilityInfo, setFacilityInfo] = useState({
    name: '',
    address: '',
    // Add more fields as needed
  });

  const handleDoctorChange = (e) => {
    const { name, value } = e.target;
    setDoctorInfo((prevDoctorInfo) => ({
      ...prevDoctorInfo,
      [name]: value,
    }));
  };

  const handleFacilityChange = (e) => {
    const { name, value } = e.target;
    setFacilityInfo((prevFacilityInfo) => ({
      ...prevFacilityInfo,
      [name]: value,
    }));
  };

  const handleDoctorSubmit = (e) => {
    e.preventDefault();
    // Handle doctor information submission
    console.log('Doctor Info:', doctorInfo);
    // Reset the form
    setDoctorInfo({
      name: '',
      specialty: '',
    });
  };

  const handleFacilitySubmit = (e) => {
    e.preventDefault();
    // Handle facility information submission
    console.log('Facility Info:', facilityInfo);
    // Reset the form
    setFacilityInfo({
      name: '',
      address: '',
    });
  };

  return (
    <>
      <h1>Add Doctor's Information</h1>
      <form onSubmit={handleDoctorSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={doctorInfo.name}
            onChange={handleDoctorChange}
          />
        </label>
        <br />
        <label>
          Specialty:
          <input
            type="text"
            name="specialty"
            value={doctorInfo.specialty}
            onChange={handleDoctorChange}
          />
        </label>
        <br />
        {/* Add more fields and labels for doctor's information */}
        <button type="submit">Submit Doctor Info</button>
      </form>

      <h1>Add Facility Information</h1>
      <form onSubmit={handleFacilitySubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={facilityInfo.name}
            onChange={handleFacilityChange}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={facilityInfo.address}
            onChange={handleFacilityChange}
          />
        </label>
        <br />
        {/* Add more fields and labels for facility information */}
        <button type="submit">Submit Facility Info</button>
      </form>
    </>
  );
}

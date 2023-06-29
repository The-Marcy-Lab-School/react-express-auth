
export default function Bookmarkcard({ bookmark }) {




  return (
 
      <div  id="bookmarkbox">
        <div className="headerBookmark">
        <p id="bookmarkDoctorSpecailty">
          {bookmark.facility_doctor} - {bookmark.specialty}
        </p>
        <p className="has-text-centered" id="bookmarkAddress">
          {bookmark.address}
        </p>
        </div>
        
        <div className="columns">
          <div className="column is-one-third" style={{ width:"100%"} }>
            <div id= 'saveddocimg' >
              <img
                src={bookmark.photo}
                alt="Image"
                style={{ width: "100px", height: "100px" }}
              />
            </div>
          </div>
        </div>
      </div>

  );
}

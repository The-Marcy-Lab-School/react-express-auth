import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

export default function Bookmarkcard({ bookmark }) {
  const [clickedBookmark, setClickedBookmark] = useState(false);

  const handleBookmarkClick = () => {
    setClickedBookmark(true);
  };
  console.log(clickedBookmark);

  return (
    <div className="column is-three-quarters">
      <div className="box" id="bookmarkbox">
        <p id="bookmarkDoctorSpecailty">
          {bookmark.facility_doctor} - {bookmark.specialty}
        </p>

        <p className="has-text-centered" id="bookmarkAddress">
          {bookmark.address}
        </p>
        <div className="columns">
          <div className="column is-one-third">
            <div>
              <img
                src={bookmark.photo}
                alt="Image"
                style={{ width: "100px", height: "100px" }}
              />
              {clickedBookmark ? (
                <FontAwesomeIcon
                  icon={faBookmark}
                  style={{ color: "#132734" }}
                  onClick={handleBookmarkClick}
                />
              ) : (
                <FontAwesomeIcon icon="fa-thin fa-bookmark" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

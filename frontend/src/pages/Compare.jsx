

export default function ComparePage() {
    return (
        <>
            <div className="compare-page">
                <div className="imgandspecialty">
                    <input class="input is-primary" type="text" placeholder="First Doctor/Facility"></input>
                    <div className="doctorPictureFrame">
                        <img src="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/red-apple.png" alt="Doctor Picture" id="personImg" />
                    </div>
                    <div className="specifications">
                        <h2 className="name">Name</h2>
                        <h4 className="location">Location</h4>
                        <h3 className="specialty">Specialty: Stars</h3>
                        <p className="description">"Testing Testing 123"</p>
                    </div>
                    <div className="categories-all">
                        <p>Staff Friendliness: 3</p>
                        <p>Wait Times: 2</p>
                        <p>Quality of Care: 1</p>
                    </div>
                </div>
                <div className="all-cats">
                    <div className="comparison">
                        <h1>Score Comparison</h1>
                    </div>
                    <br />
                    <div className="categories-criterion">
                        <div className="staff-friend">
                            <p className="comparison">Staff Friendliness</p>
                            <p>Number to Number</p>
                        </div>

                        <br />
                        <div className="staff-friend">
                            <p className="comparison">Wait Times</p>
                            <p>Number to Number</p>
                        </div>

                        <br />
                        <div className="staff-friend">
                            <p className="comparison">Quality of Care</p>
                            <p>Number to Number</p>
                        </div>

                    </div>
                    <br />
                </div>
                <div className="imgandspecialty">
                    <input className="input" type="text" placeholder="Second Doctor/Facility"></input>
                    <div className="doctorPictureFrame">
                        <img src="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/red-apple.png" alt="Doctor Picture" id="personImg" />
                    </div>
                    <div className="specifications">
                        <h2 className="name">Name</h2>
                        <h4 className="location">Location</h4>
                        <h3 className="specialty">Specialty: Stars</h3>
                        <p className="description">"Testing Testing 123"</p>
                    </div>
                    <div className="categories-all">
                        <p>Staff Friendliness: 3</p>
                        <p>Wait Times: 2</p>
                        <p>Quality of Care: 1</p>
                    </div>
                </div>
            </div>
        </>
    );
}
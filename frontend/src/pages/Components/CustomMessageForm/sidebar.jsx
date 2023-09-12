const Sidebar = ({
    showImageModal,
    modalVisible,
    selectedLanguage,
    handleLanguageChange,
  }) => {
    return (
      <aside className="sidebar">
        <div className="sidebar-content">
          <h2>Sidebar Menu</h2>
          <button onClick={showImageModal}>Show Image</button>
          <div className={modalVisible ? "modal" : "hidden"}>
            <img
              src="https://i.pinimg.com/originals/58/81/48/5881489fcde058a20cbc811d1a1cf9d7.gif" // Replace with your image path
              alt="Your Image"
              className="modal-content"
            />
          </div>
          <div className="chatBox">
            <div className="a.i">
              <label htmlFor="languageSelect">Select Language:</label>
              <select
                id="languageSelect"
                value={selectedLanguage}
                onChange={handleLanguageChange}
              >
                <option value="es-ES">Spanish</option>
                <option value="fr-FR">French</option>
                <option value="en-US">English</option>
              </select>
            </div>
          </div>
        </div>
      </aside>
    );
  };
  
  export default Sidebar
import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Announce({ firstName, lastName, role, announcements, setAnnouncements }) {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleAnnouncementSubmit = () => {
    if (title.trim() === "" || message.trim() === "") {
      alert("Please enter both title and message");
      return;
    }

    const newAnnouncement = {
      title: title,
      author: `${firstName} ${lastName}`,
      datetime: new Date().toLocaleString(),
      message: message
    };

    setAnnouncements(newAnnouncement);

    setTitle("");
    setMessage("");
  };

  //TODO: update functionality
  return (
    <>
      {role === "member" ? (
        <div>
          <h1>Unauthorized access</h1>
          <p>Announcements can only be made by coaches</p>
        </div>
      ) : (
        <>
          <h1> Create Announcement </h1>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={handleTitleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message:</label>
            <textarea
              className="form-control"
              id="message"
              rows="3"
              value={message}
              onChange={handleMessageChange}
              required
            ></textarea>
          </div>
          <div class="button-container">
            <button
              type="button"
              className="btn btn-success"
              onClick={handleAnnouncementSubmit}
            >
              Make Announcement
            </button>
            <Link to="/home">
              <button type="button" class="btn btn-primary">Back To Home</button>
            </Link>
          </div>
          
        </>
      )}
    </>
  );
}

export default Announce;

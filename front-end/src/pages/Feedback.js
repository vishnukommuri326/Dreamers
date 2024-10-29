import React from 'react';
import '../assets/styles/Feedback.css';
import '../assets/styles/About.css'; // Used for back button formatting

const FeedbackForm = () => {
  return (
    <div className="feedback-form-container">
      <h2>Feedback</h2>
      <form>
        <div className="form-group">
          <label>Question 1</label>
          <input type="text" placeholder="Your response" required/>
        </div>
        <div className="form-group">
          <label>Question 2</label>
          <input type="text" placeholder="Your response" required/>
        </div>
    
        <div className="form-group">
          <label>Other</label>
          <textarea placeholder="Additional feedback"></textarea>
        </div>
        <button type="submit" className="submit-btn">Submit Feedback</button>
      </form>

      <button type="button" className="back-btn" onClick={() => window.location.href='/about'}>Back</button>

      </div>
  );
};

export default FeedbackForm;

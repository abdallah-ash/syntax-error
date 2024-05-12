import React, { useState } from 'react';

const SubmissionReview = () => {
  const [submissions, setSubmissions] = useState([
    { id: 1, details: 'Submission 1 details' },
    { id: 2, details: 'Submission 2 details' },
    { id: 3, details: 'Submission 3 details' }
  ]);

  const acceptSubmission = (submissionId) => {
    //accept
    console.log(`Submission ${submissionId} accepted.`);
    
  };

  const rejectSubmission = (submissionId) => {
    //reject
    console.log(`Submission ${submissionId} rejected.`);
  
  };

  return (
    <div>
      <h2>Review Organization and Donor Submissions</h2>
      <ul>
        {submissions.map(submission => (
          <li key={submission.id}>
            <div>{submission.details}</div>
            <button onClick={() => acceptSubmission(submission.id)}>Accept</button>
            <button onClick={() => rejectSubmission(submission.id)}>Reject</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubmissionReview;

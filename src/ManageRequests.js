import React, { useState } from 'react';

const ManageRequests = () => {
  const [requests, setRequests] = useState([
    { id: 1, details: 'Request 1 details' },
    { id: 2, details: 'Request 2 details' },
    { id: 3, details: 'Request 3 details' }
  ]);

  const acceptRequest = (requestId) => {
    //accept
    console.log(`Request ${requestId} accepted.`);
    
  };

  const rejectRequest = (requestId) => {
    //reject
    console.log(`Request ${requestId} rejected.`);
   
  };

  return (
    <div>
      <h2>Manage Organization and Donor Requests</h2>
      <ul>
        {requests.map(request => (
          <li key={request.id}>
            <div>{request.details}</div>
            <button onClick={() => acceptRequest(request.id)}>Accept</button>
            <button onClick={() => rejectRequest(request.id)}>Reject</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageRequests;

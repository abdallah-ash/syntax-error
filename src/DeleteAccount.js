import React, { useState } from 'react';

const DeleteAccount = () => {
  const [accountId, setAccountId] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [accounts, setAccounts] = useState([
    { id: 1, name: 'Organization 1' },
    { id: 2, name: 'Organization 2' },
    { id: 3, name: 'Organization 3' },
  ]);

  const handleDelete = () => {
    const updatedAccounts = accounts.filter(account => account.id !== parseInt(accountId));
    if (updatedAccounts.length === accounts.length) {
      setErrorMessage('Account not found.');
    } else {
      setAccounts(updatedAccounts);
      setAccountId('');
      setSuccessMessage('Account deleted successfully.');
    }
  };

  return (
    <div>
      <h2>Delete Organization or Donor Account</h2>
      <label htmlFor="accountId">Account ID:</label>
      <input
        type="text"
        id="accountId"
        value={accountId}
        onChange={(e) => setAccountId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete Account</button>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default DeleteAccount;

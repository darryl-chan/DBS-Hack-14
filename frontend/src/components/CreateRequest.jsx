import React, { useState } from 'react';

const CreateRequest = () => {
  const [formData, setFormData] = useState({
    requestDate: '',
    companyName: '',
    carbonPrice: '',
    carbonQuantity: '',
    requestingReason: '',
    requestType: 'Buy', // Default value
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Request submitted successfully!');
    // send the data to an API or handle it as needed
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Create Request</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="requestDate" style={{ display: 'block', marginBottom: '5px' }}>
            Request Date
          </label>
          <input
            type="date"
            id="requestDate"
            name="requestDate"
            value={formData.requestDate}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="companyName" style={{ display: 'block', marginBottom: '5px' }}>
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
            placeholder="Enter company name"
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="carbonPrice" style={{ display: 'block', marginBottom: '5px' }}>
            Carbon Price (SGD/Tonnes)
          </label>
          <input
            type="number"
            id="carbonPrice"
            name="carbonPrice"
            value={formData.carbonPrice}
            onChange={handleChange}
            required
            placeholder="Enter carbon price"
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="carbonQuantity" style={{ display: 'block', marginBottom: '5px' }}>
            Carbon Quantity
          </label>
          <input
            type="number"
            id="carbonQuantity"
            name="carbonQuantity"
            value={formData.carbonQuantity}
            onChange={handleChange}
            required
            placeholder="Enter carbon quantity"
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="requestingReason" style={{ display: 'block', marginBottom: '5px' }}>
            Requesting Reason
          </label>
          <textarea
            id="requestingReason"
            name="requestingReason"
            value={formData.requestingReason}
            onChange={handleChange}
            required
            placeholder="Enter requesting reason"
            rows="4"
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="requestType" style={{ display: 'block', marginBottom: '5px' }}>
            Request Type
          </label>
          <select
            id="requestType"
            name="requestType"
            value={formData.requestType}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          >
            <option value="Buy">Buy</option>
            <option value="Sell">Sell</option>
          </select>
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: '#007BFF',
            color: 'white',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default CreateRequest;

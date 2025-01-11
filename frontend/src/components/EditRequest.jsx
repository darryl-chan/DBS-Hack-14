import React, { useState } from 'react';

const EditRequest = ({ initialData }) => {
  const [formData, setFormData] = useState({
    requestDate: initialData?.requestDate || '',
    companyName: initialData?.companyName || '',
    carbonPrice: initialData?.carbonPrice || '',
    carbonQuantity: initialData?.carbonQuantity || '',
    requestingReason: initialData?.requestingReason || '',
    requestType: initialData?.requestType || 'Buy',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required.';
    if (formData.carbonPrice <= 0) newErrors.carbonPrice = 'Carbon price must be a positive number.';
    if (formData.carbonQuantity <= 0) newErrors.carbonQuantity = 'Carbon quantity must be a positive number.';
    if (!formData.requestingReason.trim()) newErrors.requestingReason = 'Requesting reason is required.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log('Form Data:', formData);
    alert('Request submitted successfully!');
  };

  const handleReset = () => {
    setFormData({
      requestDate: '',
      companyName: '',
      carbonPrice: '',
      carbonQuantity: '',
      requestingReason: '',
      requestType: 'Buy',
    });
    setErrors({});
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Edit Request</h2>
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

        {/* Company Name Field */}
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
          {errors.companyName && <p style={{ color: 'red' }}>{errors.companyName}</p>}
        </div>

        {/* Carbon Price Field */}
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
          {errors.carbonPrice && <p style={{ color: 'red' }}>{errors.carbonPrice}</p>}
        </div>

        {/* Carbon Quantity Field */}
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
          {errors.carbonQuantity && <p style={{ color: 'red' }}>{errors.carbonQuantity}</p>}
        </div>

        {/* Requesting Reason Field */}
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
          {errors.requestingReason && <p style={{ color: 'red' }}>{errors.requestingReason}</p>}
        </div>

        {/* Request Type Field */}
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

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '10px' }}>
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
          <button
            type="button"
            onClick={handleReset}
            style={{
              backgroundColor: '#6c757d',
              color: 'white',
              padding: '10px 15px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditRequest;

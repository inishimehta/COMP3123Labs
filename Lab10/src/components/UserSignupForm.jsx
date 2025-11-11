import React, { useState } from 'react';
const UserSignupForm = () => {
    const countries = ['Canada', 'USA', 'Other'];
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    address: '',
    country: '',
    city: '',
    postalCode: '',
    termsAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };
  const validateForm = () => {
    let formErrors = {};
    if (!formData.username.trim()) formErrors.username = 'Username is required';
    if (!formData.password.trim()) formErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) formErrors.confirmPassword = 'Passwords do not match';
    if (!formData.firstName.trim()) formErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) formErrors.lastName = 'Last name is required';
    if (!formData.gender) formErrors.gender = 'Gender is required';
    if (!formData.email.trim()) formErrors.email = 'Email is required';
    if (!formData.phoneNumber.trim()) formErrors.phoneNumber = 'Phone number is required';
    if (!formData.dateOfBirth) formErrors.dateOfBirth = 'Date of birth is required';
    if (!formData.address.trim()) formErrors.address = 'Address is required';
    if (!formData.country) formErrors.country = 'Country is required';
    if (!formData.city.trim()) formErrors.city = 'City is required';
    if (!formData.postalCode.trim()) formErrors.postalCode = 'Postal code is required';
    if (!formData.termsAccepted) formErrors.termsAccepted = 'You must accept the terms';
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form Data:', formData);
      setSubmitted(true);
      // Call API or handle form submission logic here
    }
  };
  return (
    <div>
      {submitted ? (
        <div>
          <h2>Signup Successful!</h2>
          <p>Welcome, {formData.firstName} {formData.lastName}!</p>
          <div>
            {JSON.stringify(formData, null, 2)}
            </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>User Signup</h2>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
          </div>
          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <span style={{ color: 'red' }}>{errors.confirmPassword}</span>}
          </div>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName}</span>}
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName}</span>}
          </div>
          <div>
            <label>Gender:</label>
            <select name="gender" value={formData.gender} onChange={handleChange}>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <span style={{ color: 'red' }}>{errors.gender}</span>}
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && <span style={{ color: 'red' }}>{errors.phoneNumber}</span>}
          </div>
          <div>
            <label>Date of Birth:</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
            {errors.dateOfBirth && <span style={{ color: 'red' }}>{errors.dateOfBirth}</span>}
          </div>
          <div>
            <label>Address:</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && <span style={{ color: 'red' }}>{errors.address}</span>}
          </div>
          <div>
            <label>Country:</label>
            <select name="country" value={formData.country} onChange={handleChange}>
              <option value="">Select</option>
              {
                countries.map(country => (
                    <option key={country} value={country}>{country}</option>
                ))
              }
            </select>
            {errors.country && <span style={{ color: 'red' }}>{errors.country}</span>}
          </div>
          <div>
            <label>City:</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
            {errors.city && <span style={{ color: 'red' }}>{errors.city}</span>}
          </div>
          <div>
            <label>Postal Code:</label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
            />
            {errors.postalCode && <span style={{ color: 'red' }}>{errors.postalCode}</span>}
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
              />
              I accept the terms and conditions
            </label>
            {errors.termsAccepted && <span style={{ color: 'red' }}>{errors.termsAccepted}</span>}
          </div>
          <button type="submit">Signup</button>
        </form>
      )}
    </div>
  );
};
export default UserSignupForm;
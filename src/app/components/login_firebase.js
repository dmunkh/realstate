import { useState } from 'react';
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from '../firbase';

const PhoneLogin = () => {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);

  const sendOTP = async () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      'recaptcha-container',
      { size: 'invisible' },
      auth
    );

    try {
      const result = await signInWithPhoneNumber(
        auth,
        phone,
        window.recaptchaVerifier
      );
      setConfirmationResult(result);
      alert('OTP sent!');
    } catch (error) {
      console.error(error);
      alert('Failed to send OTP');
    }
  };

  const verifyOTP = async () => {
    try {
      await confirmationResult.confirm(code);
      alert('Phone verified!');
    } catch (error) {
      console.error(error);
      alert('Invalid OTP');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={sendOTP}>Send OTP</button>

      <div id="recaptcha-container"></div>

      {confirmationResult && (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button onClick={verifyOTP}>Verify OTP</button>
        </>
      )}
    </div>
  );
};

export default PhoneLogin;

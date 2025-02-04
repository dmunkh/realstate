import { useEffect, useState } from 'react';
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from 'firebase/auth';
import { app } from '../firebase'; // Ensure you import your Firebase config

const auth = getAuth(app); // Initialize Firebase Auth

const PhoneAuth = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [code, setCode] = useState('');

  useEffect(() => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        'recaptcha-container',
        {
          size: 'invisible', // Can also be 'normal' if you want a visible reCAPTCHA
          callback: (response) => {
            console.log('reCAPTCHA verified!', response);
          },
          'expired-callback': () => {
            console.log('reCAPTCHA expired');
          },
        }
      );

      auth.settings.appVerificationDisabledForTesting = false; // Ensure reCAPTCHA is enabled
    }
  }, []);

  const sendOTP = async () => {
    try {
      const appVerifier = window.recaptchaVerifier;
      const confirmation = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        appVerifier
      );
      setConfirmationResult(confirmation);
      alert('OTP sent!');
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  const verifyOTP = async () => {
    try {
      await confirmationResult.confirm(code);
      alert('Phone verified successfully!');
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  return (
    <div>
      <h2>Phone Authentication</h2>
      <div id="recaptcha-container"></div> {/* Required for reCAPTCHA */}
      <input
        type="text"
        placeholder="+1234567890"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button onClick={sendOTP}>Send OTP</button>
      <input
        type="text"
        placeholder="Enter OTP"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={verifyOTP}>Verify OTP</button>
    </div>
  );
};

export default PhoneAuth;

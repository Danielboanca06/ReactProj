import { useState, useEffect, FormEvent } from 'react';
import sendEmail from '../../../components/Forms/Mailer';
import { useNavigate } from 'react-router-dom';
import sendVerification from '../../../components/Forms/SendVerification';

export const useVerification = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState(0);
  const [failed, setFailed] = useState(false);
  const [inputCode, setInputCode] = useState('');
  
  const navToClarification = useNavigate();

  const verifCode = localStorage.getItem('verifCode');

  useEffect(() => {
    if (verifCode) {
      setCode(Number.parseInt(verifCode, 10));
    }
  }, [verifCode]);

  function handelVerificationSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (code === Number.parseInt(inputCode)) {
      let data = localStorage.getItem('userData');
      if (data) {
        data = JSON.parse(data);
      } 

      fetch('https://barberapp-e3a5c-default-rtdb.europe-west1.firebasedatabase.app/userdata.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
        setIsLoading(false);
        localStorage.setItem('userKey', JSON.stringify(data));
        console.log('response:', data);
      })
      .catch(error => {
        console.log(error);
      });
      
      sendEmail();
      setFailed(false);
      navToClarification('/clarification');
    } else {
      setInputCode('');
      setFailed(true);
    }
  }

  let canExecute = true;
  function handleResendCode() {
    if (canExecute) {
      console.log('Function executed!');
      canExecute = false;
      setTimeout(function() {
        sendVerification();
        canExecute = true;
      }, 20000);
    }
  }

  return { isLoading, handelVerificationSubmit, failed, setInputCode, handleResendCode };
};

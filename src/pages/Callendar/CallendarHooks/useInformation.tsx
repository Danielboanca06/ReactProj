import { useState, useEffect } from "react";
import sendEmail from "../../../components/Forms/Mailer";
import { useNavigate } from "react-router-dom";

export const useInformation = ({ time, date }) => {
  let navToClarification = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [hasAccount, setHasAccount] = useState(false);

  function findIfYIsInX(y: string, x: any): boolean {
    const stack = [x];

    while (stack.length > 0) {
      const current = stack.pop();

      if (typeof current === 'string' && current.includes(y)) {
        return true;
      }

      if (typeof current === 'object' && current !== null) {
        const values = Object.values(current) as any[];
        stack.push(...values);
      }
    }

    return false;
  }

  let userData = localStorage.getItem('userData');

  useEffect(() => {
    if (userData) {
      let authToken = "";

      if (userData) {
        const t = JSON.parse(userData);
        authToken = t.details.private.authToken;
      }

      fetch("https://barberapp-e3a5c-default-rtdb.europe-west1.firebasedatabase.app/userdata.json")
        .then(response => response.json())
        .then(data => {
          if (data) {
            if (findIfYIsInX(authToken, data) === false) {
              setHasAccount(false);
            } else {
              setHasAccount(true);
            }
          }
        })
        .catch(error => console.log(error));
    }
  }, []);

  function handleBookClick() {
    if (hasAccount) {
      let dt = {};
      const th = localStorage.getItem("userData");
      const uk = localStorage.getItem("userKey");

      if (th && uk) {
        dt = { [JSON.parse(uk).name]: JSON.parse(th) };
      } else {
        setHasAccount(false);
      }

      fetch('https://barberapp-e3a5c-default-rtdb.europe-west1.firebasedatabase.app/userdata.json', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dt)
      })
        .then(response => response.json())
        .then(data => {
          if (!data) {
            console.log("response:", data);
          }
        })
        .catch(error => {
          console.log(error);
        });

      sendEmail();

      navToClarification('/clarificaion');
    }
  }

  function handleResetClick() {
    setHasAccount(false);
  }

  return { hasAccount, handleBookClick, setIsHovered, isHovered, handleResetClick };
};

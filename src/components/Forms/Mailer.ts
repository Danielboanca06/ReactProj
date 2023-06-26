import emailjs from 'emailjs-com';
import { ordinalNumbers } from "../../Hooks/useOrdinalNumber";

interface UserDetails {
  Name: string;
  details: {
    appointmentDetails: {
      date: string;
      time: string;
    };
  };
}

export default function sendEmail() {
  const m = localStorage.getItem("userData");
  let obj: UserDetails = {
      Name: '',
      details: {
          appointmentDetails: {
              date: '',
              time: ''
          }
      }
  }; 

  if (m) {
    obj = JSON.parse(m) as UserDetails; 
  }

  const d = obj.details?.appointmentDetails?.date;
  const date = ordinalNumbers(d);

  const message = `${obj.Name} has booked an appointment with you on the ${date} at ${obj.details?.appointmentDetails?.time}`;

  const emailParams = {
    from_name: obj.Name,
    to_name: "Recipient Name",
    message: message
  };

  emailjs.send("service_0idk85u", "barber_conf_temp1", emailParams, "O85ZyfdFE5FXw8b7y")
    .then((response) => {
      console.log("Email sent successfully To Barber!", response.status, response.text);
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    });
}

import emailjs from 'emailjs-com';
import { ordinalNumbers } from "../../Hooks/useordinalNumber";


export default function sendEmail() {
  const m = localStorage.getItem("userData");
  let obj = {};
  if (m) {
    obj = JSON.parse(m);
  }
  const d = obj.details.appointmentDetails.date;
  const date = ordinalNumbers(d);

  const message = `${obj.Name} has booked an appointment with you on the ${date} at ${obj.details.appointmentDetails.time}`;

  const emailParams = {
    from_name: obj.Name,
    to_name: "Recipient Name", // Replace with the recipient's name
    message: message
  };

  emailjs.send("service_p4kdj8q", "template_h4m1xl4", emailParams, 'zOINVG_v4D4PTd1YB')
    .then((response) => {
      console.log("Email sent successfully To Barber!", response.status, response.text);
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    });
}

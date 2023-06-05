import emailjs from 'emailjs-com';

interface UserData {
  Name?: string;
  details?: {
    email?: string;
  };
}

export default function sendVerification() {
  let code = 0;

  const generateRandomNumbers = (count: number): number => {
    let result: string = "";
    for (let i = 0; i < count; i++) {
      const randomNumber = Math.floor(Math.random() * 10); // Generate a random number between 0 and 9
      result += randomNumber.toString(); // Append the random number to the result string
    }
    return Number.parseInt(result, 10);
  };

  const m = localStorage.getItem("userData");
  let obj: UserData = {};
  if (m) {
    obj = JSON.parse(m);
    if (m) {
      const verificationNumber = generateRandomNumbers(6);
      code = verificationNumber;
    }
  }

  const message = `Hi ${obj?.Name} Your Email Verification Code is ${code}`;

  const emailParams = {
    email: obj?.details?.email,
    to_name: obj?.Name, // Replace with the recipient's name
    message: message,
  };

  emailjs
    .send("service_p4kdj8q", "verification_ohad92g", emailParams, 'zOINVG_v4D4PTd1YB')
    .then((response) => {
      console.log("Email sent successfully To customer!", response.status, response.text);
      localStorage.setItem("verifCode", code.toString());
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    });
}

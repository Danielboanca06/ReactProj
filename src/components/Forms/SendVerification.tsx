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
  localStorage.setItem("verifCode", code.toString());
  return emailjs
    .send("service_0idk85u", "email_verification_temp1", emailParams, 'O85ZyfdFE5FXw8b7y')

}

// functions/sendEmail.js

export async function handler (event, context) {
    try {
      // Parse the form data
      const data = JSON.parse(event.body);
  
      // Extract values from the form data
      const friendEmail = data.friendEmail;
      const yourName = data.yourName;
      const answer = data.answer;
  
      // Your logic to send an email based on the answer
      const emailSubject = `Valentine's Day Response`;
      const emailMessage = `Hi ${yourName},\n\n${friendEmail} ${answer} your Valentine!`;
  
      // Use a third-party email service or your SMTP server to send the email
      // For simplicity, you can log the message to the console
      console.log(emailSubject);
      console.log(emailMessage);
  
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true }),
      };
    } catch (error) {
      console.error(error);
      return {
        statusCode: 500,
        body: JSON.stringify({ success: false, error: 'Internal Server Error' }),
      };
    }
  }
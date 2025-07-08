import { createTransport } from "nodemailer";

export const transporter = createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASS,
  },
});

// Business email configuration
export const businessMailOptions = {
  from: process.env.USER_EMAIL,
  to: process.env.USER_EMAIL,
};

// Create email templates
export const createCustomerEmailTemplate = (
  name: string,
  email: string,
  service: string,
) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AIRO FIX Booking Confirmation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            border-radius: 10px;
            overflow: hidden;
        }
        .header {
            background: #000000;
            color: #ffffff;
            padding: 20px;
            text-align: center;
        }
        .logo { font-size: 24px; font-weight: bold; }
        .logo-highlight { color: #0ea5e9; }
        .content { padding: 20px; }
        .footer {
            background: rgba(0, 0, 0, 0.5);
            color: #ffffff;
            padding: 20px;
            text-align: center;
        }
        .contact {
            margin-top: 20px;
            padding: 15px;
            background: rgba(0, 0, 0, 0.05);
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">AIRO <span class="logo-highlight">FIX</span></div>
            <p>Breathe in the Difference</p>
        </div>
        
        <div class="content">
            <h2>Thank You for Your Booking!</h2>
            <p>Dear ${name},</p>
            <p>Thank you for choosing AIRO FIX for your duct cleaning service. We have received your service request and will contact you shortly to confirm the appointment details.</p>
            
            <div class="booking-details">
                <h3>Booking Details:</h3>
                <p><strong>Service:</strong> ${service}</p>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
            </div>

            <div class="contact">
                <h2 class="font-semibold">We will message you soon to confirm time</h2>
                <h3>Need immediate assistance?</h3>
                <p>Call us 24/7 at: <strong>540-515-8283</strong></p>
                <p>We offer FREE estimates!</p>
            </div>
        </div>
        
        <div class="footer">
            <p>AIRO FIX Duct Cleaning</p>
            <p>Serving all over USA</p>
            <p>© 2025 AIRO FIX. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`;

export const createBusinessEmailTemplate = (
  name: string,
  email: string,
  service: string,
  phone: string,
  addressLine1: string,
  addressLine2: string,
  country: string,
  state: string,
  city: string,
  postalCode: string,
) =>
  `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Service Booking</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            border-radius: 10px;
            overflow: hidden;
        }
        .header {
            background: #000000;
            color: #ffffff;
            padding: 20px;
            text-align: center;
        }
        .logo { font-size: 24px; font-weight: bold; }
        .logo-highlight { color: #0ea5e9; }
        .content { padding: 20px; }
        .customer-details {
            background: #f8f8f8;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">AIRO <span class="logo-highlight">FIX</span></div>
            <p>New Service Booking Alert</p>
        </div>
        
        <div class="content">
            <h2>New Booking Received!</h2>
            <div class="customer-details">
                <h3>Customer Details:</h3>
                <p><strong>Customer Name:</strong> ${name}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Adress Line 1:</strong> ${addressLine1}</p>
                <p><strong>Adress Line 2:</strong> ${addressLine2}</p>
                <p><strong>Country:</strong> ${country}</p>
                <p><strong>State:</strong> ${state}</p>
                <p><strong>City:</strong> ${city}</p>
                <p><strong>Postal Code:</strong> ${postalCode}</p>
                <p><strong>Requested Service:</strong> ${service}</p>
            </div>
            
            <p>Please contact the customer as soon as possible to schedule the service.</p>
        </div>
    </div>
</body>
</html>
`;

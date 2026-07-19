// Configuration
const CONTACT_SHEET_NAME = "Contact Leads";
const EMAIL_FROM = "info@durozen.in"; // Update this
const ADMIN_EMAIL = "info@durozen.in"; // Update this

// Spreadsheet ID - Get this from your sheet URL
const SPREADSHEET_ID = "1zA1qFZH-WgwiW3Zffm0MTkoGFLVN1gzHy3he4mSeQJ8";

/**
 * Initialize the sheet with headers if it doesn't exist
 */
function initializeSheet(sheetName, headers) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(sheetName);
  
  // Create sheet if it doesn't exist
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
  } else {
    // Already exists
    return sheet;
  }
  
  // Clear existing content and add headers
  sheet.clearContents();
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format header row
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setBackground("#1f2937");
  headerRange.setFontColor("#ffffff");
  headerRange.setFontWeight("bold");
  headerRange.setFontSize(11);
  
  // Freeze header row
  sheet.setFrozenRows(1);
  
  Logger.log(sheetName + " initialized successfully!");
  return sheet;
}

/**
 * RUN THIS FUNCTION ONCE to manually set up the table in your Google Sheet
 */
function setupAllSheets() {
  const contactHeaders = ["Timestamp", "Name", "Phone", "Email", "Industry", "Service Interest", "Goals", "Status"];
  initializeSheet(CONTACT_SHEET_NAME, contactHeaders);
  
  Logger.log("Contact Leads table has been created successfully!");
}

/**
 * Handle POST request from form
 */
function doPost(e) {
  try {
    const params = e.parameter;
    
    // Validate required fields
    if (!params.name || !params.email) {
      return ContentService
        .createTextOutput(JSON.stringify({ success: false, message: "Name and Email are required" }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    const timestamp = new Date().toLocaleString();
    
    const headers = ["Timestamp", "Name", "Phone", "Email", "Industry", "Service Interest", "Goals", "Status"];
    const sheet = initializeSheet(CONTACT_SHEET_NAME, headers);
    
    const dataRow = [
      timestamp,
      params.name || "",
      params.phone || "",
      params.email || "",
      params.industry || "",
      params.serviceInterest || "",
      params.goals || "",
      "New"
    ];
    
    sheet.appendRow(dataRow);
    
    // Notify Customer
    sendCustomerEmail(params.name, params.email);
    
    // Notify Admin
    sendAdminEmail(params.name, params.email, params.phone, params.industry, params.serviceInterest);
    
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true, 
        message: "Thank you! We received your submission." 
      }))
      .setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log("Error: " + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        message: "An error occurred: " + error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Send confirmation email to customer (Contact Form)
 */
function sendCustomerEmail(name, email) {
  const subject = "We Received Your Request - We'll Contact You Soon!";
  const htmlBody = `
    <html>
      <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; line-height: 1.6;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
            <h1 style="margin: 0; font-size: 28px;">Request Received!</h1>
            <p style="margin: 10px 0 0 0; font-size: 14px; opacity: 0.9;">Thank you for choosing Durozen</p>
          </div>
          
          <h2 style="color: #1f2937; margin-top: 0;">Hello ${name},</h2>
          
          <p style="font-size: 16px; color: #555;">
            Thank you for submitting your inquiry! We're excited about the opportunity to work with you.
          </p>
          
          <div style="background-color: #e8f5e9; border-left: 4px solid #4caf50; padding: 20px; margin: 25px 0; border-radius: 5px;">
            <h3 style="color: #2e7d32; margin-top: 0;">What Happens Next?</h3>
            <p style="margin: 10px 0; color: #555;"><strong>We will contact you soon!</strong></p>
            <ul style="margin: 15px 0; padding-left: 20px;">
              <li style="margin: 8px 0; color: #555;">Our team will review your submission within <strong>24 hours</strong></li>
              <li style="margin: 8px 0; color: #555;">We'll reach out via phone or email to discuss your needs</li>
              <li style="margin: 8px 0; color: #555;">We'll schedule a personalized strategy call at your convenience</li>
              <li style="margin: 8px 0; color: #555;">Together, we'll create a custom solution for your business</li>
            </ul>
          </div>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 25px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Need Help Before We Contact You?</h3>
            <p style="margin: 10px 0; color: #555;">Feel free to reach out anytime:</p>
            <ul style="margin: 15px 0; padding-left: 0; list-style: none;">
              <li style="margin: 10px 0; color: #555;">Email: <a href="mailto:info@durozen.in" style="color: #667eea; text-decoration: none;">info@durozen.in</a></li>
              <li style="margin: 10px 0; color: #555;">Phone: <a href="tel:+918122339694" style="color: #667eea; text-decoration: none;">+91 81223 39694</a></li>
            </ul>
          </div>
          
          <p style="color: #999; font-size: 14px; margin-top: 30px; text-align: center;">
            We appreciate your business and look forward to helping you grow!
          </p>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #1f2937; margin: 5px 0; font-weight: bold;">Durozen Team</p>
            <p style="color: #999; font-size: 12px; margin: 5px 0;">Growing Your Business, One Solution at a Time</p>
          </div>
        </div>
      </body>
    </html>
  `;
  
  try {
    GmailApp.sendEmail(email, subject, "", { 
      htmlBody: htmlBody
    });
    Logger.log("Customer email sent to: " + email);
  } catch (error) {
    Logger.log("Error sending customer email: " + error.toString());
  }
}

/**
 * Send notification email to admin (Contact Form)
 */
function sendAdminEmail(name, email, phone, industry, serviceInterest) {
  const subject = `ALERT: New Lead Submission - ${name} (${serviceInterest})`;
  const submissionTime = new Date().toLocaleString();
  const htmlBody = `
    <html>
      <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333;">
        <div style="max-width: 700px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%); color: white; padding: 25px; border-radius: 10px; text-align: center; margin-bottom: 25px;">
            <h1 style="margin: 0; font-size: 32px;">NEW LEAD ALERT!</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.95;">A new client has submitted a service inquiry</p>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 25px; border-radius: 8px; border: 2px solid #e5e7eb; margin-bottom: 25px;">
            <h2 style="color: #1f2937; margin-top: 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Lead Details</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
            <p><strong>Industry:</strong> ${industry || 'N/A'}</p>
            <p><strong>Service Interest:</strong> ${serviceInterest || 'N/A'}</p>
            <p><strong>Time:</strong> ${submissionTime}</p>
          </div>
        </div>
      </body>
    </html>
  `;
  
  try {
    GmailApp.sendEmail(ADMIN_EMAIL, subject, "", { htmlBody: htmlBody });
  } catch (error) {
    Logger.log("Error sending admin email: " + error.toString());
  }
}

/**
 * Handle GET request (e.g. if someone visits the Web App URL in their browser)
 */
function doGet(e) {
  return ContentService
    .createTextOutput("Durozen Backend API is running.")
    .setMimeType(ContentService.MimeType.TEXT);
}

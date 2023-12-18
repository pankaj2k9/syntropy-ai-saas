import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  if (request.method !== 'GET') {
    return NextResponse.json({
      status: 405,
      message: 'Only GET requests allowed'
    }, {
      status: 405
    });
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ auth, version: 'v4' });

    // Assuming the data is in a sheet called 'Sheet1' and the range encompasses all the data
    const range = 'Sheet1!A:Z';
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: range,
    });

    // Parse the rows into a list of objects
    const rows = response.data.values;
    if (!rows || rows.length === 0) {
      return NextResponse.json({ message: 'No data found' }, { status: 404 });
    }

    const headers:any = rows.shift(); // Extract the first row as headers
    const data = rows.map((row) => {
      let obj:any = {};
      headers.forEach((header:any, index:any) => {
        obj[header.toLowerCase()] = row[index] || null;
      });
      return obj;
    });

    return NextResponse.json({ data }, { status: 200 });

  } catch (e) {
    console.error('Error accessing the Google Sheet', e);
    return NextResponse.json({ message: 'Error accessing the Google Sheet' }, { status: 500 });
  }
}

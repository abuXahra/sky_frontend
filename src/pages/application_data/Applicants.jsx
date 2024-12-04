import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import axios from 'axios';
import * as XLSX from 'xlsx';
import { DataTableContent, DataTableWrapper } from './applicant.style';

const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your API or MongoDB
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_URL}/api/users`); // Replace with your API endpoint
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Export function to convert the data to Excel and download it
  const exportToExcel = () => {
    if (!data || data.length === 0) {
      alert('No data available to export');
      return;
    }

    // Add serial numbers to data for Excel export
    const dataWithSerial = data.map((user, index) => ({
      SerialNumber: index + 1, // Add Serial Number
      FirstName: user.firstName,
      LastName: user.lastName,
      Email: user.email,
      PhoneNumber: user.phoneNumber,
      Category: user.selectedCategory,
      SchoolName: user.nameOfSchoolG || user.nameOfSchoolS,
      YearOfGraduation: user.yearOfGraduateG || '',
      CourseOfStudy: user.courseOfStudyG || user.courseOfStudyS,
      SupportType: user.selectedCategory === 'Entrepreneur' ? user.selectedSupportType : '-',
    }));

    // Convert data to Excel sheet format
    const ws = XLSX.utils.json_to_sheet(dataWithSerial); // Convert to sheet
    const wb = XLSX.utils.book_new(); // Create new workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Users'); // Append sheet to workbook

    // Trigger the download of the Excel file
    XLSX.writeFile(wb, 'users_data.xlsx');
  };

  return (
    <DataTableWrapper>
      <DataTableContent>
        {/* Button to trigger export */}
        <Button 
          variant="contained" 
          color="primary" 
          onClick={exportToExcel} 
          style={{ marginBottom: '20px' }}
        >
          Export to Excel
        </Button>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell> {/* Serial Number Column */}
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>School Name</TableCell>
                <TableCell>Year of Graduation</TableCell>
                <TableCell>Course of Study</TableCell>
                <TableCell>Level</TableCell>
                <TableCell>Support Type</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((user, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell> {/* Serial Number */}
                  <TableCell>{user.firstName}</TableCell>
                  <TableCell>{user.lastName}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phoneNumber}</TableCell>
                  <TableCell>{user.selectedCategory}</TableCell>
                  <TableCell>{user.nameOfSchoolG || user.nameOfSchoolS}</TableCell>
                  <TableCell>{user.yearOfGraduateG || ''}</TableCell>
                  <TableCell>{user.courseOfStudyG || user.courseOfStudyS}</TableCell>
                  <TableCell>{'' || user.levelS}</TableCell>
                  <TableCell>{user.selectedCategory === 'Entrepreneur' ? user.selectedSupportType : '-'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </DataTableContent>
    </DataTableWrapper>
  );
};

export default DataTable;

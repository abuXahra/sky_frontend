import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';
import * as XLSX from 'xlsx';
import { ButtonWrapper, DataTableContent, DataTableWrapper, NoData, StyledTable, StyledTableCell, StyledTableHead } from './applicant.style';
import Button from '../../components/clicks/button/Button';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/loader/Loader';


// Define styled-components for table elements


const DataTable = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Fetch data from your API or MongoDB
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(`${process.env.REACT_APP_URL}/api/users`); // Replace with your API endpoint
        setData(response.data);
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false)
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
      shopAddress: user.shopAddress,
      Category: user.selectedCategory,
      SupportType: user.selectedCategory === 'Entrepreneur' ? user.selectedSupportType : '-',
      SchoolName: user.nameOfSchoolG || user.nameOfSchoolS || '-',
      YearOfGraduation: user.yearOfGraduateG || '-',
      CourseOfStudy: user.courseOfStudyG || user.courseOfStudyS || '-',
      Level: user.levelS || '-',
    }));

    // Convert data to Excel sheet format
    const ws = XLSX.utils.json_to_sheet(dataWithSerial); // Convert to sheet
    const wb = XLSX.utils.book_new(); // Create new workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Users'); // Append sheet to workbook

    // Trigger the download of the Excel file
    XLSX.writeFile(wb, 'users_data.xlsx');
  };



if(data.length === 0){
  return (
    <NoData>No Data</NoData>
  );
}


  return (<>{
    isLoading ? 
    (<Loader/>) :
    (<DataTableWrapper>
      <DataTableContent>
        {/* Button to trigger export */}
        <ButtonWrapper>
            <Button
              btnColor={'green'} 
              btnOnClick={exportToExcel}
              btnText={'Export'}
              btnPd={"10px"}
            />
            
            <Button
              btnColor={'black'} 
              btnOnClick={()=> navigate('/')}
              btnText={'Home'}
              btnPd={"10px"}
            />
        </ButtonWrapper>
  

        <TableContainer component={Paper}>
          <StyledTable>
            <StyledTableHead>
              <TableRow>
                <StyledTableCell>S/N</StyledTableCell> {/* Serial Number Column */}
                <StyledTableCell>First Name</StyledTableCell>
                <StyledTableCell>Last Name</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>Phone Number</StyledTableCell>
                <StyledTableCell>Shop Address</StyledTableCell>
                <StyledTableCell>Category</StyledTableCell>
                <StyledTableCell>Support Type</StyledTableCell>
                <StyledTableCell>School Name</StyledTableCell>
                <StyledTableCell>Year of Graduation</StyledTableCell>
                <StyledTableCell>Course of Study</StyledTableCell>
                <StyledTableCell>Level</StyledTableCell>
                
              </TableRow>
            </StyledTableHead>
            <TableBody>
              {data.map((user, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell> {/* Serial Number */}
                  <TableCell>{user.firstName}</TableCell>
                  <TableCell>{user.lastName}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phoneNumber}</TableCell>
                  <TableCell>{user.shopAddress}</TableCell>
                  <TableCell>{user.selectedCategory}</TableCell>
                  <TableCell>{user.selectedCategory === 'Entrepreneur' ? user.selectedSupportType : '-'}</TableCell>
                  <TableCell>{user.nameOfSchoolG || user.nameOfSchoolS || '-'}</TableCell>
                  <TableCell>{user.yearOfGraduateG || '-'}</TableCell>
                  <TableCell>{user.courseOfStudyG || user.courseOfStudyS || '-'}</TableCell>
                  <TableCell>{user.levelS || '-'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </StyledTable>
        </TableContainer>
      </DataTableContent>
    </DataTableWrapper>)}
    </>
  );
};

export default DataTable;

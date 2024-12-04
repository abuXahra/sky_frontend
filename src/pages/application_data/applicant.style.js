import { Table, TableCell, TableHead } from "@mui/material";
import styled from "styled-components";

export const DataTableWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background-color: aliceblue;
`;

export const DataTableContent = styled.div`
  width: 95%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: column;
  gap: 20px;
`;

export const StyledTable = styled(Table)`
  width: 100%;
  border-collapse: collapse;
`;

export const StyledTableHead = styled(TableHead)`
  background-color: #f5f5f5; /* Optional: background color for headers */
`;

export const StyledTableCell = styled(TableCell)`
  white-space: nowrap; /* Prevent wrapping */
  text-overflow: ellipsis; /* Add ellipsis for overflowing text */
  overflow: hidden;
  padding: 10px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const NoData = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
`;

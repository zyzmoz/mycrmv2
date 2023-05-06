import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { i18n } from "../../translations/I18n";
import { Add } from "@mui/icons-material";
import { TCustomers } from "../../models/customer";
import { useState } from "react";

// TODO: Remove after data integration

const rows: TCustomers = [
  {
    id: "1a",
    firstName: "Customer 1",
    lastName: "One",
    email: "cone@email.com",
    primaryPhone: "23190234781",
    obs: "Text 1",
    birthDate: "01/01/1991",
  },
  {
    id: "1b",
    firstName: "Customer 2",
    lastName: "Two",
    email: "ctwo@email.com",
    primaryPhone: "23190234781",
    obs: "Text 2",
    birthDate: "01/02/1991",
  },
  {
    id: "1c",
    firstName: "Customer 3",
    lastName: "Three",
    email: "c3@email.com",
    primaryPhone: "23190234781",
    obs: "Text 3",
    birthDate: "01/03/1991",
  },
  {
    id: "1d",
    firstName: "Customer 4",
    lastName: "Four",
    email: "c4@email.com",
    primaryPhone: "23190234781",
    obs: "Text 4",
    birthDate: "01/04/1991",
  },
];

const Customers: React.FC = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <div style={styles.header}>
        <TextField
          id="standard-basic"
          label="Search"
          variant="standard"
          onChange={(e) => setSearchText(e.target.value)}
        />

        <Button variant="contained">
          <Add /> Add
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">{i18n.customer.customerName}</TableCell>
              <TableCell align="left">{i18n.customer.email}</TableCell>
              <TableCell align="left">{i18n.customer.primaryPhone}</TableCell>
              <TableCell align="left">{i18n.customer.birthDate}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .filter(
                (r) =>
                  `${r.firstName} ${r.lastName}`.includes(searchText) ||
                  r.email.includes(searchText) ||
                  r.primaryPhone.includes(searchText)
              )
              .map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.firstName} {row.lastName}
                  </TableCell>
                  <TableCell align="left">{row.email}</TableCell>
                  <TableCell align="left">{row.primaryPhone}</TableCell>
                  <TableCell align="left">{row.birthDate}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "1rem",
  },
};

export default Customers;

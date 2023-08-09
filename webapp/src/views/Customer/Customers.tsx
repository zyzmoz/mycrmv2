import { useEffect, useState } from "react";
import { useQuery } from "react-query";
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
import { useDispatch } from "react-redux";
import { Star } from "@mui/icons-material";
import { i18n } from "../../translations/I18n";
import { TCustomers } from "../../models/customer";
import { open } from "../../reducers/modalSlice";

const Customers: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const query = useQuery('customers', apiCALL)
  const [customers, setCustomers] = useState<TCustomers>([]);
  const dispatch = useDispatch();

  // TODO: DELETE THIS CODE SMELL (TEST ONLY)
  useEffect(() => {
    (async () => {
      if (1 + 1 === 3) {
        const ctrl = await import(
          "../../../wailsjs/go/controllers/CustomerController.js"
        );
        console.log(ctrl);
        const customerList = await ctrl.FindAll();
        setCustomers(customerList);
      } else {
        const res = await fetch("http://localhost:8081/customers");
        const customerList = await res.json();
        setCustomers(customerList);
      }
    })();
  }, []);

  const handleNewCustomer = () => {
    dispatch(open("world"));
  };

  return (
    <>
      <div style={styles.header}>
        <TextField
          fullWidth
          id="standard-basic"
          label={`${i18n.general.search} ${i18n.customer.customer}`}
          variant="outlined"
          onChange={(e) => setSearchText(e.target.value)}
        />

        <Button
          onClick={handleNewCustomer}
          color="success"
          variant="contained"
          sx={{ height: "56px" }}
        >
          <Star /> {i18n.general.new}
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
            {customers
              .filter(
                (r) =>
                  `${r.FirstName} ${r.LastName}`.includes(searchText) ||
                  r.Email?.includes(searchText)
              )
              .map((row) => (
                <TableRow
                  key={row.ID}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.FirstName} {row.LastName}
                  </TableCell>
                  <TableCell align="left">{row.Email}</TableCell>
                  <TableCell align="left">{row?.primaryPhone}</TableCell>
                  <TableCell align="left">{row.BirthDate}</TableCell>
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
    margin: "0",
    marginBottom: "1rem",
    gap: "1rem",
  },
};

export default Customers;

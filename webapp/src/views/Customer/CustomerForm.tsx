import { ArrowBack, Save, Search } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { i18n } from "../../translations/I18n";
import { BaseSyntheticEvent, useState } from "react";

interface ICustomerProps {
  onClose?: () => void;
}

const CustomerForm: React.FC<ICustomerProps> = ({ onClose }) => {
  // TODO: get editing data from store if available;
  const [formData, setFormData] = useState({}); // TODO: types

  const handleChange = (e: BaseSyntheticEvent) => {
    const { id, value } = e.currentTarget;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", width: "60vw" }}>
      <TextField
        label={i18n.customer.customerName}
        id="customerName"
        fullWidth
        onChange={handleChange}
      />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          marginTop: 2,
          gap: "1rem",
        }}
      >
        <TextField
          label={i18n.customer.govId}
          id="govId"
          style={{ width: "33.33%" }}
          onChange={handleChange}
        />
        <TextField
          label={i18n.customer.taxId}
          id="taxId"
          style={{ width: "33.33%" }}
          onChange={handleChange}
        />
        <TextField
          label={i18n.customer.birthDate}
          id="birthDate"
          style={{ width: "33.33%" }}
          onChange={handleChange}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          marginTop: 2,
          gap: "1rem",
        }}
      >
        <FormControl sx={{ width: "33.33%" }} variant="outlined">
          <InputLabel htmlFor="zipCode">{i18n.customer.zipCode}</InputLabel>
          <OutlinedInput
            label={i18n.customer.zipCode}
            id="zipCode"
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" edge="end">
                  <Search />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <TextField
          label={i18n.customer.address}
          id="address"
          onChange={handleChange}
          style={{ width: "67.66%" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          marginTop: 2,
          gap: "1rem",
        }}
      >
        <TextField
          label={i18n.customer.neighborhood}
          id="neighborhood"
          onChange={handleChange}
          style={{ width: "33.33%" }}
        />
        <TextField
          label={i18n.customer.city}
          id="city"
          onChange={handleChange}
          style={{ width: "33.33%" }}
        />
        <TextField
          label={i18n.customer.province}
          id="province"
          onChange={handleChange}
          style={{ width: "33.33%" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          marginTop: 2,
          gap: "1rem",
        }}
      >
        <TextField
          label={i18n.customer.primaryPhone}
          id="primaryPhone"
          onChange={handleChange}
          style={{ width: "33.33%" }}
        />
        <TextField
          label={i18n.customer.mobilePhone}
          id="mobilePhone"
          onChange={handleChange}
          style={{ width: "33.33%" }}
        />
        <TextField
          label={i18n.customer.email}
          id="email"
          onChange={handleChange}
          style={{ width: "33.33%" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",

          marginTop: 2,
        }}
      >
        <TextField
          fullWidth
          id="additionalInfo"
          onChange={handleChange}
          label={i18n.general.additionalInfo}
          multiline
          rows={4}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          marginTop: 2,
          gap: "1rem",
        }}
      >
        <Button onClick={onClose} variant="outlined" color="error">
          <ArrowBack />
          {i18n.general.cancel}
        </Button>
        <Button onClick={onClose} variant="contained" color="success">
          {i18n.general.save}
          <Save />
        </Button>
      </Box>
    </Box>
  );
};

export default CustomerForm;

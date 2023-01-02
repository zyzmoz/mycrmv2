import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Sidebar } from "../components/Sidebar/Sidebar";
import Colors from "../sass/variables/_colors.module.scss";
import Customers from "../views/Customer/Customers";

const AdminLayout: React.FC = () => {
  return (
    <div
      style={{
        height: "100%",
        backgroundColor: "fuchsia",
        display: "flex",
      }}
    >
      <Sidebar />
      <Box
        sx={{
          width: "100%",
          bgcolor: `${Colors.backgroundColor}`,
          height: "100%",
          padding: "1rem",
        }}
      >
        <div>
          <Customers />
        </div>
      </Box>
    </div>
  );
};

export { AdminLayout };

import { Box } from "@mui/system";
import { Sidebar } from "../components/Sidebar/Sidebar";
import Colors from "../sass/variables/_colors.module.scss";
import { Outlet } from "react-router-dom";

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
        <Outlet />
      </Box>
    </div>
  );
};

export { AdminLayout };

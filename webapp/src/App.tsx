import { useSelector } from "react-redux"
import { QueryClient, QueryClientProvider } from "react-query";
import { ModalComponent } from "./components/Modal";
import { AdminLayout } from "./layouts/AdminLayout";
import type { RootState } from "./store";

const queryClient = new QueryClient();

const App: React.FC = () => {
  const { isOpen, modalId } = useSelector((state: RootState) => state.modalReducer)

  return (
    <QueryClientProvider client={queryClient}>
      <ModalComponent isOpen={isOpen} modalId={modalId} />
      <AdminLayout />
    </QueryClientProvider>
  );
};

export default App;

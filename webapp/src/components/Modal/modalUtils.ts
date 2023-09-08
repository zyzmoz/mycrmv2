import { i18n } from "../../translations/I18n";
import CustomerForm from "../../views/Customer/CustomerForm";

interface IModalSchema {
  [key: string]: {
    title: string;
    Content: React.ComponentType<any & { onClose: () => void }>;
  };
}

export const getModal = (modalId: string) => {
  const modalMapper: IModalSchema = {
    "new-customer": {
      title: i18n.customer.new,
      Content: CustomerForm,
    },
  };

  return modalMapper[modalId];
};

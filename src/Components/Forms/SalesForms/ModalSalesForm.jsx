import { Dialog } from "@material-ui/core";
import PropTypes from "prop-types";

import SalesForm from "./SalesForm";

function ModalSalesForm(props) {
  const { open, onClose } = props;

  return (
    <Dialog open={open} onClose={onClose}>
      <SalesForm {...props} />
    </Dialog>
  );
}

ModalSalesForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default ModalSalesForm;

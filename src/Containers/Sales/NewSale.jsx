import { useState } from "react";
import { Button } from "@material-ui/core";
import { RiAddFill } from "react-icons/ri";
import { makeStyles } from "@material-ui/core/styles";

import ModalSalesForm from "../../Components/Forms/SalesForms/ModalSalesForm";
import SalesTable from "../../Components/Tables/SalesTable";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "8px",
    },
  };
});

const products = [
  { productName: "hugo boss", productCode: "1", unitPrice: 30, BP: 12 },
  { productName: "chelsea", productCode: "2", unitPrice: 30, BP: 12 },
  { productName: "sheer pink", productCode: "3", unitPrice: 30, BP: 12 },
  { productName: "sweet passion", productCode: "4", unitPrice: 30, BP: 12 },
];

export default function NewSale(props) {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [invoicedProducts, setInvoicedProducts] = useState([]);
  const classes = useStyles();

  function openForm() {
    setFormOpen(true);
  }
  function closeForm() {
    setFormOpen(false);
    cancelSelectedProduct();
  }
  function addSale(data) {
    console.log({ data });
    let arr = [...invoicedProducts];
    const index = invoicedProducts.findIndex(
      (p) => p.productCode === data.productCode
    );
    if (index > -1) {
      arr = arr.map((p, i) => {
        const { discount, unitPrice } = p;
        const qty = +p.qty + +data.qty;
        const sum = qty * unitPrice - discount;
        if (i === index) {
          return {
            ...p,
            qty,
            sum,
          };
        } else {
          return p;
        }
      });
    } else if (index === -1) {
      arr = [...invoicedProducts, data];
    }
    setInvoicedProducts(arr);
    setSelectedProduct({});
    closeForm();
  }
  function cancelSelectedProduct() {
    setSelectedProduct({});
  }

  function selectProduct(code) {
    console.log(code);

    const p = products.filter(({ productCode }) => productCode === code)[0];
    console.log({ p });
    setSelectedProduct(p);
  }

  return (
    <>
      {formOpen ? (
        <ModalSalesForm
          open={formOpen}
          onClose={closeForm}
          products={products}
          selectProduct={selectProduct}
          addSale={addSale}
          onCancel={closeForm}
          handleBack={cancelSelectedProduct}
          selectedProduct={selectedProduct}
        />
      ) : (
        <div className={classes.root}>
          <Button onClick={openForm} endIcon={<RiAddFill />}>
            new sale{" "}
          </Button>
        </div>
      )}
      <SalesTable invoicedProducts={invoicedProducts} />
    </>
  );
}

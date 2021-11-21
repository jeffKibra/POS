import { useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tooltip,
  IconButton,
  ButtonBase,
} from "@material-ui/core";
import { Edit, Delete, MoreVert } from "@material-ui/icons";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const TAX_RATE = 0.16;

function SalesTable(props) {
  const { invoicedProducts } = props;

  const { invoiceTotal, invoiceSubtotal, invoiceTaxes } = useMemo(() => {
    const invoiceTotal = invoicedProducts.reduce((prevSum, product) => {
      return prevSum + +product.sum;
    }, 0);
    const invoiceTaxes = Number(TAX_RATE * invoiceTotal).toFixed(2);

    const invoiceSubtotal = Number(invoiceTotal - invoiceTaxes).toFixed(2);

    return {
      invoiceTotal,
      invoiceSubtotal,
      invoiceTaxes,
    };
  }, [invoicedProducts]);

  const classes = useStyles();

  return (
    <div>
      <TableContainer component={Paper}>
        <Table
          size="small"
          className={classes.table}
          aria-label="spanning table"
        >
          <caption>click item name to edit</caption>
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={4}>
                Details
              </TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Item Name</TableCell>
              <TableCell align="right">Qty</TableCell>
              <TableCell align="right">Unit</TableCell>
              <TableCell align="right">Discount</TableCell>
              <TableCell align="right">Sum</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoicedProducts.map((product, i) => (
              <TableRow key={i}>
                <TableCell style={{ padding: 0 }}>
                  <ButtonBase
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-start",
                      padding: "6px 24px 6px 16px",
                    }}
                  >
                    {product.productName}
                  </ButtonBase>
                </TableCell>
                <TableCell align="right">{product.qty}</TableCell>
                <TableCell align="right">{product.unitPrice}</TableCell>
                <TableCell align="right">{product.discount}</TableCell>
                <TableCell align="right">{product.sum}</TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell rowSpan={3} colSpan={2} />
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align="right">{invoiceSubtotal}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tax</TableCell>
              <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
                0
              )} %`}</TableCell>
              <TableCell align="right">{invoiceTaxes}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">{invoiceTotal}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

SalesTable.propTypes = {
  invoicedProducts: PropTypes.array.isRequired,
};

export default SalesTable;

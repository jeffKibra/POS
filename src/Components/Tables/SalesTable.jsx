import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(
  productCode,
  productName,
  unitPrice,
  qty,
  discount,
  subTotal
) {
  return { productCode, productName, unitPrice, qty, discount, subTotal };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function SalesTable() {
  const classes = useStyles();
  const invoiceTotal = 500;
  const TAX_RATE = 0.16;
  const invoiceSubtotal = (1 - TAX_RATE) * invoiceTotal;
  const invoiceTaxes = TAX_RATE * invoiceTotal;

  return (
    <div>
      <TableContainer component={Paper}>
        <Table
          size="small"
          className={classes.table}
          aria-label="spanning table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={4}>
                Details
              </TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell align="right">Qty</TableCell>
              <TableCell align="right">Unit</TableCell>
              <TableCell align="right">Discount</TableCell>
              <TableCell align="right">Sum</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow key={i}>
                <TableCell>{row.productName}</TableCell>
                <TableCell align="right">{row.qty}</TableCell>
                <TableCell align="right">{row.unitPrice}</TableCell>
                <TableCell align="right">{row.discount}</TableCell>
                <TableCell align="right">{row.sum}</TableCell>
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

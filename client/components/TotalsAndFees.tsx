import Typography from "@mui/material/Typography";
import * as React from "react";
import { FRANCHISEE_FEE } from "../constants";
import { Sale } from "../generated/graphql";

interface Totals {
  preTaxTotal: number;
  total: number;
}

interface TotalsAndFeesProps {
  sales: Sale[] | null | undefined;
}

const TotalsAndFees: React.FC<TotalsAndFeesProps> = (props) => {
  const { sales } = props;

  const totals = sales?.reduce<Totals>(
    (acc, currentValue) => {
      if (currentValue) {
        acc.preTaxTotal += currentValue.subtotal;
        acc.total += currentValue.total;
      }
      return acc;
    },
    {
      preTaxTotal: 0,
      total: 0,
    }
  );

  return (
    <>
      <Typography variant="h6" gutterBottom component="div">
        Total Sales: ${Math.round(Number(totals?.total) * 100) / 100}
      </Typography>
      <Typography variant="h6" gutterBottom component="div">
        Total Franchisee Fees: $
        {Math.round(Number(totals?.preTaxTotal) * FRANCHISEE_FEE * 100) / 100}
      </Typography>
    </>
  );
};

export default TotalsAndFees;

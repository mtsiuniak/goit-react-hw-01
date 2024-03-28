import TransactionDetail from "../TransactionDetail/TransactionDetail";
import css from "./TransactionHistory.module.css"

export default function TransactionHistory({transactions}) {
    return (
<table className={css.table}>
<thead className={css.headlines}>
    <tr>
      <th className={css.title}>Type</th>
      <th className={css.title}>Amount</th>
      <th className={css.title}>Currency</th>
    </tr>
</thead>
    <tbody className={css.operationList}>
        {transactions.map((tr) => <tr className={css.operationItem} key={tr.id}><TransactionDetail operation={tr} /></tr>
    )}
    </tbody>
           
</table>
    )
}
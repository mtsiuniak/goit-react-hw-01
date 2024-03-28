import css from "./TransactionDetail.module.css";

export default function TransactionDetail({ operation: { id, type, amount, currency } }) {
    return (
    <>
      <td className={css.cellType}>{type}</td>
      <td className={css.cell}>{amount}</td>
      <td className={css.cell}>{currency}</td>
    </>
    )
}
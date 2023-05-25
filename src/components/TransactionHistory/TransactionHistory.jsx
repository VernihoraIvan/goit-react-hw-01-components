import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'

function TransactionEl ({type, amount, currency}) {
    return (
        <tbody>
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
     
  </tbody>
    )
}

function TransactionHistory({transactions}) {
    return (
        <table className={css.transaction_history}>
  <thead className={css.header}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  {transactions.map(({id, type, amount, currency}) => (
    <TransactionEl
    key={id}
        type={type}
        amount={amount}
        currency={currency}
    />

    )  
  )}
   
</table>
    )

}


export default TransactionHistory

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}

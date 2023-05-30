import PropTypes from 'prop-types';
import css from './TransactionHistoryEl.module.css'

function TransactionEl({ type, amount, currency }) {
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

export default TransactionEl

TransactionEl.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            currency: PropTypes.string.isRequired,
        }))
};
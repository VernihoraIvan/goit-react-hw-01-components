import css from './StatisticsEl.module.css' 
import PropTypes from 'prop-types';



function StatisticsEl({label, percentage }) {
    return (
        <li className={css.item}>
     <span className={css.label}>{label}</span>
     <span className={css.percentage}>{percentage} %</span>
   </li>
    )
}

export default StatisticsEl

StatisticsEl.propTypes = { 
    stats: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          percentage: PropTypes.number.isRequired,
          id: PropTypes.string.isRequired, 
  }))};
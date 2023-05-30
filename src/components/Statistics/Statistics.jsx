import PropTypes from 'prop-types';
import css from './Statistics.module.css'
import StatisticsEl from '../StatisticsEl/StatisticsEl'
// console.log(css)

function Statistics({ title, stats }) {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.stat_list}>
                {stats.map(({ label, percentage, id }) => (
                    <StatisticsEl
                        key={id}
                        label={label}
                        percentage={percentage}
                    />
                ))}
            </ul>
        </section>
    )
}

export default Statistics


Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
            id: PropTypes.string.isRequired,
        }))
};
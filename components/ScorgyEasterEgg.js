import styles from '../styles/EasterEggs.module.css'
import homeStyles from '../styles/Home.module.css'


const ScorgyEasterEgg = ({ count, setCount }) => {
	if (count === 0 || count % 3 !== 0) return <div />;


	setTimeout(() => setCount(0), 1000)
	return (
		<div className={homeStyles.scorgy}>
			<img src="/scorgy.jpeg" />
		</div>
	)
}

export default ScorgyEasterEgg
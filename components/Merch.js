import styles from '../styles/Merch.module.css'

const Merch = ({ imgSrc, description }) => {
	return (
		<div className={styles.merch}>
			<img src={imgSrc} className={styles.img}/>
			<p>{description}</p>
		</div>
	)
}

export default Merch
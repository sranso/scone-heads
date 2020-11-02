import Layout from '../components/Layout'
import Merch from '../components/Merch'
import styles from '../styles/Merch.module.css'

const Shop = () => (
	<Layout>
		<h2 className={styles.sd}>Shop the Scone</h2>
		<div className={styles.wrapper}>
			<Merch
				imgSrc="/scandle.jpg"
				description="Scandle, $600. Limited edition."
			/>
			<Merch
				imgSrc="/scerfume.jpg"
				description="Scerfume, $880. Limited edition."
			/>
		</div>
	</Layout>
)

export default Shop;
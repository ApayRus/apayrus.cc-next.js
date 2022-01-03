import styles from '../styles/Home.module.css'

const Logo = () => {
	return (
		<div className={styles.logo}>
			<div style={{ marginBottom: -33 }}>A</div>
			{/* <div>pa</div> */}
			<div style={{ /* color: 'grey',  */ transform: 'rotateX(180deg)' }}>Y</div>
		</div>
	)
}

export default Logo

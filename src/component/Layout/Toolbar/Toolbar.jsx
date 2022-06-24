import React from 'react'
import Logo from '../Logo/Logo'
import styles from './Toolbar.module.css';
import Navigation from '../Navigation/Navigation'

function Toolbar() {
  return (
	<header className={styles.header}>
			<Logo/>
			<Navigation/>
	</header>
  )
}

export default Toolbar
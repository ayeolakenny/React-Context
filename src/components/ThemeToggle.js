import React from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default class ThemeToggle extends React.Component {
	static contextType = ThemeContext
	render(){
		const { toggleTheme } = this.context
		return(
			<button onClick={ toggleTheme }>Toggle the theme</button>
		)
	}
}

React= require 'react'
ReactDOM= require 'react-dom'
style= require './app.styl'

ReactDOM.render (
		<div>
			<h1 className={style.h1}>Hello World</h1>
			<h2 className='h2'>Hello Webpack</h2>
		</div>
	), document.getElementById('example')
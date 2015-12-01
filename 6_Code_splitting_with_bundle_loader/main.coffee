load= require 'bundle-loader!./a.js'

load (file)->
	document.open()
	document.write("<h1>#{file}</h1>")
	document.close()
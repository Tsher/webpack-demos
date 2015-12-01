require.ensure ['./a.coffee'], (require)->
	content= require './a.coffee'
	document.open()
	document.write("<h1>#{content}</h1>")
	document.close()
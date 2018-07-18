import React from 'react'
const relatedPages = [
	'https://www.graphicsprings.com/filestorage/stencils/784c79e645508ba38ace2483afa8f4c2.png?width=500&height=500',
	'https://www.graphicsprings.com/filestorage/stencils/6f04fd41eda17b8791417edb3f0c9efd.png?width=500&height=500',
	'https://www.graphicsprings.com/filestorage/stencils/28fbba9a7f985e4060ed2e1a50c3e18b.png?width=500&height=500',
	'https://www.graphicsprings.com/filestorage/stencils/8f016a9ffa2ed1b338c37bf4ae2c7166.png?width=500&height=500',
	'https://www.graphicsprings.com/filestorage/stencils/63ef7c15cd6a552a153c4b8101bf9eff.png?width=500&height=500',

]

const relatedPagesBuild = relatedPages.map((img, i) => (
	<div key={i} className="col">
		<a href="javascript:;" className="related d-block">
			<img src={img} alt="Nuoroda"/>
		</a>
	</div>
))
const Footer = () => {
	return (
		<footer>
			<div className="container">
				<h3>Naudingos nuorodos</h3>
				<div className="row">
					{relatedPagesBuild}
				</div>
			</div>
		</footer>
  )
}
export default Footer

import React from 'react'

const GalleryItem = ({img, title, href}) => {
  return (
	<a href={href} className="gallery-item img-centered" style={{
		backgroundImage:`url(${img})`,
		paddingBottom:'100%'
	}}>

	<div className="gallery-item-title text-white">
		{title}
	</div>
		
	</a>
  )
}

export default GalleryItem

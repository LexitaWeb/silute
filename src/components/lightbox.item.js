import React from 'react'
/**
 * 
 * @param {href} param0 linkas
 * @param {lightbox} param0 
 * @param {title} param0 
 */
const LightboxItem = ({href, lightbox, title}) => {
  return (
	<div>
	  <a href={href} data-lightbox={lightbox} data-title={title}>
		<div className="lightbox-thumbnail"
			 style={{
				 backgroundImage:`url(${href})`,
				 paddingBottom:"100%"
			 }}>
		</div>
	  </a>
	</div>
  )
}

export default LightboxItem

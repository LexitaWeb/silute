import React from 'react'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faCalendarAlt)


const Article = () => {
  return (
	<div>
	  <div className="article">
		  <div 
			  className="article-img img-centered"
			  style={{
				  backgroundImage:'url(http://www.pamarys.lt/publ/MiestoSvente/Svente2016/iwebalbumfiles/c9b66ee238ed4f5394bcf25ef15633be.jpg)',
				  paddingBottom:'30%'
				  
			  }}
		  >
			<div className="article-description">
				<h5 className="text-muted d-flex align-items-center">
					<FontAwesomeIcon icon="calendar-alt" />
					<span className="ml-2 text-white">2018-07-18</span>
				</h5>
			</div>
		</div>
		<div className="article-body p-3 p-md-5">
				  <h3 className="article-title mb-4">Ekstremalios situacijos paskelbimas Šilutės rajono teritorijoje pripažinamas netekusiu galios.</h3>
			  <p>
			  	2017-2018 m. m. Savivaldybės bendrojo lavinimo mokyklose mokėsi 349 abiturientai. Daugiausiai abiturientų, be privalomo lietuvių kalbos ir literatūros brandos egzamino, laikė anglų kalbos valstybinį brandos egzaminą – 273, antroje vietoje – matematika (207). Istoriją laikė 132, fiziką – 25, biologiją – 103 abiturientai. Panašiai, kaip ir 2017 m., informacines technologijas laikė 23, geografiją – 39, rusų kalbą – 3, o vokiečių kalbą – tik 1 mokinys.
  
  Geriausiai sekėsi laikyti vokiečių ir rusų kalbas, informacines technologijas, chemijos, fizikos ir geografijos egzaminus – juos išlaikė visi.
			  </p>
		</div>
	  </div>
	</div>
  )
}
export default Article

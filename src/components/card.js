import React from 'react'

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faCalendarAlt)
const Card = ({img, title, text, href, date}) => (
	<div className="card h-100">
 	  <img src={img} className="card-img-top"/>
 	  <div className="card-body clearfix d-flex flex-column">
 	  	<h4 className="card-title">{title}</h4>
		<p className="card-text">{text}</p>
		<div className="row align-items-end mt-auto">
			<div className="col">
				<h5 className="text-muted d-flex align-items-center">
					<FontAwesomeIcon icon="calendar-alt" />
					<span className="ml-2">{date}</span>
				</h5>
			</div>
			<div className="col">
				<a href={href} className="btn btn-sm btn-primary float-right">Skaityti daugiau</a>
			</div>
		</div>
	  </div>
 	</div>
)

export default Card

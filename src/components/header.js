import React from 'react'
import Link from 'gatsby-link'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

library.add( faMobileAlt, faMapMarkerAlt, faEnvelope )

const Header = ({ siteTitle }) => (
  <div
    className="header img-centered"
    style={{
      // background: 'linear-gradient(10deg,#e4f1eb,#ccffbb)',
      marginBottom: '0',
    }}
    >
    <div
      className="container"
    >
      <div className="row">
        <div className="col-lg-4">
          <img 
            src="http://dev.lexitacrm.lt/static/images/silute/silutes.png" 
            alt="Silute"
           
            />
        </div>
        <div className="col text-right">
          <div className="mb-2">
            <a href="javascript:;" class="text-muted">LT</a>
            <span className="mx-2 text-muted">|</span>
            <a href="javascript:;">EN</a>
            <span className="mx-2 text-muted">|</span>
            <a href="javascript:;">Versija neįgaliesiems</a>
          </div>
          <div>
            <h5>Biudžetinė įstaiga Šilutės rajono savivaldybės administracija</h5>
            <ul className="header-contacts">
              <li>
                <span className="mr-2">+370 628 45 535</span>
                <FontAwesomeIcon icon="mobile-alt" className="text-muted" fixedWidth/>
              </li>
              <li>
                <span className="mr-2">Dariaus ir Girėno g. 1, LT-99133 Šilutė</span>
                <FontAwesomeIcon icon="map-marker-alt" className="text-muted" fixedWidth/>
              </li>
              <li>
                <span className="mr-2">administracija@silute.lt</span>
                <FontAwesomeIcon icon="envelope" className="text-muted" fixedWidth/>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </div>
  </div>
)

export default Header

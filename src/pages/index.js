import React from 'react'
import Link from 'gatsby-link'
import Card  from "../components/card";
import ButtonCustom  from "../components/button.custom";
import GalleryItem from '../components/gallery.item'

const btn = [
  { name: 'Klausimai', icon:'question'},
  { name: 'Turizmas', icon:'walking'},
  { name: 'Projektai', icon:'project-diagram'},
  { name: 'Galerija', icon:'image'},
  { name: 'Vaizdo galerija', icon:'video'},
  { name: 'Apklausos', icon:'pencil-alt'},
  { name: 'Kita', icon:'ellipsis-h'},
]

const btnBuild = btn.map((item)=>(
    <div className="col-lg-3 col-md-4 mb-3">
      <ButtonCustom name={item.name} icon={item.icon} />
    </div>
))
const IndexPage = () => (
  <div>
    {/* <p>This is a sample site for the Gatsby crash course</p> */}
    <div className="container">
      <h2 className="mb-4 text-center">Mūsų puslapyje rasite</h2>
      <div className="row justify-content-center my-lg-5">
        {btnBuild}
      </div>
      <h1>Aktualijos</h1>
      <div className="row my-lg-5">
        <div className="col-lg-4 mb-3">
          <Card img="http://www.pamarys.lt/publ/MiestoSvente/Svente2016/iwebalbumfiles/c9b66ee238ed4f5394bcf25ef15633be.jpg"
          title="Susirinkimas"
          date="2018-07-18"
          text="2018 metų liepos 18 d. (trečiadienį), 16 val. Saugų seniūnijos salėje kviečiamas susirinkimas dėl bendruomeninės veiklos rėmimo lėšų paskirstymo..."
          href="/naujiena"
          />
        </div>
        <div className="col-lg-4 mb-3">
          <Card img="http://www.pamarys.lt/publ/MiestoSvente/Svente2016/iwebalbumfiles/c9b66ee238ed4f5394bcf25ef15633be.jpg"
          title="Bendruomenių ir nevyriausybinių organizacijų dėmesiui "
          date="2018-07-08"
            text="Kviečiame teikti paraiškas pagal Nevyriausybinių organizacijų ir bendruomeninės veiklos stiprinimo 2017–2019 metų veiksmų plano..."
          href="/naujiena"
          />
        </div>
        <div className="col-lg-4 mb-3">
          <Card img="http://www.pamarys.lt/publ/MiestoSvente/Svente2016/iwebalbumfiles/c9b66ee238ed4f5394bcf25ef15633be.jpg"
          title="Susirinkimas"
          date="2018-07-18"
          text="2018 metų liepos 18 d. (trečiadienį), 16 val. Saugų seniūnijos salėje kviečiamas susirinkimas dėl bendruomeninės veiklos rėmimo lėšų paskirstymo..."
          href="/naujiena"
          />
        </div>
      </div>
      <div className="text-right mt-2">
        <a href="/naujienos" className="btn btn-outline-primary">Eiti į naujienas</a>
      </div>
    </div>
    <div className="row my-lg-5 my-3">
      <div className="col-lg-4">
        <GalleryItem img='http://www.pamarys.lt/publ/MiestoSvente/Miesto_svent_20140531/iwebalbumfiles/20ceb915977f4f4b9cc8193001ef43df.jpg' title="Galerija" href='/404' />
      </div>
      <div className="col-lg-8 d-flex align-items-center justify-content-center flex-column">
        <h2 className="text-center">Apsilankykite mūsų galerijoje</h2>
        <p>Patirkite Šilutės krašto gyvenimą iš arčiau</p>
        <a href="/404" className="btn btn-outline-primary">Eiti į galeriją</a>
      </div>
    </div>

    
  </div>
)

export default IndexPage

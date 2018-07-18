import React from 'react'
import Link from 'gatsby-link'
import CardNews from "../components/card.news";
const news = [
  { 
    title: 'Ekstremalios situacijos paskelbimas Šilutės rajono teritorijoje pripažinamas netekusiu galios. ', 
    date: '2018-07-18', 
    text: 'Šilutės rajono savivaldybės  administracijos direktoriaus 2018-06-19 įsakymo nr. A1-866 ,,Dėl ekstremalios situacijos paskelbimo  Šilutės rajono savivaldybės teritorijoje“ pripažinimo...', 
    href: 'naujiena', img:'http://www.pamarys.lt/publ/MiestoSvente/Svente2016/iwebalbumfiles/c9b66ee238ed4f5394bcf25ef15633be.jpg'},
  { 
    title: 'Pagerbti geriausieji abiturientai ir jų mokytojai ', 
    date: '2018-07-18', 
    text:'Šilutės rajono savivaldybės vadovai padėkojo 2018 m. abiturientams, gavusiems aukščiausius, 100-to balų, valstybinių brandos egzaminų įvertinimus, bei juos ugdžiusiems mokytojams.', 
    href:'naujiena',
    img:'http://www.pamarys.lt/publ/MiestoSvente/Miesto_svent_20140531/iwebalbumfiles/8116fbd6a4494202aa0529fa46486c51.jpg'
  },
  { 
    title: 'Plaukimo maratonas Kuršių mariose ', 
    date: '2018-07-18', 
    text:'Šilutės rajono savivaldybės meras Vytautas Laurinaitis iš laivo pasveikino Kuršių marių maratono dalyvius (fotografija A.A. Juodeškos).', 
    href:'naujiena',
    img:'http://www.pamarys.lt/publ/MiestoSvente/Miesto_svent_20140531/iwebalbumfiles/4ebe98b41ed84e608a23ce3f478caad6.jpg'
  },
  { 
    title: 'Padėkota Dainų šventės kolektyvų vadovams ir pagalbininkams ', 
    date: '2018-07-18', 
    text:'Penktadienį Šilutės Hugo Šojaus muziejaus menėje Šilutės rajono savivaldybės vadovai padėkojo kolektyvų vadovams ir kitiems pagalbininkams...', 
    href:'naujiena',
    img:'http://www.pamarys.lt/publ/MiestoSvente/Miesto_svent_20140531/iwebalbumfiles/20ceb915977f4f4b9cc8193001ef43df.jpg'
  },
  { 
    title: 'Įamžinta Šilutės autobusų parko statybos pradžia ', 
    date: '2018-07-18', 
    text:'Šilutėje, Dariaus ir Girėno g. 30, prasidėjo Šilutės autobusų parko statyba. Tai pirmasis darbų etapas, kuriam buvo pritarusi Šilutės rajono savivaldybės taryba dar 2016 m. rugpjūčio 18 d...', 
    href:'naujiena',
    img:'http://www.pamarys.lt/publ/MiestoSvente/Miesto_svent_20140531/iwebalbumfiles/552f3a4ce31a47978ebbed637f8b03ef.jpg'
  },
]

const newsBuild = news.map((article, i)=>(
  <div key={i}>
    <CardNews title={article.title} date={article.date} text={article.text} href={article.href} img={article.img}/>
  </div>
));

const Naujienos = () => (
  <div>
    <h1>Naujienos</h1>

    {newsBuild}
    
  </div>
)

export default Naujienos

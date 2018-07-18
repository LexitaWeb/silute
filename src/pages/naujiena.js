import React from 'react'
import Link from 'gatsby-link'
import Article from "../components/article";
import Card from "../components/card"


const Naujiena = () => (
	<div>
		<div className="row">
			<div className="col-lg-8">
				<h1 className="d-flex align-items-center">
					Naujienos
					<a href="/naujienos" className="btn btn-primary ml-auto">Grįžti</a>
				</h1>
				
				<Article />
			</div>

			<div className="col-lg-4">
				<h3 className="text-right" style={{
					marginBottom:"28px"
				}}>Daugiau naujienų</h3>

				<div className="mb-3">
					<Card 
						title="Susirinkimas"
						date="2018-07-18"
						text="2018 metų liepos 18 d. (trečiadienį), 16 val. Saugų seniūnijos salėje kviečiamas susirinkimas dėl bendruomeninės veiklos rėmimo lėšų paskirstymo..."
						href="javascript:;"
					/>
				</div>
				<div className="mb-3">
					<Card 
						title="Bendruomenių ir nevyriausybinių organizacijų dėmesiui "
						date="2018-07-08"
						text="Kviečiame teikti paraiškas pagal Nevyriausybinių organizacijų ir bendruomeninės veiklos stiprinimo 2017–2019 metų veiksmų plano..."
						href="javascript:;"
					/>
				</div>
				<div className="mb-3">
					<Card 
						title="Susirinkimas"
						date="2018-07-18"
						text="2018 metų liepos 18 d. (trečiadienį), 16 val. Saugų seniūnijos salėje kviečiamas susirinkimas dėl bendruomeninės veiklos rėmimo lėšų paskirstymo..."
						href="javascript:;"
					/>
				</div>
			</div>
		</div>
	</div>
)

export default Naujiena

import React from 'react'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStroopwafel, faQuestion, faWalking, faProjectDiagram, faImage, faVideo,faPencilAlt, faEllipsisH } from "@fortawesome/free-solid-svg-icons";

library.add(faStroopwafel, faQuestion, faWalking, faProjectDiagram, faImage, faVideo,faPencilAlt, faEllipsisH)

const ButtonCustom = ({name, icon}) => {
	return (
	<a href="javascript:;" className="button-custom">
		<div className="button-custom-icon">
			<FontAwesomeIcon icon={icon} size="2x" />
		</div>
		<div className="ml-3">{name}</div>
	</a>
  )
}
export default ButtonCustom

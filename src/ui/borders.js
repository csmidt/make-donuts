import React from 'react'
import { Link } from 'react-router'
import borders from 'ui/borders'
import 'font-awesome/css/font-awesome.css'


const Borders = React.createClass({
	render: function () {
		return (
			<div>
				<div className="header">
					<ul className="headerIcons">
						<li>The kitchen is yours, chef!</li>
						<li>Batch Maker</li>
						<li>
							<ul className="icons">
								<li><i className="fa fa-plus" aria-hidden="true"></i></li>
								<li><i className="fa fa-cog" aria-hidden="true"></i></li>
								<li><i className="fa fa-user" aria-hidden="true"></i></li>
							</ul>
						</li>	
					</ul>
				</div>	
			</div>
		)
	}
}) 

export default Borders

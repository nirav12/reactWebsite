import React,{Component} from 'react';
import {theskirt} from '../../json/theskirt';
import {verysmartbut} from '../../json/theskirt';
import pic01 from '../../images/pic01.jpg';
import pic02 from '../../images/pic02.jpg';
import pic03 from '../../images/pic03.jpg';
import pic04 from '../../images/pic04.jpg';
import pic05 from '../../images/pic05.jpg';
import pic06 from '../../images/pic06.jpg';


export default class Content extends Component{
	
	constructor(props) {
	    super(props);
	}

	render(){		
		let displayFeatures = [];
		let displayPosts = [];

		for (let i = 0; i < theskirt.section.countArticles; i++) {
			displayFeatures.push(
						<article key={i}>
							<span className={theskirt.section.rows[i].class}></span>
							<div className="content">
								<h3>{theskirt.section.rows[i].header}</h3>
								<p>{theskirt.section.rows[i].html}</p>
							</div>
						</article>);
		}


		for (let j = 0; j < verysmartbut.section.countArticles; j++) {
			let imgPath = verysmartbut.section.rows[j].imageName;
			displayPosts.push(
				<article key={j}>
					<a href="#" className="image"><img src={require('../../images/'+imgPath)} alt=""/></a>
					<h3>{verysmartbut.section.rows[j].header}</h3>
					<p>{verysmartbut.section.rows[j].html}</p>
					<ul className="actions">
						<li><a href="#" className="button">More</a></li>
					</ul>
				</article>);
		}

		return (
			<span>
			<section>	
				<header className="major">
					<h2>{theskirt.section.header}</h2>
				</header>	
				<div className={theskirt.section.type}>
					{displayFeatures}
				</div>
			</section>
			<section>	
				<header className="major">
					<h2>{verysmartbut.section.header}</h2>
				</header>	
				<div className={verysmartbut.section.type}>
					{displayPosts}
				</div>
			</section>
			</span>
		);
	}
}
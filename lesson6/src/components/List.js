import React , {Component} from 'react';
import Card from './Card';

export default class List extends Component {

	constructor(props){
		super(props)
	}

	render(){
		return (
			<ul className="cards-list">{
				this.props.list_data.map( (item,index) => {
					console.log('list_data.map ', typeof this.props.item_click)
					return (
									<li key={item.id}>
						        <Card data={item} item_click={this.props.item_click}/>
					        </li>
								)
				})
			}</ul>
		)

	}

}

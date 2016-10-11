import React , {Component, PropTypes} from 'react';
import Thumb from './Thumb';

class Card extends Component {

	constructor(props){
		super(props)
	}
  on_item_click(){
      console.log('on_item_click')
      this.props.item_click(this.props.data)
  }
	render(){
    let {first_name,country,description,avatar} = this.props.data;
    return (
      <div className="card-item">
    		<Thumb image_url={avatar} on_item_click={::this.on_item_click}/>
    		<div className="texts-box">
    			<h1 className="card-title">{first_name} from {country}</h1>
    			<p className="card-msg">{description}</p>
    		</div>
  	  </div>
    )
	}

  // static propTypes = {
  // 	on_filter: PropTypes.func.isRequired,
  // 	list_data: PropTypes.arrayOf(PropTypes.shape({
  // 			id: PropTypes.number.isRequired,
  // 			first_name: PropTypes.string.isRequired,
  // 			last_name: PropTypes.string.isRequired,
  // 			email: PropTypes.string.isRequired,
  // 			country: PropTypes.string.isRequired,
  // 			description: PropTypes.string.isRequired,
  // 			avatar: PropTypes.string.isRequired,
  // 		})).isRequired
  //   }
}

export default Card

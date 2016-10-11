import React , {Component, PropTypes} from 'react'
import filter_func from './filter_func'

class Filter extends Component {

	constructor(props){
		super(props)
	}
  update_list(event){
		console.log('update_list')
		let filtered_list = this.props.list_data.filter( item =>  filter_func( item , event.target.value ) )
		// let filtered_list = this.props.list_data.filter( (item) =>
		// 	 item.first_name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
		// )
		this.props.on_filter(filtered_list)
	}
	render(){
		return <input type="text" className="filter" onChange={::this.update_list} />
	}

	static propTypes = {
		on_filter: PropTypes.func.isRequired,
		list_data: PropTypes.arrayOf(PropTypes.shape({
				id: PropTypes.number.isRequired,
				first_name: PropTypes.string.isRequired,
				last_name: PropTypes.string.isRequired,
				email: PropTypes.string.isRequired,
				country: PropTypes.string.isRequired,
				description: PropTypes.string.isRequired,
				avatar: PropTypes.string.isRequired,
			})).isRequired
	  }
}

export default Filter

import React , {Component, PropTypes} from 'react';

class Profile extends Component {

	constructor(props){
		super(props)
	}

	render(){

		let {id,first_name,last_name,email,country,description,avatar} = this.props.data
    avatar = avatar.replace(/80x80/,'300x300')

		return (
      <div className="profile-box">
				<div className="profile-image-box">
						<img src={avatar} />
				</div>
				<div className="details-box">
	        <h2>{first_name} {last_name}</h2>
					<h5>country: {country}</h5>
					<p>{description}</p>
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

export default Profile

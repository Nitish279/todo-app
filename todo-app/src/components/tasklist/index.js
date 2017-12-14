import React from 'react';
import { connect } from 'react-redux';

class Tasklist extends React.Component{

	render(){
		return(
			<div>
				<br />
				<table>
					<thead>
						<tr>
							<th>Task</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{this.props.tasks.map((task,index)=><Task key={index} task={task} />)}
					</tbody>
				</table>
			</div>
		);
	};
}


function mapStateToProps(State){
	return{
		tasks: state.tasks
	};
}

export default connect(mapStateToProps)(Tasklist);
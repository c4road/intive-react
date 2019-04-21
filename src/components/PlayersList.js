import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const PlayersList = props => {
	if (!props.players){
		return (
			<div className="container">Loading...</div>
		)
	}

	if (props.players.length === 0){
		return (
			<div className="container">No players found</div>
		)
	}

	return (
		<>
		<Paper >
		  <Table >
		    <TableHead>
		      <TableRow>
		        <TableCell>Player</TableCell>
		        <TableCell >Position</TableCell>
		        <TableCell >Team</TableCell>
		        <TableCell >Age</TableCell>
		      </TableRow>
		    </TableHead>
		    <TableBody>
		      {Array.prototype.map.call(props.players, (player, i)=>(
		      	<TableRow >
		      	  <TableCell component="th" scope="row">
		      	    {player.name}
		      	  </TableCell>
		      	  <TableCell align="right">{player.position}</TableCell>
		      	  <TableCell align="right">{player.nationality}</TableCell>
		      	  <TableCell align="right">{player.age}</TableCell>
		      	</TableRow>
		      )

		      )}
		    </TableBody>
		  </Table>
		</Paper>
		</>
	)
}

export default PlayersList

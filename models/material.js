const hgl = require('hedonGL');

class Material {
	 constructor( props ,children) {
	 	this.children = children;
	 	const labels = [	
	 				'ambient','diffuse','specular'
	 			],
	 			vars =
		 			labels
		 			.map(i => props[i])
		 			.map(vec => [...Array(3)]
		 							.map( 
		 								(v,i) => Number.isNaN(vec[i]) ? 0 : vec[i] 
		 						)
		 				)
		 			.reduce((rtn,vec,index)=>{
		 				rtn[ labels[index] ] = vec; 
		 				return rtn;
		 			},{});
		 		vars.shininess = Number.isNaN(props.shininess) ? 30.0 : props.shininess;
	 }
	 draw(){
	 	
	 }
}; 
module.exports = Material;
const hgl = require('../hgl');

module.exports = ({ vec = [] } = {}) => {
		vec  = [...Array(3)].map( (v,i)=> vec[i] || 0 );
		hgl.glColor3f(...vec);
	};
/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');
var DraggableElement = require('widgets/DraggableElement.jsx');

var FreeForm = React.createClass({
	render: function() {	
		var model = this.props.model;
		// model has all the attributes of the node on it... we should pull
		// those out an apply them to ourself
		return <DraggableElement dangerouslySetInnerHTML={{__html: model.content}} />;
	}
});

module.exports = FreeForm;
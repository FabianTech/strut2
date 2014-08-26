/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');
var Slide = require('./Slide.jsx');

require('components/SlideWell.css')

var SlideWell = React.createClass({
	renderSlide: function(slide) {
		console.log('Rendering slide');
		return (
			<Slide
				model={slide}
				key={slide.id}
			/>
		);
	},

	render: function() {
		var slides = this.props.deck.slides.map(this.renderSlide);
		return this.transferPropsTo(
			<div className="strt-slide-well">
				{slides}
			</div>
		);
	}
});

module.exports = SlideWell;

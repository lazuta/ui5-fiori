sap.ui.define([
	// "sap/m/Text",
    "sap/ui/core/mvc/XMLView"

], function (XMLView) {
	"use strict";

	// new Text({
	// 	text: "text"
	// }).placeAt("content");

    XMLView.create({
		viewName: "sap.ui.demo.walkthrough.view.App"
	}).then(function (oView) {
		oView.placeAt("content");
	});
});
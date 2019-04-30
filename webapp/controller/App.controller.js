sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";
	return Controller.extend("com.cgi.workshop.fiori.controller.App", {
		onInit: function(){
			
			//var oCustomerModel = new JSONModel();
			
			//oCustomerModel.loadData("./model/data.json");
			
			//this.getView().setModel(oCustomerModel);
			
		} 
	});
});
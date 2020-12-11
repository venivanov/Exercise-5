sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function (Controller, MessageBox) {
	"use strict";
	return Controller.extend("com.test.testa.controller.View1", {
		onInit: function () {},
		oDataRead: function () { 
			this.users = this.getView().getModel("users");
			this.users.read("/userDataSet");
		},
		oDataCreate: function () {
			var obj = {};
			obj.UserId = this.getView().byId("ID").getValue();
			obj.Name = this.getView().byId("Name").getValue();
			obj.Email = this.getView().byId("Email").getValue();
			obj.Mobile = this.getView().byId("Mobile").getValue();
			this.users = this.getView().getModel("users");
			var boundItem = this.getView().byId("usersTable").getBinding("items").getPath();
			var msg = this.getView().getModel("i18n").getResourceBundle().getText("userCreated", obj.UserId);
			this.users.create(boundItem, obj, {
				success: function () {
					MessageBox.success(msg);
				},
				error: function (oError) {
					MessageBox.error(oError.responseText);
				}
			});
		},
		oDataUpdate: function () {
			this.users = this.getView().getModel("users");
			var obj = {};
			obj.UserId = this.getView().byId("ID").getValue();
			obj.Name = this.getView().byId("Name").getValue();
			obj.Email = this.getView().byId("Email").getValue();
			obj.Mobile = this.getView().byId("Mobile").getValue();
			var boundItem = this.getView().byId("usersTable").getBinding("items").getPath() + "('" + this.getView().byId("ID").getValue() + "')";
			var msg = this.getView().getModel("i18n").getResourceBundle().getText("userUpdated", obj.UserId);
			this.users.update(boundItem, obj, {
				success: function () { 
					MessageBox.success(msg);
				} ,
				error: function (oError) {
					MessageBox.error(oError.responseText);
				}
			});
		},
		oDataDelete: function () {
			var obj = {};
			obj.UserId = this.getView().byId("ID").getValue();
			obj.Name = this.getView().byId("Name").getValue();
			obj.Email = this.getView().byId("Email").getValue();
			obj.Mobile = this.getView().byId("Mobile").getValue();
			this.users = this.getView().getModel("users");
			var boundItem = this.getView().byId("usersTable").getBinding("items").getPath() + "('" + this.getView().byId("ID").getValue() + "')";
			var msg = this.getView().getModel("i18n").getResourceBundle().getText("userDeleted", obj.UserId); 
			this.users.remove(boundItem, obj, {
				success: function () { 
					MessageBox.success(msg);
				},
				error: function (oError) {
					MessageBox.error(oError.responseText);
				}
			});
		}
	});
});
({
	onParentValueChange : function(component, event, helper) {
        console.log('Old Value from parent: ' +event.getParam("oldValue"));
        console.log("value from parent:" + event.getParam("value"));
	},
    updateParent : function(component , event , helper){
        component.set("v.parentVar" ,"Update Parent Value");
    }
})
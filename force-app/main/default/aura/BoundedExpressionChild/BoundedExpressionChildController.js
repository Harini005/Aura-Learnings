({
	onChangeUpdateChild : function(component, event, helper) {
        console.log("oldvalue from child:"  + event.getParam("oldValue"));
        console.log("newValue from child:" + event.getParam("value"));
	},
    updateChild : function(component, event, helper){
        component.set("v.childVar" , 'Updated child');
    }
})
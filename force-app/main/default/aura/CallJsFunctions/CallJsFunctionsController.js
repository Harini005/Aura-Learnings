({
    doInit : function(component,event,helper){
        component.set("v.message" , 'Message Initiated');
    },
    
	buttonHandler : function(component, event, helper) {
		console.log('Inside Button Handler');
        var btn = event.getSource().get("v.label");
        console.log(btn);
        if(btn == 'Reset'){
            btn = 'Message Initiated';
        }
        component.set("v.message", btn);
	}
})
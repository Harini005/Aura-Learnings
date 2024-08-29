({
	doInit : function(component, event, helper) {
		var recordId = component.get("v.recordId");
        var options = [];
        var action = component.get("c.getContacts");
        action.setParams({recordId : recordId});
        action.setCallback(this,function(result){
            console.log('OutSide');
            if(result.getState() === 'SUCCESS'){
                console.log('Inside');
                result.getReturnValue().forEach(item=>{
                    console.log('Inside for');
                    options = [...options , {'label': item.Name , 'value':item.Id}];
                })
                console.log(options);
                component.set("v.options", options);
                
            }
        })
        $A.enqueueAction(action);
        
	}
})
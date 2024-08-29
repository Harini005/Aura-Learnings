({
	doInit : function(component, event, helper) {
       var recordId = component.get("v.recordId");
		var action = component.get("c.getOpportunities");
        var options = [];
        action.setParams({accountId : recordId});
        action.setCallback(this, function(response){
            console.log('Outside Opportunities');
            console.log(response);
            if(response.getState() === "SUCCESS"){
                console.log('Inside Opportunities')
                response.getReturnValue().forEach(item=>{
                    console.log('inside oppo for');
                    options = [...options,{'label':item.Name , 'value' : item.Id}];
                }) 
            }
            component.set("v.options" , options);
            console.log(options);
        })
        
        $A.enqueueAction(action);
	}
})
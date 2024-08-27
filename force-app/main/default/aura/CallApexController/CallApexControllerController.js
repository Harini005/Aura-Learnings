({
	doInit : function(component, event, helper) {
        
		var action = component.get("c.getAccounts");
        var options=[];
        action.setCallback(this,function(response){
           if(response.getState() === 'SUCCESS')
           component.set("v.accList" , response.getReturnValue());
            response.getReturnValue().forEach(item=>{
               options =  [...options,{"label" :item.Name , "value": item.Id}]
            })
            component.set("v.options" , options);
            console.log(JSON.stringify(options));
        })
         $A.enqueueAction(action);                  
                           
	}
})
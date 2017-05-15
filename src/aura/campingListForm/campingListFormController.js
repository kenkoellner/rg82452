({

    submitForm: function(component, event, helper) {
        if(helper.validateCampingItemForm(component)){
            // Create the new item
            var newItem = component.get("v.newItem");
            helper.createItem (component, newItem);
        }
    }

    
    
})
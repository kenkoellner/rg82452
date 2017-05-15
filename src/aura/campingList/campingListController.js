({

    // Load expenses from Salesforce
    doInit: function(component, event, helper) {

      // Create the action
      var action = component.get("c.getItems");

      // Add callback behavior for when response is received
      action.setCallback(this, function(response) {
        var state = response.getState();
        if (component.isValid() && state === "SUCCESS") {
            component.set("v.items", response.getReturnValue());
        } else {
            console.log("Failed with state: " + state);
        }
      });

      // Send action off to be executed
      $A.enqueueAction(action);
    },


    clickCreateCampingItem: function(component, event, helper) {
        if(helper.validateCampingItemForm(component)){
            // Create the new expense
            var newItem = component.get("v.newItem");
            helper.createItem (component, newItem);
        }
    }
    
    /*    
    clickCreateCampingItem: function(component, event, helper) {

        // Simplistic error checking
        var isValid = true;

        // Name must not be blank
        var nameField = component.find("itemname");
        var itemname = nameField.get("v.value");
        if ($A.util.isEmpty(itemname)){
            isValid = false;
            nameField.set("v.errors", [{message:"Camping item name can't be blank."}]);
        }
        else {
            nameField.set("v.errors", null);
        }

        // Price must not be blank
        var priceField = component.find("price");
        var itemprice = priceField.get("v.value");
        if ($A.util.isEmpty(itemprice)){
            isValid = false;
            priceField.set("v.errors", [{message:"Camping item price can't be blank."}]);
        }
        else {
            priceField.set("v.errors", null);
        }

        // Quantity must not be blank
        var quantityField = component.find("quantity");
        var itemquantity = quantityField.get("v.value");
        if ($A.util.isEmpty(itemprice)){
            isValid = false;
            quantityField.set("v.errors", [{message:"Camping item quantity can't be blank."}]);
        }
        else {
            quantityField.set("v.errors", null);
        }



        // If we pass error checking, do some real work
        if (isValid) {
            
            // Create the new Camping Item
            var items = component.get("v.items");
            var newItem = component.get("v.newItem");
            console.log("Create item: " + JSON.stringify(newItem));

            // THIS IS A DISGUSTING, TEMPORARY HACK
            var newItemIns = JSON.parse(JSON.stringify(newItem));

            items.push(newItemIns);
            component.set("v.items", items);     

            component.set("v.newItem",
                          {'sobjectType':'Camping_Item__c',
                			'Name': '',
                			'Quantity__c': 0,
                			'Price__c': 0,
                			'Packed__c': false});
            
        }
    }
*/
})
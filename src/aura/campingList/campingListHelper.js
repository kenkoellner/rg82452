({

    validateCampingItemForm: function(component) {

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

    
      return(isValid);
    }
    ,
    
    createItem   : function (component, newItem)  {        
        var action = component.get("c.saveItem");
        action.setParams({
            "item": newItem
        });
        action.setCallback(this, function(response){
        var state = response.getState();
        if (component.isValid() && state === "SUCCESS") {
            var items = component.get("v.items");            
            items.push(response.getReturnValue());
            component.set("v.items", items);
            // do not need var newItem = component.get("v.newItem");
            component.set("v.newItem",{ 'sobjectType': 'Camping_Item__c',
                    'Name': '',
                    'Amount__c': 0,
                    'Quantity__c': '',
                    'Packed__c': false });
            
        }
      });
      $A.enqueueAction(action);  
    }
     
})
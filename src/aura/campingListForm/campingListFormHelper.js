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

    createItem : function(component, item) {
        var addItem = component.getEvent("addItem");
        addItem.setParams({ "item": item });
        addItem.fire();
        component.set("v.newItem",
                          {'sobjectType':'Camping_Item__c',
                			'Name': '',
                			'Quantity__c': 0,
                			'Price__c': 0,
                			'Packed__c': false});
    }

    
})
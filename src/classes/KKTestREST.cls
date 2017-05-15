@RestResource(urlMapping='/abc/v1/*')
global with sharing class KKTestREST {
    
  @HttpGet
  global static List<Expense__c> getOpenCases() {
    
    String expenseName = RestContext.request.params.get('expenseName');
    System.debug(expenseName);
    if (expenseName == null) {
    	return new List<Expense__c>();
    }
    List<Expense__c> expenseList = [SELECT Id, Name 
    								from Expense__c 
    								where Name =: expenseName];
    return expenseList;
    
  }
  

  @HttpPost
  global static id createNewExpense(Expense__c expenseObj) {
  	System.debug(expenseObj);
  	return null;
  }


  @HttpPut
  global static id updateExpense() {
  	RestRequest req = RestContext.request;
  	String jsonStr = req.requestBody.toString();
  	System.debug(jsonStr);
  	Expense__c expenseObj  = (Expense__c) JSON.deserialize(jsonStr, Expense__c.class);
  	System.debug(expenseObj);
  	return null;
  }





}
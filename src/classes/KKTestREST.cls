@RestResource(urlMapping='/expenses/v1/*')
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
  global static Id createNewExpense(Expense__c expenseObj) {
  	System.debug(expenseObj);
  	RestResponse resp = RestContext.response;
  	resp.statuscode  = 201;  // Set HTTP status to Created
  	return pretendResponse();
  }


  @HttpPut
  global static Id updateExpense() {
  	RestRequest req = RestContext.request;
  	String jsonStr = req.requestBody.toString();
  	System.debug(jsonStr);
  	Expense__c expenseObj  = (Expense__c) JSON.deserialize(jsonStr, Expense__c.class);
  	System.debug(expenseObj);
  	return pretendResponse();
  }

  //  Pretend we created a record but just return the ID of an existing record so we don't clutter up our test data.
  private static ID pretendResponse() {
  	List<Expense__c> expenseList = [SELECT Id, Name 
    								from Expense__c
    								limit 1];
    if (!expenseList.isEmpty()) {
    	return expenseList[0].id;
    }								
	return null;  	
  }



}
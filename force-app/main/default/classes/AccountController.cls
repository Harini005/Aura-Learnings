public class AccountController {
	@AuraEnabled
    public static List<Account> getAccounts(){
        return [SELECT Id,Name from Account LIMIT 10];
    }
}
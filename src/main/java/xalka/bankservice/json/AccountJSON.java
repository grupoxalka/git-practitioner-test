package xalka.bankservice.json;
import java.util.ArrayList;
import java.util.List;

public class AccountJSON { //simula la bd

    private static List<AccountForm> accounts = new ArrayList<>();

    public static void saveAccount(AccountForm account) {
        accounts.add(account);
    }

    public static List<AccountForm> getAllAccounts() {
        return accounts;
    }
   /*private String name;
    private String accountNumber;
    private Client client;
    private float balance;

    public AccountJSON(String name, String accountNumber,  float balance) {
        this.name = name;
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.client = client;
    }

    public String getName() {
        return name;
    }

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }public String getAccountNumber() {
        return accountNumber;
    }

    public void setName(String name) {
        this.name = name;
    }



    public float getBalance() {
        return balance;
    }

    public void setBalance(float balance) {
        this.balance = balance;
    }*/
}

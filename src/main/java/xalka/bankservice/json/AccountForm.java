package xalka.bankservice.json;

public class AccountForm {
    //Request (la plantilla se crea para que sepa que informacion es necesaria)
    private String name;
    private String accountNumber;
    private ClientFORM client;

    private float balance;

    public AccountForm(String name, String accountNumber, ClientFORM client, float balance) {
        this.name = name;
        this.accountNumber = accountNumber;
        this.client = client;
        this.balance = balance;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    public ClientFORM getClient() {
        return client;
    }

    public void setClient(ClientFORM client) {
        this.client = client;
    }

    public float getBalance() {
        return balance;
    }

    public void setBalance(float balance) {
        this.balance = balance;
    }
}

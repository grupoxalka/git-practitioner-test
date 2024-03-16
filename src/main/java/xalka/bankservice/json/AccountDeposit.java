package xalka.bankservice.json;

import java.util.Date;

public class AccountDeposit extends BankTransactions {


    public AccountDeposit(float amount, String concept, Date date) {
        super(amount, concept, date);
    }
}

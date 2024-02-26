package xalka.bankservice.json;

import java.util.Date;

public class AccountWithdrawal extends BankTransactions{

    public AccountWithdrawal(float amount, String concept, Date date) {
        super(amount, concept, date);
    }
}


//si los datos no vienen / no me deben de dejar crear los datos
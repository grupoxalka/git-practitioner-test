package xalka.bankservice.json;

import java.util.Date;

public class BankTransactions {

    private float amount;
    private  String concept;
    private Date date;

    public BankTransactions( float amount, String concept, Date date) {
        this.amount = amount;
        this.concept = concept;
        this.date = date;
    }

    public float getAmount() {
        return amount;
    }

    public void setAmount(float amount) {
        this.amount = amount;
    }

    public String getConcept() {
        return concept;
    }

    public void setConcept(String concept) {
        this.concept = concept;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}

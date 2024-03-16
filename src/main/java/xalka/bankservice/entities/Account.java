package xalka.bankservice.entities;

import jakarta.persistence.*;

@Entity
@Table(name="account") //nombre de la tabla
public class Account {
    public Account() {
    }
    //interpretacion de las tablas en las base de datos

    //propiedades que vienen en la tabla de mysql
    @Id //identifica la pk de la tabla de mysql
    @GeneratedValue(strategy = GenerationType.IDENTITY) //se va a generar de manera automatica  hay varias estrategias de crearlo
    @Column(name = "id", nullable = false, unique = true)
    private int id;
    @Column(name = "name")
    private String name;
    @Column(name = "account_number")
    private String accountNumber;

    @ManyToOne
    @JoinColumn(name="client_id", nullable=false)
    private Client client; //al ser una fk se maneja diferente
    @Column(name = "balance")
    private float balance;

    public Account(String name, String accountNumber, Client client, float balance) {
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

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }
    public float getBalance() {
        return balance;
    }

    public void setBalance(float balance) {
        this.balance = balance;
    }

}

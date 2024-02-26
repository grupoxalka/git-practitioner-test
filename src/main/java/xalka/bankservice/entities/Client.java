package xalka.bankservice.entities;

import jakarta.persistence.*;

@Entity
@Table(name="client") //nombre de la tabla
public class Client {
    //interpretacion de la tabla en la db


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, unique = true)
    private int id;
    @Column(name = "name")
    private String name;
    @Column(name = "last_name")
    private String lastName;

    public Client() {

    }

    public Client(String name, String lastName) {
        this.name = name;
        this.lastName = lastName;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}

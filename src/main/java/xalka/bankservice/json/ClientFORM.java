package xalka.bankservice.json;

//este es el Request (plantilla) para que el cliente nos llegue con la informacion necesaria
//para poder tranformar nuestra clase - json  y json - clase siempre setter and getter constructor
public class ClientFORM {
    private String name;
    private String lastName;

    public ClientFORM(String name, String lastName) {
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

    public String FullName() {
        return this.name + " " + this.lastName;
    }
}

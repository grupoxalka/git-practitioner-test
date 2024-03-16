package xalka.bankservice.json;


import java.util.ArrayList;
import java.util.List;

public class ClientJSON {
    private static List<ClientFORM> clients = new ArrayList<>();

    //CR U D
    //CREATE
    //UPDATE
    //DELETE

    public static void saveClient(ClientFORM client) {
        clients.add(client);
    }

    public static List<ClientFORM> getAllClients() {
        return clients;
    }

}
/*public class ClientJSON {

    private String name;
    private String lastName;

    public ClientJSON(String name, String lastName) {
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
}*/

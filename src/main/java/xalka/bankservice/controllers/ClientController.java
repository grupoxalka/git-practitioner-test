package xalka.bankservice.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import xalka.bankservice.entities.Account;
import xalka.bankservice.entities.Client;
import xalka.bankservice.services.AccountService;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/clients")
public class ClientController {

    private AccountService accountService; //los servicios, inyeccion de dependencias

    ClientController(AccountService accountService) {
        this.accountService = accountService;
    }

    @GetMapping("/allClients")
    public ResponseEntity<List<Client>> getAllClient() {
        List<Client> clientList = accountService.getAllClientOnDB();
        System.out.println("lista de  clientes " + clientList);

        return ResponseEntity.ok(clientList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Client> getClientById(@PathVariable int id) {
        Client client = accountService.getClientOnDB(id);
        return ResponseEntity.ok(client);
    }

    @DeleteMapping("/{id}") // --- clients/id
    public ResponseEntity<Void> deleteClient(@PathVariable int id) {
        accountService.deleteClientOnDB(id);
        return ResponseEntity.ok().build(); //buil devuelve una respuesta vacia
    }

    @GetMapping("/{id}/accounts") //--- clients/id/accounts
    public ResponseEntity<List<Account>> getAllAccountsByClient(@PathVariable int id) {
        try {
            List<Account> accountsClient = accountService.getAllAccountsByClientOnDB(id);
            return ResponseEntity.ok(accountsClient);
        } catch (NoSuchElementException e) {
            return ResponseEntity.notFound().build();
        }
    }



}

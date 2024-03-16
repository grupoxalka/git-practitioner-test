package xalka.bankservice.services;

import org.springframework.stereotype.Service;
import xalka.bankservice.entities.Account;
import xalka.bankservice.entities.Client;
import xalka.bankservice.json.AccountForm;
import xalka.bankservice.json.ClientFORM;
import xalka.bankservice.repository.AccountRepository;
import xalka.bankservice.repository.ClientRepository;

import java.util.List;

@Service
public class AccountService {

    //extendemos la interfaz (Repository)  para ser utilizado
    private AccountRepository accountRepository;
    private ClientRepository clientRepository;

    //inyeccion de dependencias por constructor
    AccountService(AccountRepository accountRepository, ClientRepository clientRepository) {
        this.accountRepository = accountRepository;
        this.clientRepository = clientRepository;

    }

    public AccountForm addDebitAmountToAccount(float amount) {

        ClientFORM saveClient = new ClientFORM("juan", "perez");
        AccountForm account = new AccountForm("polo", "1234", saveClient, 200f);
        account.setBalance(account.getBalance() + amount);
        return account;
    }

    //Entities is where i save de information to pass a db
    public AccountForm restDebitAmountToAccount(float amount) {

        ClientFORM saveClient = new ClientFORM("juan", "perez");
        AccountForm account = new AccountForm("accountName", "1234", saveClient, 200f);
        account.setBalance(account.getBalance() - amount);
        return account;
    }

    public Account createAccountOnDB(AccountForm accountForm) {
        String clientName = accountForm.getClient().getName();
        String clientLastName = accountForm.getClient().getLastName();
        Client existingClient = clientRepository.findByNameAndLastName(clientName, clientLastName);
        Client client;
        if (existingClient != null) {
            client = existingClient;
        } else {
            client = new Client(clientName, clientLastName);
            client = clientRepository.save(client);
        }

        Account account = new Account(accountForm.getName(), accountForm.getAccountNumber(), client, accountForm.getBalance());
        Account accountCreate = accountRepository.save(account);
        return accountCreate;
    }

    public void deleteClientOnDB(int id) {
        Client existingClient = clientRepository.clientFound(id); //busco el cliente por y id y obtengo la informacion del cliente
        if (existingClient != null) {
            List<Account> existingClientAndAccounts = accountRepository.findByClient(existingClient);
            existingClientAndAccounts.forEach(account -> {    //aplicando lamda
                accountRepository.delete(account);
            });
            clientRepository.deleteById(id);
        } else {
            System.out.println("cliente no existe");
        }
    }

    public  List<Account> getAllAccountsByClientOnDB(int id){
        Client existingClient = clientRepository.clientFound(id); // Rename variable to clientFound ready
        System.out.println("Cliente1: " + existingClient);
        List<Account> existingClientAndAccount = accountRepository.findByClient(existingClient); //accounts
        System.out.println("existingClientAndAccount: " + existingClientAndAccount);

        return existingClientAndAccount;
    }

    public Account updateAccount(AccountForm accountForm, int accountId) {

        Account existingClientAndAccount = accountRepository.accountFound(accountId); //accountFound ready
        if (existingClientAndAccount != null) {
            Account account = existingClientAndAccount;
            if (accountForm.getName() != null) {
                account.setName(accountForm.getName());
            } if (accountForm.getBalance() !=0){
                account.setBalance(accountForm.getBalance());
            }if ((accountForm.getAccountNumber() != null)){
                account.setAccountNumber(accountForm.getAccountNumber());
            }
            account.setClient(existingClientAndAccount.getClient());
            System.out.println("Existe la cuenta "+account);
            return accountRepository.save(account);
        } else {
            System.out.println("No existe la cuenta");
            return null;
        }

    }

    public Account getAccountOnDB(int id) {
        Account account = accountRepository.accountFound(id); //select from las inidicaciones en la tabla de mysql
        return account; //aqui retornamos
    }


    public Client getClientOnDB(int id) {
        Client client = clientRepository.clientFound(id);
        return client; //aqui retornamos
    }

    public List<Client> getAllClientOnDB() {
        List<Client> allClient = clientRepository.findAll();
        return allClient;
    }

    public boolean getAccountNumberOnDB(String accounNumber) {
        Account account = accountRepository.findByAccountNumber(accounNumber); //select from las inidicaciones en la tabla de mysql
        if (account == null) {
            return true;
        } else {
            return false;
        }
    }
}

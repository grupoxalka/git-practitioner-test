package xalka.bankservice.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import xalka.bankservice.entities.Account;
import xalka.bankservice.entities.Client;
import xalka.bankservice.json.*;
import xalka.bankservice.services.AccountService;


@RestController
@RequestMapping("/account")
public class AccountController {

    //inyyeccion de dependencias
    private AccountService accountService; //los servicios

    AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    @GetMapping("/deposit")
    public ResponseEntity<AccountForm> getAccountDeposit(@RequestParam float amountToAdd) {
        AccountForm account = accountService.addDebitAmountToAccount(amountToAdd);
        return ResponseEntity.ok(account);
    }

    @GetMapping("/withdrawal")
    public ResponseEntity<AccountForm> getAccountWithdrawal(@RequestParam float amountToRest) {
        AccountForm account = accountService.restDebitAmountToAccount(amountToRest);
        return ResponseEntity.ok(account);
    }

    @PostMapping("/createAccount")
    public ResponseEntity<String> createAccount(@RequestBody AccountForm newAccountForm) {
        String accountNumber = newAccountForm.getAccountNumber();
        boolean existAccount = accountService.getAccountNumberOnDB(accountNumber);
        if (existAccount) {
            accountService.createAccountOnDB(newAccountForm);
            return ResponseEntity.ok("create account");
        } else {
            return  ResponseEntity.ok("No se pudo crear la cuenta, ya existe");
        }

    }

   /* @GetMapping("/{id}")
    public ResponseEntity<Account> getAccountNumber(@PathVariable String accountNumber) {
        Account account = accountService.getAccountNumberOnDB(accountNumber);
        return ResponseEntity.ok(account);
    }*/

    @PutMapping("/{id}") //id     actualizo
    public ResponseEntity<Account> updateAccount(@RequestBody AccountForm updateAccountForm, @PathVariable int id) { //accountForm rename
        Account account = accountService.updateAccount(updateAccountForm, id);
        return ResponseEntity.ok(account);
    }

    //get account for id (una sola cuenta)
    @GetMapping("/{id}")
    public ResponseEntity<Account> getAccount(@PathVariable int id) {
        Account account = accountService.getAccountOnDB(id);
        return ResponseEntity.ok(account);
    }

}

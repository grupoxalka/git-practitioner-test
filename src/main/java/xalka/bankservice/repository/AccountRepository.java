package xalka.bankservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import xalka.bankservice.entities.Account;
import xalka.bankservice.entities.Client;

import java.util.List;

@Repository
public interface AccountRepository extends JpaRepository<Account,Integer> {// tabla creada en java y su tipo de dato
    //de esta interfaz va a heredar de otra interfaz            integer por el id de la tabla de bd pk
    //entidad de tabla
    Account accountFound(int id); //metodos que no sea suficientes a los que tiene JpaRepository
    //aqui ya tenemos el id puro o sea el numero

    Account findByAccountNumber(String accountNumber);

    Account findByName(String name);

//    Account findByClient(Client client);
    List<Account> findByClient(Client client); // Cambiado a findByClient

//    List<Account> findCountsById(Client client);

}

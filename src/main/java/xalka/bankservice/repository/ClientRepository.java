package xalka.bankservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import xalka.bankservice.entities.Client;

@Repository
public interface ClientRepository extends JpaRepository<Client,Integer> {
    //Repository es la creacion para empezar el esqueleto de las tablas de la base de datos
    //y empezar a comunicarse con la base de datos
                                                 //interfaz ---> entidad ----> tabla
    Client clientFound(int id);
    Client deleteById(int id);

    Client findByNameAndLastName(String clientName, String clientLastName);

}

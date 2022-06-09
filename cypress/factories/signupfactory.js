var faker = require('faker')
var cpf = require('gerador-validador-cpf')
export default {

    
    deliver : function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()
        var data =   {
            name: `${firstName} ${lastName}`,
            cpf : cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: "81989876545" ,
    
            address : {
                postalcode : "50870110",
                street : "Rua Capitão Manuel de Aguiar",
                number : "110",
                details:"Casa",
                district : "Areias",
                city_state: "Recife/PE"
            },
    
            delivery_method: "Moto",
            cnh: "cnh-digital.jpg"
        }

        return data
    } 
}
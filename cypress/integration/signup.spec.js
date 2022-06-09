import signup from '../pages/SingnupPage'
import signupFactory from '../factories/signupfactory'

import SingnupPage from '../pages/SingnupPage'
//import { it } from 'faker/lib/locales'



describe('Signup', () => {

    //    beforeEach(function () {
    //        cy.fixture('deliver').then((d) => {
    //           this.deliver = d
    //       })
    //    })



    it('User should be deliver ', function () {

        var deliver = signupFactory.deliver()
        signup.go()
        signup.fillform(deliver)
        signup.submit()
        const expectedMensage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMensage)


    })

    it('incorrect document', function () {

        var deliver = signupFactory.deliver()

        deliver.cpf = '000999888AA'
        signup.go()
        signup.fillform(deliver)
        signup.submit()

        signup.alertMessageShouldBe('Oops! CPF inválido')

    })

    it('incorrect email', function () {

        var deliver = signupFactory.deliver()
        deliver.email = 'arthur.com'
        signup.go()
        signup.fillform(deliver)
        signup.submit()

        signup.alertMessageShouldBe('Oops! Email com formato inválido.')
    })

    context('Required', function () {
        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'delivery_method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
        ]

        before(function(){
            signup.go()
            signup.submit()
        }) 

        messages.forEach(function(msg){
            it(`${msg.field} is required`, function(){
                SingnupPage.alertMessageShouldBe(msg.output)
            } )
        })
    })

    
   
})
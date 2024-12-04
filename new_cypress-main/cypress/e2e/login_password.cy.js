describe('Тестирование авторизации', function () {

    it('Верный логин и пароль', function () {
       cy.visit('/');
       cy.get('#mail').type('german@dolnikov.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.get('#messageHeader').contains('Авторизация прошла успешно');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    
    })

     it('Восстановление пароля', function () {
        cy.visit('/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
     
    it('Верный логин и НЕверный пароль', function () {
        cy.visit('/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('QA123456');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     
     })

     it('НЕверный логин и верный пароль', function () {
        cy.visit('/');
        cy.get('#mail').type('Nastya@dolnikova.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     
     })

     it('Ввести логин без @', function () {
        cy.visit('/');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
     
     })

     it('Проверка на регистронезависимость логина', function () {
        cy.visit('/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     
     })

})


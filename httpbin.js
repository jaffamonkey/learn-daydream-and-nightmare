var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
    .goto('http://httpbin.org/forms/post')
    .type('form[action*="/post"] [name="custname"]', 'Its Me')
    .type('form[action*="/post"] [name="custtel"]', '0208 500 6644')
    .type('form[action*="/post"] [name="custemail"]', 'a@email.com')
    .click('input[name="size"]')
    .click('input[name="topping"]')
    .type('input[name="delivery"]', '11:00')
    .click('button')
    .wait(2000)
    .screenshot('httpbin.png')
    .evaluate(function () {
        return document.querySelector('body').href
    })
    .end()
    .then(function (result) {
        console.log('Form test success')
    })
    .catch(function (error) {
        console.error('Form failed:', error);
    });
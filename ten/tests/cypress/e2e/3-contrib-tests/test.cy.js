import random from '@jitesoft/random-string';

describe('Run some tests', () => {
  const userName = random(10, {special: false});

  before(() => {
    // cy.createUserWithRole(userName, ['administrator']);
  });

  after(() => {
    // cy.deleteAllCypressUsers();
  });

  beforeEach(() => {
    // cy.loginUserByUsername(userName);
  });

  it('login as admin', () => {
    for (let step = 0; step < 10; step++) {
      cy.visit('/user/login');
      cy.get('h1.title').then((title) => {
        var title_value = title.html()
        // console.log(title_value)
        if (title_value === 'Login failed') {
          console.log('blocked. not doing anything')
        } else {
          cy.get('input#edit-name').type('admin');
          cy.get('input#edit-pass').type('Gibberish');
          cy.get('input#edit-submit').click()
        }
      })
      // cy.pause()
    }
  });


  it('login with random name', () => {
    for (let step = 0; step < 10; step++) {
      cy.visit('/user/login');
      cy.get('h1.title').then((title) => {
        var title_value = title.html()
        // console.log(title_value)
        if (title_value === 'Login failed') {
          console.log('blocked. not doing anything')
        } else {
          cy.get('input#edit-name').type(userName);
          cy.get('input#edit-pass').type('Gibberish');
          cy.get('input#edit-submit').click()
        }
      })
      // cy.pause()
    }
  });


  it('request pw', () => {
    for (let step = 0; step < 10; step++) {
      cy.visit('/user/password');
      cy.get('input#edit-name').type(userName + '@example.com');
      // cy.get('input#edit-pass').type('Gibberish');
      cy.get('input#edit-submit').click()

      // cy.get('h1.title').then((title) => {
      //   var title_value = title.html()
      //   console.log(title_value)
      //   if (title_value === 'Login failed') {
      //     console.log('blocked. not doing anything')
      //   } else {
      //     cy.get('input#edit-name').type(userName + '@example.com');
      //     // cy.get('input#edit-pass').type('Gibberish');
      //     cy.get('input#edit-submit').click()
      //   }
      // })
      // cy.pause()
    }
  });


});

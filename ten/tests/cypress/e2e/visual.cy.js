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

  it.only('visual', () => {

    cy.visit('/node/2')

    cy.compareSnapshot('node2') // will compare actual screenshot to current and fail if there's any difference in the images

    cy.get('h1').compareSnapshot('node2', 0.2) // will compare only the image of h1 element and fail only if the percentage of pixels that are different is bigger than 0.2%

    cy.compareSnapshot('node2', {errorThreshold: 1, failSilently: true}).then(comparisonResults => {
      console.log(comparisonResults.mismatchedPixels) // will print the number of mismatched pixels
      console.log(comparisonResults.percentage) // will print the percentage of mismatched pixels
      console.log(comparisonResults.error) // will print the visual regression error message (if any)
    })

    // for (let step = 0; step < 10; step++) {
    //   cy.visit('/user/login');
    //   cy.get('h1.title').then((title) => {
    //     var title_value = title.html()
    //     // console.log(title_value)
    //     if (title_value === 'Login failed') {
    //       console.log('blocked. not doing anything')
    //     } else {
    //       cy.get('input#edit-name').type('admin');
    //       cy.get('input#edit-pass').type('Gibberish');
    //       cy.get('input#edit-submit').click()
    //     }
    //   })
    //   // cy.pause()
    // }
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


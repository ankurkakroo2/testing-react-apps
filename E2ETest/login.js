import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `http://localhost:3000/`;

    const windowsRadioButton  = Selector('#root > section > form > input');
   
    test('My first test', async t => {
        await t.wait(5000)
        .typeText('#username','admin')
        .typeText('#password','admin')
        .click(windowsRadioButton)
        .wait(5000);
      
    });
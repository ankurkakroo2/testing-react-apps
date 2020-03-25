import { Selector } from 'testcafe';
import LoginPage from './pageModalLogin'

 //loginPage =new LoginPage();

fixture `Getting Started`
    .page `http://localhost:3000/`;

    test('My first test', async t => {
        await LoginPage.userLogin('admin' ,'admin')

              await  t.expect((LoginPage.title).textContent).contains('Welcome "admin"!'); 
              await t.click(LoginPage.logoutBtn);
      
    });
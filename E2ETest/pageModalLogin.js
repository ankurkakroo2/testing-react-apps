import { Selector, t } from 'testcafe'

class LoginPage {
    constructor() {
        this.loginTitle=Selector('section > h1');
        this.username = Selector('#username');
        this.password = Selector('#password');
        this.loginBtn = Selector('#root > section > form > input');
        this.title = Selector('.dashboard>p');
        this.logoutBtn = Selector('.dashboard__logout-btn');


    }

    async userLogin(username, password) {
        await t
            .typeText(this.username, username)
            .typeText(this.password, password)
            .click(this.loginBtn)
            .wait(5000)
    }

   

}

export async function username(name){
    await t.typeText(this.username,name);

};

export async function password(password){
    await t.typeText(this.password,password);

};
export default new LoginPage();
import {Selector, t} from 'testcafe'

 class LoginPage{
    constructor(){
        this.username=Selector('#username');
        this.password=Selector('#password');
        this.loginBtn=Selector('#root > section > form > input');
        this.title=Selector('.dashboard>p');
        this.logoutBtn=Selector('.dashboard__logout-btn');

    }

    async userLogin(username, password){
        await t
        .typeText(this.username,username)
        .typeText(this.password,password)
        .click(this.loginBtn)
        .wait(5000)
    }

}
export default new LoginPage();
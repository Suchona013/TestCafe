import { Selector } from "testcafe";


// locator
const usernameInput = Selector('input[name=username');
const passwordInput =Selector('input[name=password');
const loginBtn = Selector('button[type=submit');
//const userErrorMsg = Selector('p.oxd-alert-content-text').withText('Invalid credentials')
// const usernameInput = Selector('#username);

fixture `Demo-OrangeHRM`
    .page `https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`;

test('InValid Login Test', async t => {
await t
    .maximizeWindow()
    // for passing text
    .typeText(usernameInput,'s')
    .typeText(usernameInput,'admin', {replace: true})
    // to select a specific portion
    // .selectText(usernameInput, 2, 0)
    // to select text
    
    .selectText(usernameInput)
    //.wait(1000)
    .typeText(passwordInput, 'n')
    // for button click
    .click(loginBtn)
    // wait time
    .wait(500)
   // .expect(userErrorMsg.innerText).eql('Invalid credentials')
   // const text1= await userErrorMsg;
    //console.log(text1)
    
});

test('Valid Login Test', async t => {
await t

    .maximizeWindow()    
// for passing text
    .typeText(usernameInput,'Admin', {speed:0.1})
    .typeText(passwordInput, 'admin123')
    // for button click
    .click(loginBtn)
    // wait time
    
    .wait(1000);
});

// if I want to run this specific testcase only
/*test.only('mouse hover, navigate', async t => {
    await t
    .hover(loginBtn)
    .navigateTo('https://www.youtube.com/watch?v=PMhy8V4Y9DM&list=PLTuGol5pWDesLBB7via1nw5yJ1LXgj-zT&index=10')
    .wait(1000);
    });*/
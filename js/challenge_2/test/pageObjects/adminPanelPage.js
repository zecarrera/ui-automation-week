const usernameInput = '#username';
const passwordInput = '#password';
const loginButton = '#doLogin';
const navBarLinks = {
    rooms: `//a[@class="nav-link"][text()="Rooms"]`,
    report: '#reportLink',
    branding: '#brandingLink',
    frontPage: '#frontPageLink',
    logout: `//a[@class="nav-link"][text()="Logout"]`
};

const login = (username = "admin", password = "password") => {
    $(usernameInput).setValue(username);
    $(passwordInput).setValue(password);
    $(loginButton).click();

    $(loginButton).waitForClickable({reverse: true});
    $(navBarLinks.logout).waitForClickable();
};

const checksUserLoggedIn = () => expect($(navBarLinks.logout).isClickable()).toBe(true);

const checksAdminOptionsAreVisible = () => {
    expect($(navBarLinks.rooms).isClickable()).toBe(true);
    expect($(navBarLinks.report).isClickable()).toBe(true);
    expect($(navBarLinks.branding).isClickable()).toBe(true);
    expect($(navBarLinks.frontPage).isClickable()).toBe(true);
};

module.exports = {
    checksAdminOptionsAreVisible,
    checksUserLoggedIn,
    login
};
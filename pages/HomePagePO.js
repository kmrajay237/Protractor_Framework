var homepage=()=>{
    var signin=element(by.xpath("(//a[text()='Sign in'])[2]"));
    return signin;
};

var loginpage=()=>{
    var email=element(by.id('new_session_username'));
    var password=element(by.id('new_session_password'));
    var signinBtn=element(by.id('sign_in'));
    return{
        email,
        password,
        signinBtn
    };
};

var searchBox=()=>{
    var search=element(by.id('search-phrase'));
    var close=element(by.className('modalClose close-reveal-modal'));
    var searchBtn=element(by.className('search-bar__submit'));
    return{
        search,
        close,
        searchBtn
    };
};
module.exports={
    homepage,
    loginpage,
    searchBox
}
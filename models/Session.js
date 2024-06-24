export default class Session {
    User = null;

    constructor(user) {
        this.User = user;
    }
    
    getUsername() {
        return this.User?.username || "";
    }
    getType() {
        return this.User?.type || "";
    }
    isLoggedIn(){
        return this.User != null;
    }
}
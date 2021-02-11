class AuthService {
    static isAuthenticated = false;

    static authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100);
    }
  
    static logout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
}
 
export default AuthService;
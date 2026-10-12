
interface Greeter {
    greet(): string;
}

class User implements Greeter {
    public username: string;          // Accessible everywhere
    private passwordHash: string;     // Hidden from outside code
    protected role: string;           // Accessible in subclasses

    constructor(username: string, passwordHash: string, role: string) {
        this.username = username;
        this.passwordHash = passwordHash;
        this.role = role;
    }

    public greet(): string {
        return `Welcome back, ${this.username}!`;
    }
}

class Admin extends User {
    public getAdminLevel(): string {
        return `${this.username} has Access level: ${this.role}`;
        // ERROR: this.passwordHash is private and cannot be accessed here
    }
}

const admin = new Admin("sujitha", "345##678", "dev");
console.log(admin.getAdminLevel()); 
console.log(admin.greet());//parent method




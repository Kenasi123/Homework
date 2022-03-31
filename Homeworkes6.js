
class cellPhone {

    constructor(smsCard,type) {
        this.cute = true
        this.type = type; // iphone android
        this.sms = smsCard;
        this.battery = 0;
        const contacts = {
            name:'Kenasia', number:'770-841-4156',
            name: 'Mom' , number:'679-324-1544',
            name:'Tete', number: '888-456-3442',
            name: 'BD' , number: '999-222-3214',
        }
    }
    charge() {
        if (this.battery !== 100) {
            this.battery = 100;
            return console.log("Your battery is now charged!")
        }
    }
    call(contacts) {
        contacts = {
            name:'Kenasia', number:'770-841-4156',
            name: 'Mom' , number:'679-324-1544',
            name:'Tete', number: '888-456-3442',
            name: 'BD' , number: '999-222-3214',
        }
        if (contacts !== NaN && this.battery > 0) {
            this.battery--;
            return console.log(`Calling ${contacts.name}, ${contacts.number}`) 
        }
        else {
            return console.log("Your phone is dead!")
        }
    }

    sms(contacts) {
        if (contacts && this.battery > 0) {
            console.log('Sending ${this}')
        }
    }
    
}
 
class iPhone extends cellPhone {
    constructor(){
        super(smsCard,type)
        this.battery = 0; // battery charges twice as fast as the other
    }
    charge(){
        if (this.battery !== 100) {
            const fullyCharge = 100;
            fullyCharge = this.battery * 2;
            return console.log("Your battery is now SUPER charged!")
        }
    }
}
const Kenasiaiphone = new cellPhone("verizon","iphone")

console.log(Kenasiaiphone)
Kenasiaiphone.charge(); // should change 0 to 100
console.log(Kenasiaiphone)
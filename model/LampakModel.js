class LampakModel{
    lampak = []
    constructor(){
        for (let index = 0; index < 9; index++) {
            let random = Math.floor(Math.random() * 2);
            this.lampak.push(random)
        }
    }

    szomszedokValtoztatasa(index){
        console.log(index);
        let balra = index-1
        let felette = index-3
        let jobbra = index+1
        let alatta =index+3
        this.lampak[index] = this.ertekvalt(this.lampak[index])
        if (balra>=0) {
            this.lampak[balra] = this.ertekvalt(this.lampak[balra])
        }
        if (jobbra<this.lampak.length) {
            this.lampak[jobbra] = this.ertekvalt(this.lampak[jobbra])
        }
        if (felette>=0) {
            this.lampak[felette] = this.ertekvalt(this.lampak[felette])
        }
        if (alatta<this.lampak.length) {
            this.lampak[alatta] = this.ertekvalt(this.lampak[alatta])
        } 
    } 

    getList(){
        return this.lampak
    }

    ertekvalt(ertek){
        if (ertek === 1) {
            ertek = 0
        } else {
            ertek = 1
        }
        return ertek
    }
}

export default LampakModel
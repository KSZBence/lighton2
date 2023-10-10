import lampaElem from "./lampaElem.js"

class Lampak{
    
    constructor(szuloElem, lampak){
        console.log(szuloElem);
        this.szuloElem =szuloElem
        this.lampak = lampak
        this.init(lampak)
    }

    init(lampak){
        this.szuloElem.html("")
        console.log(lampak);
        for (let index = 0; index < lampak.length; index++) {
            let lampa = new lampaElem(this.szuloElem)
            lampa.setSzin(lampak[index])
        }
    }

}

export default Lampak

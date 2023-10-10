class lampaElem{
    constructor(szuloElem, id){
        szuloElem.append("<div class='lampa'></div>")
        this.id = id
        this.lampa = szuloElem.children().last()

        this.lampa.on("click", ()=>{
            this.#sajatEsemenyKezelo("kapcs");
        })
    }

    setSzin(szin){
        if (szin === 1) {
            szin = "green"
        } else {
            szin = "red"
        }
        this.lampa.css("background-color", szin)
    }

    #sajatEsemenyKezelo(esemeny){
        const sajatesemeny = new CustomEvent(esemeny,{detail : this.id})
        window.dispatchEvent(sajatesemeny)
    }
}

export default lampaElem
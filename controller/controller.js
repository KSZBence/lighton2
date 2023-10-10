import LampakModel from "../model/LampakModel.js"
import Lampak from "../view/Lampak.js"

class Controller{
    constructor(){
        let tarolo = $(".tarolo")
         
        const lm = new LampakModel()
        
        const lampak = new Lampak(tarolo, lm.getList())
        
        $(window).on("kapcs", (event) => {
            lm.szomszedokValtoztatasa(event.detail)
            lampak.init(lm.getList())
        });
    }
}
export default Controller
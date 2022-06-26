class MystInput extends HTMLInputElement {
	constructor (min, max){
        super ("text") ;
        this.min = min ;
        this.max = max ;
        this.classList.add("myst-input") ;
        this.addEventListener('focus', this.onFocus);
        this.addEventListener('keypress', (event)=>{
            if (document.getElementById("info").innerHTML != '') this.onFocus();
            if (event.key == "Enter") check();
        })
    }
    /** 
     * Vérification de saisie 
     */
    check(){   
        let divinfo = document.getElementById("info"); 
        var test = this.value;
        console.log(myst);

            if (test < 0 || test > MAX_VALUE){
            divinfo.innerHTML = `Erreur : Veillez choisir un nombre compris entre 0 et ${MAX_VALUE}`;
            return -1}

            else if (isNaN(parseInt(test))){
            divinfo.innerHTML = "Format invalide : valeur entière attendue.";
            return -1}

            else return this.value;
    }
    onFocus(){
        document.getElementById("info").innerHTML="";
    }
}
customElements.define('unusable-mystinput', MystInput, {extends  : 'input'}) ;


class HtmlMystInput extends HTMLElement {
	constructor() {
            super() ; 
    }
	connectedCallback () {
		let min = this.getAttribute ('min') ;
        let max= this.getAttribute ('max') ;
        let shadow = this.attachShadow ({mode : 'open'}) ;
        this.internal_input=new MystInput(min, max) ;
        shadow.appendChild(this.internal_input) ;
    }
    check(){
        return this.internal_input.check();
    }
    get min(){
        this.internal_input.min;
    }
    set min(Value){
        this.internal_input.min=Value;
    }
}
customElements.define('myst-input',HtmlMystInput);

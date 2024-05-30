/*
* File: app.ts
* Author: Németh Zsolt
* Copyright: 2024, Németh Zsolt
* Group: Szoft I-2-N
* Date: 2024-50-30
* Github: https://github.com/NemethZsolt19/
* Licenc: GNU GPL
*/ 

class Atlos{
    aSide?:HTMLInputElement|null
    bSide?:HTMLInputElement|null
    diagonal?:HTMLInputElement|null
    calcButton?:HTMLButtonElement|null
    constructor(){
        this.bindHTML()
        this.handleEvent()
    }
    bindHTML(){
        this.aSide=document.querySelector("#aSide")
        this.bSide=document.querySelector("#bSide")
        this.diagonal=document.querySelector("#diagonal")
        this.calcButton=document.querySelector("#calcButton")
    }
    handleEvent(){
        this.calcButton?.addEventListener('click', ()=>{
            this.startCalc()
        })
    }
    startCalc(){
        const aSide = Number(this.aSide?.value)
        const bSide = Number(this.bSide?.value)
        const diagonal = this.calcDiagonal(aSide, bSide)
        this.diagonal!.value = String(this.diagonal)    
    }
    calcDiagonal(aSide: number, bSide:number):number{
        return (aSide**2+bSide**2)**0.5
    }
}

new Atlos()
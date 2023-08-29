import { Ui } from "./ui.js";


export class Details{
    constructor(id){
        document.getElementById("closeIcon").addEventListener("click" , ()=>{
        document.getElementById("home").classList.remove("d-none")
        document.querySelector(".details").classList.add("d-none");

       })
       this.loading = document.querySelector(".loading")

       this.getDetails(id) ;
        

    }



    async getDetails(id){
        this.loading.classList.remove("d-none")

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '5e8ce7edcfmshb9192ce69beb021p1f7692jsnc0a2082553ff',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
         const api = await fetch (`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
         const res = await api.json();
         this.loading.classList.add("d-none")

        //  console.log(res)  
         new Ui().displayDetails(res)    
  }
}
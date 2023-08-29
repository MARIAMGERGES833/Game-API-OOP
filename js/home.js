import {Ui} from "./ui.js";
import { Details } from "./details.js";


export class Home {
  constructor() {
    const allLinks = document.querySelectorAll(".nav-link");
    let data ;
    for (let index = 0; index < allLinks.length; index++) {
      allLinks[index].addEventListener("click",async ()=> {
        const linkActive = document.querySelector(".nav-link.active");
        linkActive.classList.remove("active");
        allLinks[index].classList.add("active");

         this.getGames(allLinks[index].dataset.category);
      
      });
    }  
        this.loading = document.querySelector(".loading")
        this.getGames("mmorpg");
        this.details = document.querySelector(".details");
        this.secHome = document.getElementById("home");
  }


 async getGames(category){
    this.loading.classList.remove("d-none")
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5e8ce7edcfmshb9192ce69beb021p1f7692jsnc0a2082553ff',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }}
     const api = await fetch (`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options)
     const res = await api.json();
     this.loading.classList.add("d-none")

    this.ui = new Ui();
    this.ui.display(res);


    document.querySelectorAll(".card").forEach(card =>
        card.addEventListener("click", ()=> {
            // console.log(`huuuuu`);
            this.secHome.classList.add("d-none");
         this.details.classList.remove("d-none");
          new Details(card.dataset.id)
        })
        )

     }

}

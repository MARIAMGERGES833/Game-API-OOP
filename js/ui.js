export class Ui {
    constructor(){   }


    display (data){
            let box=``;
        for (let i = 0; i < data.length; i++) {
            box += ` 
            <div class="col-md-3">

            <div  class="box">
            <div class="card bg-dark p-1" data-id=${data[i].id}>
                <div class="card-body">
                   <img src=${data[i].thumbnail} class="card-img-top" alt="...">
                </div>
                <figcaption class="m-2">
                   <div  class=" d-flex justify-content-between align-items-center ">
                      <h3 class="p-2 fs-4 text-warning">${data[i].title}</h3>
                   <span class="badge bg-warning text-danger p-2">Free</span>
                   </div>
                   <p class="card-text small text-light text-center opacity-50">${data[i].short_description}</p>
                </figcaption>
                <div class="card-footer d-flex justify-content-between align-items-center text-light">
                   <span class="badge bg-secondary">${data[i].genre}</span>
                   <span class="badge bg-secondary">${data[i].platform}</span>
                </div>
              </div>
              </div></div>`
        }
        document.getElementById("game").innerHTML = box;
    }


    displayDetails(data){
       const item = `      
      
        <h2>Details Game</h2>
        <div class="row">
           <div class="col-md-4">
              <img src= ${data.thumbnail}>

           </div>
           <div class="col-md-8">
              <h4>Title : ${data.title}</h4>
              <p>Category : ${data.genre}</p>
              <p>Platform : ${data.platform}</p>
              <p>Status : ${data.status}</p>
              <p>${data.description}</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae repellendus magnam quibusdam ipsum
                 nesciunt cum quia repellat. Id, consequuntur repellendus. Repudiandae laborum debitis ratione
                 provident unde iure enim soluta numquam odit corrupti sint minima, in, suscipit nesciunt quam
                 expedita facere vel modi delectus iste, aperiam asperiores velit? Suscipit, cum voluptatum?</p>
           </div>
       
     </div>`
         document.getElementById("details").innerHTML = item
    }
}
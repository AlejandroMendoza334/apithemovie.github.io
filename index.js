
const traepeliculas=async()=>{
    try{
    
        console.log("estoy en traepeliculas")
        const resp=await fetch('https://api.themoviedb.org/3/movie/popular?api_key=f925fce70bbe3dcb866d0b4854550868')

        
        const datos=await resp.json();
        //console.log(datos);
        let peliculas="";
        datos.results.forEach(pelicula => {
            peliculas +=`
                    <div class="col-3 mb-4">
                    <div class="card bg-info my-2 h-100">
                        <div class="card-header text-center ">
                            <h3>${pelicula.title}</h3>
                        </div>
                        <div class="card-body">
                        <img src='https://image.tmdb.org/t/p/w500/${pelicula.poster_path}' alt='${pelicula.title}' class='img-fluid'>
                        </div>
                        <div class="card-footer text-center">
                        <h4 class='small'>Fecha de lanzamiento: ${pelicula.release_date}</h4>
                        <a href='detalle.html?id=${pelicula.id}' class='btn btn-dark btn-sm '>Detalle</a>
                        </div>
                    </div>
                </div>
                `;

        });
        document.getElementById('mostrarPeliculas').innerHTML = peliculas;
        
    }catch(error){

    console.log(error)

        
    }

}
traepeliculas()
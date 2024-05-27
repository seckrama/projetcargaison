<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<!--     api google maps (openRouteservice)
 -->    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
    <script src="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.css" />
    <script src="https://unpkg.com/leaflet-routing-machine/dist/leaflet-routing-machine.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/leaflet-routing-machine/dist/leaflet-routing-machine.css" />

    <link rel="stylesheet" href="../dist/output.css">
    <style>
        .sidebar {
            transform: translateX(1%);
            transition: transform 0.3s ease-in-out;
        }
        .sidebar.show {
            transform: translateX(-100%);
        }
    </style>
</head>
<body class="bg-gray-100 h-screen ">
    <div class="content flex">
        <div id="sidebar" class="sidebar fixed top-0 left-0 w-64 h-full bg-white shadow-lg p-4 translate-x-[1%] transition-transform duration-300 ease-in-out">
            <img src="../public/img/logoff.png" alt="">
            <ul>
                <li class="mt-20"><a href="#" class="text-blue-500 text-2xl hover:bg-blue-400 hover:text-white border border-blue-500 pr-20 pb-3 pt-3 pl-10 rounded-2xl" id="accueil">Accueil</a></li>
                <li class="mt-20"><a href="#" class="text-blue-500 text-2xl hover:bg-blue-400 hover:text-white border border-blue-500 pr-20 pb-3 pt-3 pl-5 rounded-2xl" id="cargaison">cargaison</a></li>
                <li class=" mt-20"><a href="#" class="text-blue-500 text-2xl hover:bg-blue-400 hover:text-white border border-blue-500 pr-10 pb-3 pt-3 pl-5 rounded-2xl" id="produit">produit/colis</a></li>
            </ul>
        </div>
        <div class="container p-4 flex justify-around bg-white w-1000" id="container">
            <div class="flex">
                <button id="burger" class="text-3xl p-2  ">
                    &#9776;
                </button>
            </div>
            <p class="text-blue-700 text-3xl font-bold">GP-MONDE</p>
            <input type="date" name="" id="" class="-mr-10 bg-blue-100 border-b rounded-2xl">
        </div>
    </div>

<!--     accueil
 -->  
   <div class="main bg-red-700 mt-20 ml-80 h-150 pb-80 bg-cover opacity-80 relative" id="main">
     
        <h1 class="text-4xl font-bold mb-4 fixed top-80 ml-10 text-white">Bienvenue chez GPduMonde</h1>
        <h1 class=" text-3xl mb-8 fixed top-80 mt-20 ml-10 text-white ">Nous sommes une entreprise de transport de colis mondial.</h1>
        <button class="bg-blue-800 hover:bg-blue-600 text-white text-xl py-2 px-4 rounded fixed top-80 mt-40 ml-10" id="btncargaison">
            Accéder à la gestion des cargaisons 
        </button>
        <p class="text-transparent">Lorem ipsum dolor sit, amet consectetur <br> adipisicing elit. Corporis sit quo, dolores libero <br> fuga nam! Rerum laudantium aliquid natus perferendis culpa deleniti fuga  <br>ipsam ipsa commodi dolore omnis hic laborum  <br>nesciunt illo porro, vitae impedit dolorem velit sed officia provident non minima. Maiores modi atque itaque culpa dolor.  <br>Alias, vero cumque consequatur nihil, asperiores quisquam ex ad cum animi quaerat, illum officia quas consequuntur deserunt vel deleniti sed. Eius quod nihil  <br>repellendus inventore reiciendis illo minus doloremque, cupiditate iste repellat error voluptas ipsam? Ex recusandae corrupti,  <br>quis blanditiis tempora dolor repellat dolores numquam quidem, ducimus praesentium eos aut amet,  <br>rerum expedita. Quod nisi itaque incidunt, delectus ex magni a maxime blanditiis consectetur non impedit consequatur corporis, fugit molestias tenetur maiores. Ea explicabo,  <br>doloribus blanditiis aliquid a sit mollitia corrupti, alias perferendis  <br>corporis tenetur illo quia dolores repellat commodi sint rerum, sapiente inventore cum aliquam facere iste. Magni accusamus sed explicabo corrupti quod animi eum neque, placeat <br>numquam molestias odio doloremque vel ipsa facere <br>repellendus reiciendis enim quisquam,  <br>sit sunt consectetur libero. Sapiente placeat eius deserunt amet enim iusto, in magni. Cupiditate eveniet vero non ipsa delectus, quod consectetur minima culpa sunt iste eum at sit corrupti quam eaque modi? Vero!</p>
    </div>
   

<!--     page cargaison
 -->
    <div class="section flex justify-around flex-row" id="section">
    <h1 class="text-3xl relative  right-0  mt-20 ml-80 w-[20px]  left-1/2  transform ml-translate-x-1/2 -translate-y-1/2 border rounded-2xl  text-center bg-blue-700 max-w-md" id="modals">Ajouter Cargaison</h1>
    <div class="text-3xl mt-10 relative left-80 bg-white w-10 border rounded-2xl shadow-md" id="results">
    <table class="min-w-10 bg-white">
    <thead class="bg-gray-800 text-white w-full">
    <tr>
        <th class="w-1/4 py-3 px-20 uppercase font-semibold text-sm">code</th>
        <th class="w-1/4 py-3 px-10 uppercase font-semibold text-sm">Type</th>
        <th class="w-1/4 py-3 px-10 uppercase font-semibold text-sm">Distance (km)</th>
        <th class="w-1/4 py-3 px-10 uppercase font-semibold text-sm" id="nb">Nb produit</th>
        <th class="w-1/4 py-3 px-10 uppercase font-semibold text-sm" id="pd">Poids</th>
        <th class="w-1/4 py-3 px-10 uppercase font-semibold text-sm">Montant Total (F)</th>
        <th class="w-1/4 py-3 px-10 uppercase font-semibold text-sm">Etat</th>
        <th class="py-3 px-10 uppercase font-semibold text-sm">Actions</th>
    </tr>
</thead>
<tbody class="text-gray-700">
    <tr>
        <!-- Les lignes ajoutées dynamiquement auront des cellules avec les classes nb-cell et pd-cell -->
    </tr>
</tbody>
    </table>
</div>


<div class="fixed inset-0 flex items-center justify-center  p-10 z-30 mx-auto" id="modale">
    <div class="relative bg-blue-100 p-6 rounded-lg mt-20 shadow-lg w-full" style="width: 700px; margin-left:500px">
        <p id="annuler" class="absolute top-2 right-2 cursor-pointer text-red-500">X</p>
        <form class="flex flex-col items-center space-y-4" id="cargaisonForm" action="save.php" method="post">
                  <div class="flex flex-col items-start w-full">
                <label for="type-cargaison" class="self-start">Type de Cargaison:</label>
                <select id="type-cargaison" class="border border-gray-300 rounded px-2 py-1 w-full">
                    <option value="aerienne">Aérienne</option>
                    <option value="maritime">Maritime</option>
                    <option value="routiere">Routière</option>
                </select>
            </div>
            <div class="flex flex-col items-start w-full">
        <label for="libelle-produit" class="self-start">Libellé du Produit:</label>
        <input type="text" id="libelle-produit" class="border border-gray-300 rounded px-2 py-1 w-full">
    </div>
    <div class="flex flex-col items-start w-full">
        <label for="poids-produit" class="self-start">Poids du Produit (kg):</label>
        <input type="number" id="poids-produit" class="border border-gray-300 rounded px-2 py-1 w-full">
    </div>
    <div class="flex flex-col items-start w-full">
        <label for="type-produit" class="self-start">Type de Produit:</label>
        <select id="type-produit" class="border border-gray-300 rounded px-2 py-1 w-full">
            <option value="alimentaire">Alimentaire</option>
            <option value="chimique">Chimique</option>
            <option value="fragile">Fragile</option>
            <option value="incassable">Incassable</option>
        </select>
    </div>
            <!--             map
 -->            <div id="map" style="height: 50px; width: 100%;" ></div>
            <div class="flex flex-col items-start w-full">
                <label for="distance" class="self-start">Lieu de depart</label>
                <input type="text" id="lieu_depart" class="border border-gray-300 rounded px-2 py-1 w-full">
            </div>

            <div class="flex flex-col items-start w-full">
                <label for="distance" class="self-start">lieu d'arriver:</label>
                <input type="text" id="lieu_arrive" class="border border-gray-300 rounded px-2 py-1 w-full">
            </div>
            
            <div class="flex flex-col items-start w-full">
                <label for="distance" class="self-start">Distance:</label>
                <input type="number" id="distance" class="border border-gray-300 rounded px-2 py-1 w-full">
            </div>


            <div class="flex flex-col items-start w-full">
                <label for="cargoplein" class="self-start">Cargaison plein:</label>
                <select name="cargoplein" id="cargoplein" class="border border-gray-300 rounded px-2 py-1 w-full">
                    <option value="poids" id="poid">Poids</option>
                    <option value="nbproduit" id="nbproduitss">Nombre de produits</option>
                </select>
            </div>
         
            <input type="submit" id="submit-cargaison" class="bg-blue-500 mt-10 hover:bg-gray-300 text-black font-semibold py-2 px-4 border border-gray-400 rounded">
        </form>
    </div>
</div>






        

    </div>

<!--     Ajout Produit dans cargaison
 -->
 <div id="details-modal" class="modal hidden">
    <div class="modal-content">
        <span class="close-button">&times;</span>
        <div id="details-container">fvv</div>
    </div>
</div>

 <div class="ajout">

 </div>







<!--     page produit colis
 -->   
  <div class="section1 text-3xl fixed right-0 -ml-100 mt-10 mr-10 p-10 text-center bg-blue-100" id="section1">

        
        <h1 class="text-3xl font-bold text-blue-500 sm:text-center">Produit</h1>
        <label for="libelle-produit">Libellé:</label> <br>
        <input type="text" id="libelle-produit" class="ml-10"> <br>
        <label for="poids-produit">Poids:</label> <br>
        <input type="number" id="poids-produit" class="ml-10"> <br>
        <label for="type-produit">Type de Produit:</label> <br>
        <select id="type-produit" class="ml-10">
            <option value="alimentaire">Alimentaire</option>
            <option value="chimique">Chimique</option>
            <option value="fragile">Fragile</option>
            <option value="incassable">Incassable</option>
        </select> <br>
        <label for="toxicite-produit" class="toxicite-label" style="display: none;">Toxicité:</label> <br>
        <input type="number" id="toxicite-produit" class="ml-10 toxicite-input" style="display: none;"> <br>
        <input type="submit" id="submit-produit" class="bg-blue-500 mt-10 hover:bg-gray-300 text-black font-semibold py-2 px-4 border
        border-gray-400 rounded">

    </div>
    <div class="main  bg-white  mt-10 ml-80 h-20  bg-cover opacity-200 "  id="main1">
        <h1 class="text-xl  mb-4 mt-12 ml-10 text-center ">@GPduMonde-Sonatel</h1>
      
    </div>

    <script src="../dist/app-bundle.js"></script>
</body>
</html>

               

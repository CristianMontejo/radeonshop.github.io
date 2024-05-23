let portafolio = ()=>{
    const proyectos = [{
        nombre:"Laptop HP",
        foto:"media/laptop1.jpg",
        link:"https://www.intelaf.com/",
        descripcion: 'HP 15-DY2503LA i5 1135G7 2.4GHZ 8GB 512GB 15.6" WIN11H',
        precio:"Q5 597.00"
    },{
        nombre:"Laptop Dell",
        foto:"media/compu1.jpg",
        link:"https://www.intelaf.com/",
        descripcion: 'DELL ALIENWARE 1NKR4 RYZEN 9 6900HX 3.3GHZ 32GB 1TB SSD 15.6 3070TI 8G',
        precio:"Q. 26 763.00"
    },{
        nombre:"Audifonos JBL Tune",
        foto:"media/audifonosJBL.jpg",
        link:"https://www.intelaf.com/",
        descripcion: 'AUDIFONO JBL TUNE 230NC TWS IN EAR NOISE CANCELLING NEGRO',
        precio:"Q. 650.00"
    },{
        nombre:"Tablet Redmi Pad",
        foto:"media/tabletRedmi.jpg",
        link:"https://www.intelaf.com/",
        descripcion: 'TABLET REDMI PAD 4GB 128GB 10.61" 8MP US GRIS',
        precio:"Q. 2 177.00"
    },{
        nombre:"Audifono JBL",
        foto:"media/audifonoJBL.jpg",
        link:"https://www.intelaf.com/",
        descripcion: 'AUDIFONO JBL TUNE 710 BLUETOOTH BLANCO',
        precio:"Q. 440.00"
    },{
        nombre:"Bocina JBL",
        foto:"media/bocinaJBL.jpg",
        link:"https://www.intelaf.com/",
        descripcion: 'BOCINA JBL FLIP ESSENTIAL BLUETOOTH 16W RESIS AL AGUA IPX7 GRIS PLOMO',
        precio:"Q. 585.00"
    },{
        nombre:"Monitor Led Samsung",
        foto:"media/monitorSamsung.jpg",
        link:"https://www.intelaf.com/",
        descripcion: 'MONITOR LED SAMSUNG 27" CURVADO 1920x1080 HDMI LC27F390FHNXGO',
        precio: "Q. 1 515.00"
    },{
        nombre:"Tarjeta de Video ASUS",
        foto:"media/tarVideo.jpg",
        link:"https://www.intelaf.com/",
        descripcion: 'TARJETA DE VIDEO ASUS DUAL GEFORCE RTX 3060 OC 8GB GDDR6 BLANCO',
        precio:"Q. 3 800.00"
    },{
        nombre:"Reloj Xiaomi",
        foto:"media/relojXiaomi.jpg",
        link:"https://www.intelaf.com/",
        descripcion: 'RELOJ XIAOMI MI SMART BAND 6 NEGRO',
        precio:"Q. 430.00"
    },{
        nombre:"Bocia JBL",
        foto:"media/bocinaa2.jpg",
        link:"https://www.intelaf.com/",
        descripcion: 'BOCINA JBL LINK MUSIC SMART BLUETOOTH NEGRO 20W',
        precio:"Q.760.00"
    },{
        nombre:"WYSE camara",
        foto:"media/camaraWYZE.jpg",
        link:"https://www.intelaf.com/",
        descripcion: 'WYZE CAMARA PAN V2 SEGURIDAD 1080p WIFI SMART INTERIOR NOCTURNA',
        precio:"Q. 485.00"
    },{
        nombre:"WYSE Cerradura",
        foto:"media/cerraduraWYSE.jpg",
        link:"https://www.intelaf.com/",
        descripcion: 'WYZE CERRADURA SMART WIFI Y BLUETOOTH WLCKG1-CFH',
        precio:"Q. 1 280.00"
    },{
        nombre:"Smart Tag",
        foto:"media/tagSamsung.jpg",
        link:"https://www.intelaf.com/",
        descripcion: 'SAMSUNG SMART TAG PAQUETE DE 2 UNIDADES NEGRO Y AVENA',
        precio:"Q. 320.00"
    },{
        nombre:"Dron JDI Mavic 3",
        foto:"media/dron1.jpg",
        link:"https://www.intelaf.com/",
        descripcion: 'DRON DJI MAVIC 3 CON FLY MORE COMBO Y SD SANDISK 32GB EXTREME',
        precio:"Q. 26 045.00"
    },{
        nombre:"Go Pro",
        foto:"media/goPro.jpg",
        link:"https://www.intelaf.com/",
        descripcion: 'CAMARA GOPRO HERO 9 BLACK CON BATERIA',
        precio:"Q. 3 550.00"
    },{
        nombre:"Camara Domo",
        foto:"media/camaraDomo.jpg",
        link:"https://www.intelaf.com/",
        descripcion: 'CAMARA DOMO HIKVISION DS-2CE56D0T-IRPF 2.8MM HD 1080P PARA INTERIORES',
        precio:"Q. 160.00"
    }
]
    
const portafoliFlex = document.querySelector(".seccion2-portafolios")
    
for (proyecto in proyectos){
    let datos = proyectos[proyecto]
    let nombre = datos["nombre"]
    let foto = datos["foto"]
    let link = datos["link"]
    let descripcion = datos["descripcion"]
    let precio = datos["precio"]

    function htmlCode(){
        let div = document.createElement("div")
        let a1 = document.createElement("a")
        let img = document.createElement("img")
        let capa = document.createElement("div") //modificacion
        let div2 = document.createElement("div")
        let div3 = document.createElement("div")
        let div4 = document.createElement("div")
        let a2 = document.createElement("a")

        
        div.className = "portafolio-container"; 

        a1.className="figure"; a1.href = foto; a1.target = "_BLANK"

        img.className = "imagen"; img.src = foto; img.alt = descripcion;

        capa.className = "capa";  
        div2.className = "descripcion"; div2.textContent = descripcion
        div3.className = "precio"; div3.textContent = precio
        div4.className = "carrito"; div4.textContent ="Añadir al carrito"
        
        a2.className = "nombre"; a2.href = foto; a2.target= "_BLANK"; a2.textContent = nombre;

        div.appendChild(a1)
        
        a1.appendChild(img)
        a1.appendChild(capa)

        capa.appendChild(div2)
        capa.appendChild(div3)
        capa.appendChild(div4)
        
        div.appendChild(a2)
        
        portafoliFlex.appendChild(div)
        // if (proyecto == 2) {
        //         div.classList.add("rojo")
        //         a2.classList.add("rojo")
        //     }
    }
    htmlCode()
    }          
}
portafolio()

const navIconContainer = document.querySelector(".iconContainer")
const aContainer = document.querySelector(".aContainer")
const navItem = document.querySelector("nav-item")

navIconContainer.addEventListener("click",()=>{
    aContainer.classList.toggle("show")
})

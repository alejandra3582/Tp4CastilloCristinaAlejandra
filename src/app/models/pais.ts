export class Pais {
    casosActivos:string;
    nombrePais:string;
    ultimaActualizacion:string;
    nuevosCasos:string;
    nuevasMuertes:string;
    totalCasos:string;
    totalMuertes:string;
    totalRecuperados:string;

    constructor(casosActivos?:string, nombrePais?:string, ultimaActualizacion?:string, nuevosCasos?:string, nuevasMuertes?:string, totalCasos?:string, totalMuertes?:string, totalRecuperados?:string){
        this.casosActivos = casosActivos;
        this.nombrePais = nombrePais;
        this.ultimaActualizacion = ultimaActualizacion;
        this.nuevosCasos = nuevosCasos;
        this.nuevasMuertes = nuevasMuertes;
        this.totalCasos = totalCasos;
        this.totalMuertes = totalMuertes;
        this.totalRecuperados = totalRecuperados;
    }
}

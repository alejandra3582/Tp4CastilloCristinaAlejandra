export class Noticia {
    id: number;
    pid: number;
    seo: string;
    tit: string; //Titulo
    des: string; //Descripcion
    con: string; //Noticia completa
    pub: number;
    tst: string;
    thb: string;
    img: string; //url
    cap: string;
    aut: string;
    ava: string;

    constructor(id?: number, pid?: number, seo?: string, tit?: string, des?: string, con?: string, pub?: number, tst?: string, thb?: string, img?: string, cap?: string, aut?: string, ava?: string){
            this.id = id;
            this.pid = pid;
            this.seo = seo;
            this.tit = tit;
            this.des = des;
            this.con = con;
            this.pub = pub;
            this.tst = tst;
            this.thb = thb;
            this.img = img;
            this.cap = cap;
            this.aut = aut;
            this.ava = ava;
        }
}
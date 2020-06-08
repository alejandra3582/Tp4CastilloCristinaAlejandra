export class Divisa {
    result:string;
    valid:boolean;
    fromValue:string;
    toType:string;
    fromType:string;

    constructor(result:string, valid:boolean, fromValue?:string, toType?:string, fromType?:string){
        this.result = result;
        this.valid = valid;
        this.fromValue = fromValue;
        this.toType = toType;
        this.fromType = fromType;
    }
}

export class Socio {
    private _nombre: string;
    private _apellidos: string;
    private _socio: number;
    private _dni: string;
    private _telefono: string;
    private _sexo: string;

    constructor(nombre: string, apellidos: string, socio: number, dni: string, telefono: string, sexo: string) {
        this._nombre= nombre;
        this._apellidos= apellidos;
        this._socio= socio;
        this._dni= dni;
        this._telefono= telefono;
        this._sexo= sexo;
    }
    public get nombre() : string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre= value;
    }
    public get apellidos() : string {
        return this._apellidos;
    }
    public set apellidos(value: string) {
        this._apellidos= value;
    }
    public get socio() : number {
        return this._socio;
    }
    public set socio(value: number) {
        this._socio= value;
    }
    public get dni() : string {
        return this._dni;
    }
    public set dni(value: string) {
        this._dni= value;
    }
    public get telefono() : string {
        return this._telefono;
    }
    public set telefono(value: string) {
        this._telefono= value;
    }
    public get sexo() : string {
        return this._sexo;
    }
    public set sexo(value: string) {
        this._sexo= value;
    }
    public LiteralP(): string{
        return this._nombre+" "+ this._apellidos+", "+ this._socio+", "+ this._dni+", "+ this._telefono+", "+ this._sexo;
    }
}


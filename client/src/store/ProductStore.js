import {  makeAutoObservable } from "mobx";

export default class ProductStore{
    constructor(){
        this._types = [
            {id : 1, name: 'Молоко'},
            {id : 2, name: 'Мясо'}
        ];
        this._brands = [];
        this._products = [];
        this._selectedType = {};
        makeAutoObservable(this);
    }
    setTypes(types) {
        this._types = types;
    }
    setBrands(brands) {
        this._brands = brands;
    }
    setProduct(products) {
        this._products = products;
    }
    setSelectedType(type){
        this._selectedType = type;
    }

    get types() {
        return this._types;
    }
    get brands() {
        return this._brands;
    }
    get products() {
        return this._products;
    }
    get selectedType(){
        return this._selectedType;
    }
}
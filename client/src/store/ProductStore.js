import {  makeAutoObservable } from "mobx";

export default class ProductStore{
    constructor(){
        this._types = [];
        this._brands = [];
        this._products = [];
        this._selectedType = {'id': '', 'name': ''};
        this._selectedBrand = {'id': '', 'name': ''};
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
    setSelectedBrand(brand) {
        this._selectedBrand = brand;
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
    get selectedBrand() {
        return this._selectedBrand;
    }
    get totalCount() {
        return this._totalCount;
    }
    get page() {
        return this._page;
    }
    get limit() {
        return this._limit;
    }
}
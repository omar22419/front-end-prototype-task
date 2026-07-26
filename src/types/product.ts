export interface ProductVariant{
    id:string;
    name:string;
    color:string;
    image:string;
    quantity:number;
}

export interface Product{
    id:string;
    title:string;
    description:string;
    image:string;

    price:number;
    compareAtPrice?:number;

    badge?:string;
    learnMore?:string;
    
    variants?:ProductVariant[];
    selectedVariantId: string;


    isSelected:boolean;

}
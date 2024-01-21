export interface ProductInterface {
    _id?: string;
    name: string;
    description: string;
    price: number;
}

export interface ProductsState {
    products: ProductInterface[];
    isLoading: boolean;
}

export interface ProductFormProps {
    onSubmit: (data: ProductFormData) => void;
}

export interface ProductFormData {
    name: string;
    description: string;
    price: number;
}
export interface Book {
    id: string;
    image: string[];
    category: string;
    author: string;
    title: string;
    rating: number;
    year: number;
    stock: boolean;
    datePublic: string;
}

export interface PropsBook {
    listCheck: boolean;
    bookOne: Book;
}

export interface PropsMain {
    changeView: FuncBoolean;
}

export type FuncBoolean = (a: boolean) => void;

export type FuncVoid = () => void;

export type FuncVoidEvent = ((e:MouseEvent) => void)

export interface PropsMenu {
    openBurgerMenu: FuncVoidEvent,
}
export interface Order {
    [key: string]: boolean;
}

export interface IReview {
    id: string,
    image: string,
    name: string,
    date: string,
    rating: number,
    text: string,
}

export interface Link {
    name: string,
    count: string,
    paths: string
}
export interface IBurgerMenuContext {
    isOpenBurger: boolean,
    openBurgerMenu: FuncVoid
}
export interface MyStore {
    isOpenMenu: boolean;
}
export interface PropsNavigate {
    vitrinaId: string,
    dataId: string,
   allBookId:  string,

    ruleId:  string,

    ofertaId:  string,

}

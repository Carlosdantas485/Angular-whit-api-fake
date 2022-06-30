
export interface User {
    //esta interrogacao indica que o id e opcional
    id?: number
    nome: string
    descricao: string
    preco: number
    categoria_id: number
}
export type Category = {
  id: number;
  nome: string;
};

export type Product = {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  disponibilidade: boolean;
  imagem: string;
};

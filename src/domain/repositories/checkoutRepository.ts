import { Fatura, StatusDePagamento } from "~domain/entities/fatura";
import Pedido  from "~domain/entities/pedido";

export interface Pagamento {
  qrCode?: string;
  statusDePagamento: StatusDePagamento;
}

export type GeraFaturaInput = {
  metodoDePagamentoId: string; 
  pedido: Pedido;
}

export default interface CheckoutRepository {
  geraFatura(geraFaturaInput: GeraFaturaInput): Promise<Fatura>;
}

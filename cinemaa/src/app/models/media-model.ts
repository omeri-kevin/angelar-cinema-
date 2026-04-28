export interface Media {
    id: number;
    titolo: string;
    regista: string;
    anno: number;
    genere: string;
    durata: number; // durata espressa in minuti
    visto: boolean;
    tipo: 'Film' | 'Serie TV'; // può essere solo uno di questi due valori
    trama: string;
    imageUrl: string;
}
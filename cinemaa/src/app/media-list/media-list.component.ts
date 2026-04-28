import { Component } from '@angular/core';
// Importiamo l'interfaccia che abbiamo creato nel passaggio precedente
import { Media } from '../models/media-model';

@Component({
  selector: 'app-media-list',
  standalone: true, // Se stai usando le versioni recenti di Angular
  imports: [], // Qui aggiungerai i componenti figli più avanti
  templateUrl: './media-list.html',
  styleUrl: './media-list.css'
})
export class MediaListComponent {

  // Creiamo l'array 'myMedias' e lo popoliamo con 4 oggetti di esempio
  myMedias: Media[] = [
    {
      id: 1,
      titolo: 'Inception',
      regista: 'Christopher Nolan',
      anno: 2010,
      genere: 'Sci-Fi',
      durata: 148,
      visto: true,
      tipo: 'Film',
      trama: 'Un ladro che ruba segreti attraverso la tecnologia di condivisione dei sogni.',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      titolo: 'Stranger Things',
      regista: 'The Duffer Brothers',
      anno: 2016,
      genere: 'Horror/Sci-Fi',
      durata: 50,
      visto: false,
      tipo: 'Serie TV',
      trama: 'La scomparsa di un ragazzino scatena una serie di eventi misteriosi in una piccola città.',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      titolo: 'Interstellar',
      regista: 'Christopher Nolan',
      anno: 2014,
      genere: 'Sci-Fi',
      durata: 169,
      visto: true,
      tipo: 'Film',
      trama: 'Un gruppo di esploratori viaggia attraverso un tunnel spaziale per salvare l’umanità.',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 4,
      titolo: 'The Bear',
      regista: 'Christopher Storer',
      anno: 2022,
      genere: 'Drama',
      durata: 30,
      visto: true,
      tipo: 'Serie TV',
      trama: 'Un giovane chef di alta cucina torna a Chicago per gestire la panineria di famiglia.',
      imageUrl: 'https://via.placeholder.com/150'
    }
  ];

}
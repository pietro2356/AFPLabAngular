import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './service/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AFPLab';
  msg = "No, IO sono TUO padre!";
  timeStamp = "";
  see = false;

  $dati? = new Observable<any>();
  $ps?: Array<any> = new Array<any>();

 
  constructor(public api: ApiService) {
    console.log(api.getSaluto());
  }

  onClick() {
    this.$dati = this.api.getAPI();
    this.$dati.forEach(item => {
      this.see = true;
      item[0].risposta.timestamp
      item.forEach((obj: any) => {
        this.timeStamp = obj.risposta.timestamp;
        // console.log(obj.risposta.timestamp);

        // console.log(obj.risposta.pronto_soccorso.reparto);
        this.$ps?.push(obj.risposta.pronto_soccorso.reparto);
        // TODO: --------------------------------------------
      })
    });

    // this.$dati = this.api.getAPI();
    // this.$dati.forEach(item => {
    //   item.forEach((osp: any) => {
    //     let tmp = osp.risposta.pronto_soccorso.reparto
        
    //   })
    // })
    // this.$jsonData = JSON.parse(this.$dati);
  }

  printData() {
    // .risposta.pronto_soccorso.reparto
    

  }


  //    interface MyObj {
  //      myString: string;
  //      myNumber: number;
  //    }

  //    let obj: MyObj = JSON.parse('{ "myString": "string", "myNumber": 4 }');
  //    console.log(obj.myString);
  //    console.log(obj.myNumber);

}

interface Stato{
  bianco?: number;
  verde?: number;
  azzurro?: number;
  arancione?: number;
  rosso?: number;
}
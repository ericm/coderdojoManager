import {Component} from '@angular/core';
/*import * as Cloudant from '@cloudant/cloudant';

let client = Cloudant("https://1c7e8b98-ff80-417a-bc1e-75913b780bae-bluemix:f7bf9f63e1860dc8940fcf7d1d143122fdffe5b6e70c16534e96ce9c2dda141b@1c7e8b98-ff80-417a-bc1e-75913b780bae-bluemix.cloudant.com");

(client.db.list() as any).then((d) => { console.log(d); });
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  loggedIn = true;
}

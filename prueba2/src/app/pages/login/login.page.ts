import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [ Camera ]
})
export class LoginPage implements OnInit {

  image!: string;   
  qrText!: string;

  constructor(private storage: Storage,private camera: Camera  ) { }

  async ngOnInit() {

    await this.storage.create();
  }

  async guardar(){

    this.storage.set("rutUsuario","21604275")
    let rut = await this.storage.get("rutUsuario");
    console.log("El nombre guardado es: "+ rut)
    
  }

}

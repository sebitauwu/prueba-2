import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  providers: [ Camera ]
})
export class HomePage implements OnInit {
  image!: string;   
  qrText!: string;

  constructor(private camera: Camera ) { }

  ngOnInit() {
  }

  openCamera(){

    const Options : CameraOptions = {

      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    }

    this.camera.getPicture(Options).then((imageData)=>{
      this.image = 'data:image/jpeg;base64,'+ imageData;
    }, err =>{
      console.log(err);
    })

  }

}

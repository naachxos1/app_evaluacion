import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-diseñocarta',
  templateUrl: './diseñocarta.page.html',
  styleUrls: ['./diseñocarta.page.scss'],
})
export class diseñocartaPage implements OnInit {

  mensaje: any;

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get(`id`);
    this.httpClient.get(`https://json-server-1-62r5.onrender.com/api${id}`)
    .subscribe((data:any) => {
      this.mensaje = data;
      console.log(this.mensaje)
    });
  }


}

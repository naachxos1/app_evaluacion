import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-diseñocartad',
  templateUrl: './diseñocarta.page.html',
  styleUrls: ['./diseñocarta.page.scss'],
})
export class diseñocartaPage implements OnInit {

  dataapialumno: any;

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute // CAPTURA DATA DE LA URL
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get(`id`);
    this.httpClient.get(`https://localhost:3300/api/data${id}`)
    .subscribe((data:any) => {
      this.dataapialumno = data;
      console.log(this.dataapialumno)
    });
  }

}

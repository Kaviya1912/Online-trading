import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-mutual',
  templateUrl: './mutual.component.html',
  styleUrls: ['./mutual.component.css']
})
export class MutualComponent implements OnInit {

  constructor(private logger:LoggerService) { }

  ngOnInit() {
      //logger
      this.logger.log("Mutual component");
  }

}

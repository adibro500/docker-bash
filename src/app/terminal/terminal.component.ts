import { Component, OnInit } from '@angular/core';
import { NgxAdibroConsoleService } from 'ngx-adibro-console';
import { CommandHandlerService } from '../services/command-handler.service';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {
  public loading = false;

  constructor(private ngxAdibroConsoleService: NgxAdibroConsoleService,private commandHandlerService: CommandHandlerService) {
    this.ngxAdibroConsoleService.commandHandler.subscribe((command) => {
      this.loading = true;
      this.commandHandlerService.insertCommand(command).subscribe((result: any) => {
        if (result.hasOwnProperty('data')) {
          this.loading = false;
          this.ngxAdibroConsoleService.sendResponse(result.data);
        }
      }, err => {
        this.loading = false;
      });
    });
  }

  ngOnInit() {
  }

}

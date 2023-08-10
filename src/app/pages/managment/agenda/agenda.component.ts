import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { WebsocketService } from 'src/app/shared/websocket.service';
export interface User {
  name: string;
}

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
})
export class AgendaComponent implements OnInit {
  messages: any;
  eventName: string = 'send-message';
  text: string = '';
  myControl = new FormControl<string | User>('');
  options: User[] = [{ name: 'Mary' }, { name: 'Shelley' }, { name: 'Igor' }];
  filteredOptions: Observable<User[]> | undefined;
  constructor(private webSocket: WebsocketService) {}
  // ngOnInit(): void {
  //   this.webSocket.listen('text-event').subscribe((data) => {
  //     this.messages = data;
  //   });
  // }
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      })
    );
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }
  sendNotification() {
    this.webSocket.emit(this.eventName, {
      user: 'Juan Bracamonte',
      msg: this.text,
    });
    this.text = '';
  }
}

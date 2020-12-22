import {Component, Input, OnInit} from '@angular/core';
import {ConnectionService} from "../connection.service";

@Component({
  selector: 'app-estimations',
  templateUrl: './estimations.component.html',
  styleUrls: ['./estimations.component.css']
})
export class EstimationsComponent implements OnInit {

  @Input() votes;

  public messages: any;
  public result: number;

  constructor(connectionService: ConnectionService) {

    connectionService.connection.subscribe((data) => {
      const message = JSON.parse(data);

      if (message.type === "chat-message"){
        this.messages.push(message.user + ' ' + message.text);
      }

      else if (message.type === 'votings'){
        this.votes.push(message.user + ' ' + message.text);
      }
      else {
        console.log('keine Message');
      }
    })
  }

  ngOnInit(): void {
  }


  calculateAverage(votes): any{

    const estimations = this.getValueOfVote(votes)

    const average = estimations.reduce((a, b) => {
      return a + b;
    });
    this.result = average / estimations.length;


    return this.result;

  }

  private getValueOfVote(votes) {
    return votes.map(singleVote => {
      if (typeof singleVote === 'string') {
        return parseInt(singleVote.slice(-1))
      } else {
        return singleVote;
      }
    });
  }
}

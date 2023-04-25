import {Component, OnInit, Input} from '@angular/core';
import {EventInterface} from '../interface/eventInterface';
import {EventsServiceService} from '../events-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.scss']
})
export class UpdateEventComponent implements OnInit {
  eventId: any;
  formData: Partial<EventInterface> = {}

  constructor(private eventService: EventsServiceService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.eventId = this.route.snapshot.paramMap.get('id-event');
    this.eventService.getEventById(this.eventId).subscribe(response => this.formData = response);
    console.log(this.eventId)

  }

  onSubmit(): void {

    this.eventService.updateEvent(this.formData).subscribe(response => {
      alert('evenement modifié avec success!');
      this.eventService.getEventById(this.eventId).subscribe(response => this.formData = response);
    }, error => alert("echec de modification"));
    console.log(this.formData)

  }


}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { WorldTimeService } from 'src/app/services/world-time.service'; 
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-world-time',
  templateUrl: './world-time.page.html',
  styleUrls: ['./world-time.page.scss'],
})
export class WorldTimePage implements OnInit, OnDestroy {
  public currentTime: any = {};
  private subscription: Subscription;

  constructor(private worldTimeService: WorldTimeService) {
    this.subscription = interval(1000).subscribe(() => {
      this.getCurrentTime();
    });
  }

  ngOnInit() {
    this.getCurrentTime();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getCurrentTime() {
    this.worldTimeService.getCurrentTime().subscribe(
      (data: any) => {
        this.currentTime = data;
        console.log('Hora Mundial Actual:', this.currentTime);
      },
      (error) => {
        console.error('Error al obtener la hora mundial actual:', error);
      }
    );
  }
}

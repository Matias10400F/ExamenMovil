import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { WorldTimeService } from 'src/app/services/world-time.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
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

  getCurrentTime() {
    const now = new Date();
    this.currentTime = now.toLocaleString();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

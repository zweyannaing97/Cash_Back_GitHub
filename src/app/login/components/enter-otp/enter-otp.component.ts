import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-enter-otp',
  templateUrl: './enter-otp.component.html',
  styleUrls: ['./enter-otp.component.scss']
})
export class EnterOtpComponent implements OnInit {
  @Output() otp_cancelEvent = new EventEmitter<any>();
  @Output() otp_submitEvent = new EventEmitter<any>();
  @Input() coutDownSecounds!: number;
  timeLeft: number = 10;
  interval: any;
  isTimeUp: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.startTimer();
  }

  otpCancel() {
    this.otp_cancelEvent.emit({});
  }

  // otpSubmit(){
  //   this.otp_submitEvent.emit({});
  // }

  resentOtp(){
    this.isTimeUp = !this.isTimeUp;
    this.startTimer();
  }

  startTimer() {
    var time = this.coutDownSecounds;
    var initialOffset = 440;
    var i = 1
    var j = this.coutDownSecounds;

    /* Need initial run as interval hasn't yet occured... */
    $('.circle_animation').css('stroke-dashoffset', (initialOffset)-(1*(initialOffset/time)));

    var interval = setInterval(() => {
      $('text').text(j - 1);
      if (i == time) {
        this.isTimeUp = !this.isTimeUp;
        clearInterval(interval);
        return;
      }

      $('.circle_animation').css('stroke-dashoffset', initialOffset-((i+1)*(initialOffset/time)));
      i++;
      j--;
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

}

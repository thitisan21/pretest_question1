import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'question1';
  num = 0;
  dropDownData = [
    "isPrime",
    "isFibonacci"
  ]
  selectBox = this.dropDownData[0]
  resultData = ""
  
  onChangeEvent(value: any) {
    if (parseInt(value.target.value) < 0) {
      this.num = 1
    } else {
      this.num = Math.round(value.target.value)
    }
    this.returnResult(this.selectBox, this.num)
  }

  onSelectEvent(value: any) {
    this.selectBox = value
    if (value == "isPrime") {
      const result = this.checkPrimeNumber(this.num)
      this.resultData = result.toString()
    } else {
      const result = this.isFibonacci(this.num)
      this.resultData = result.toString()
    }
  }

  checkPrimeNumber(num: any) {
    for (var i = 2; i < num; i++)
      if (num % i === 0) return false;
    return num > 1;
  }

  isPerfectSquare(numInside: number) {
    let s = parseInt((Math.sqrt(numInside)).toString());
    return (s * s == numInside);
  }

  isFibonacci(n: number) {
    return this.isPerfectSquare(5 * n * n + 4) ||
      this.isPerfectSquare(5 * n * n - 4);
  }

  returnResult(type: string, number: any) {
    if (type == "isPrime") {
      const result = this.checkPrimeNumber(number)
      this.resultData = result.toString()
    } else {
      const result = this.isFibonacci(number)
      this.resultData = result.toString()
    }
  }
}



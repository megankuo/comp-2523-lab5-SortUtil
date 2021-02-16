import { ISortable } from './ISortable';

export class NumberGroup implements ISortable {
  constructor(data: number[]) {
    this.data = data;
  }

  data: number[]; // [30, 3, -15, 0]

  get length(): number {
    return this.data.length;
  }

  compare(leftPos: number, rightPos: number): boolean {
    if (this.data[leftPos] > this.data[rightPos]) {
      // (leftPos > rightPos)
      console.log('compare true');
      return true;
    } else {
      console.log('compare false');
      return false;
    }
  }

  swap(left: number, right: number): void {
    let tempLeft = this.data[left];
    this.data[left] = this.data[right];
    this.data[right] = tempLeft;
  }
}

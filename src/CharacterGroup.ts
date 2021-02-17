import { ISortable } from './ISortable';

export class CharacterGroup implements ISortable {
  constructor(data: string) {
    this.data = data;``
  }

  data: string;

  get length(): number {
    return this.data.length;
  }

  compare(leftPos: number, rightPos: number): boolean {
    const stringArray = this.data.toLowerCase().split('');
    return stringArray[leftPos] > stringArray[rightPos];
  }

  swap(left: number, right: number): void {
    let tempArray = this.data.split('');
    let tempLeft = tempArray[left];
    tempArray[left] = tempArray[right];
    tempArray[right] = tempLeft;
    this.data = tempArray.join('');
  }
}
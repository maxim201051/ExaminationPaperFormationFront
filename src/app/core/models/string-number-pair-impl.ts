import {StringNumberPair} from './string-number-pair';

export class StringNumberPairImpl implements StringNumberPair {
  key: string | null;
  value: number | null;

  constructor() {
    this.key = null;
    this.value = null;
  }
}

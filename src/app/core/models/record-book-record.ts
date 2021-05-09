import {NationalScale} from '../enums/national-scale.enum';
import {ECTSScale} from '../enums/ectsscale.enum';

export interface RecordBookRecord {
  id: number;
  nationalScaleMark: NationalScale;
  numberOfPoints: number;
  ectsScaleMark: ECTSScale;
  recordDate: Date;
  hasDebt: boolean;
}

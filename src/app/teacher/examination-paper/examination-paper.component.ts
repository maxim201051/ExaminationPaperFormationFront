import {Component, OnInit} from '@angular/core';
import {ExaminationPaper} from '../../core/models/examination-paper';
import {ExaminationPaperService} from '../../core/services/examination-paper.service';
import {ControlForm} from '../../core/enums/control-form.enum';
import {HttpErrorResponse} from '@angular/common/http';
import {ECTSScale} from '../../core/enums/ectsscale.enum';
import {NationalScale} from '../../core/enums/national-scale.enum';
import {Utils} from '../../core/Utils/utils';
import {ActivatedRoute} from '@angular/router';
import {GroupService} from '../../core/services/group.service';
import {Group} from '../../core/models/group';

@Component({
  selector: 'app-examination-paper',
  templateUrl: './examination-paper.component.html',
  styleUrls: ['./examination-paper.component.css']
})
export class ExaminationPaperComponent implements OnInit {
  public examinationPaper!: ExaminationPaper;
  ectsScale: typeof ECTSScale = ECTSScale;
  nationalScale: typeof NationalScale = NationalScale;
  controlForm: typeof ControlForm = ControlForm;
  ectsScaleMarks: string[] = Utils.MapEnumToArray(ECTSScale);
  nationalScaleMarks: string[] = Utils.MapEnumToArray(NationalScale);

  constructor(private examinationPaperService: ExaminationPaperService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getExaminationPaper();
  }

  getExaminationPaper(): void {
    this.route.queryParams.subscribe(
      params => {
        this.examinationPaperService.findExaminationPaper(
          params.groupId, params.subjectDetailsId, params.semester, params.type).subscribe(
          (response: ExaminationPaper) => {
            this.examinationPaper = response;
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
          }
        );
      }
    );
  }

  updateExaminationPaper(): void {
    this.examinationPaperService.updateExaminationPaper(this.examinationPaper).subscribe(
      (response: ExaminationPaper) => {
        this.examinationPaper = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  calculateEctsMarkPercentage(mark: ECTSScale): number {
    const count = this.calculateEctsMarkPersonNumber(mark);
    if (count === 0) {
      return 0;
    } else {
      return this.roundNumber((count / this.examinationPaper.rows.length) * 100);
    }
  }

  calculateEctsMarkPersonNumber(mark: ECTSScale): number {
    let count = 0;
    for (const row of this.examinationPaper.rows) {
      if (row.record.ectsScaleMark === mark) {
        count++;
      }
    }
    return count;
  }

  calculateNationalScaleMarkPercentage(mark: NationalScale): number {
    const count = this.calculateNationalScaleMarkPersonNumber(mark);
    if (count === 0) {
      return 0;
    } else {
      return this.roundNumber((count / this.examinationPaper.rows.length) * 100);
    }
  }

  calculateNationalScaleMarkPersonNumber(mark: NationalScale): number {
    let count = 0;
    for (const row of this.examinationPaper.rows) {
      if (row.record.nationalScaleMark === mark) {
        count++;
      }
    }
    return count;
  }

  calculateNonSatisfactorilyPersonNumber(): number {
    return this.calculateEctsMarkPersonNumber(ECTSScale.FX);
  }

  roundNumber(n: number): number {
    return Math.round(n * 100) / 100;
  }

  getInitialsForResponsibleTeacher(): string {
    const fullName: any = this.examinationPaper.responsibleTeacher.key;
    const fullNameArr: string[] = fullName.split(' ');
    return fullNameArr[0] + ' ' + fullNameArr[1].charAt(0) + '.' + fullNameArr[2].charAt(0) + '.';
  }

  getAllowedStudentsNumber(): number {
    return this.examinationPaper.rows.length - this.calculateNonSatisfactorilyPersonNumber();
  }
}

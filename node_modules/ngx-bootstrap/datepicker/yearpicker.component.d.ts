import { OnInit } from '@angular/core';
import { DatePickerInnerComponent } from './datepicker-inner.component';
import * as ɵngcc0 from '@angular/core';
export declare class YearPickerComponent implements OnInit {
    datePicker: DatePickerInnerComponent;
    title?: string;
    rows: never[];
    constructor(datePicker: DatePickerInnerComponent);
    get isBs4(): boolean;
    ngOnInit(): void;
    protected getStartingYear(year: number): number | undefined;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<YearPickerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<YearPickerComponent, "yearpicker", never, {}, {}, never, never>;
}

//# sourceMappingURL=yearpicker.component.d.ts.map
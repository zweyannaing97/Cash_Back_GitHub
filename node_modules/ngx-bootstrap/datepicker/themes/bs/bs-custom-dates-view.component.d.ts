import { EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export interface BsCustomDates {
    label: string;
    value: Date | Date[];
}
export declare class BsCustomDatesViewComponent {
    ranges?: BsCustomDates[];
    selectedRange?: Date[];
    customRangeLabel?: string;
    onSelect: EventEmitter<BsCustomDates>;
    selectFromRanges(range?: BsCustomDates): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BsCustomDatesViewComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<BsCustomDatesViewComponent, "bs-custom-date-view", never, { "ranges": "ranges"; "selectedRange": "selectedRange"; "customRangeLabel": "customRangeLabel"; }, { "onSelect": "onSelect"; }, never, never>;
}

//# sourceMappingURL=bs-custom-dates-view.component.d.ts.map
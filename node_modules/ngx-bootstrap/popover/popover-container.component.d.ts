import { PopoverConfig } from './popover.config';
import { IBsVersion } from 'ngx-bootstrap/utils';
import { AvailbleBSPositions } from 'ngx-bootstrap/positioning';
import * as ɵngcc0 from '@angular/core';
export declare class PopoverContainerComponent {
    set placement(value: AvailbleBSPositions);
    title?: string;
    containerClass?: string;
    popoverId?: string;
    _placement: string;
    get _bsVersions(): IBsVersion;
    constructor(config: PopoverConfig);
    checkMarginNecessity(): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PopoverContainerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PopoverContainerComponent, "popover-container", never, { "placement": "placement"; "title": "title"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=popover-container.component.d.ts.map
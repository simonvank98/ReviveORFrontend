import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopProductOverviewComponent } from './shop-list.component';

describe('ShopListComponent', () => {
    let component: ShopProductOverviewComponent;
    let fixture: ComponentFixture<ShopProductOverviewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ShopProductOverviewComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ShopProductOverviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

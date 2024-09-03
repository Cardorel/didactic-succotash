import { TestBed } from '@angular/core/testing';

import { TariffService } from './tariff.service';
import mockTarifs from "../../constants/mockTarif";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {TarifInterface} from "../../interfaces/tariff.interface";

describe('TariffService', () => {
  let service: TariffService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TariffService
      ]
    });
    service = TestBed.inject(TariffService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be Get', () => {
    let tarifs: TarifInterface[] | undefined;
    service.getTariffs().subscribe(data => {
      tarifs = data.tarifs
    });

    const req = httpMock.expectOne('https://imbesmkaiakotvewnpnf.supabase.co/functions/v1/lefleuvecg');
    req.flush(mockTarifs)
    expect(req.request.method).toBe('GET');
  });
});

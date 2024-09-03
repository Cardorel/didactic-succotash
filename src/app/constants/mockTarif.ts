import {TarifInterface} from "../interfaces/tariff.interface";

const mockTarifs: TarifInterface = {
  id: '5c10e590-762e-4730-824d-2fd3b5f8a22e',
  created_at: '2024-09-01T14:34:15.742831+00:00',
  productShortName: 'Magenta Zuhause L',
  internetSpeed: {
    upload: '40',
    download: '100',
    minUpSpeed: null,
    maxDownSpeed: null,
    minDownSpeed: null,
    averageUpSpeed: null,
    uploadSpeedUnit: 'MBit/s',
    averageDownSpeed: null,
    downloadSpeedUnit: 'MBit/s',
    uploadSpeedNumber: 40,
    downloadSpeedNumber: 100
  },
  prices: {
    total: 21.78,
    totals: '21,78',
    monthly: '21,78 €/Monat',
    totalCosts25: '47,95',
    savingsPercent: -33
  },
  remarks: [
    {
      body: `Als Telekom Festnetz- und Mobilfunkkunde erhalten Sie mit MagentaEINS monatlich 5 € Rabatt auf Ihre Mobilfunkrechnung (24 x 5 € = 120 €), sowie doppeltes Datenvolumen auf Ihren Mobilfunkvertrag, solange beide Verträge laufen. Um Ihren MagentaEINS-Vorteil zu aktivieren, hinterlegen Sie bitte Ihre Daten online im Telekom-Kundencenter oder kontaktieren Sie die Telekom Kunden-Hotline. Weitere Infos finden Sie unter: https://magenta-eins-buchen.telekom-dienste.de/.`,
      type: 'general',
      header: 'MagentaEINS Vorteil: 120 € sparen',
      caption: 'MagentaEINS Vorteil: 120 € sparen'
    },
    {
      body: `Bei erfolgreichem Abschluss dieses Telekom-Tarifs über Verivox erhalten Sie unter den folgenden Voraussetzungen einen Cashback in Höhe von 260 €. Den Cashback können Sie bequem im Verivox Kundenkonto abrufen (durch Log-in oder Registrierung, sofern Sie noch kein Kundenkonto haben unter https://www.verivox.de/mein-konto/login/), indem Sie dort alle Seiten Ihrer Monatsrechnung bis spätestens 6 Monate nach Vertragsabschluss hochladen. Die Auszahlung des Cashbacks erfolgt auf die bei Tarifantragstellung angegebene Bankverbindung. Der Cashback wird nicht bei Abschluss über den Anbieter direkt ausgezahlt und gilt nur für Neukunden* beim jeweiligen Anbieter.
      <br><br>
      *Sie sind Telekom-Neukunde, wenn zum Bestellzeitpunkt seit mindestens 3 Monaten kein Vertragsverhältnis zwischen Telekom und Ihrem Haushalt über einen Internet- oder Telefonanschluss bestanden hat.`,
      type: 'freetext',
      header: '260 € Verivox-Cashback',
      caption: '260 € Verivox-Cashback'
    },
    {
      body: 'Telefon-Flat ins deutsche Festnetz enthalten',
      type: 'general',
      header: 'Festnetz-Flat',
      caption: 'Festnetz-Flat'
    }
  ],
  provider: {
    id: '59020',
    city: 'Bonn',
    name: 'Telekom',
    street: 'Landgrabenweg',
    logoImg: 'https://static.verivox.de/heracles-pimcore-x-production/p/assets/_default_upload_bucket/59020.svg?v=2',
    legalName: 'Telekom AG',
    telephone: '0228 181 0',
    postalCode: '53227',
    houseNumber: '151',
    orderProfiles: [
      'Bonitätsprüfung',
      'Wunschdatum',
      'Abweichende Versandadresse',
      'Abweichende Rechnungsanschrift',
      'Abweichender Kontoinhaber',
      'Mobilfunknummer',
      'Bankeinzug',
      'numberportingshortcut'
    ]
  }
};

export default mockTarifs;

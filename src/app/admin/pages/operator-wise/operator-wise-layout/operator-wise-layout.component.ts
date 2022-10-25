import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OperatorWiseDetailReportFilterComponent } from 'src/app/admin/modals/operator-wise-detail-report-filter/operator-wise-detail-report-filter.component';

@Component({
  selector: 'app-operator-wise-layout',
  templateUrl: './operator-wise-layout.component.html',
  styleUrls: ['./operator-wise-layout.component.scss']
})
export class OperatorWiseLayoutComponent implements OnInit {

  header = [
    {
    title: 'Cash Back Operator Wise',
    key: 'operator'
    },
    {
      title: 'Cash Back Telenor Wise',
      key: 'telenorNum'
    },
    {
      title: 'Telenor Paid Amount',
      key: 'telenorPaidAmt'
    },

    {
      title: 'Telenor Cash Back',
      key: 'telenorCashback'
    },
    {
      title: 'Cash Back MPT Wise',
      key: 'mptNum'
    },
    {
      title: 'MPT Paid Amount',
      key: 'mptPaidAmt'
    },
    {
      title: 'MPT Cash Back',
      key: 'mptCashback'
    },

    {
      title: 'Cash Back Ooredoo Wise',
      key: 'ooredooNum'
    },
    {
      title: 'Ooredoo Paid Amount',
      key: 'ooredooPaidAmt'
    },
    {
      title: 'Ooredoo Cash Back',
      key: 'ooredooCashback'
    },

    {
      title: 'Cash Back Mytel Wise',
      key: 'mytelNum'
    },
    {
      title: 'Mytel Paid Amount',
      key: 'mytelPaidAmt'
    },
    {
      title: 'Mytel Cash Back',
      key: 'mytelCashback'
    },
    
    {
      title: 'Cash Back Mec Tel Wise',
      key: 'mectelNum'
    },
    {
      title: 'Mec Tel Paid Amount',
      key: 'mectelPaidAmt'
    },
    {
      title: 'Mec Tel Cash Back',
      key: 'mectelCashback'
    },
    
    {
      title: 'Company Name',
      key: 'companyName'
    },
    {
      title: 'Division/State',
      key: 'divisionState'
    },

    {
      title: 'District',
      key: 'district'
    },
    {
      title: 'Township',
      key: 'township'
    },

    {
      title: 'City/Town',
      key: 'cityTown'
    },
    {
      title: 'Agent Code',
      key: 'agentCode'
    },

    {
      title: 'Branch',
      key: 'branch'
    },

    {
      title: 'OK$ Account Number',
      key: 'okAccNum'
    },

    {
      title: 'Cash Back OK$ Account',
      key: 'cashbackOkAcc'
    },
    {
      title: 'OK$ Account Type',
      key: 'okAccType'
    },

    {
      title: 'Total Paid Amount',
      key: 'totalPaidAmt'
    },

    {
      title: 'Total Generated Cash Back Amount',
      key: 'totalGeneAmt'
    },

    {
      title: 'Reference Number',
      key: 'refNum'
    },

    {
      title: 'Transaction Date & Time',
      key: 'transDateTime'
    },

    {
      title: 'Status',
      key: 'status'
    },
    {
      title: 'Latitude',
      key: 'latitude'
    },
    {
      title: 'Longitude',
      key: 'longitude'
    },
    ];
    data = [
    {
      operator: 'All',
      telenorNum: '+95 09790887612',
      telenorPaidAmt: '50,000',
      telenorCashback: '250',
      mptNum: '+95 09420887612',
      mptPaidAmt: '150,000',
      mptCashback: '750',
      ooredooNum: '+95 09970887612',
      ooredooPaidAmt: '30,000',
      ooredooCashback: '150',
      mytelNum: '+95 09690887612',
      mytelPaidAmt: '20,000',
      mytelCashback: '100',
      mectelNum: '+95 09330887612',
      mectelPaidAmt: '50,000',
      mectelCashback: '250',
      companyName: 'CGM',
      divisionState: 'Yangon',
      district: 'Eastern',
      township: 'Botahtaung',
      cityTown: 'Yangon', 
      agentCode: 'OK$ 0000001', 
      branch: 'Botahtaung Branch', 
      okAccNum: '+95 094201932311', 
      cashbackOkAcc: '+95 094201932311', 
      okAccType: 'Merchant', 
      totalPaidAmt: '300,000', 
      totalGeneAmt: '1,500', 
      refNum: '00000215835', 
      transDateTime: 'Fri,08-Jun-2021 12:10:20', 
      status: 'Complete', 
      latitude: '16.8991', 
      longitude: '96.1995', 
    },
    {
      operator: 'All',
      telenorNum: '+95 09790887612',
      telenorPaidAmt: '50,000',
      telenorCashback: '250',
      mptNum: '+95 09420887612',
      mptPaidAmt: '150,000',
      mptCashback: '750',
      ooredooNum: '+95 09970887612',
      ooredooPaidAmt: '30,000',
      ooredooCashback: '150',
      mytelNum: '+95 09690887612',
      mytelPaidAmt: '20,000',
      mytelCashback: '100',
      mectelNum: '+95 09330887612',
      mectelPaidAmt: '50,000',
      mectelCashback: '250',
      companyName: 'CGM',
      divisionState: 'Yangon',
      district: 'Eastern',
      township: 'Botahtaung',
      cityTown: 'Yangon', 
      agentCode: 'OK$ 0000001', 
      branch: 'Botahtaung Branch', 
      okAccNum: '+95 094201932311', 
      cashbackOkAcc: '+95 094201932311', 
      okAccType: 'Merchant', 
      totalPaidAmt: '300,000', 
      totalGeneAmt: '1,500', 
      refNum: '00000215835', 
      transDateTime: 'Fri,08-Jun-2021 12:10:20', 
      status: 'Complete', 
      latitude: '16.8991', 
      longitude: '96.1995', 
    },
    {
      operator: 'All',
      telenorNum: '+95 09790887612',
      telenorPaidAmt: '50,000',
      telenorCashback: '250',
      mptNum: '+95 09420887612',
      mptPaidAmt: '150,000',
      mptCashback: '750',
      ooredooNum: '+95 09970887612',
      ooredooPaidAmt: '30,000',
      ooredooCashback: '150',
      mytelNum: '+95 09690887612',
      mytelPaidAmt: '20,000',
      mytelCashback: '100',
      mectelNum: '+95 09330887612',
      mectelPaidAmt: '50,000',
      mectelCashback: '250',
      companyName: 'CGM',
      divisionState: 'Yangon',
      district: 'Eastern',
      township: 'Botahtaung',
      cityTown: 'Yangon', 
      agentCode: 'OK$ 0000001', 
      branch: 'Botahtaung Branch', 
      okAccNum: '+95 094201932311', 
      cashbackOkAcc: '+95 094201932311', 
      okAccType: 'Merchant', 
      totalPaidAmt: '300,000', 
      totalGeneAmt: '1,500', 
      refNum: '00000215835', 
      transDateTime: 'Fri,08-Jun-2021 12:10:20', 
      status: 'Complete', 
      latitude: '16.8991', 
      longitude: '96.1995', 
    },
    {
      operator: 'All',
      telenorNum: '+95 09790887612',
      telenorPaidAmt: '50,000',
      telenorCashback: '250',
      mptNum: '+95 09420887612',
      mptPaidAmt: '150,000',
      mptCashback: '750',
      ooredooNum: '+95 09970887612',
      ooredooPaidAmt: '30,000',
      ooredooCashback: '150',
      mytelNum: '+95 09690887612',
      mytelPaidAmt: '20,000',
      mytelCashback: '100',
      mectelNum: '+95 09330887612',
      mectelPaidAmt: '50,000',
      mectelCashback: '250',
      companyName: 'CGM',
      divisionState: 'Yangon',
      district: 'Eastern',
      township: 'Botahtaung',
      cityTown: 'Yangon', 
      agentCode: 'OK$ 0000001', 
      branch: 'Botahtaung Branch', 
      okAccNum: '+95 094201932311', 
      cashbackOkAcc: '+95 094201932311', 
      okAccType: 'Merchant', 
      totalPaidAmt: '300,000', 
      totalGeneAmt: '1,500', 
      refNum: '00000215835', 
      transDateTime: 'Fri,08-Jun-2021 12:10:20', 
      status: 'Complete', 
      latitude: '16.8991', 
      longitude: '96.1995', 
    },
    {
      operator: 'All',
      telenorNum: '+95 09790887612',
      telenorPaidAmt: '50,000',
      telenorCashback: '250',
      mptNum: '+95 09420887612',
      mptPaidAmt: '150,000',
      mptCashback: '750',
      ooredooNum: '+95 09970887612',
      ooredooPaidAmt: '30,000',
      ooredooCashback: '150',
      mytelNum: '+95 09690887612',
      mytelPaidAmt: '20,000',
      mytelCashback: '100',
      mectelNum: '+95 09330887612',
      mectelPaidAmt: '50,000',
      mectelCashback: '250',
      companyName: 'CGM',
      divisionState: 'Yangon',
      district: 'Eastern',
      township: 'Botahtaung',
      cityTown: 'Yangon', 
      agentCode: 'OK$ 0000001', 
      branch: 'Botahtaung Branch', 
      okAccNum: '+95 094201932311', 
      cashbackOkAcc: '+95 094201932311', 
      okAccType: 'Merchant', 
      totalPaidAmt: '300,000', 
      totalGeneAmt: '1,500', 
      refNum: '00000215835', 
      transDateTime: 'Fri,08-Jun-2021 12:10:20', 
      status: 'Complete', 
      latitude: '16.8991', 
      longitude: '96.1995', 
    },
    {
      operator: 'All',
      telenorNum: '+95 09790887612',
      telenorPaidAmt: '50,000',
      telenorCashback: '250',
      mptNum: '+95 09420887612',
      mptPaidAmt: '150,000',
      mptCashback: '750',
      ooredooNum: '+95 09970887612',
      ooredooPaidAmt: '30,000',
      ooredooCashback: '150',
      mytelNum: '+95 09690887612',
      mytelPaidAmt: '20,000',
      mytelCashback: '100',
      mectelNum: '+95 09330887612',
      mectelPaidAmt: '50,000',
      mectelCashback: '250',
      companyName: 'CGM',
      divisionState: 'Yangon',
      district: 'Eastern',
      township: 'Botahtaung',
      cityTown: 'Yangon', 
      agentCode: 'OK$ 0000001', 
      branch: 'Botahtaung Branch', 
      okAccNum: '+95 094201932311', 
      cashbackOkAcc: '+95 094201932311', 
      okAccType: 'Merchant', 
      totalPaidAmt: '300,000', 
      totalGeneAmt: '1,500', 
      refNum: '00000215835', 
      transDateTime: 'Fri,08-Jun-2021 12:10:20', 
      status: 'Complete', 
      latitude: '16.8991', 
      longitude: '96.1995', 
    },
    {
      operator: 'All',
      telenorNum: '+95 09790887612',
      telenorPaidAmt: '50,000',
      telenorCashback: '250',
      mptNum: '+95 09420887612',
      mptPaidAmt: '150,000',
      mptCashback: '750',
      ooredooNum: '+95 09970887612',
      ooredooPaidAmt: '30,000',
      ooredooCashback: '150',
      mytelNum: '+95 09690887612',
      mytelPaidAmt: '20,000',
      mytelCashback: '100',
      mectelNum: '+95 09330887612',
      mectelPaidAmt: '50,000',
      mectelCashback: '250',
      companyName: 'CGM',
      divisionState: 'Yangon',
      district: 'Eastern',
      township: 'Botahtaung',
      cityTown: 'Yangon', 
      agentCode: 'OK$ 0000001', 
      branch: 'Botahtaung Branch', 
      okAccNum: '+95 094201932311', 
      cashbackOkAcc: '+95 094201932311', 
      okAccType: 'Merchant', 
      totalPaidAmt: '300,000', 
      totalGeneAmt: '1,500', 
      refNum: '00000215835', 
      transDateTime: 'Fri,08-Jun-2021 12:10:20', 
      status: 'Complete', 
      latitude: '16.8991', 
      longitude: '96.1995', 
    },
    {
      operator: 'All',
      telenorNum: '+95 09790887612',
      telenorPaidAmt: '50,000',
      telenorCashback: '250',
      mptNum: '+95 09420887612',
      mptPaidAmt: '150,000',
      mptCashback: '750',
      ooredooNum: '+95 09970887612',
      ooredooPaidAmt: '30,000',
      ooredooCashback: '150',
      mytelNum: '+95 09690887612',
      mytelPaidAmt: '20,000',
      mytelCashback: '100',
      mectelNum: '+95 09330887612',
      mectelPaidAmt: '50,000',
      mectelCashback: '250',
      companyName: 'CGM',
      divisionState: 'Yangon',
      district: 'Eastern',
      township: 'Botahtaung',
      cityTown: 'Yangon', 
      agentCode: 'OK$ 0000001', 
      branch: 'Botahtaung Branch', 
      okAccNum: '+95 094201932311', 
      cashbackOkAcc: '+95 094201932311', 
      okAccType: 'Merchant', 
      totalPaidAmt: '300,000', 
      totalGeneAmt: '1,500', 
      refNum: '00000215835', 
      transDateTime: 'Fri,08-Jun-2021 12:10:20', 
      status: 'Complete', 
      latitude: '16.8991', 
      longitude: '96.1995', 
    },
    {
      operator: 'All',
      telenorNum: '+95 09790887612',
      telenorPaidAmt: '50,000',
      telenorCashback: '250',
      mptNum: '+95 09420887612',
      mptPaidAmt: '150,000',
      mptCashback: '750',
      ooredooNum: '+95 09970887612',
      ooredooPaidAmt: '30,000',
      ooredooCashback: '150',
      mytelNum: '+95 09690887612',
      mytelPaidAmt: '20,000',
      mytelCashback: '100',
      mectelNum: '+95 09330887612',
      mectelPaidAmt: '50,000',
      mectelCashback: '250',
      companyName: 'CGM',
      divisionState: 'Yangon',
      district: 'Eastern',
      township: 'Botahtaung',
      cityTown: 'Yangon', 
      agentCode: 'OK$ 0000001', 
      branch: 'Botahtaung Branch', 
      okAccNum: '+95 094201932311', 
      cashbackOkAcc: '+95 094201932311', 
      okAccType: 'Merchant', 
      totalPaidAmt: '300,000', 
      totalGeneAmt: '1,500', 
      refNum: '00000215835', 
      transDateTime: 'Fri,08-Jun-2021 12:10:20', 
      status: 'Complete', 
      latitude: '16.8991', 
      longitude: '96.1995', 
    },
    {
      operator: 'All',
      telenorNum: '+95 09790887612',
      telenorPaidAmt: '50,000',
      telenorCashback: '250',
      mptNum: '+95 09420887612',
      mptPaidAmt: '150,000',
      mptCashback: '750',
      ooredooNum: '+95 09970887612',
      ooredooPaidAmt: '30,000',
      ooredooCashback: '150',
      mytelNum: '+95 09690887612',
      mytelPaidAmt: '20,000',
      mytelCashback: '100',
      mectelNum: '+95 09330887612',
      mectelPaidAmt: '50,000',
      mectelCashback: '250',
      companyName: 'CGM',
      divisionState: 'Yangon',
      district: 'Eastern',
      township: 'Botahtaung',
      cityTown: 'Yangon', 
      agentCode: 'OK$ 0000001', 
      branch: 'Botahtaung Branch', 
      okAccNum: '+95 094201932311', 
      cashbackOkAcc: '+95 094201932311', 
      okAccType: 'Merchant', 
      totalPaidAmt: '300,000', 
      totalGeneAmt: '1,500', 
      refNum: '00000215835', 
      transDateTime: 'Fri,08-Jun-2021 12:10:20', 
      status: 'Complete', 
      latitude: '16.8991', 
      longitude: '96.1995', 
    },
    {
      operator: 'All',
      telenorNum: '+95 09790887612',
      telenorPaidAmt: '50,000',
      telenorCashback: '250',
      mptNum: '+95 09420887612',
      mptPaidAmt: '150,000',
      mptCashback: '750',
      ooredooNum: '+95 09970887612',
      ooredooPaidAmt: '30,000',
      ooredooCashback: '150',
      mytelNum: '+95 09690887612',
      mytelPaidAmt: '20,000',
      mytelCashback: '100',
      mectelNum: '+95 09330887612',
      mectelPaidAmt: '50,000',
      mectelCashback: '250',
      companyName: 'CGM',
      divisionState: 'Yangon',
      district: 'Eastern',
      township: 'Botahtaung',
      cityTown: 'Yangon', 
      agentCode: 'OK$ 0000001', 
      branch: 'Botahtaung Branch', 
      okAccNum: '+95 094201932311', 
      cashbackOkAcc: '+95 094201932311', 
      okAccType: 'Merchant', 
      totalPaidAmt: '300,000', 
      totalGeneAmt: '1,500', 
      refNum: '00000215835', 
      transDateTime: 'Fri,08-Jun-2021 12:10:20', 
      status: 'Complete', 
      latitude: '16.8991', 
      longitude: '96.1995', 
    },
    {
      operator: 'All',
      telenorNum: '+95 09790887612',
      telenorPaidAmt: '50,000',
      telenorCashback: '250',
      mptNum: '+95 09420887612',
      mptPaidAmt: '150,000',
      mptCashback: '750',
      ooredooNum: '+95 09970887612',
      ooredooPaidAmt: '30,000',
      ooredooCashback: '150',
      mytelNum: '+95 09690887612',
      mytelPaidAmt: '20,000',
      mytelCashback: '100',
      mectelNum: '+95 09330887612',
      mectelPaidAmt: '50,000',
      mectelCashback: '250',
      companyName: 'CGM',
      divisionState: 'Yangon',
      district: 'Eastern',
      township: 'Botahtaung',
      cityTown: 'Yangon', 
      agentCode: 'OK$ 0000001', 
      branch: 'Botahtaung Branch', 
      okAccNum: '+95 094201932311', 
      cashbackOkAcc: '+95 094201932311', 
      okAccType: 'Merchant', 
      totalPaidAmt: '300,000', 
      totalGeneAmt: '1,500', 
      refNum: '00000215835', 
      transDateTime: 'Fri,08-Jun-2021 12:10:20', 
      status: 'Complete', 
      latitude: '16.8991', 
      longitude: '96.1995', 
    },
    {
      operator: 'All',
      telenorNum: '+95 09790887612',
      telenorPaidAmt: '50,000',
      telenorCashback: '250',
      mptNum: '+95 09420887612',
      mptPaidAmt: '150,000',
      mptCashback: '750',
      ooredooNum: '+95 09970887612',
      ooredooPaidAmt: '30,000',
      ooredooCashback: '150',
      mytelNum: '+95 09690887612',
      mytelPaidAmt: '20,000',
      mytelCashback: '100',
      mectelNum: '+95 09330887612',
      mectelPaidAmt: '50,000',
      mectelCashback: '250',
      companyName: 'CGM',
      divisionState: 'Yangon',
      district: 'Eastern',
      township: 'Botahtaung',
      cityTown: 'Yangon', 
      agentCode: 'OK$ 0000001', 
      branch: 'Botahtaung Branch', 
      okAccNum: '+95 094201932311', 
      cashbackOkAcc: '+95 094201932311', 
      okAccType: 'Merchant', 
      totalPaidAmt: '300,000', 
      totalGeneAmt: '1,500', 
      refNum: '00000215835', 
      transDateTime: 'Fri,08-Jun-2021 12:10:20', 
      status: 'Complete', 
      latitude: '16.8991', 
      longitude: '96.1995', 
    },
    {
      operator: 'All',
      telenorNum: '+95 09790887612',
      telenorPaidAmt: '50,000',
      telenorCashback: '250',
      mptNum: '+95 09420887612',
      mptPaidAmt: '150,000',
      mptCashback: '750',
      ooredooNum: '+95 09970887612',
      ooredooPaidAmt: '30,000',
      ooredooCashback: '150',
      mytelNum: '+95 09690887612',
      mytelPaidAmt: '20,000',
      mytelCashback: '100',
      mectelNum: '+95 09330887612',
      mectelPaidAmt: '50,000',
      mectelCashback: '250',
      companyName: 'CGM',
      divisionState: 'Yangon',
      district: 'Eastern',
      township: 'Botahtaung',
      cityTown: 'Yangon', 
      agentCode: 'OK$ 0000001', 
      branch: 'Botahtaung Branch', 
      okAccNum: '+95 094201932311', 
      cashbackOkAcc: '+95 094201932311', 
      okAccType: 'Merchant', 
      totalPaidAmt: '300,000', 
      totalGeneAmt: '1,500', 
      refNum: '00000215835', 
      transDateTime: 'Fri,08-Jun-2021 12:10:20', 
      status: 'Complete', 
      latitude: '16.8991', 
      longitude: '96.1995', 
    },
    {
      operator: 'All',
      telenorNum: '+95 09790887612',
      telenorPaidAmt: '50,000',
      telenorCashback: '250',
      mptNum: '+95 09420887612',
      mptPaidAmt: '150,000',
      mptCashback: '750',
      ooredooNum: '+95 09970887612',
      ooredooPaidAmt: '30,000',
      ooredooCashback: '150',
      mytelNum: '+95 09690887612',
      mytelPaidAmt: '20,000',
      mytelCashback: '100',
      mectelNum: '+95 09330887612',
      mectelPaidAmt: '50,000',
      mectelCashback: '250',
      companyName: 'CGM',
      divisionState: 'Yangon',
      district: 'Eastern',
      township: 'Botahtaung',
      cityTown: 'Yangon', 
      agentCode: 'OK$ 0000001', 
      branch: 'Botahtaung Branch', 
      okAccNum: '+95 094201932311', 
      cashbackOkAcc: '+95 094201932311', 
      okAccType: 'Merchant', 
      totalPaidAmt: '300,000', 
      totalGeneAmt: '1,500', 
      refNum: '00000215835', 
      transDateTime: 'Fri,08-Jun-2021 12:10:20', 
      status: 'Complete', 
      latitude: '16.8991', 
      longitude: '96.1995', 
    },
    {
      operator: 'All',
      telenorNum: '+95 09790887612',
      telenorPaidAmt: '50,000',
      telenorCashback: '250',
      mptNum: '+95 09420887612',
      mptPaidAmt: '150,000',
      mptCashback: '750',
      ooredooNum: '+95 09970887612',
      ooredooPaidAmt: '30,000',
      ooredooCashback: '150',
      mytelNum: '+95 09690887612',
      mytelPaidAmt: '20,000',
      mytelCashback: '100',
      mectelNum: '+95 09330887612',
      mectelPaidAmt: '50,000',
      mectelCashback: '250',
      companyName: 'CGM',
      divisionState: 'Yangon',
      district: 'Eastern',
      township: 'Botahtaung',
      cityTown: 'Yangon', 
      agentCode: 'OK$ 0000001', 
      branch: 'Botahtaung Branch', 
      okAccNum: '+95 094201932311', 
      cashbackOkAcc: '+95 094201932311', 
      okAccType: 'Merchant', 
      totalPaidAmt: '300,000', 
      totalGeneAmt: '1,500', 
      refNum: '00000215835', 
      transDateTime: 'Fri,08-Jun-2021 12:10:20', 
      status: 'Complete', 
      latitude: '16.8991', 
      longitude: '96.1995', 
    },
    ]
    actions = [
      {
        type: 'delete',
        icon: 'assets/images/delete.png'
        },
      {
        type: 'edit',
        icon: 'assets/images/edit.png'
      }

    ];

  constructor( public dialog : MatDialog ) { }

  ngOnInit(): void {
  }

  fetchDataEvent(event: any){

  }

  filterTable(){
    const dialogRef = this.dialog.open(OperatorWiseDetailReportFilterComponent, {
      width: '50vw',
      data: {}
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result){}
    });
  }

}

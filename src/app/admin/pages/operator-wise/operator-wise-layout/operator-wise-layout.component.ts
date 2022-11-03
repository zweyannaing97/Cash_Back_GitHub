import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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
      title: 'Cash Back Credit Telenor Wise',
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
      title: 'Cash Back Credit MPT Wise',
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
      title: 'Cash Back Credit Ooredoo Wise',
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
      title: 'Cash Back Credit Mytel Wise',
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
      title: 'Cash Back Credit Mec Tel Wise',
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
      width: '850px',
      data: {}
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result){}
    });
  }
  
  displayedColumns: string[] = ['refNum','cashbackOpWise','cashbackTelenorNo','telenorPaidAmt','telenorCashback','cashbackMPTNo','mptPaidAmt','mptCashback','cashbackOoredooNo','ooredooPaidAmt','ooredooCashback','cashbackMytelNo','mytelPaidAmt','mytelCashback','cashbackMectelNo','mectelPaidAmt','mectelCashback','companyName', 'divisionState', 'district','township','cityTown', 'agentCode', 'branch','okAccNum','cashbackOkAcc','okAccType','totalPaidAmt','totalGeneAmt','transDateTime','status','latitude','longitude'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  refNum: string;
  cashbackOpWise: string;
  cashbackTelenorNo: string;
  telenorPaidAmt: string;
  telenorCashback: string;
  cashbackMPTNo: string;
  mptPaidAmt: string;
  mptCashback: string;
  cashbackOoredooNo: string;
  ooredooPaidAmt: string;
  ooredooCashback: string;
  cashbackMytelNo: string;
  mytelPaidAmt: string;
  mytelCashback: string;
  cashbackMectelNo: string;
  mectelPaidAmt: string;
  mectelCashback: string;
  companyName: string;
  divisionState: string;
  district: string;
  township: string;
  cityTown: string;
  agentCode: string;
  branch: string;
  okAccNum: string;
  cashbackOkAcc: string;
  okAccType : string;
  totalPaidAmt : string;
  totalGeneAmt : string;
  transDateTime : string;
  status : string;
  latitude : string;
  longitude : string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {refNum: '0000023153',cashbackOpWise:'All',cashbackTelenorNo:'+95 099771328797',telenorPaidAmt:'50,000',telenorCashback: '250', cashbackMPTNo: '+95 094201234891', mptPaidAmt: '150,000', mptCashback: '750', cashbackOoredooNo: '+95 09972668789', ooredooPaidAmt: '30,000', ooredooCashback: '150', cashbackMytelNo: '+95 09691805523', mytelPaidAmt: '20,000', mytelCashback: '100', cashbackMectelNo: '+95 09308023238', mectelPaidAmt: '50,000', mectelCashback: '250', companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode: 'OK$ 0001', branch: 'Botahtaung Branch', okAccNum: '+95 09421808798', cashbackOkAcc: '+95 09421808798', okAccType : 'Merchant', totalPaidAmt : '300,000', totalGeneAmt : '1,500', transDateTime : 'Mon, 08-Jan-2021 09:10:20', status : 'Complete', latitude : '16.8991', longitude : '96.1992',},
  {refNum: '0000023153',cashbackOpWise:'All',cashbackTelenorNo:'+95 099771328797',telenorPaidAmt:'50,000',telenorCashback: '250', cashbackMPTNo: '+95 094201234891', mptPaidAmt: '150,000', mptCashback: '750', cashbackOoredooNo: '+95 09972668789', ooredooPaidAmt: '30,000', ooredooCashback: '150', cashbackMytelNo: '+95 09691805523', mytelPaidAmt: '20,000', mytelCashback: '100', cashbackMectelNo: '+95 09308023238', mectelPaidAmt: '50,000', mectelCashback: '250', companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode: 'OK$ 0001', branch: 'Botahtaung Branch', okAccNum: '+95 09421808798', cashbackOkAcc: '+95 09421808798', okAccType : 'Merchant', totalPaidAmt : '300,000', totalGeneAmt : '1,500', transDateTime : 'Mon, 08-Jan-2021 09:10:20', status : 'Complete', latitude : '16.8991', longitude : '96.1992',},

  {refNum: '0000023153',cashbackOpWise:'All',cashbackTelenorNo:'+95 099771328797',telenorPaidAmt:'50,000',telenorCashback: '250', cashbackMPTNo: '+95 094201234891', mptPaidAmt: '150,000', mptCashback: '750', cashbackOoredooNo: '+95 09972668789', ooredooPaidAmt: '30,000', ooredooCashback: '150', cashbackMytelNo: '+95 09691805523', mytelPaidAmt: '20,000', mytelCashback: '100', cashbackMectelNo: '+95 09308023238', mectelPaidAmt: '50,000', mectelCashback: '250', companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode: 'OK$ 0001', branch: 'Botahtaung Branch', okAccNum: '+95 09421808798', cashbackOkAcc: '+95 09421808798', okAccType : 'Merchant', totalPaidAmt : '300,000', totalGeneAmt : '1,500', transDateTime : 'Mon, 08-Jan-2021 09:10:20', status : 'Complete', latitude : '16.8991', longitude : '96.1992',},

  {refNum: '0000023153',cashbackOpWise:'All',cashbackTelenorNo:'+95 099771328797',telenorPaidAmt:'50,000',telenorCashback: '250', cashbackMPTNo: '+95 094201234891', mptPaidAmt: '150,000', mptCashback: '750', cashbackOoredooNo: '+95 09972668789', ooredooPaidAmt: '30,000', ooredooCashback: '150', cashbackMytelNo: '+95 09691805523', mytelPaidAmt: '20,000', mytelCashback: '100', cashbackMectelNo: '+95 09308023238', mectelPaidAmt: '50,000', mectelCashback: '250', companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode: 'OK$ 0001', branch: 'Botahtaung Branch', okAccNum: '+95 09421808798', cashbackOkAcc: '+95 09421808798', okAccType : 'Merchant', totalPaidAmt : '300,000', totalGeneAmt : '1,500', transDateTime : 'Mon, 08-Jan-2021 09:10:20', status : 'Complete', latitude : '16.8991', longitude : '96.1992',},

  {refNum: '0000023153',cashbackOpWise:'All',cashbackTelenorNo:'+95 099771328797',telenorPaidAmt:'50,000',telenorCashback: '250', cashbackMPTNo: '+95 094201234891', mptPaidAmt: '150,000', mptCashback: '750', cashbackOoredooNo: '+95 09972668789', ooredooPaidAmt: '30,000', ooredooCashback: '150', cashbackMytelNo: '+95 09691805523', mytelPaidAmt: '20,000', mytelCashback: '100', cashbackMectelNo: '+95 09308023238', mectelPaidAmt: '50,000', mectelCashback: '250', companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode: 'OK$ 0001', branch: 'Botahtaung Branch', okAccNum: '+95 09421808798', cashbackOkAcc: '+95 09421808798', okAccType : 'Merchant', totalPaidAmt : '300,000', totalGeneAmt : '1,500', transDateTime : 'Mon, 08-Jan-2021 09:10:20', status : 'Complete', latitude : '16.8991', longitude : '96.1992',},

  {refNum: '0000023153',cashbackOpWise:'All',cashbackTelenorNo:'+95 099771328797',telenorPaidAmt:'50,000',telenorCashback: '250', cashbackMPTNo: '+95 094201234891', mptPaidAmt: '150,000', mptCashback: '750', cashbackOoredooNo: '+95 09972668789', ooredooPaidAmt: '30,000', ooredooCashback: '150', cashbackMytelNo: '+95 09691805523', mytelPaidAmt: '20,000', mytelCashback: '100', cashbackMectelNo: '+95 09308023238', mectelPaidAmt: '50,000', mectelCashback: '250', companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode: 'OK$ 0001', branch: 'Botahtaung Branch', okAccNum: '+95 09421808798', cashbackOkAcc: '+95 09421808798', okAccType : 'Merchant', totalPaidAmt : '300,000', totalGeneAmt : '1,500', transDateTime : 'Mon, 08-Jan-2021 09:10:20', status : 'Complete', latitude : '16.8991', longitude : '96.1992',},

  {refNum: '0000023153',cashbackOpWise:'All',cashbackTelenorNo:'+95 099771328797',telenorPaidAmt:'50,000',telenorCashback: '250', cashbackMPTNo: '+95 094201234891', mptPaidAmt: '150,000', mptCashback: '750', cashbackOoredooNo: '+95 09972668789', ooredooPaidAmt: '30,000', ooredooCashback: '150', cashbackMytelNo: '+95 09691805523', mytelPaidAmt: '20,000', mytelCashback: '100', cashbackMectelNo: '+95 09308023238', mectelPaidAmt: '50,000', mectelCashback: '250', companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode: 'OK$ 0001', branch: 'Botahtaung Branch', okAccNum: '+95 09421808798', cashbackOkAcc: '+95 09421808798', okAccType : 'Merchant', totalPaidAmt : '300,000', totalGeneAmt : '1,500', transDateTime : 'Mon, 08-Jan-2021 09:10:20', status : 'Complete', latitude : '16.8991', longitude : '96.1992',},

  {refNum: '0000023153',cashbackOpWise:'All',cashbackTelenorNo:'+95 099771328797',telenorPaidAmt:'50,000',telenorCashback: '250', cashbackMPTNo: '+95 094201234891', mptPaidAmt: '150,000', mptCashback: '750', cashbackOoredooNo: '+95 09972668789', ooredooPaidAmt: '30,000', ooredooCashback: '150', cashbackMytelNo: '+95 09691805523', mytelPaidAmt: '20,000', mytelCashback: '100', cashbackMectelNo: '+95 09308023238', mectelPaidAmt: '50,000', mectelCashback: '250', companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode: 'OK$ 0001', branch: 'Botahtaung Branch', okAccNum: '+95 09421808798', cashbackOkAcc: '+95 09421808798', okAccType : 'Merchant', totalPaidAmt : '300,000', totalGeneAmt : '1,500', transDateTime : 'Mon, 08-Jan-2021 09:10:20', status : 'Complete', latitude : '16.8991', longitude : '96.1992',},

  {refNum: '0000023153',cashbackOpWise:'All',cashbackTelenorNo:'+95 099771328797',telenorPaidAmt:'50,000',telenorCashback: '250', cashbackMPTNo: '+95 094201234891', mptPaidAmt: '150,000', mptCashback: '750', cashbackOoredooNo: '+95 09972668789', ooredooPaidAmt: '30,000', ooredooCashback: '150', cashbackMytelNo: '+95 09691805523', mytelPaidAmt: '20,000', mytelCashback: '100', cashbackMectelNo: '+95 09308023238', mectelPaidAmt: '50,000', mectelCashback: '250', companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode: 'OK$ 0001', branch: 'Botahtaung Branch', okAccNum: '+95 09421808798', cashbackOkAcc: '+95 09421808798', okAccType : 'Merchant', totalPaidAmt : '300,000', totalGeneAmt : '1,500', transDateTime : 'Mon, 08-Jan-2021 09:10:20', status : 'Complete', latitude : '16.8991', longitude : '96.1992',},

  {refNum: '0000023153',cashbackOpWise:'All',cashbackTelenorNo:'+95 099771328797',telenorPaidAmt:'50,000',telenorCashback: '250', cashbackMPTNo: '+95 094201234891', mptPaidAmt: '150,000', mptCashback: '750', cashbackOoredooNo: '+95 09972668789', ooredooPaidAmt: '30,000', ooredooCashback: '150', cashbackMytelNo: '+95 09691805523', mytelPaidAmt: '20,000', mytelCashback: '100', cashbackMectelNo: '+95 09308023238', mectelPaidAmt: '50,000', mectelCashback: '250', companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode: 'OK$ 0001', branch: 'Botahtaung Branch', okAccNum: '+95 09421808798', cashbackOkAcc: '+95 09421808798', okAccType : 'Merchant', totalPaidAmt : '300,000', totalGeneAmt : '1,500', transDateTime : 'Mon, 08-Jan-2021 09:10:20', status : 'Complete', latitude : '16.8991', longitude : '96.1992',},

  {refNum: '0000023153',cashbackOpWise:'All',cashbackTelenorNo:'+95 099771328797',telenorPaidAmt:'50,000',telenorCashback: '250', cashbackMPTNo: '+95 094201234891', mptPaidAmt: '150,000', mptCashback: '750', cashbackOoredooNo: '+95 09972668789', ooredooPaidAmt: '30,000', ooredooCashback: '150', cashbackMytelNo: '+95 09691805523', mytelPaidAmt: '20,000', mytelCashback: '100', cashbackMectelNo: '+95 09308023238', mectelPaidAmt: '50,000', mectelCashback: '250', companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode: 'OK$ 0001', branch: 'Botahtaung Branch', okAccNum: '+95 09421808798', cashbackOkAcc: '+95 09421808798', okAccType : 'Merchant', totalPaidAmt : '300,000', totalGeneAmt : '1,500', transDateTime : 'Mon, 08-Jan-2021 09:10:20', status : 'Complete', latitude : '16.8991', longitude : '96.1992',},

  {refNum: '0000023153',cashbackOpWise:'All',cashbackTelenorNo:'+95 099771328797',telenorPaidAmt:'50,000',telenorCashback: '250', cashbackMPTNo: '+95 094201234891', mptPaidAmt: '150,000', mptCashback: '750', cashbackOoredooNo: '+95 09972668789', ooredooPaidAmt: '30,000', ooredooCashback: '150', cashbackMytelNo: '+95 09691805523', mytelPaidAmt: '20,000', mytelCashback: '100', cashbackMectelNo: '+95 09308023238', mectelPaidAmt: '50,000', mectelCashback: '250', companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode: 'OK$ 0001', branch: 'Botahtaung Branch', okAccNum: '+95 09421808798', cashbackOkAcc: '+95 09421808798', okAccType : 'Merchant', totalPaidAmt : '300,000', totalGeneAmt : '1,500', transDateTime : 'Mon, 08-Jan-2021 09:10:20', status : 'Complete', latitude : '16.8991', longitude : '96.1992',},

  {refNum: '0000023153',cashbackOpWise:'All',cashbackTelenorNo:'+95 099771328797',telenorPaidAmt:'50,000',telenorCashback: '250', cashbackMPTNo: '+95 094201234891', mptPaidAmt: '150,000', mptCashback: '750', cashbackOoredooNo: '+95 09972668789', ooredooPaidAmt: '30,000', ooredooCashback: '150', cashbackMytelNo: '+95 09691805523', mytelPaidAmt: '20,000', mytelCashback: '100', cashbackMectelNo: '+95 09308023238', mectelPaidAmt: '50,000', mectelCashback: '250', companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode: 'OK$ 0001', branch: 'Botahtaung Branch', okAccNum: '+95 09421808798', cashbackOkAcc: '+95 09421808798', okAccType : 'Merchant', totalPaidAmt : '300,000', totalGeneAmt : '1,500', transDateTime : 'Mon, 08-Jan-2021 09:10:20', status : 'Complete', latitude : '16.8991', longitude : '96.1992',},

  {refNum: '0000023153',cashbackOpWise:'All',cashbackTelenorNo:'+95 099771328797',telenorPaidAmt:'50,000',telenorCashback: '250', cashbackMPTNo: '+95 094201234891', mptPaidAmt: '150,000', mptCashback: '750', cashbackOoredooNo: '+95 09972668789', ooredooPaidAmt: '30,000', ooredooCashback: '150', cashbackMytelNo: '+95 09691805523', mytelPaidAmt: '20,000', mytelCashback: '100', cashbackMectelNo: '+95 09308023238', mectelPaidAmt: '50,000', mectelCashback: '250', companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode: 'OK$ 0001', branch: 'Botahtaung Branch', okAccNum: '+95 09421808798', cashbackOkAcc: '+95 09421808798', okAccType : 'Merchant', totalPaidAmt : '300,000', totalGeneAmt : '1,500', transDateTime : 'Mon, 08-Jan-2021 09:10:20', status : 'Complete', latitude : '16.8991', longitude : '96.1992',},
];
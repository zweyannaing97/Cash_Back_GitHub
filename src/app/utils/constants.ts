export const menuItems = [
    {
      displayName: 'Dashboard',
      route: '/admin/dashboard',
      iconName: 'assets/images/Dashboard.svg',
      children: []
    },
  {
    displayName: 'User Role Master',
    route: '',
    iconName: '../../../../assets/images/B Master.svg',
    children: [
      {
        displayName: 'Company',
        route: '/admin/CompanyListing',
        iconName: '../../../../assets/images/B Company.svg',
        children: [

        ]
      },
      {
        displayName: 'Department',
        route: '/admin/DepartmentListing',
        iconName: '../../../../assets/images/B Department.svg',
        children: []
      },
      {
        displayName: 'Designation',
        route: '/admin/DesignationListing',
        iconName: '../../../../assets/images/B Designation.svg',
        children: []
      },
    ]
  },
    {
      displayName: 'User Role Permission',
      route: '/admin/UserRolePermission',
      iconName: 'assets/images/user-role-permission.svg',
      children: []
    },
    {
      displayName: 'Company Configuration',
      route: '/admin/companyConfiguration',
      iconName: 'assets/images/company-configuration.svg',
      children: []
    },
    {
      displayName: 'Cash Back Configuration',
      route: '',
      iconName: 'assets/images/cash-back-configuration.svg',
      children: [
        {
          displayName: 'Bulk',
          route: '/admin/bulkCashBackConfiguration',
          iconName: 'assets/images/cash-back-bulk.svg',
          children: []
        },
        {
          displayName: 'Individual',
          route: '/admin/individualCashBackConfiguration',
          iconName: 'assets/images/cash-back-individual.svg',
          children: []
        },
      ]
    },

    {
      displayName: 'Remove Cash Back',
      route: '/admin/removeCashBack',
      iconName: 'assets/images/remove-cash-back.svg',
      children: []
    },
    {
      displayName: 'Report',
      route: '',
      iconName: 'assets/images/report.svg',
      children: [
        {
          displayName: 'Company Configuration Report',
          route: '/admin/companyConfigurationReport',
          iconName: 'assets/images/company-configuration-report.svg',
          children: []
        },
        {
          displayName: 'Cash Back Configuration Report',
          route: '',
          iconName: 'assets/images/cash-back-configuration-report.svg',
          children: [
            {
              displayName: 'Bulk',
              route: '/admin/bulkCashbackConfigurationReport',
              iconName: 'assets/images/cash-back-configuration-bulk.svg',
              children: []
            },
            {
              displayName: 'Individual',
              route: '/admin/individualCashbackConfigurationReport',
              iconName: 'assets/images/cash-back-configuration-individual.svg',
              children: []
            },
            {
              displayName: 'Fail Report',
              route: '/admin/failReportCashbackConfigurationReport',
              iconName: 'assets/images/cash-back-configuration-fail-report.svg',
              children: []
            },
          ]
        },

        {
          displayName: 'Cash Back Detail Report',
          route: '',
          iconName: 'assets/images/cash-back-detail-report.svg',
          children: [
            {
              displayName: 'Initiate OK$ Account No. Detail',
              route: '/admin/initiateOkAccountNumberDetail',
              iconName: 'assets/images/initiate-OK$-account-no-detail.svg',
              children: []
            },
            {
              displayName: 'Initiate OK$ Account No. Summary',
              route: '/admin/initiateOkAccountSummaryDetail',
              iconName: 'assets/images/initiate-OK$-account-no-summary.svg',
              children: []
            },
            {
              displayName: 'Company Wise',
              route: '/admin/companyWiseCashBackDetailReport',
              iconName: 'assets/images/company-wise.svg',
              children: []
            },
            {
              displayName: 'Operator Wise',
              route: '/admin/operatorWiseCashBackDetailReport',
              iconName: 'assets/images/operator-wise.svg',
              children: []
            },
          ]
        },

      ]
    },
    {
      displayName: 'Change Password',
      route: '/admin/changePassword',
      iconName: 'assets/images/change-password.svg',
      children: []
    },
    {
      displayName: 'Logout',
      route: 'logout',
      iconName: 'assets/images/logout.svg',
      children: []
    },
  ];


  export const actionString = 'Actions';
  export const customColumnsString = 'Custom Column';
  export const iconOnly = 'IconOnly';
  export const iconAndText = 'IconAndText';
  export const textOnly = 'textOnly';

  export const textInput = "text";
  export const selectInput = "select";
  export const autocomplete = "autocomplete";
  export const datePicker = "datePicker";

  export const categoryItems = [
    {
      name: 'Close',
      icon: 'assets/images/close.svg',
    },
    {
      name: 'All',
      icon: 'assets/images/all-icon.svg',
    },
    {
      name: 'Top Up',
      icon: 'assets/images/top-up.svg',
    },
    {
      name: 'Gift Cards',
      icon: 'assets/images/gift-card.svg',
    },
    {
      name: 'DTH',
      icon: 'assets/images/dth.svg',
    },
    {
      name: 'Electricity',
      icon: 'assets/images/electricity.svg',
    },
    {
      name: 'Post Paid',
      icon: 'assets/images/post-paid.svg',
    },
    {
      name: 'Over Seas Top Up',
      icon: 'assets/images/over-seas-top-up.svg',
    },

  ]

export enum monthNames {
  January = 'Jan',
  February = 'Feb',
  March = 'Mar',
  April = 'Apr',
  May = 'May',
  June = 'June',
  July = 'July',
  August = 'Aug',
  September = 'Sep',
  October = 'Oct',
  November = 'Nov',
  December = 'Dec',
}

// Login
export interface ICompanyBusinessUnit {
  company_business_unit: {
    business_unit: {
      name: string;
      id: number;
    };
    company: string;
  };
}

// General Audit -> Account Settings
// Website

export interface IWebsite {
  websiteData: {
    summary: IWebsiteSummary;
    seo: IWebsiteSeo;
    mobile_friendly: IMobileFriendlyItem[];
    pagespeed: IPagespeedItem[];
  };
  isDataLoaded: boolean;
}

export interface IWebsiteSummary {
  seo: {
    critical_issues: number;
    recommendations: number;
  };
  mobile_friendly: {
    user_friendly: number;
    not_user_friendly: number;
  };
  pagespeed: {
    critical_issues: number;
    recommendations: number;
  };
}

export interface IWebsiteSeo {
  pages_without_titles: any[];
  pages_without_descriptions: string[];
  pages_without_h1: string[];
  pages_with_h1_the_same: any[];
}

export interface IMobileFriendlyItem {
  page_url: string;
  page_issues: string[];
}

export interface IPagespeedItem {
  page: string;
  total_score: number;
  fcp_value: number;
  fcp_score: number;
  si_value: number;
  si_score: number;
  lcp_value: number;
  lcp_score: number;
  tti_value: number;
  tti_score: number;
  tbt_value: number;
  tbt_score: number;
  cls_value: number;
  cls_score: number;
}

//Pagespeed

export interface IPagespeedPageItem {
  URL: string;
  Desktop: number;
  Mobile: number;
  _3G: number;
  Page: string;
  Date: string;
}

export interface IPagespeed {
  pagespeedData: IPagespeedPageItem[];
  dataLoaded: boolean;
}

//Google Ads

export interface IGoogleAds {
  subMenuOpened: boolean;
  account_settings: IGoogleAdsAccountSettings;
  campaign_settings: IGoogleAdsCampaignSettings[];
  ads_search_network: IGoogleAdsSearchNetwork[];
  ads_display_network: IGoogleAdsDisplayNetwork[];
  keywords: {
    account_quality_score: IAccountQualityScore;
    campaign_quality_score_result: IGoogleAdsQualityScore[];
    match_type_result: IGoogleAdsMatchType[];
    negative_result: IGoogleAdsNegativeResult[];
    duplicated_result: any[];
  };
  extensions: IGoogleAdsExtensions[];
}

export interface IGoogleAdsAccountSettings {
  google_analytics: {
    value: string;
    tooltip: string;
    color: string;
  };
  conversions: {
    value: string;
    tooltip: string;
    color: string;
  };
}

export interface IGoogleAdsCampaignSettings {
  campaign_type: string;
  campaign: string;
  location: {
    value: string[] | string;
    color: string;
  };
  language: {
    value: string[] | string;
    color: string;
  };
  schedule: {
    value: string[] | string;
    color: string;
  };
  audiences: {
    value: string[] | string;
    color: string;
  };
}

export interface IGoogleAdsSearchNetwork {
  campaign: string;
  ad_groups_with_issues: ISearchNetworkAdsGroup[];
  ads_with_issues: IAds[];
}

export interface ISearchNetworkAdsGroup {
  ad_group: string;
  recommendation: string;
}

export interface IAds {
  ad_id: string;
  quantity: string;
  quality: string;
}

export interface IGoogleAdsDisplayNetwork {
  campaign: string;
  ads_with_issues: IAds[];
}

export interface IAccountQualityScore {
  green: string;
  orange: string;
  red: string;
  grey: string;
}

export interface IGoogleAdsQualityScore {
  campaign: string;
  quality_score: IAccountQualityScore;
}

export interface IGoogleAdsMatchType {
  campaign: string;
  broad: number;
  phrase: number;
  exact: number;
}

export interface IGoogleAdsNegativeResult {
  campaign: string;
  negative_keywords: string;
  conflicts: string[];
}

export interface IGoogleAdsExtensions {
  extension_type: string;
  quantity: number;
  quality?: IExtensionsQuality[];
}

export interface IExtensionsQuality {
  extension: string;
  quality: string;
}

//Google analytics
export interface IGoogleAnalytics {
  analyticsData: {
    google_ads: IGoogleAnalyticsItem;
    audiences: IGoogleAnalyticsItem;
    goals: IGoogleAnalyticsItem;
    events: IGoogleAnalyticsItem;
    tracking_issue: IGoogleAnalyticsItem;
    filters: IGoogleAnalyticsItem;
  };
}

export interface IGoogleAnalyticsItem {
  value: string;
  tooltip: string;
  color: string;
}

// Advertising Campaigns
// Settings
export interface IAdvertisingSettings {
  adv_campaings: IAdvertisingSettingsItem[];
  menuItemId: Array<number>;
  phases: any;
  campaignPageItem: any;
}

export interface IAdvertisingSettingsItem {
  id: number;
  name: string;
  start_date: string;
  end_date: string;
  budget: number;
  main_goal: string;
  target_audience: string;
  country: string;
  regions: string;
  languages: string;
  creative_agencies: string;
  media_agencies: string;
  business_unit_id: number;
}

// Performance
// Data Overview -> Quantity

export interface IPerformanceQuantity {
  quantitative_assessment: {
    columns: string[][];
    rows: string[][];
  };
}

// Data Overview -> Quality

export interface IPerformanceQuality {
  qualitative_assessment: {
    columns: string[][];
    rows: string[][];
  };
}

// Data Overview -> Summary

export interface IPerformanceSummary {
  summary_data: {
    data_quality_score: number;
    impressions: number;
    spending: number;
    summary: {
      columns: string[][];
      rows: string[][];
    };
  };
}

// Campaign Overview -> Spending

export interface IPerformanceSpending {
  spendingData: {
    spending_impressions_sessions: {
      impressions: number;
      sessions: number;
      CPM: number;
      CPS: number;
    };
    spending_breakdown_scale: string[][];
    spending_breakdown_table: {
      columns: string[][];
      rows: string[][];
    };
    spending_ratios_list: [];
    spending_overview: {
      columns: string[][];
      rows: string[][];
    };
  };
}

// Campaign Overview -> Ad Delivery

export interface IAdDelivery {
  adDeliveryData: {
    ads_delivery: [];
    ads_delivery_dates: [];
  };
  dataLoaded: boolean;
}

// Campaign Performance -> Display

export interface IPerformanceDisplay {
  displayData: {
    display_result: {
      [key: string]: number;
    };
    display_calculated_metrics: {
      CTR: string;
      CPC: string;
      CPS: string;
      lost_clicks: number;
      avg_session_duration: number;
      pages_session: number;
      bounce_rate: number;
    };
  };
}

// Campaign Performance -> Video

export interface IPerformanceVideo {
  videoData: {
    video: string[][] | number[][];
    video_calculated_metrics: {
      CTR: string;
      CPC: string;
      CPS: string;
      lost_clicks: number;
      avg_session_duration: number;
      pages_session: number;
      bounce_rate: number;
    };
  };
}

// Campaign Performance -> Email

export interface IPerformanceEmail {
  emailData: {
    email: string[][] | number[][];
    email_calculated_metrics: {
      CTR: string;
      CPC: string;
      CPS: string;
      lost_clicks: number;
      avg_session_duration: number;
      pages_session: number;
      bounce_rate: number;
    };
  };
}

// Campaign Performance -> Social

export interface IPerformanceSocial {
  socialData: {
    page_likes: number;
    post_shares: number;
    post_reactions: number;
    post_comments: number;
    post_engagement: number;
    sessions: number;
    avg_session_duration: number;
    pages_session: number;
    bounce_rate: number;
  };
}

// Campaign Performance -> Geo Demo

export interface IPerformanceGeoDemo {
  geoDemoData: {
    impressions: string[][] | number[][];
    sources_cities: {
      providers: string[];
      cities: string[];
      data: number[][];
    };
    sources_gender: any[];
  };
}

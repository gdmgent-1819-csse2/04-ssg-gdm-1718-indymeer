export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  facebook?: string;
  twitter?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
}

const config: WebsiteConfig = {
  title: 'CSSE2',
  description: 'Documentatie WEBGL',
  coverImage: 'img/blog-cover.jpg',
  logo: 'avatars/logo.jpg',
  lang: 'en',
  siteUrl: '',
  facebook: 'https://www.facebook.com/',
  twitter: 'https://twitter.com/',
  showSubscribe: false,
  mailchimpAction: '',
  mailchimpName: '',
};

export default config;

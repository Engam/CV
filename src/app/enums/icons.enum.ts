/**
 * @enum Icontype
 * @property {string} MATERIAL - Material icon
 * @property {string} SVG - SVG icon
 * @property {string} PNG - PNG icon
 * @property {string} PLACEHOLDER - Placeholder icon
 */
enum Icontype {
  MATERIAL = 'material',
  SVG = 'svg',
  PNG = 'png',
  PLACEHOLDER = 'placeholder'
}

/**
 * @interface Icon
 * @property {string} path - path to icon
 * @property {string} alt - alt text for icon
 * @property {string} title - title text for icon
 * @property {Icontype} type - type of icon
*/
export interface Icon {
  path: string;
  alt: string;
  title: string;
  type: Icontype
}

export class Icons {
  public static readonly PlaceholderIcon:Icon = {
    path: '/src/assets/icons/placeholder.png',
    alt: 'Placeholder-icon',
    title: 'Placeholder',
    type: Icontype.PLACEHOLDER
  }
  private static GitHub:Icon = {
    path: '/src/assets/github-mark/github-mark.svg',
    alt: 'Github-icon',
    title: 'Github',
    type: Icontype.SVG
  }
  private static Phone:Icon = {
    path: '/src/assets/icons/phone.svg',
    alt: 'Phone-icon',
    title: 'Phone',
    type: Icontype.SVG
  }
  private static Email:Icon = {
    path: '/src/assets/icons/email.svg',
    alt: 'Email-icon',
    title: 'Email',
    type: Icontype.SVG
  }

  static readonly GITHUB = new Icons(this.GitHub);
  static readonly PHONE = new Icons(this.Phone);
  static readonly EMAIL = new Icons(this.Email);


  private constructor(private icon:Icon) {}

  /** 
   * @returns {string} path to icon
   */
  get path():string {
    return this.icon.path;
  }

  /** 
   * @returns {string} alt text for icon
   */
  get alt():string {
    return this.icon.alt;
  }

  /** 
   * @returns {string} title text for icon
   */
  get title():string {
    return this.icon.title;
  }

  /**
   * @returns {Icontype} type of icon
   * @see Icontype
   * @see Icon
   * @see Icons
   * @see GitHub
   * @see Phone
   * @see Email
   * @see path
   * @see alt
   * @see title
   * @see toString
   * @see Icons
   */
  get type():Icontype {
    return this.icon.type;
  }

  /**
   * @returns {string} path to icon
   * @see path
   * @see alt
   * @see title
   * @see type
   * @see Icons
   */
  toString():string {
    return this.path;
  }

}
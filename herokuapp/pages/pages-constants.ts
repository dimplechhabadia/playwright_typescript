import PageData from "../../framework/page-data";

export default class PageDataConstants {
    constructor(private baseUrl: string) {
        this.baseUrl = baseUrl.endsWith('/') ? baseUrl.slice(baseUrl.length - 1) : baseUrl;

        this.mainPage = new PageData(this.baseUrl + '/', 'Main Page');
        this.abTestingPage = new PageData(`${this.baseUrl}/abtest`, 'A/B Testing');
        this.addRemoveElementsPage = new PageData(this.baseUrl + '/add_remove_elements/', 'Add/Remove Elements');
        this.basicAuthPage = new PageData(this.baseUrl + '/basic_auth', 'Basic Auth');
        this.brokenImagesPage = new PageData(this.baseUrl + '/broken_images', 'Broken Images');
        this.challengingDomPage = new PageData(this.baseUrl + '/challenging_dom', 'Challenging DOM');
        this.checkboxesPage = new PageData(this.baseUrl + '/checkboxes', 'Checkboxes');
        this.contextMenuPage = new PageData(this.baseUrl + '/context_menu', 'Context Menu');
        this.digestAuthPage = new PageData(this.baseUrl + '/digest_auth', 'Digest Authentication');
        this.disappearingElementsPage = new PageData(this.baseUrl + '/disappearing_elements', 'Disappearing Elements');
        this.dragAndDropPage = new PageData(this.baseUrl + '/drag_and_drop', 'Drag and Drop');
        this.dropdownPage = new PageData(this.baseUrl + '/dropdown', 'Dropdown');
        this.dynamicContentPage = new PageData(this.baseUrl + '/dynamic_content', 'Dynamic Content');
        this.dynamicControlsPage = new PageData(this.baseUrl + '/dynamic_controls', 'Dynamic Controls');
        this.dynamicLoadingPage = new PageData(this.baseUrl + '/dynamic_loading', 'Dynamic Loading');
        this.entryAdPage = new PageData(this.baseUrl + '/entry_ad', 'Entry Ad');
        this.exitIntentPage = new PageData(this.baseUrl + '/exit_intent', 'Exit Intent');
        this.fileDownloadPage = new PageData(this.baseUrl + '/download', 'File Download');
        this.fileUploadPage = new PageData(this.baseUrl + '/upload', 'File Upload');
        this.floatingMenuPage = new PageData(this.baseUrl + '/floating_menu', 'Floating Menu');
        this.forgotPasswordPage = new PageData(this.baseUrl + '/forgot_password', 'Forgot Password');
        this.loginPage = new PageData(this.baseUrl + '/login', 'Login Page');
        this.framesPage = new PageData(this.baseUrl + '/frames', 'Frames');
        this.geolocationPage = new PageData(this.baseUrl + '/geolocation', 'Geolocation');
        this.horizontalSliderPage = new PageData(this.baseUrl + '/horizontal_slider', 'Horizontal Slider');
        this.hoversPage = new PageData(this.baseUrl + '/hovers', 'Hovers');
        this.infiniteScrollPage = new PageData(this.baseUrl + '/infinite_scroll', 'Infinite Scroll');
        this.inputsPage = new PageData(this.baseUrl + '/inputs', 'Inputs');
        this.jqueryUiMenuPage = new PageData(this.baseUrl + '/jqueryui/menu', 'JQuery UI Menus');
        this.javaScriptAlertsPage = new PageData(this.baseUrl + '/javascript_alerts', 'JavaScript Alerts');
        this.javaScriptErrorPage = new PageData(this.baseUrl + '/javascript_error', 'JavaScript onload event error');
        this.keyPressesPage = new PageData(this.baseUrl + '/key_presses', 'Key Presses');
        this.largeAndDeepDomPage = new PageData(this.baseUrl + '/large', 'Large & Deep DOM');
        this.multipleWindowsPage = new PageData(this.baseUrl + '/windows', 'Multiple Windows');
        this.nestedFramesPage = new PageData(this.baseUrl + '/nested_frames', 'Nested Frames');
        this.notificationMessagesPage = new PageData(this.baseUrl + '/notification_message', 'Notification Messages');
        this.redirectLinkPage = new PageData(this.baseUrl + '/redirector', 'Redirect Link');
        this.secureFileDownloadPage = new PageData(this.baseUrl + '/download_secure', 'Secure File Download');
        this.shadowDomPage = new PageData(this.baseUrl + '/shadowdom', 'Shadow DOM');
        this.shiftingContentPage = new PageData(this.baseUrl + '/shifting_content', 'Shifting Content');
        this.slowResourcesPage = new PageData(this.baseUrl + '/slow', 'Slow Resources');
        this.sortableDataTablesPage = new PageData(this.baseUrl + '/tables', 'Sortable Data Tables');
        this.statusCodesPage = new PageData(this.baseUrl + '/status_codes', 'Status Codes');
        this.typosPage = new PageData(this.baseUrl + '/typos', 'Typos');
        this.wysiwygEditorPage = new PageData(this.baseUrl + '/tinymce', 'WYSIWYG Editor');
    }

    readonly mainPage: PageData;
    readonly abTestingPage: PageData;
    readonly addRemoveElementsPage: PageData;
    readonly basicAuthPage: PageData;
    readonly brokenImagesPage: PageData;
    readonly challengingDomPage: PageData;
    readonly checkboxesPage: PageData;
    readonly contextMenuPage: PageData;
    readonly digestAuthPage: PageData;
    readonly disappearingElementsPage: PageData;
    readonly dragAndDropPage: PageData;
    readonly dropdownPage: PageData;
    readonly dynamicContentPage: PageData;
    readonly dynamicControlsPage: PageData;
    readonly dynamicLoadingPage: PageData;
    readonly entryAdPage: PageData;
    readonly exitIntentPage: PageData;
    readonly fileDownloadPage: PageData;
    readonly fileUploadPage: PageData;
    readonly floatingMenuPage: PageData;
    readonly forgotPasswordPage: PageData;
    readonly loginPage: PageData;
    readonly framesPage: PageData;
    readonly geolocationPage: PageData;
    readonly horizontalSliderPage: PageData;
    readonly hoversPage: PageData;
    readonly infiniteScrollPage: PageData;
    readonly inputsPage: PageData;
    readonly jqueryUiMenuPage: PageData;
    readonly javaScriptAlertsPage: PageData;
    readonly javaScriptErrorPage: PageData;
    readonly keyPressesPage: PageData;
    readonly largeAndDeepDomPage: PageData;
    readonly multipleWindowsPage: PageData;
    readonly nestedFramesPage: PageData;
    readonly notificationMessagesPage: PageData;
    readonly redirectLinkPage: PageData;
    readonly secureFileDownloadPage: PageData;
    readonly shadowDomPage: PageData;
    readonly shiftingContentPage: PageData;
    readonly slowResourcesPage: PageData;
    readonly sortableDataTablesPage: PageData;
    readonly statusCodesPage: PageData;
    readonly typosPage: PageData;
    readonly wysiwygEditorPage: PageData;
}
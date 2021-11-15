	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	
bookConfig.loadingCaptionFontSize="20";
bookConfig.loadingCaptionColor="#DDDDDD";
bookConfig.loadingBackground="#323232";
bookConfig.loadingPictureHeight="150";
bookConfig.showLoadingGif="Yes";
bookConfig.loadingDisplayTime="0";
bookConfig.appLogoIcon="./files/mobile-ext/appLogoIcon.png";
bookConfig.appLogoOpenWindow="Blank";
bookConfig.logoHeight="40";
bookConfig.logoPadding="0";
bookConfig.logoTop="0";
bookConfig.toolbarColor="#F7F3E4";
bookConfig.iconColor="#3C241B";
bookConfig.pageNumColor="#51372C";
bookConfig.iconFontColor="#51392C";
bookConfig.toolbarAlwaysShow="No";
bookConfig.ToolBarVisible="Yes";
bookConfig.formFontColor="#F7F3E4";
bookConfig.formBackgroundColor="#DC3917";
bookConfig.ToolBarAlpha="1";
bookConfig.CurlingPageCorner="True";
bookConfig.showBookInstructionOnStart="false";
bookConfig.InstructionsButtonVisible="Show";
bookConfig.showInstructionOnStart="No";
bookConfig.showGotoButtonsAtFirst="No";
bookConfig.QRCode="Hide";
bookConfig.HomeButtonVisible="Hide";
bookConfig.enablePageBack="Show";
bookConfig.ShareButtonVisible="Show";
shareObj = [];
bookConfig.addCurrentPage="No";
bookConfig.EmailButtonVisible="Show";
bookConfig.btnShareWithEmailBody="\{link\}";
bookConfig.ThumbnailsButtonVisible="Show";
bookConfig.thumbnailColor="#333333";
bookConfig.thumbnailAlpha="70";
bookConfig.ThumbnailSize="small";
bookConfig.BookMarkButtonVisible="Hide";
bookConfig.TableOfContentButtonVisible="Show";
bookConfig.isHideTabelOfContentNodes="No";
bookConfig.SearchButtonVisible="Hide";
bookConfig.leastSearchChar="3";
bookConfig.searchKeywordFontColor="#FFB000";
bookConfig.searchHightlightColor="#FFFF00";
bookConfig.SelectTextButtonVisible="Disable";
bookConfig.PrintButtonVisible="Yes";
bookConfig.BackgroundSoundButtonVisible="Enable";
bookConfig.FlipSound="YES";
bookConfig.BackgroundSoundLoop="-1";
bookConfig.bgSoundVol="50";
bookConfig.AutoPlayButtonVisible="Yes";
bookConfig.autoPlayAutoStart="No";
bookConfig.autoPlayDuration="9";
bookConfig.autoPlayLoopCount="1";
bookConfig.ZoomButtonVisible="Yes";
bookConfig.maxZoomWidth="1400";
bookConfig.defaultZoomWidth="1000";
bookConfig.mouseWheelFlip="Yes";
bookConfig.ZoomMapVisible="Hide";
bookConfig.DownloadButtonVisible="Hide";
bookConfig.PhoneButtonVisible="Hide";
bookConfig.AnnotationButtonVisible="Disable";
bookConfig.FullscreenButtonVisible="Show";
bookConfig.MagnifierButtonVisible="Hide";
bookConfig.bgBeginColor="#6C5042";
bookConfig.bgEndColor="#57392B";
bookConfig.bgMRotation="-90";
bookConfig.backgroundPosition="tile";
bookConfig.backgroundOpacity="100";
bookConfig.backgroundScene="None";
bookConfig.LeftShadowWidth="90";
bookConfig.LeftShadowAlpha="0.6";
bookConfig.RightShadowWidth="55";
bookConfig.RightShadowAlpha="0.6";
bookConfig.ShowTopLeftShadow="Yes";
bookConfig.pageHighlightType="magazine";
bookConfig.HardPageEnable="No";
bookConfig.hardCoverBorderWidth="8";
bookConfig.borderColor="#572F0D";
bookConfig.outerCoverBorder="Yes";
bookConfig.cornerRound="8";
bookConfig.leftMarginOnMobile="0";
bookConfig.topMarginOnMobile="0";
bookConfig.rightMarginOnMobile="0";
bookConfig.bottomMarginOnMobile="0";
bookConfig.pageBackgroundColor="#E8E8E8";
bookConfig.flipshortcutbutton="Show";
bookConfig.phoneFlipShortcutButton="Hide";
bookConfig.BindingType="side";
bookConfig.RightToLeft="No";
bookConfig.FlipDirection="0";
bookConfig.flippingTime="0.6";
bookConfig.retainBookCenter="Yes";
bookConfig.FlipStyle="Flip";
bookConfig.autoDoublePage="Yes";
bookConfig.isTheBookOpen="No";
bookConfig.DoubleSinglePageButtonVisible="hide";
bookConfig.thicknessWidthType="Thinner";
bookConfig.thicknessColor="#FFFFFF";
bookConfig.SingleModeBanFlipToLastPage="No";
bookConfig.showThicknessOnMobile="No";
bookConfig.isSingleBookFullWindowOnMobile="no";
bookConfig.isStopMouseMenu="yes";
bookConfig.restorePageVisible="No";
bookConfig.topMargin="10";
bookConfig.bottomMargin="10";
bookConfig.leftMargin="10";
bookConfig.rightMargin="10";
bookConfig.hideMiniFullscreen="true";
bookConfig.maxWidthToSmallMode="400";
bookConfig.maxHeightToSmallMode="300";
bookConfig.leftRightPnlShowOption="None";
bookConfig.highDefinitionConversion="yes";
bookConfig.LargeLogoPosition="top-left";
bookConfig.LargeLogoTarget="Blank";
bookConfig.isFixLogoSize="No";
bookConfig.logoFixWidth="0";
bookConfig.logoFixHeight="0";
bookConfig.SupportOperatePageZoom="Yes";
bookConfig.showHelpContentAtFirst="No";
bookConfig.updateURLForPage="No";
bookConfig.passwordTips="Please contact the <a href='mailto:author@sample.com'><u>author</u></a> to access the web";
bookConfig.OnlyOpenInIframe="No";
bookConfig.OnlyOpenInIframeInfo="No reading rights";
bookConfig.OpenWindow="Blank";
bookConfig.showLinkHint="No";

bookConfig.macBookVersion = "AFSaltPDdaskKKZTunLHfTlvDMcbspFFTapmEKRXjqDHTXijIGcZvjIPYSujKOcWvnANWXjkCNSWvnIIYTglHGSSruFHefpuPARchnKOQdntOFZavr85381b79_";
bookConfig.Html5Template = "Metro";
bookConfig.UIBaseURL="mobile/";
bookConfig.isFlipPdf=false;
bookConfig.searchTextJS="mobile/javascript/search_config.js";
bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";
bookConfig.totalPageCount=206;
bookConfig.largePageWidth=603;
bookConfig.largePageHeight=871;
bookConfig.bookTitle="ΕΠΕΤΗΡΙΔΑ 2020-21";
bookConfig.normalPath="./files/mobile/";
bookConfig.largePath="./files/mobile/";
bookConfig.productName="Flip PDF";
bookConfig.useTheAliCloudChart=false;
bookConfig.MidBgColor="#5afd1d";
bookConfig.bookmarkCR = "23770dc62587575efc50ca5fa2e30b5a3e14736a";
;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};
bookConfig.thumbPath="./files/thumb/";
var fliphtml5_pages=[{"l":"./files/mobile/1.png","n":"./files/mobile/1.png","t":"./files/thumb/1.png"},{"l":"./files/mobile/2.png","n":"./files/mobile/2.png","t":"./files/thumb/2.png"},{"l":"./files/mobile/3.png","n":"./files/mobile/3.png","t":"./files/thumb/3.png"},{"l":"./files/mobile/4.png","n":"./files/mobile/4.png","t":"./files/thumb/4.png"},{"l":"./files/mobile/5.png","n":"./files/mobile/5.png","t":"./files/thumb/5.png"},{"l":"./files/mobile/6.png","n":"./files/mobile/6.png","t":"./files/thumb/6.png"},{"l":"./files/mobile/7.png","n":"./files/mobile/7.png","t":"./files/thumb/7.png"},{"l":"./files/mobile/8.png","n":"./files/mobile/8.png","t":"./files/thumb/8.png"},{"l":"./files/mobile/9.png","n":"./files/mobile/9.png","t":"./files/thumb/9.png"},{"l":"./files/mobile/10.png","n":"./files/mobile/10.png","t":"./files/thumb/10.png"},{"l":"./files/mobile/11.png","n":"./files/mobile/11.png","t":"./files/thumb/11.png"},{"l":"./files/mobile/12.png","n":"./files/mobile/12.png","t":"./files/thumb/12.png"},{"l":"./files/mobile/13.png","n":"./files/mobile/13.png","t":"./files/thumb/13.png"},{"l":"./files/mobile/14.png","n":"./files/mobile/14.png","t":"./files/thumb/14.png"},{"l":"./files/mobile/15.png","n":"./files/mobile/15.png","t":"./files/thumb/15.png"},{"l":"./files/mobile/16.png","n":"./files/mobile/16.png","t":"./files/thumb/16.png"},{"l":"./files/mobile/17.png","n":"./files/mobile/17.png","t":"./files/thumb/17.png"},{"l":"./files/mobile/18.png","n":"./files/mobile/18.png","t":"./files/thumb/18.png"},{"l":"./files/mobile/19.png","n":"./files/mobile/19.png","t":"./files/thumb/19.png"},{"l":"./files/mobile/20.png","n":"./files/mobile/20.png","t":"./files/thumb/20.png"},{"l":"./files/mobile/21.png","n":"./files/mobile/21.png","t":"./files/thumb/21.png"},{"l":"./files/mobile/22.png","n":"./files/mobile/22.png","t":"./files/thumb/22.png"},{"l":"./files/mobile/23.png","n":"./files/mobile/23.png","t":"./files/thumb/23.png"},{"l":"./files/mobile/24.png","n":"./files/mobile/24.png","t":"./files/thumb/24.png"},{"l":"./files/mobile/25.png","n":"./files/mobile/25.png","t":"./files/thumb/25.png"},{"l":"./files/mobile/26.png","n":"./files/mobile/26.png","t":"./files/thumb/26.png"},{"l":"./files/mobile/27.png","n":"./files/mobile/27.png","t":"./files/thumb/27.png"},{"l":"./files/mobile/28.png","n":"./files/mobile/28.png","t":"./files/thumb/28.png"},{"l":"./files/mobile/29.png","n":"./files/mobile/29.png","t":"./files/thumb/29.png"},{"l":"./files/mobile/30.png","n":"./files/mobile/30.png","t":"./files/thumb/30.png"},{"l":"./files/mobile/31.png","n":"./files/mobile/31.png","t":"./files/thumb/31.png"},{"l":"./files/mobile/32.png","n":"./files/mobile/32.png","t":"./files/thumb/32.png"},{"l":"./files/mobile/33.png","n":"./files/mobile/33.png","t":"./files/thumb/33.png"},{"l":"./files/mobile/34.png","n":"./files/mobile/34.png","t":"./files/thumb/34.png"},{"l":"./files/mobile/35.png","n":"./files/mobile/35.png","t":"./files/thumb/35.png"},{"l":"./files/mobile/36.png","n":"./files/mobile/36.png","t":"./files/thumb/36.png"},{"l":"./files/mobile/37.png","n":"./files/mobile/37.png","t":"./files/thumb/37.png"},{"l":"./files/mobile/38.png","n":"./files/mobile/38.png","t":"./files/thumb/38.png"},{"l":"./files/mobile/39.png","n":"./files/mobile/39.png","t":"./files/thumb/39.png"},{"l":"./files/mobile/40.png","n":"./files/mobile/40.png","t":"./files/thumb/40.png"},{"l":"./files/mobile/41.png","n":"./files/mobile/41.png","t":"./files/thumb/41.png"},{"l":"./files/mobile/42.png","n":"./files/mobile/42.png","t":"./files/thumb/42.png"},{"l":"./files/mobile/43.png","n":"./files/mobile/43.png","t":"./files/thumb/43.png"},{"l":"./files/mobile/44.png","n":"./files/mobile/44.png","t":"./files/thumb/44.png"},{"l":"./files/mobile/45.png","n":"./files/mobile/45.png","t":"./files/thumb/45.png"},{"l":"./files/mobile/46.png","n":"./files/mobile/46.png","t":"./files/thumb/46.png"},{"l":"./files/mobile/47.png","n":"./files/mobile/47.png","t":"./files/thumb/47.png"},{"l":"./files/mobile/48.png","n":"./files/mobile/48.png","t":"./files/thumb/48.png"},{"l":"./files/mobile/49.png","n":"./files/mobile/49.png","t":"./files/thumb/49.png"},{"l":"./files/mobile/50.png","n":"./files/mobile/50.png","t":"./files/thumb/50.png"},{"l":"./files/mobile/51.png","n":"./files/mobile/51.png","t":"./files/thumb/51.png"},{"l":"./files/mobile/52.png","n":"./files/mobile/52.png","t":"./files/thumb/52.png"},{"l":"./files/mobile/53.png","n":"./files/mobile/53.png","t":"./files/thumb/53.png"},{"l":"./files/mobile/54.png","n":"./files/mobile/54.png","t":"./files/thumb/54.png"},{"l":"./files/mobile/55.png","n":"./files/mobile/55.png","t":"./files/thumb/55.png"},{"l":"./files/mobile/56.png","n":"./files/mobile/56.png","t":"./files/thumb/56.png"},{"l":"./files/mobile/57.png","n":"./files/mobile/57.png","t":"./files/thumb/57.png"},{"l":"./files/mobile/58.png","n":"./files/mobile/58.png","t":"./files/thumb/58.png"},{"l":"./files/mobile/59.png","n":"./files/mobile/59.png","t":"./files/thumb/59.png"},{"l":"./files/mobile/60.png","n":"./files/mobile/60.png","t":"./files/thumb/60.png"},{"l":"./files/mobile/61.png","n":"./files/mobile/61.png","t":"./files/thumb/61.png"},{"l":"./files/mobile/62.png","n":"./files/mobile/62.png","t":"./files/thumb/62.png"},{"l":"./files/mobile/63.png","n":"./files/mobile/63.png","t":"./files/thumb/63.png"},{"l":"./files/mobile/64.png","n":"./files/mobile/64.png","t":"./files/thumb/64.png"},{"l":"./files/mobile/65.png","n":"./files/mobile/65.png","t":"./files/thumb/65.png"},{"l":"./files/mobile/66.png","n":"./files/mobile/66.png","t":"./files/thumb/66.png"},{"l":"./files/mobile/67.png","n":"./files/mobile/67.png","t":"./files/thumb/67.png"},{"l":"./files/mobile/68.png","n":"./files/mobile/68.png","t":"./files/thumb/68.png"},{"l":"./files/mobile/69.png","n":"./files/mobile/69.png","t":"./files/thumb/69.png"},{"l":"./files/mobile/70.png","n":"./files/mobile/70.png","t":"./files/thumb/70.png"},{"l":"./files/mobile/71.png","n":"./files/mobile/71.png","t":"./files/thumb/71.png"},{"l":"./files/mobile/72.png","n":"./files/mobile/72.png","t":"./files/thumb/72.png"},{"l":"./files/mobile/73.png","n":"./files/mobile/73.png","t":"./files/thumb/73.png"},{"l":"./files/mobile/74.png","n":"./files/mobile/74.png","t":"./files/thumb/74.png"},{"l":"./files/mobile/75.png","n":"./files/mobile/75.png","t":"./files/thumb/75.png"},{"l":"./files/mobile/76.png","n":"./files/mobile/76.png","t":"./files/thumb/76.png"},{"l":"./files/mobile/77.png","n":"./files/mobile/77.png","t":"./files/thumb/77.png"},{"l":"./files/mobile/78.png","n":"./files/mobile/78.png","t":"./files/thumb/78.png"},{"l":"./files/mobile/79.png","n":"./files/mobile/79.png","t":"./files/thumb/79.png"},{"l":"./files/mobile/80.png","n":"./files/mobile/80.png","t":"./files/thumb/80.png"},{"l":"./files/mobile/81.png","n":"./files/mobile/81.png","t":"./files/thumb/81.png"},{"l":"./files/mobile/82.png","n":"./files/mobile/82.png","t":"./files/thumb/82.png"},{"l":"./files/mobile/83.png","n":"./files/mobile/83.png","t":"./files/thumb/83.png"},{"l":"./files/mobile/84.png","n":"./files/mobile/84.png","t":"./files/thumb/84.png"},{"l":"./files/mobile/85.png","n":"./files/mobile/85.png","t":"./files/thumb/85.png"},{"l":"./files/mobile/86.png","n":"./files/mobile/86.png","t":"./files/thumb/86.png"},{"l":"./files/mobile/87.png","n":"./files/mobile/87.png","t":"./files/thumb/87.png"},{"l":"./files/mobile/88.png","n":"./files/mobile/88.png","t":"./files/thumb/88.png"},{"l":"./files/mobile/89.png","n":"./files/mobile/89.png","t":"./files/thumb/89.png"},{"l":"./files/mobile/90.png","n":"./files/mobile/90.png","t":"./files/thumb/90.png"},{"l":"./files/mobile/91.png","n":"./files/mobile/91.png","t":"./files/thumb/91.png"},{"l":"./files/mobile/92.png","n":"./files/mobile/92.png","t":"./files/thumb/92.png"},{"l":"./files/mobile/93.png","n":"./files/mobile/93.png","t":"./files/thumb/93.png"},{"l":"./files/mobile/94.png","n":"./files/mobile/94.png","t":"./files/thumb/94.png"},{"l":"./files/mobile/95.png","n":"./files/mobile/95.png","t":"./files/thumb/95.png"},{"l":"./files/mobile/96.png","n":"./files/mobile/96.png","t":"./files/thumb/96.png"},{"l":"./files/mobile/97.png","n":"./files/mobile/97.png","t":"./files/thumb/97.png"},{"l":"./files/mobile/98.png","n":"./files/mobile/98.png","t":"./files/thumb/98.png"},{"l":"./files/mobile/99.png","n":"./files/mobile/99.png","t":"./files/thumb/99.png"},{"l":"./files/mobile/100.png","n":"./files/mobile/100.png","t":"./files/thumb/100.png"},{"l":"./files/mobile/101.png","n":"./files/mobile/101.png","t":"./files/thumb/101.png"},{"l":"./files/mobile/102.png","n":"./files/mobile/102.png","t":"./files/thumb/102.png"},{"l":"./files/mobile/103.png","n":"./files/mobile/103.png","t":"./files/thumb/103.png"},{"l":"./files/mobile/104.png","n":"./files/mobile/104.png","t":"./files/thumb/104.png"},{"l":"./files/mobile/105.png","n":"./files/mobile/105.png","t":"./files/thumb/105.png"},{"l":"./files/mobile/106.png","n":"./files/mobile/106.png","t":"./files/thumb/106.png"},{"l":"./files/mobile/107.png","n":"./files/mobile/107.png","t":"./files/thumb/107.png"},{"l":"./files/mobile/108.png","n":"./files/mobile/108.png","t":"./files/thumb/108.png"},{"l":"./files/mobile/109.png","n":"./files/mobile/109.png","t":"./files/thumb/109.png"},{"l":"./files/mobile/110.png","n":"./files/mobile/110.png","t":"./files/thumb/110.png"},{"l":"./files/mobile/111.png","n":"./files/mobile/111.png","t":"./files/thumb/111.png"},{"l":"./files/mobile/112.png","n":"./files/mobile/112.png","t":"./files/thumb/112.png"},{"l":"./files/mobile/113.png","n":"./files/mobile/113.png","t":"./files/thumb/113.png"},{"l":"./files/mobile/114.png","n":"./files/mobile/114.png","t":"./files/thumb/114.png"},{"l":"./files/mobile/115.png","n":"./files/mobile/115.png","t":"./files/thumb/115.png"},{"l":"./files/mobile/116.png","n":"./files/mobile/116.png","t":"./files/thumb/116.png"},{"l":"./files/mobile/117.png","n":"./files/mobile/117.png","t":"./files/thumb/117.png"},{"l":"./files/mobile/118.png","n":"./files/mobile/118.png","t":"./files/thumb/118.png"},{"l":"./files/mobile/119.png","n":"./files/mobile/119.png","t":"./files/thumb/119.png"},{"l":"./files/mobile/120.png","n":"./files/mobile/120.png","t":"./files/thumb/120.png"},{"l":"./files/mobile/121.png","n":"./files/mobile/121.png","t":"./files/thumb/121.png"},{"l":"./files/mobile/122.png","n":"./files/mobile/122.png","t":"./files/thumb/122.png"},{"l":"./files/mobile/123.png","n":"./files/mobile/123.png","t":"./files/thumb/123.png"},{"l":"./files/mobile/124.png","n":"./files/mobile/124.png","t":"./files/thumb/124.png"},{"l":"./files/mobile/125.png","n":"./files/mobile/125.png","t":"./files/thumb/125.png"},{"l":"./files/mobile/126.png","n":"./files/mobile/126.png","t":"./files/thumb/126.png"},{"l":"./files/mobile/127.png","n":"./files/mobile/127.png","t":"./files/thumb/127.png"},{"l":"./files/mobile/128.png","n":"./files/mobile/128.png","t":"./files/thumb/128.png"},{"l":"./files/mobile/129.png","n":"./files/mobile/129.png","t":"./files/thumb/129.png"},{"l":"./files/mobile/130.png","n":"./files/mobile/130.png","t":"./files/thumb/130.png"},{"l":"./files/mobile/131.png","n":"./files/mobile/131.png","t":"./files/thumb/131.png"},{"l":"./files/mobile/132.png","n":"./files/mobile/132.png","t":"./files/thumb/132.png"},{"l":"./files/mobile/133.png","n":"./files/mobile/133.png","t":"./files/thumb/133.png"},{"l":"./files/mobile/134.png","n":"./files/mobile/134.png","t":"./files/thumb/134.png"},{"l":"./files/mobile/135.png","n":"./files/mobile/135.png","t":"./files/thumb/135.png"},{"l":"./files/mobile/136.png","n":"./files/mobile/136.png","t":"./files/thumb/136.png"},{"l":"./files/mobile/137.png","n":"./files/mobile/137.png","t":"./files/thumb/137.png"},{"l":"./files/mobile/138.png","n":"./files/mobile/138.png","t":"./files/thumb/138.png"},{"l":"./files/mobile/139.png","n":"./files/mobile/139.png","t":"./files/thumb/139.png"},{"l":"./files/mobile/140.png","n":"./files/mobile/140.png","t":"./files/thumb/140.png"},{"l":"./files/mobile/141.png","n":"./files/mobile/141.png","t":"./files/thumb/141.png"},{"l":"./files/mobile/142.png","n":"./files/mobile/142.png","t":"./files/thumb/142.png"},{"l":"./files/mobile/143.png","n":"./files/mobile/143.png","t":"./files/thumb/143.png"},{"l":"./files/mobile/144.png","n":"./files/mobile/144.png","t":"./files/thumb/144.png"},{"l":"./files/mobile/145.png","n":"./files/mobile/145.png","t":"./files/thumb/145.png"},{"l":"./files/mobile/146.png","n":"./files/mobile/146.png","t":"./files/thumb/146.png"},{"l":"./files/mobile/147.png","n":"./files/mobile/147.png","t":"./files/thumb/147.png"},{"l":"./files/mobile/148.png","n":"./files/mobile/148.png","t":"./files/thumb/148.png"},{"l":"./files/mobile/149.png","n":"./files/mobile/149.png","t":"./files/thumb/149.png"},{"l":"./files/mobile/150.png","n":"./files/mobile/150.png","t":"./files/thumb/150.png"},{"l":"./files/mobile/151.png","n":"./files/mobile/151.png","t":"./files/thumb/151.png"},{"l":"./files/mobile/152.png","n":"./files/mobile/152.png","t":"./files/thumb/152.png"},{"l":"./files/mobile/153.png","n":"./files/mobile/153.png","t":"./files/thumb/153.png"},{"l":"./files/mobile/154.png","n":"./files/mobile/154.png","t":"./files/thumb/154.png"},{"l":"./files/mobile/155.png","n":"./files/mobile/155.png","t":"./files/thumb/155.png"},{"l":"./files/mobile/156.png","n":"./files/mobile/156.png","t":"./files/thumb/156.png"},{"l":"./files/mobile/157.png","n":"./files/mobile/157.png","t":"./files/thumb/157.png"},{"l":"./files/mobile/158.png","n":"./files/mobile/158.png","t":"./files/thumb/158.png"},{"l":"./files/mobile/159.png","n":"./files/mobile/159.png","t":"./files/thumb/159.png"},{"l":"./files/mobile/160.png","n":"./files/mobile/160.png","t":"./files/thumb/160.png"},{"l":"./files/mobile/161.png","n":"./files/mobile/161.png","t":"./files/thumb/161.png"},{"l":"./files/mobile/162.png","n":"./files/mobile/162.png","t":"./files/thumb/162.png"},{"l":"./files/mobile/163.png","n":"./files/mobile/163.png","t":"./files/thumb/163.png"},{"l":"./files/mobile/164.png","n":"./files/mobile/164.png","t":"./files/thumb/164.png"},{"l":"./files/mobile/165.png","n":"./files/mobile/165.png","t":"./files/thumb/165.png"},{"l":"./files/mobile/166.png","n":"./files/mobile/166.png","t":"./files/thumb/166.png"},{"l":"./files/mobile/167.png","n":"./files/mobile/167.png","t":"./files/thumb/167.png"},{"l":"./files/mobile/168.png","n":"./files/mobile/168.png","t":"./files/thumb/168.png"},{"l":"./files/mobile/169.png","n":"./files/mobile/169.png","t":"./files/thumb/169.png"},{"l":"./files/mobile/170.png","n":"./files/mobile/170.png","t":"./files/thumb/170.png"},{"l":"./files/mobile/171.png","n":"./files/mobile/171.png","t":"./files/thumb/171.png"},{"l":"./files/mobile/172.png","n":"./files/mobile/172.png","t":"./files/thumb/172.png"},{"l":"./files/mobile/173.png","n":"./files/mobile/173.png","t":"./files/thumb/173.png"},{"l":"./files/mobile/174.png","n":"./files/mobile/174.png","t":"./files/thumb/174.png"},{"l":"./files/mobile/175.png","n":"./files/mobile/175.png","t":"./files/thumb/175.png"},{"l":"./files/mobile/176.png","n":"./files/mobile/176.png","t":"./files/thumb/176.png"},{"l":"./files/mobile/177.png","n":"./files/mobile/177.png","t":"./files/thumb/177.png"},{"l":"./files/mobile/178.png","n":"./files/mobile/178.png","t":"./files/thumb/178.png"},{"l":"./files/mobile/179.png","n":"./files/mobile/179.png","t":"./files/thumb/179.png"},{"l":"./files/mobile/180.png","n":"./files/mobile/180.png","t":"./files/thumb/180.png"},{"l":"./files/mobile/181.png","n":"./files/mobile/181.png","t":"./files/thumb/181.png"},{"l":"./files/mobile/182.png","n":"./files/mobile/182.png","t":"./files/thumb/182.png"},{"l":"./files/mobile/183.png","n":"./files/mobile/183.png","t":"./files/thumb/183.png"},{"l":"./files/mobile/184.png","n":"./files/mobile/184.png","t":"./files/thumb/184.png"},{"l":"./files/mobile/185.png","n":"./files/mobile/185.png","t":"./files/thumb/185.png"},{"l":"./files/mobile/186.png","n":"./files/mobile/186.png","t":"./files/thumb/186.png"},{"l":"./files/mobile/187.png","n":"./files/mobile/187.png","t":"./files/thumb/187.png"},{"l":"./files/mobile/188.png","n":"./files/mobile/188.png","t":"./files/thumb/188.png"},{"l":"./files/mobile/189.png","n":"./files/mobile/189.png","t":"./files/thumb/189.png"},{"l":"./files/mobile/190.png","n":"./files/mobile/190.png","t":"./files/thumb/190.png"},{"l":"./files/mobile/191.png","n":"./files/mobile/191.png","t":"./files/thumb/191.png"},{"l":"./files/mobile/192.png","n":"./files/mobile/192.png","t":"./files/thumb/192.png"},{"l":"./files/mobile/193.png","n":"./files/mobile/193.png","t":"./files/thumb/193.png"},{"l":"./files/mobile/194.png","n":"./files/mobile/194.png","t":"./files/thumb/194.png"},{"l":"./files/mobile/195.png","n":"./files/mobile/195.png","t":"./files/thumb/195.png"},{"l":"./files/mobile/196.png","n":"./files/mobile/196.png","t":"./files/thumb/196.png"},{"l":"./files/mobile/197.png","n":"./files/mobile/197.png","t":"./files/thumb/197.png"},{"l":"./files/mobile/198.png","n":"./files/mobile/198.png","t":"./files/thumb/198.png"},{"l":"./files/mobile/199.png","n":"./files/mobile/199.png","t":"./files/thumb/199.png"},{"l":"./files/mobile/200.png","n":"./files/mobile/200.png","t":"./files/thumb/200.png"},{"l":"./files/mobile/201.png","n":"./files/mobile/201.png","t":"./files/thumb/201.png"},{"l":"./files/mobile/202.png","n":"./files/mobile/202.png","t":"./files/thumb/202.png"},{"l":"./files/mobile/203.png","n":"./files/mobile/203.png","t":"./files/thumb/203.png"},{"l":"./files/mobile/204.png","n":"./files/mobile/204.png","t":"./files/thumb/204.png"},{"l":"./files/mobile/205.png","n":"./files/mobile/205.png","t":"./files/thumb/205.png"},{"l":"./files/mobile/206.png","n":"./files/mobile/206.png","t":"./files/thumb/206.png"}];
var language=[{"language" : "Greek","btnFirstPage" : "\u03a0\u03c1\u03ce\u03c4\u03b7","btnNextPage" : "\u0395\u03c0\u03cc\u03bc\u03b5\u03bd\u03b7 \u03c3\u03b5\u03bb\u03af\u03b4\u03b1","btnLastPage" : "\u03a4\u03b5\u03bb\u03b5\u03c5\u03c4\u03b1\u03af\u03b1","btnPrePage" : "\u03a0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03b7 \u03c3\u03b5\u03bb\u03af\u03b4\u03b1","btnGoToHome" : "\u0391\u03c1\u03c7\u03b9\u03ba\u03ae \u03a3\u03b5\u03bb\u03af\u03b4\u03b1","btnDownload" : "\u039b\u03ae\u03c8\u03b7","btnSoundOn" : "\u039c\u03b5 \u03ae\u03c7\u03bf","btnSoundOff" : "\u03a7\u03c9\u03c1\u03af\u03c2 \u03ae\u03c7\u03bf","btnPrint" : "\u0395\u03ba\u03c4\u03cd\u03c0\u03c9\u03c3\u03b7","btnThumb" : "\u039c\u03b9\u03ba\u03c1\u03bf\u03b3\u03c1\u03b1\u03c6\u03af\u03b5\u03c2","btnBookMark" : "\u03a0\u03af\u03bd\u03b1\u03ba\u03b1\u03c2 \u03c0\u03b5\u03c1\u03b9\u03b5\u03c7\u03bf\u03bc\u03ad\u03bd\u03c9\u03bd","frmBookMark" : "\u039a\u03ac\u03bd\u03c4\u03b5 \u03ba\u03c1\u03ac\u03c4\u03b7\u03c3\u03b7 \u03c3\u03ae\u03bc\u03b1","btnZoomIn" : "\u039c\u03b5\u03b3\u03ad\u03b8\u03c5\u03bd\u03c3\u03b7","btnZoomOut" : "\u03a3\u03bc\u03af\u03ba\u03c1\u03c5\u03bd\u03c3\u03b7","btnAutoFlip" : "\u03a0\u03b1\u03c1\u03bf\u03c5\u03c3\u03af\u03b1\u03c3\u03b7","btnStopAutoFlip" : "\u03a4\u03ad\u03bb\u03bf\u03c2 \u03c0\u03b1\u03c1\u03bf\u03c5\u03c3\u03af\u03b1\u03c3\u03b7\u03c2","btnSocialShare" : "\u039c\u03bf\u03b9\u03c1\u03ac\u03c3\u03bf\u03c5","btnHelp" : "\u0392\u03bf\u03ae\u03b8\u03b5\u03b9\u03b1","btnAbout" : "\u03a3\u03c7\u03b5\u03c4\u03b9\u03ba\u03ac","btnSearch" : "\u0391\u03bd\u03b1\u03b6\u03ae\u03c4\u03b7\u03c3\u03b7","btnFullscreen" : "\u03a0\u03bb\u03ae\u03c1\u03b7\u03c2 \u03bf\u03b8\u03cc\u03bd\u03b7","btnExitFullscreen" : "\u0388\u03be\u03bf\u03b4\u03bf\u03c2 \u03b1\u03c0\u03cc \u03c0\u03bb\u03ae\u03c1\u03b7 \u03bf\u03b8\u03cc\u03bd\u03b7","btnMore" : "\u03c0\u03b5\u03c1\u03b9\u03c3\u03c3\u03cc\u03c4\u03b5\u03c1\u03bf","frmPrintCaption" : "\u03a0\u03b1\u03c1\u03ac\u03b8\u03c5\u03c1\u03bf \u0395\u03ba\u03c4\u03cd\u03c0\u03c9\u03c3\u03b7 \u03a0\u03b5\u03c1\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae","frmPrintall" : "\u0395\u03ba\u03c4\u03cd\u03c0\u03c9\u03c3\u03b7 \u038c\u03bb\u03b5\u03c2 \u03bf\u03b9 \u03c3\u03b5\u03bb\u03af\u03b4\u03b5\u03c2","frmPrintcurrent" : "\u0395\u03ba\u03c4\u03cd\u03c0\u03c9\u03c3\u03b7 \u03c4\u03c1\u03ad\u03c7\u03bf\u03c5\u03c3\u03b1\u03c2 \u03c3\u03b5\u03bb\u03af\u03b4\u03b1\u03c2","frmPrintRange" : "\u03a3\u03b5\u03b9\u03c1\u03ac \u0395\u03ba\u03c4\u03cd\u03c0\u03c9\u03c3\u03b7","frmPrintexample" : "\u03a0\u03b1\u03c1\u03ac\u03b4\u03b5\u03b9\u03b3\u03bc\u03b1: 2,3,5-10","frmPrintbtn" : "\u03b1\u03c0\u03bf\u03c4\u03cd\u03c0\u03c9\u03bc\u03b1","frmShareCaption" : "\u039c\u03bf\u03b9\u03c1\u03ac\u03c3\u03bf\u03c5","frmShareLabel" : "\u039c\u03bf\u03b9\u03c1\u03ac\u03c3\u03bf\u03c5","frmShareInfo" : "\u039c\u03c0\u03bf\u03c1\u03b5\u03af\u03c4\u03b5 \u03b5\u03cd\u03ba\u03bf\u03bb\u03b1 \u03bd\u03b1 \u03bc\u03bf\u03b9\u03c1\u03b1\u03c3\u03c4\u03b5\u03af\u03c4\u03b5 \u03b1\u03c5\u03c4\u03ae \u03c4\u03b7 \u03b4\u03b7\u03bc\u03bf\u03c3\u03af\u03b5\u03c5\u03c3\u03b7 \u03c3\u03c4\u03b1 \u03ba\u03bf\u03b9\u03bd\u03c9\u03bd\u03b9\u03ba\u03ac \u03b4\u03af\u03ba\u03c4\u03c5\u03b1. \u0391\u03c0\u03bb\u03ac \u03c0\u03b1\u03c4\u03ae\u03c3\u03c4\u03b5 \u03c4\u03bf \u03b1\u03bd\u03c4\u03af\u03c3\u03c4\u03bf\u03b9\u03c7\u03bf \u03ba\u03bf\u03c5\u03bc\u03c0\u03af \u03c0\u03b1\u03c1\u03b1\u03ba\u03ac\u03c4\u03c9.","frminsertLabel" : "\u0395\u03b9\u03c3\u03b1\u03b3\u03c9\u03b3\u03ae \u03c3\u03c4\u03bf\u03bd \u03b9\u03c3\u03c4\u03cc\u03c4\u03bf\u03c0\u03bf","frminsertInfo" : "\u03a7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03ae\u03c3\u03c4\u03b5 \u03c4\u03bf\u03bd \u03c0\u03b1\u03c1\u03b1\u03ba\u03ac\u03c4\u03c9 \u03ba\u03ce\u03b4\u03b9\u03ba\u03b1 \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03b5\u03bd\u03c3\u03c9\u03bc\u03b1\u03c4\u03ce\u03c3\u03b5\u03c4\u03b5 \u03b1\u03c5\u03c4\u03ae \u03c4\u03b7 \u03b4\u03b7\u03bc\u03bf\u03c3\u03af\u03b5\u03c5\u03c3\u03b7 \u03c3\u03c4\u03bf\u03bd \u03b9\u03c3\u03c4\u03cc\u03c4\u03bf\u03c0\u03cc \u03c3\u03b1\u03c2.","frmaboutcaption" : "\u03b5\u03c0\u03b1\u03c6\u03ae","frmaboutcontactinformation" : "\u03a3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03b1 \u0395\u03c0\u03b9\u03ba\u03bf\u03b9\u03bd\u03c9\u03bd\u03af\u03b1\u03c2","frmaboutADDRESS" : "\u0394\u0399\u0395\u03a5\u0398\u03a5\u039d\u03a3\u0397","frmaboutEMAIL" : "EMAIL","frmaboutWEBSITE" : "\u0399\u03a3\u03a4\u039f\u03a3\u0395\u039b\u0399\u0394\u0391","frmaboutMOBILE" : "\u03ba\u03b9\u03bd\u03b7\u03c4\u03cc\u03c2","frmaboutAUTHOR" : "\u03a3\u03a5\u0393\u0393\u03a1\u0391\u03a6\u0395\u0391\u03a3","frmaboutDESCRIPTION" : "\u03a0\u0395\u03a1\u0399\u0393\u03a1\u0391\u03a6\u0397","frmSearch" : "\u03ad\u03c1\u03b5\u03c5\u03bd\u03b1","frmToc" : "\u03a0\u03af\u03bd\u03b1\u03ba\u03b1\u03c2 \u03a0\u03b5\u03c1\u03b9\u03b5\u03c7\u03bf\u03bc\u03ad\u03bd\u03c9\u03bd","btnTableOfContent" : "\u0395\u03bc\u03c6\u03ac\u03bd\u03b9\u03c3\u03b7 \u03c0\u03af\u03bd\u03b1\u03ba\u03b1 \u03c0\u03b5\u03c1\u03b9\u03b5\u03c7\u03bf\u03bc\u03ad\u03bd\u03bf\u03c5","btnNote" : "\u03c3\u03c7\u03cc\u03bb\u03b9\u03bf","lblLast" : "\u0391\u03c5\u03c4\u03ae \u03b5\u03af\u03bd\u03b1\u03b9 \u03b7 \u03c4\u03b5\u03bb\u03b5\u03c5\u03c4\u03b1\u03af\u03b1 \u03c3\u03b5\u03bb\u03af\u03b4\u03b1.","lblFirst" : "\u0391\u03c5\u03c4\u03ae \u03b5\u03af\u03bd\u03b1\u03b9 \u03b7 \u03c0\u03c1\u03ce\u03c4\u03b7 \u03c3\u03b5\u03bb\u03af\u03b4\u03b1.","lblFullscreen" : "\u03a0\u03b1\u03c4\u03ae\u03c3\u03c4\u03b5 \u03b3\u03b9\u03b1 \u03cc\u03c8\u03b7 \u03c0\u03bb\u03ae\u03c1\u03bf\u03c5\u03c2 \u03bf\u03b8\u03cc\u03bd\u03b7\u03c2","lblName" : "\u038c\u03bd\u03bf\u03bc\u03b1","lblPassword" : "\u039a\u03c9\u03b4\u03b9\u03ba\u03cc\u03c2","lblLogin" : "\u03a3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7","lblCancel" : "\u0386\u03ba\u03c5\u03c1\u03bf","lblNoName" : "\u03a4\u03bf \u03cc\u03bd\u03bf\u03bc\u03b1 \u03b4\u03b5\u03bd \u03bc\u03c0\u03bf\u03c1\u03b5\u03af \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03ba\u03b5\u03bd\u03cc.","lblNoPassword" : "\u039f \u03ba\u03c9\u03b4\u03b9\u03ba\u03cc\u03c2 \u03b4\u03b5\u03bd \u03bc\u03c0\u03bf\u03c1\u03b5\u03af \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03ba\u03b5\u03bd\u03cc\u03c2.","lblNoCorrectLogin" : "\u03a0\u03b1\u03c1\u03b1\u03ba\u03b1\u03bb\u03ce \u03b5\u03b9\u03c3\u03ac\u03b3\u03b5\u03c4\u03b5 \u03c4\u03bf \u03c3\u03c9\u03c3\u03c4\u03cc \u03cc\u03bd\u03bf\u03bc\u03b1 \u03ba\u03b1\u03b9 \u03ba\u03c9\u03b4\u03b9\u03ba\u03cc.","btnVideo" : "\u0392\u03af\u03bd\u03c4\u03b5\u03bf \u0393\u03ba\u03ac\u03bb\u03b5\u03c1\u03b9","btnSlideShow" : "\u03a3\u03c5\u03bd\u03b5\u03c7\u03cc\u03bc\u03b5\u03bd\u03b7 \u03b5\u03bd\u03b1\u03bb\u03bb\u03b1\u03b3\u03ae \u03b5\u03b9\u03ba\u03cc\u03bd\u03c9\u03bd","pnlSearchInputInvalid" : "\u03a4\u03bf \u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03bf \u03b1\u03bd\u03b1\u03b6\u03ae\u03c4\u03b7\u03c3\u03b7\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9 \u03c0\u03bf\u03bb\u03cd \u03bc\u03b9\u03ba\u03c1\u03cc.","btnDragToMove" : "\u039b\u03b5\u03b9\u03c4\u03bf\u03c5\u03c1\u03b3\u03af\u03b1 \u03c3\u03c5\u03c1\u03cc\u03bc\u03b5\u03bd\u03b7\u03c2 \u03ba\u03af\u03bd\u03b7\u03c3\u03b7\u03c2","btnPositionToMove" : "\u039a\u03af\u03bd\u03b7\u03c3\u03b7 \u03b1\u03bd\u03ac\u03bb\u03bf\u03b3\u03b7 \u03c4\u03b7\u03c2 \u03b8\u03ad\u03c3\u03b7\u03c2 \u03c4\u03bf\u03c5 \u03c0\u03bf\u03bd\u03c4\u03b9\u03ba\u03b9\u03bf\u03cd","lblHelp1" : "\u03a3\u03cd\u03c1\u03b5\u03c4\u03b5 \u03c4\u03b7 \u03b3\u03c9\u03bd\u03af\u03b1 \u03c4\u03b7\u03c2 \u03c3\u03b5\u03bb\u03af\u03b4\u03b1\u03c2 \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03b4\u03b5\u03af\u03c4\u03b5","lblHelp2" : "\u0394\u03b9\u03c0\u03bb\u03cc \u03ba\u03bb\u03b9\u03ba \u03b3\u03b9\u03b1 \u03bc\u03b5\u03b3\u03ad\u03b8\u03c5\u03bd\u03c3\u03b7, \u03c3\u03bc\u03af\u03ba\u03c1\u03c5\u03bd\u03c3\u03b7","lblCopy" : "\u0391\u03bd\u03c4\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae","lblAddToPage" : "\u03c0\u03c1\u03cc\u03c3\u03b8\u03b5\u03c3\u03b5 \u03c3\u03c4\u03b7 \u03c3\u03b5\u03bb\u03af\u03b4\u03b1","lblPage" : "\u03a3\u03b5\u03bb\u03af\u03b4\u03b1","lblTitle" : "\u03a4\u03af\u03c4\u03bb\u03bf\u03c2","lblEdit" : "\u0395\u03c0\u03b5\u03be\u03b5\u03c1\u03b3\u03b1\u03c3\u03af\u03b1","lblDelete" : "\u0394\u03b9\u03b1\u03b3\u03c1\u03b1\u03c6\u03ae","lblRemoveAll" : "\u0391\u03c0\u03b1\u03bb\u03bf\u03b9\u03c6\u03ae \u03cc\u03bb\u03c9\u03bd","tltCursor" : "\u03b4\u03c1\u03bf\u03bc\u03ad\u03b1\u03c2","tltAddHighlight" : "\u03c0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03ad\u03bc\u03c6\u03b1\u03c3\u03b7\u03c2","tltAddTexts" : "\u03c0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03ba\u03b5\u03b9\u03bc\u03ad\u03bd\u03c9\u03bd","tltAddShapes" : "\u03c0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03c3\u03c7\u03b7\u03bc\u03ac\u03c4\u03c9\u03bd","tltAddNotes" : "\u03c0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03c3\u03b7\u03bc\u03b5\u03b9\u03ce\u03c3\u03b5\u03c9\u03bd","tltAddImageFile" : "\u03c0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03b1\u03c1\u03c7\u03b5\u03af\u03bf\u03c5 \u03b5\u03b9\u03ba\u03cc\u03bd\u03b1\u03c2","tltAddSignature" : "\u03c0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03c5\u03c0\u03bf\u03b3\u03c1\u03b1\u03c6\u03ae\u03c2","tltAddLine" : "\u03c0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03b3\u03c1\u03b1\u03bc\u03bc\u03ae\u03c2","tltAddArrow" : "\u03c0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03c4\u03cc\u03be\u03bf\u03c5","tltAddRect" : "\u03c0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03c4\u03b5\u03c4\u03c1\u03b1\u03b3\u03ce\u03bd\u03bf\u03c5","tltAddEllipse" : "\u03c0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03ad\u03bb\u03bb\u03b5\u03b9\u03c8\u03b7\u03c2","lblDoubleClickToZoomIn" : "\u0394\u03b9\u03c0\u03bb\u03cc \u03ba\u03bb\u03b9\u03ba \u03b3\u03b9\u03b1 \u03bc\u03b5\u03b3\u03ad\u03b8\u03c5\u03bd\u03c3\u03b7.","lblPages" : "\u03a3\u03b5\u03bb\u03af\u03b4\u03b5\u03c2:","infCopyToClipboard" : "\u03a4\u03bf \u03c0\u03c1\u03cc\u03b3\u03c1\u03b1\u03bc\u03bc\u03b1 \u03c0\u03b5\u03c1\u03b9\u03ae\u03b3\u03b7\u03c3\u03ae\u03c2 \u03c3\u03b1\u03c2 \u03b4\u03cc\u03c3\u03b7 \u03b4\u03b5\u03bd \u03c5\u03c0\u03bf\u03c3\u03c4\u03b7\u03c1\u03af\u03b6\u03bf\u03c5\u03bd \u03c0\u03c1\u03cc\u03c7\u03b5\u03b9\u03c1\u03bf, \u03c0\u03b1\u03c1\u03b1\u03ba\u03b1\u03bb\u03bf\u03cd\u03bc\u03b5 \u03bd\u03b1 \u03c4\u03bf \u03ba\u03ac\u03bd\u03b5\u03c4\u03b5 \u03bc\u03cc\u03bd\u03bf\u03b9 \u03c3\u03b1\u03c2.","lblDescription" : "\u03a4\u03af\u03c4\u03bb\u03bf\u03c2","frmLinkLabel" : "\u03a3\u03cd\u03bd\u03b4\u03b5\u03c3\u03bc\u03bf\u03c2","infNotSupportHtml5" : "\u03a4\u03bf \u03c0\u03c1\u03cc\u03b3\u03c1\u03b1\u03bc\u03bc\u03b1 \u03c0\u03b5\u03c1\u03b9\u03ae\u03b3\u03b7\u03c3\u03ae\u03c2 \u03c3\u03b1\u03c2 \u03b4\u03b5\u03bd \u03c5\u03c0\u03bf\u03c3\u03c4\u03b7\u03c1\u03af\u03b6\u03b5\u03b9 HTML5.","frmHowToUse" : "\u03a0\u03ce\u03c2 \u03bd\u03b1 \u03c7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03ae\u03c3\u03b5\u03b9","lblHelpPage1" : "\u039c\u03b5\u03c4\u03b1\u03ba\u03b9\u03bd\u03ae\u03c3\u03c4\u03b5 \u03c4\u03bf \u03b4\u03ac\u03c7\u03c4\u03c5\u03bb\u03cc \u03c3\u03b1\u03c2 \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03b1\u03bd\u03b1\u03c3\u03c4\u03c1\u03ad\u03c8\u03b5\u03c4\u03b5 \u03c4\u03b7\u03bd \u03c3\u03b5\u03bb\u03af\u03b4\u03b1 \u03c4\u03bf\u03c5 \u03b2\u03b9\u03b2\u03bb\u03af\u03bf\u03c5.","lblHelpPage2" : "Zoom in \u03c7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03ce\u03bd\u03c4\u03b1\u03c2 \u03c7\u03b5\u03b9\u03c1\u03bf\u03bd\u03bf\u03bc\u03af\u03b1 \u03ae \u03ba\u03ac\u03bd\u03c4\u03b5 \u03b4\u03b9\u03c0\u03bb\u03cc \u03ba\u03bb\u03b9\u03ba \u03c3\u03c4\u03b7 \u03c3\u03b5\u03bb\u03af\u03b4\u03b1.","lblHelpPage3" : "\u039a\u03ac\u03bd\u03c4\u03b5 \u03ba\u03bb\u03b9\u03ba \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03b4\u03b5\u03af\u03c4\u03b5 \u03c4\u03bf\u03bd \u03c0\u03af\u03bd\u03b1\u03ba\u03b1 \u03c0\u03b5\u03c1\u03b9\u03b5\u03c7\u03bf\u03bc\u03ad\u03bd\u03c9\u03bd \u03ba\u03b1\u03b9 \u03c3\u03b5\u03bb\u03b9\u03b4\u03bf\u03b4\u03b5\u03af\u03ba\u03c4\u03b5\u03c2 \u03ba\u03b1\u03b9 \u03bd\u03b1 \u03bc\u03bf\u03b9\u03c1\u03b1\u03c3\u03c4\u03bf\u03cd\u03bd \u03c4\u03b1 \u03b2\u03b9\u03b2\u03bb\u03af\u03b1 \u03c3\u03b1\u03c2 \u03bc\u03ad\u03c3\u03c9 \u03c4\u03c9\u03bd \u03ba\u03bf\u03b9\u03bd\u03c9\u03bd\u03b9\u03ba\u03ce\u03bd \u03b4\u03b9\u03ba\u03c4\u03cd\u03c9\u03bd.","lblHelpPage4" : "\u03a0\u03c1\u03bf\u03c3\u03b8\u03ad\u03c3\u03c4\u03b5 \u03c3\u03b5\u03bb\u03b9\u03b4\u03bf\u03b4\u03b5\u03af\u03ba\u03c4\u03b5\u03c2, \u03c7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03ae\u03c3\u03c4\u03b5 \u03c4\u03b7 \u03bb\u03b5\u03b9\u03c4\u03bf\u03c5\u03c1\u03b3\u03af\u03b1 \u03b1\u03bd\u03b1\u03b6\u03ae\u03c4\u03b7\u03c3\u03b7\u03c2 \u03ba\u03b1\u03b9 \u03b1\u03c5\u03c4\u03cc\u03bc\u03b1\u03c4\u03b7 \u03b1\u03bd\u03b1\u03c3\u03c4\u03c1\u03ad\u03c8\u03b5\u03c4\u03b5 \u03c4\u03bf \u03b2\u03b9\u03b2\u03bb\u03af\u03bf.","lblHelpPage5" : "\u0391\u03bd\u03bf\u03af\u03be\u03c4\u03b5 \u03c4\u03b9\u03c2 \u03bc\u03b9\u03ba\u03c1\u03bf\u03b3\u03c1\u03b1\u03c6\u03af\u03b5\u03c2 \u03c3\u03c4\u03b7\u03bd \u03b5\u03c0\u03b9\u03c3\u03ba\u03cc\u03c0\u03b7\u03c3\u03b7 \u03cc\u03bb\u03c9\u03bd \u03c4\u03c9\u03bd \u03c3\u03b5\u03bb\u03af\u03b4\u03c9\u03bd \u03c4\u03bf\u03c5 \u03b2\u03b9\u03b2\u03bb\u03af\u03bf\u03c5.","frmQrcodeCaption" : "\u03a3\u03b1\u03c1\u03ce\u03c3\u03c4\u03b5 \u03c4\u03bf \u03ba\u03ac\u03c4\u03c9 \u03bc\u03ad\u03c1\u03bf\u03c2 \u03b4\u03cd\u03bf \u03b4\u03b9\u03b1\u03c3\u03c4\u03ac\u03c3\u03b5\u03c9\u03bd \u03ba\u03ce\u03b4\u03b9\u03ba\u03b1 \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03b4\u03b5\u03af\u03c4\u03b5 \u03bc\u03b5 \u03c4\u03bf \u03ba\u03b9\u03bd\u03b7\u03c4\u03cc \u03c4\u03b7\u03bb\u03ad\u03c6\u03c9\u03bd\u03bf.","btnClearSearch" : "\u039a\u03b1\u03b8\u03b1\u03c1\u03af\u03b6\u03c9","frmSearchPrompt" : "Clear","btnHome" : "Home","btnFullScreen" : "\u03a0\u03bb\u03ae\u03c1\u03b7\u03c2 \u03bf\u03b8\u03cc\u03bd\u03b7","btnDisableFullScreen" : "\u0391\u03c0\u03b5\u03bd\u03b5\u03c1\u03b3\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7 \u03c0\u03bb\u03ae\u03c1\u03bf\u03c5\u03c2 \u03bf\u03b8\u03cc\u03bd\u03b7\u03c2","btnShareEmail" : "\u039c\u03bf\u03b9\u03c1\u03ac\u03c3\u03bf\u03c5","frmHelpCaption" : "\u0392\u03bf\u03ae\u03b8\u03b5\u03b9\u03b1","frmHelpTip1" : "\u0394\u03b9\u03c0\u03bb\u03cc \u03ba\u03bb\u03b9\u03ba \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03b1\u03bb\u03bb\u03ac\u03be\u03b5\u03c4\u03b5 \u03c4\u03bf \u03bc\u03ad\u03b3\u03b5\u03b8\u03bf\u03c2","frmHelpTip2" : "\u03a3\u03cd\u03c1\u03b5\u03c4\u03b5 \u03c4\u03b7\u03bd \u03ac\u03ba\u03c1\u03b7 \u03c4\u03b7\u03c2 \u03c3\u03b5\u03bb\u03af\u03b4\u03b1\u03c2 \u03b3\u03b9\u03b1 \u03c0\u03c1\u03bf\u03b2\u03bf\u03bb\u03ae","frmPrintBtnCaption" : "\u0395\u03ba\u03c4\u03cd\u03c0\u03c9\u03c3\u03b7","frmPrintPrintAll" : "\u0395\u03ba\u03c4\u03cd\u03c0\u03c9\u03c3\u03b7 \u03cc\u03bb\u03c9\u03bd","frmPrintPrintCurrentPage" : "\u0395\u03ba\u03c4\u03cd\u03c0\u03c9\u03c3\u03b7 \u03c4\u03c1\u03ad\u03c7\u03bf\u03c5\u03c3\u03b1\u03c2 \u03c3\u03b5\u03bb\u03af\u03b4\u03b1\u03c2","frmPrintPrintRange" : "\u03a3\u03b5\u03bb\u03af\u03b4\u03b5\u03c2 \u03b1\u03c0\u03cc , \u03ad\u03c9\u03c2","frmPrintExampleCaption" : "\u03a0\u03b1\u03c1\u03ac\u03b4\u03b5\u03b9\u03b3\u03bc\u03b1: 2,5,8-26","frmPrintPreparePage" : "\u03a0\u03c1\u03bf\u03b5\u03c4\u03bf\u03b9\u03bc\u03b1\u03c3\u03af\u03b1 \u03c3\u03b5\u03bb\u03af\u03b4\u03b1\u03c2:","frmPrintPrintFailed" : "\u0391\u03c0\u03bf\u03c4\u03c5\u03c7\u03af\u03b1 \u03b5\u03ba\u03c4\u03cd\u03c0\u03c9\u03c3\u03b7\u03c2:","loginCaption" : "\u0395\u03af\u03c3\u03bf\u03b4\u03bf\u03c2","loginInvalidPassword" : "\u039c\u03b7 \u03ad\u03b3\u03ba\u03c5\u03c1\u03bf\u03c2 \u03ba\u03c9\u03b4\u03b9\u03ba\u03cc\u03c2 \u03c0\u03c1\u03cc\u03c3\u03b2\u03b1\u03c3\u03b7\u03c2!","loginPasswordLabel" : "\u039a\u03c9\u03b4\u03b9\u03ba\u03cc\u03c2 \u03c0\u03c1\u03cc\u03c3\u03b2\u03b1\u03c3\u03b7\u03c2:","loginBtnLogin" : "\u0395\u03af\u03c3\u03bf\u03b4\u03bf\u03c2","loginBtnCancel" : "\u0391\u03ba\u03cd\u03c1\u03c9\u03c3\u03b7","lblPagesFound" : "\u03a3\u03b5\u03bb\u03af\u03b4\u03b5\u03c2:","lblPageIndex" : "\u03a3\u03b5\u03bb\u03af\u03b4\u03b5\u03c2","frnAboutCaption" : "\u03a3\u03c7\u03b5\u03c4\u03b9\u03ba\u03ac & \u0395\u03c0\u03b9\u03ba\u03bf\u03b9\u03bd\u03c9\u03bd\u03af\u03b1","btnSinglePage" : "\u039c\u03af\u03b1 \u03c3\u03b5\u03bb\u03af\u03b4\u03b1","btnDoublePage" : "\u03a3\u03b1\u03bb\u03cc\u03bd\u03b9","btnSwicthLanguage" : "\u0391\u03bb\u03bb\u03b1\u03b3\u03ae \u03b3\u03bb\u03ce\u03c3\u03c3\u03b1\u03c2","tipChangeLanguage" : "\u0395\u03c0\u03b9\u03bb\u03ad\u03be\u03c4\u03b5 \u03bc\u03b9\u03b1 \u03b3\u03bb\u03ce\u03c3\u03c3\u03b1 \u03c0\u03b1\u03c1\u03b1\u03ba\u03ac\u03c4\u03c9 ...","btnMoreOptionsLeft" : "\u03c0\u03b5\u03c1\u03b9\u03c3\u03c3\u03cc\u03c4\u03b5\u03c1\u03b5\u03c2 \u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2","btnMoreOptionsRight" : "\u03c0\u03b5\u03c1\u03b9\u03c3\u03c3\u03cc\u03c4\u03b5\u03c1\u03b5\u03c2 \u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2","btnFit" : "\u03a0\u03c1\u03bf\u03c3\u03b1\u03c1\u03bc\u03bf\u03b3\u03ae \u03c3\u03c4\u03bf \u03c0\u03b1\u03c1\u03ac\u03b8\u03c5\u03c1\u03bf","smallModeCaption" : "\u039a\u03ac\u03bd\u03c4\u03b5 \u03ba\u03bb\u03b9\u03ba \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03b4\u03b5\u03af\u03c4\u03b5 \u03c3\u03b5 \u03c0\u03bb\u03ae\u03c1\u03b7 \u03bf\u03b8\u03cc\u03bd\u03b7","btnAddAnnotation" : "\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03c3\u03c7\u03bf\u03bb\u03af\u03c9\u03bd","btnAnnotation" : "\u039f\u03b9 \u03c3\u03c7\u03bf\u03bb\u03b9\u03b1\u03c3\u03bc\u03bf\u03af","FlipPageEditor_SaveAndExit" : "\u0391\u03c0\u03bf\u03b8\u03ae\u03ba\u03b5\u03c5\u03c3\u03b7 \u03ba\u03b1\u03b9 \u0388\u03be\u03bf\u03b4\u03bf\u03c2","FlipPageEditor_Exit" : "\u03ad\u03be\u03bf\u03b4\u03bf\u03c2","DrawToolWindow_Redo" : "\u03be\u03b1\u03bd\u03b1\u03ba\u03ac\u03bd\u03c9","DrawToolWindow_Undo" : "\u0391\u03bd\u03b1\u03af\u03c1\u03b5\u03c3\u03b7","DrawToolWindow_Clear" : "\u03ba\u03b1\u03b8\u03b1\u03c1\u03b9\u03c3\u03bc\u03cc\u03c2","DrawToolWindow_Brush" : "\u03b2\u03bf\u03cd\u03c1\u03c4\u03c3\u03b1","DrawToolWindow_Width" : "\u03a0\u03bb\u03ac\u03c4\u03bf\u03c2","DrawToolWindow_Alpha" : "Alpha","DrawToolWindow_Color" : "\u03a7\u03c1\u03ce\u03bc\u03b1","DrawToolWindow_Eraser" : "\u03b3\u03cc\u03bc\u03b1","DrawToolWindow_Rectangular" : "\u03bf\u03c1\u03b8\u03bf\u03b3\u03ce\u03bd\u03b9\u03bf\u03c2","DrawToolWindow_Ellipse" : "\u03ad\u03bb\u03bb\u03b5\u03b9\u03c8\u03b7","TStuff_BorderWidth" : "\u03a0\u03bb\u03b1\u03af\u03c3\u03b9\u03bf \u03a0\u03ac\u03c7\u03bf\u03c2","TStuff_BorderAlph" : "\u03a0\u03bb\u03b1\u03af\u03c3\u03b9\u03bf Alpha","TStuff_BorderColor" : "\u03a0\u03bb\u03b1\u03af\u03c3\u03b9\u03bf \u03a7\u03c1\u03ce\u03bc\u03b1","DrawToolWindow_TextNote" : "\u03c3\u03b7\u03bc\u03b5\u03af\u03c9\u03c3\u03b7 \u03ba\u03b5\u03b9\u03bc\u03ad\u03bd\u03bf\u03c5","AnnotMark" : "\u03c3\u03b5\u03bb\u03b9\u03b4\u03bf\u03b4\u03b5\u03af\u03ba\u03c4\u03b7\u03c2","lastpagebtnHelp" : "\u03a4\u03b5\u03bb\u03b5\u03c5\u03c4\u03b1\u03af\u03b1 \u03c3\u03b5\u03bb\u03af\u03b4\u03b1","firstpagebtnHelp" : "\u03a0\u03c1\u03ce\u03c4\u03b7 \u03c3\u03b5\u03bb\u03af\u03b4\u03b1","homebtnHelp" : "\u0395\u03c0\u03b9\u03c3\u03c4\u03c1\u03bf\u03c6\u03ae \u03c3\u03c4\u03b7\u03bd \u03b1\u03c1\u03c7\u03b9\u03ba\u03ae \u03c3\u03b5\u03bb\u03af\u03b4\u03b1","aboubtnHelp" : "\u03a0\u03b5\u03c1\u03af\u03c0\u03bf\u03c5","screenbtnHelp" : "\u0391\u03bd\u03bf\u03af\u03be\u03c4\u03b5 \u03b1\u03c5\u03c4\u03ae \u03c4\u03b7\u03bd \u03b5\u03c6\u03b1\u03c1\u03bc\u03bf\u03b3\u03ae \u03c3\u03b5 \u03bb\u03b5\u03b9\u03c4\u03bf\u03c5\u03c1\u03b3\u03af\u03b1 \u03c0\u03bb\u03ae\u03c1\u03bf\u03c5\u03c2 \u03bf\u03b8\u03cc\u03bd\u03b7\u03c2","helpbtnHelp" : "\u0395\u03bc\u03c6\u03ac\u03bd\u03b9\u03c3\u03b7 \u03b2\u03bf\u03ae\u03b8\u03b5\u03b9\u03b1\u03c2","searchbtnHelp" : "\u0391\u03bd\u03b1\u03b6\u03ae\u03c4\u03b7\u03c3\u03b7 \u03b1\u03c0\u03cc \u03c4\u03b9\u03c2 \u03c3\u03b5\u03bb\u03af\u03b4\u03b5\u03c2","pagesbtnHelp" : "\u03b4\u03b5\u03af\u03c4\u03b5 \u03c4\u03b7 \u03bc\u03b9\u03ba\u03c1\u03bf\u03b3\u03c1\u03b1\u03c6\u03af\u03b1","bookmarkbtnHelp" : "\u0386\u03bd\u03bf\u03b9\u03b3\u03bc\u03b1 \u03c3\u03b5\u03bb\u03b9\u03b4\u03bf\u03b4\u03b5\u03af\u03ba\u03c4\u03b7","AnnotmarkbtnHelp" : "\u0391\u03bd\u03bf\u03af\u03b3\u03c9 \u03a0\u03af\u03bd\u03b1\u03ba\u03b1 \u03c0\u03b5\u03c1\u03b9\u03b5\u03c7\u03bf\u03bc\u03ad\u03bd\u03c9\u03bd","printbtnHelp" : "\u0395\u03ba\u03c4\u03c5\u03c0\u03ce\u03c3\u03c4\u03b5 \u03c4\u03bf \u03c6\u03c5\u03bb\u03bb\u03ac\u03b4\u03b9\u03bf","soundbtnHelp" : "\u0395\u03bd\u03b5\u03c1\u03b3\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7 \u03ae \u03b1\u03c0\u03b5\u03bd\u03b5\u03c1\u03b3\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7 \u03c4\u03bf\u03c5 \u03ae\u03c7\u03bf\u03c5","sharebtnHelp" : "\u0391\u03c0\u03bf\u03c3\u03c4\u03bf\u03bb\u03ae Email \u03c3\u03b5","socialSharebtnHelp" : "\u039c\u03bf\u03b9\u03c1\u03ac\u03c3\u03bf\u03c5","zoominbtnHelp" : "\u0396\u03bf\u03c5\u03bc","downloadbtnHelp" : "\u039a\u03b1\u03c4\u03b5\u03b2\u03ac\u03c3\u03c4\u03b5 \u03b1\u03c5\u03c4\u03cc \u03c4\u03bf \u03c6\u03c5\u03bb\u03bb\u03ac\u03b4\u03b9\u03bf","pagemodlebtnHelp" : "\u0395\u03bd\u03b1\u03bb\u03bb\u03b1\u03b3\u03ae \u03bc\u03bf\u03bd\u03ae\u03c2 \u03ba\u03b1\u03b9 \u03b4\u03b9\u03c0\u03bb\u03ae\u03c2 \u03bb\u03b5\u03b9\u03c4\u03bf\u03c5\u03c1\u03b3\u03af\u03b1\u03c2 \u03c4\u03b7\u03c2 \u03c3\u03b5\u03bb\u03af\u03b4\u03b1\u03c2","languagebtnHelp" : "\u0391\u03bb\u03bb\u03b1\u03b3\u03ae \u03b3\u03bb\u03ce\u03c3\u03c3\u03b1\u03c2","annotationbtnHelp" : "\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03c3\u03c7\u03bf\u03bb\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd","addbookmarkbtnHelp" : "\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03c3\u03b5\u03bb\u03b9\u03b4\u03bf\u03b4\u03b5\u03af\u03ba\u03c4\u03b7","removebookmarkbtnHelp" : "\u0391\u03c6\u03b1\u03af\u03c1\u03b5\u03c3\u03b7 \u03c3\u03b5\u03bb\u03b9\u03b4\u03bf\u03b4\u03b5\u03af\u03ba\u03c4\u03b7","updatebookmarkbtnHelp" : "\u0395\u03bd\u03b7\u03bc\u03ad\u03c1\u03c9\u03c3\u03b7 \u03c3\u03b5\u03bb\u03b9\u03b4\u03bf\u03b4\u03b5\u03af\u03ba\u03c4\u03b7","btnShoppingCart" : "\u039a\u03b1\u03bb\u03ac\u03b8\u03b9 \u03b1\u03b3\u03bf\u03c1\u03ce\u03bd","Help_ShoppingCartbtn" : "\u0392\u03bf\u03ae\u03b8\u03b5\u03b9\u03b1 \u03b3\u03b9\u03b1 \u039a\u03b1\u03bb\u03ac\u03b8\u03b9 \u03b1\u03b3\u03bf\u03c1\u03ce\u03bd","Help_btnNextPage" : "\u0395\u03c0\u03cc\u03bc\u03b5\u03bd\u03b7 \u03c3\u03b5\u03bb\u03af\u03b4\u03b1","Help_btnPrePage" : "\u03a0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03b7 \u03c3\u03b5\u03bb\u03af\u03b4\u03b1","Help_btnAutoFlip" : "\u0391\u03c5\u03c4\u03cc\u03bc\u03b1\u03c4\u03bf \u03b3\u03cd\u03c1\u03b9\u03c3\u03bc\u03b1","Help_StopAutoFlip" : "\u03a3\u03c4\u03b1\u03bc\u03ac\u03c4\u03b7\u03c3\u03b5 \u03b1\u03c5\u03c4\u03cc\u03bc\u03b1\u03c4\u03bf \u03b3\u03cd\u03c1\u03b9\u03c3\u03bc\u03b1","btnaddbookmark" : "\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7","btndeletebookmark" : "\u0394\u03b9\u03b1\u03b3\u03c1\u03b1\u03c6\u03ae","btnupdatebookmark" : "\u0395\u03bd\u03b7\u03bc\u03ad\u03c1\u03c9\u03c3\u03b7","frmyourbookmarks" : "\u039f\u03b9 \u03c3\u03b5\u03bb\u03b9\u03b4\u03bf\u03b4\u03b5\u03af\u03ba\u03c4\u03b5\u03c2 \u03c3\u03b1\u03c2","frmitems" : "\u0391\u03bd\u03c4\u03b9\u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03b1","DownloadFullPublication" : "\u03a0\u03bb\u03ae\u03c1\u03b7\u03c2 \u03b4\u03b7\u03bc\u03bf\u03c3\u03af\u03b5\u03c5\u03c3\u03b7","DownloadCurrentPage" : "\u03a4\u03c1\u03ad\u03c7\u03bf\u03c5\u03c3\u03b1 \u03c3\u03b5\u03bb\u03af\u03b4\u03b1","DownloadAttachedFiles" : "\u0395\u03c0\u03b9\u03c3\u03c5\u03bd\u03b1\u03c0\u03c4\u03cc\u03bc\u03b5\u03bd\u03b1 \u03b1\u03c1\u03c7\u03b5\u03af\u03b1","lblLink" : "\u03a3\u03cd\u03bd\u03b4\u03b5\u03c3\u03bc\u03bf\u03c2","btnCopy" : "\u039a\u03bf\u03c5\u03bc\u03c0\u03af \u03b1\u03bd\u03c4\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae\u03c2","restorePage" : "\u0398\u03b1 \u03b8\u03ad\u03bb\u03b1\u03c4\u03b5 \u03bd\u03b1 \u03b5\u03c0\u03b1\u03bd\u03b1\u03c6\u03ad\u03c1\u03b5\u03c4\u03b5 \u03c4\u03b7\u03bd \u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03b7 \u03c3\u03c5\u03bd\u03b5\u03b4\u03c1\u03af\u03b1;","tmpl_Backgoundsoundon" : "\u0389\u03c7\u03bf\u03b9 \u03c6\u03cc\u03bd\u03c4\u03bf\u03c5, \u039d\u03b1\u03b9","tmpl_Backgoundsoundoff" : "\u0389\u03c7\u03bf\u03b9 \u03c6\u03cc\u03bd\u03c4\u03bf\u03c5, \u038c\u03c7\u03b9","tmpl_Flipsoundon" : "\u0389\u03c7\u03bf\u03c2 \u03be\u03b5\u03c6\u03c5\u03bb\u03bb\u03af\u03c3\u03bc\u03b1\u03c4\u03bf\u03c2, \u039d\u03b1\u03b9","tmpl_Flipsoundoff" : "\u0389\u03c7\u03bf\u03c2 \u03be\u03b5\u03c6\u03c5\u03bb\u03bb\u03af\u03c3\u03bc\u03b1\u03c4\u03bf\u03c2, \u038c\u03c7\u03b9","Help_PageIndex" : "\u0391\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03c4\u03ad\u03c7\u03bf\u03c5\u03c3\u03b1\u03c2 \u03c3\u03b5\u03bb\u03af\u03b4\u03b1\u03c2","tmpl_PrintPageRanges" : "\u0395\u03cd\u03c1\u03bf\u03c2 \u03c3\u03b5\u03bb\u03af\u03b4\u03c9\u03bd","tmpl_PrintPreview" : "\u03a0\u03c1\u03bf\u03b5\u03c0\u03b9\u03c3\u03ba\u03cc\u03c0\u03b7\u03c3\u03b7","btnSelection" : "\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03ba\u03b5\u03b9\u03bc\u03ad\u03bd\u03bf\u03c5","loginNameLabel" : "\u038c\u03bd\u03bf\u03bc\u03b1:","btnGotoPage" : "\u03a0\u03ae\u03b3\u03b1\u03b9\u03bd\u03b5","btnSettings" : "\u03a1\u03c5\u03b8\u03bc\u03af\u03c3\u03b5\u03b9\u03c2","soundSettingTitle" : "\u03a1\u03cd\u03b8\u03bc\u03b9\u03c3\u03b7 \u03ae\u03c7\u03bf\u03c5","closeFlipSound" : "\u039a\u03bb\u03b5\u03af\u03c3\u03b5 \u03ae\u03c7\u03bf \u03be\u03b5\u03c6\u03c5\u03bb\u03bb\u03af\u03c3\u03bc\u03b1\u03c4\u03bf\u03c2","closeBackgroundSound" : "\u039a\u03bb\u03b5\u03af\u03c3\u03b5 \u03ae\u03c7\u03bf \u03c6\u03cc\u03bd\u03c4\u03bf\u03c5","frmShareLinkLabel" : "\u03a3\u03cd\u03bd\u03b4\u03b5\u03c3\u03bc\u03bf\u03c2:","frmShareBtnCopy" : "\u0391\u03bd\u03c4\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae","frmShareItemsGroupCaption" : "\u039c\u03bf\u03b9\u03c1\u03ac\u03c3\u03bf\u03c5","frmPanelTitle" : "Share it","frmShareQRcode" : "QRCode","TAnnoActionPropertyStuff_GotoPage" : "\u03a0\u03ae\u03b3\u03b1\u03b9\u03bd\u03b5 \u03c3\u03c4\u03b7 \u03c3\u03b5\u03bb\u03af\u03b4\u03b1","btnPageBack" : "\u03a0\u03af\u03c3\u03c9","btnPageForward" : "\u039c\u03c0\u03c1\u03bf\u03c2","SelectTextCopy" : "\u0391\u03bd\u03c4\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae \u03ba\u03b5\u03b9\u03bc\u03ad\u03bd\u03bf\u03c5","selectCopyButton" : "\u0391\u03bd\u03c4\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae","TStuffCart_TypeCart" : "\u039a\u03b1\u03bb\u03ac\u03b8\u03b9 \u03b1\u03b3\u03bf\u03c1\u03ce\u03bd","TStuffCart_DetailedQuantity" : "\u03a0\u03bf\u03c3\u03cc\u03c4\u03b7\u03c4\u03b1","TStuffCart_DetailedPrice" : "\u03a4\u03b9\u03bc\u03ae","ShappingCart_Close" : "\u039a\u03bb\u03b5\u03af\u03c3\u03b9\u03bc\u03bf","ShappingCart_CheckOut" : "\u039f\u03bb\u03bf\u03ba\u03bb\u03ae\u03c1\u03c9\u03c3\u03b7 \u03b1\u03b3\u03bf\u03c1\u03ce\u03bd","ShappingCart_Item" : "\u0391\u03bd\u03c4\u03b9\u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03bf","ShappingCart_Total" : "\u03a3\u03cd\u03bd\u03bf\u03bb\u03bf","ShappingCart_AddCart" : "\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03b9\u03bc\u03ad\u03bd\u03bf\u03c5 \u03c3\u03c4\u03bf \u03ba\u03b1\u03bb\u03ac\u03b8\u03b9","ShappingCart_InStock" : "\u03a3\u03b5 \u03b1\u03c0\u03cc\u03b8\u03b5\u03bc\u03b1","TStuffCart_DetailedCost" : "\u039a\u03cc\u03c3\u03c4\u03bf\u03c2 \u03bc\u03b5\u03c4\u03b1\u03c6\u03bf\u03c1\u03b9\u03ba\u03ce\u03bd","TStuffCart_DetailedTime" : "\u03a7\u03c1\u03cc\u03bd\u03bf\u03c2 \u03c0\u03b1\u03c1\u03ac\u03b4\u03bf\u03c3\u03b7\u03c2","TStuffCart_DetailedDay" : "\u0397\u03bc\u03ad\u03c1\u03b1(\u03b5\u03c2)","ShappingCart_NotStock" : "\u03a7\u03c9\u03c1\u03af\u03c2 \u03b1\u03c1\u03ba\u03b5\u03c4\u03cc \u03b1\u03c0\u03cc\u03b8\u03b5\u03bc\u03b1","btnCrop" : "\u0391\u03c0\u03bf\u03ba\u03bf\u03c0\u03ae","btnDragButton" : "\u03a3\u03cd\u03c1\u03c3\u03b9\u03bc\u03bf","btnFlipBook" : "\u0397\u03bb\u03b5\u03ba\u03c4\u03c1\u03bf\u03bd\u03b9\u03ba\u03cc \u0392\u03b9\u03b2\u03bb\u03af\u03bf","btnSlideMode" : "\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03bf\u03bb\u03af\u03c3\u03b8\u03b9\u03c3\u03b7\u03c2","btnSinglePageMode" : "\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03bc\u03bf\u03bd\u03ae\u03c2 \u03c3\u03b5\u03bb\u03af\u03b4\u03b1\u03c2","btnVertical" : "\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03ba\u03b1\u03c4\u03b1\u03ba\u03cc\u03c1\u03c5\u03c6\u03bf","btnHotizontal" : "\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03bf\u03c1\u03b9\u03b6\u03cc\u03bd\u03c4\u03b9\u03bf","btnClose" : "\u039a\u03bb\u03b5\u03af\u03c3\u03b9\u03bc\u03bf","btnBookStatus" : "\u038c\u03c8\u03b7 \u03b2\u03b9\u03b2\u03bb\u03af\u03bf\u03c5","checkBoxInsert" : "\u0395\u03b9\u03c3\u03b1\u03b3\u03c9\u03b3\u03ae \u03c4\u03c1\u03ad\u03c7\u03bf\u03c5\u03c3\u03b1\u03c2 \u03c3\u03b5\u03bb\u03af\u03b4\u03b1\u03c2","btnQRCode" : "Click to scan QR code","btnRotateLeft" : "Rotate Left","btnRotateRight" : "Rotate Right","lblSelectMode" : "Select view mode please.","frmDownloadPreview" : "Preview","frmDownload" : "Download","TTActionQuiz_PlayAgain" : "Do you wanna play it again","TTActionQuiz_Ration" : "Your ratio is","frmTelephone" : "Telephone list","btnDialing" : "Dialing","lblSelectMessage" : "Please copy the the text content in the text box","btnSelectText" : "Select Text","btnPhoneNumber" : "Telephone","btnWeCharShare" : "WeChat Share","btnMagnifierIn" : "Magnifying Glass","btnMagnifierOut" : "Magnifier Reduction","frmShareSmallProgram" : "smallProgram","btnMagnifier" : "Magnifier","frmPrintPrintLimitFailed" : "Sorry, you can't print the pages.","btnReport" : "Report","btnDoubleSinglePage" : "Page switch","btnDownloadPosterPrompt" : "Click to download the poster","infLongPressToSavePoster" : "Press and hold the mobile terminal to save the poster","infLongPressToIndentify" : "Long press to identify QR code","infScanCodeToView" : "Scan code to read","infDeleteNote" : "Do you want to delete the note?","proFullScreenWarn" : "Current browser does not support full-screen,Please use Chrome for best results","btnBack" : "Backs","frmVideoListTitle" : "Video list","frmVideoTitle" : "Video","lblConfirm" : "Confirm"}];var pageEditor =[[],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.chesskid.com"},location:{x:"0.274022",y:"0.495783",width:"0.132281",height:"0.012954"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://chesskid.com"},location:{x:"0.488633",y:"0.627519",width:"0.094122",height:"0.012954"}}],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://ASP.NET"},location:{x:"0.506219",y:"0.748848",width:"0.064329",height:"0.013335"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.youtube.com/watch?v=boVXUB_6jf0&t=11s"},location:{x:"0.105805",y:"0.321671",width:"0.420811",height:"0.013335"}}],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.youtube.com/watch?v=oG6Z4HcHW6k"},location:{x:"0.464281",y:"0.325317",width:"0.352558",height:"0.019918"}}],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://us02web.zoom.us/j/82689845636?pwd=enFvRTNvNzR1UFZHUytBZGpVTmJKQT09"},location:{x:"0.113118",y:"0.912876",width:"0.321283",height:"0.008544"}}],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"4"},location:{x:"0.097054",y:"0.133992",width:"0.830845",height:"0.027217"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"8"},location:{x:"0.098068",y:"0.161835",width:"0.829122",height:"0.024329"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"19"},location:{x:"0.099554",y:"0.182990",width:"0.829123",height:"0.025386"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"23"},location:{x:"0.098068",y:"0.209434",width:"0.830608",height:"0.022213"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"55"},location:{x:"0.095096",y:"0.230589",width:"0.832094",height:"0.026444"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"101"},location:{x:"0.095096",y:"0.257033",width:"0.832094",height:"0.026444"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"161"},location:{x:"0.099554",y:"0.281361",width:"0.826151",height:"0.025386"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"199"},location:{x:"0.098068",y:"0.307804",width:"0.826150",height:"0.024329"}}],[],[]]
var pages_information =[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];;
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}
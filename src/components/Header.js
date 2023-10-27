// import React from "react";

// const Header = () => {
//   return (
//     <header
//       id="top"
//       style={{
//         zIndex: 1000,
//         position: "relative",
//         paddingTop: "10px",
//         width: "980px",
//         margin: "0 auto",
//       }}
//       itemScope
//       itemType="http://schema.org/WPHeader"
//     >
//       <div className="container">
//         <div
//           id="leaderboard"
//           className="ad-unit text-center center-block"
//           style={{ minHeight: "90px", marginBottom: "10px", display: "block" }}
//           render_on_load="true"
//         />
//         <div
//           id="countdown"
//           className="ad-unit"
//           style={{
//             margin: "-10px 15px 0px",
//             float: "right",
//             position: "absolute",
//           }}
//         />
//         <div className="toi-branding toi-referral" />
//         <nav
//           className="cb-nav cb-col cb-col-100 ng-scope"
//           id="cb-main-menu"
//           ng-controller="CBPlusAuth"
//         >
//           <a
//             //href="https://www.cricbuzz.com/"
//             target="_self"
//             className="cb-hm-text"
//           >
//             <img
//               id="cb-logo-main-menu"
//               itemProp="image"
//               height={40}
//               width={101}
//               style={{
//                 bottom: "4px",
//                 position: "relative",
//                 verticalAlign: "middle",
//               }}
//               alt="Cricbuzz Logo"
//               title="Cricbuzz Logo"
//               src="./Live Cricket Score, Schedule, Latest News, Stats & Videos _ Cricbuzz.com_files/cb_logo.svg"
//             />
//           </a>
//           <a
//             className="cb-hm-mnu-itm"
//             target="_self"
//             // href="https://www.cricbuzz.com/cricket-match/live-scores"
//             title="Live Cricket Score"
//           >
//             Live Scores
//           </a>
//           <a
//             className="cb-hm-mnu-itm"
//             target="_self"
//             // href="https://www.cricbuzz.com/cricket-schedule/upcoming-series/international"
//             title="Cricket Schedule"
//           >
//             Schedule
//           </a>
//           <a
//             className="cb-hm-mnu-itm"
//             target="_self"
//             // href="https://www.cricbuzz.com/cricket-scorecard-archives"
//             title="Cricket Scorecard Archives"
//           >
//             Archives
//           </a>
//           <div
//             className="cb-subnav cb-hm-mnu-itm feature-button cursor-pointer"
//             id="newsDropDown"
//             title="Cricket News"
//           >
//             <a
//               className="text-white"
//               target="_self"
//             //  href="https://www.cricbuzz.com/cricket-news"
//             >
//               News
//             </a>
//             <span className="cb-caret-down" />
//             <nav className="cb-sub-navigation">
//               <a
//                 className="cb-subnav-item"
//                 target="_self"
//                 // href="https://www.cricbuzz.com/cricket-news"
//                 title="Latest Cricket News"
//               >
//                 All Stories
//               </a>
//               <a
//                 className="cb-subnav-item"
//                 target="_self"
//                 // href="https://www.cricbuzz.com/cricket-news/editorial/cb-plus"
//                 title="Cricbuzz Plus Premium Articles"
//               >
//                 Cricbuzz Plus
//               </a>
//               <a
//                 className="cb-subnav-item"
//                 target="_self"
//                 // href="https://www.cricbuzz.com/cricket-news/latest-news"
//                 title="Latest Cricket News"
//               >
//                 Latest News
//               </a>
//               <a
//                 className="cb-subnav-item"
//                 target="_self"
//                 href="https://www.cricbuzz.com/cricket-news/info/"
//                 title="Latest Cricket Topics"
//               >
//                 Topics
//               </a>
//               <a
//                 className="cb-subnav-item"
//                 target="_self"
//                 // href="https://www.cricbuzz.com/cricket-news/editorial/spotlight"
//                 title="Cricket Editorials and Specials"
//               >
//                 Spotlight
//               </a>
//               <a
//                 className="cb-subnav-item"
//                 target="_self"
//                 //  href="https://www.cricbuzz.com/cricket-news/editorial/editorial-list"
//                 title="Latest Cricket Opinions & Editorials"
//               >
//                 Opinions
//               </a>
//               <a
//                 className="cb-subnav-item"
//                 target="_self"
//                 //  href="https://www.cricbuzz.com/cricket-news/editorial/specials"
//                 title="Latest Cricket Specials"
//               >
//                 Specials
//               </a>
//               <a
//                 className="cb-subnav-item"
//                 target="_self"
//                 //  href="https://www.cricbuzz.com/cricket-news/editorial/stats-analysis"
//                 title="Latest Cricket Stats & Analysis"
//               >
//                 Stats &amp; Analysis
//               </a>
//               <a
//                 className="cb-subnav-item"
//                 target="_self"
//                 //  href="https://www.cricbuzz.com/cricket-news/editorial/interviews"
//                 title="Latest Cricket Player Interviews"
//               >
//                 Interviews
//               </a>
//               <a
//                 className="cb-subnav-item"
//                 target="_self"
//                 //  href="https://www.cricbuzz.com/cricket-news/editorial/live-blogs"
//                 title="Latest Cricket Match live blogs"
//               >
//                 Live Blogs
//               </a>
//               <a
//                 className="cb-subnav-item"
//                 target="_self"
//                 //  href="https://www.cricbuzz.com/cricket-news/experts/harsha-bhogle/170"
//                 title="Articles and Videos by Harsha Bhogle"
//               >
//                 Harsha Bhogle
//               </a>
//             </nav>
//           </div>
//           <div
//             className="cb-subnav cb-hm-mnu-itm feature-button cursor-pointer"
//             id="seriesDropDown"
//             title="Cricket Series"
//           >
//             <a
//               className="text-white"
//               target="_self"
//             //  href="https://www.cricbuzz.com/cricket-schedule/series"
//             >
//               Series
//             </a>
//             <span className="cb-caret-down" />
//             <nav className="cb-sub-navigation">
//               <a
//                 className="cb-subnav-item"
//                 target="_self"
//                 //  href="https://www.cricbuzz.com/cricket-series/6732/icc-cricket-world-cup-2023"
//                 title="ICC Cricket World Cup 2023"
//               >
//                 ICC Cricket World Cup 2023
//               </a>
//               <a
//                 className="cb-subnav-item"
//                 target="_self"
//                 //  href="https://www.cricbuzz.com/cricket-series/7079/icc-cricket-world-cup-warm-up-matches-2023"
//                 title="ICC Cricket World Cup Warm-up Matches 2023"
//               >
//                 ICC Cricket World Cup Warm-up Matches 2023
//               </a>
//               <a
//                 className="cb-subnav-item"
//                 target="_self"
//                 //  href="https://www.cricbuzz.com/cricket-series/6913/australia-tour-of-india-2023"
//                 title="Australia tour of India, 2023"
//               >
//                 Australia tour of India, 2023
//               </a>
//               <a
//                 className="cb-subnav-item"
//                 target="_self"
//                 // href="https://www.cricbuzz.com/cricket-series/7163/asian-games-mens-t20i-2023"
//                 title="Asian Games Mens T20I 2023"
//               >
//                 Asian Games Mens T20I 2023
//               </a>
//               <a
//                 className="cb-subnav-item"
//                 target="_self"
//                 //  href="https://www.cricbuzz.com/cricket-series/6694/new-zealand-tour-of-bangladesh-2023"
//                 title="New Zealand tour of Bangladesh, 2023"
//               >
//                 New Zealand tour of Bangladesh, 2023
//               </a>
//               <a
//                 className="cb-subnav-item"
//                 target="_self"
//                 //  href="https://www.cricbuzz.com/cricket-series/4805/ireland-tour-of-england-odi-series-2023"
//                 title="Ireland tour of England ODI Series, 2023"
//               >
//                 Ireland tour of England ODI Series, 2023
//               </a>
//               <a
//                 className="cb-subnav-item"
//                 target="_self"
//                 //  href="https://www.cricbuzz.com/cricket-series/6204/caribbean-premier-league-2023"
//                 title="Caribbean Premier League 2023"
//               >
//                 Caribbean Premier League 2023
//               </a>
//               <a
//                 className="cb-subnav-item"
//                 target="_self"
//                 // href="https://www.cricbuzz.com/cricket-series/7142/asian-games-womens-t20i-2023"
//                 title="Asian Games Womens T20I, 2023"
//               >
//                 Asian Games Womens T20I, 2023
//               </a>
//               <a
//                 className="cb-subnav-item"
//                 target="_self"
//                 //  href="https://www.cricbuzz.com/cricket-series/6655/new-zealand-women-tour-of-south-africa-2023"
//                 title="New Zealand Women tour of South Africa, 2023"
//               >
//                 New Zealand Women tour of South Africa, 2023
//               </a>
//               <a
//                 className="cb-text-link cb-subnav-item"
//                 target="_self"
//               //  href="https://www.cricbuzz.com/cricket-schedule/series"
//               >
//                 All Series »
//               </a>
//             </nav>
//           </div>
//           <div
//             className="cb-subnav cb-hm-mnu-itm feature-button cursor-pointer"
//             id="teamDropDown"
//             title="Cricket Teams"
//           >
//             <a
//               className="text-white"
//               target="_self"
//             //  href="https://www.cricbuzz.com/cricket-team"
//             >
//               Teams
//             </a>
//             <span className="cb-caret-down" />
//             <nav className="cb-sub-navigation cb-sub-lg">
//               <div className="cb-sub-lg-outer">
//                 <div className="cb-sub-lg-sec">
//                   <h4 className="cb-sub-lg-sec-head">Test Teams</h4>
//                   <a
//                     className="cb-subnav-item cb-sub-lg-sec-item"
//                     target="_self"
//                     //  href="https://www.cricbuzz.com/cricket-team/india/2"
//                     title="India Cricket Team"
//                   >
//                     India
//                   </a>
//                   <a
//                     className="cb-subnav-item cb-sub-lg-sec-item"
//                     target="_self"
//                     //  href="https://www.cricbuzz.com/cricket-team/afghanistan/96"
//                     title="Afghanistan Cricket Team"
//                   >
//                     Afghanistan
//                   </a>
//                   <a
//                     className="cb-subnav-item cb-sub-lg-sec-item"
//                     target="_self"
//                     // href="https://www.cricbuzz.com/cricket-team/ireland/27"
//                     title="Ireland Cricket Team"
//                   >
//                     Ireland
//                   </a>
//                   <a
//                     className="cb-subnav-item cb-sub-lg-sec-item"
//                     target="_self"
//                     //  href="https://www.cricbuzz.com/cricket-team/pakistan/3"
//                     title="Pakistan Cricket Team"
//                   >
//                     Pakistan
//                   </a>
//                   <a
//                     className="cb-subnav-item cb-sub-lg-sec-item"
//                     target="_self"
//                     //  href="https://www.cricbuzz.com/cricket-team/australia/4"
//                     title="Australia Cricket Team"
//                   >
//                     Australia
//                   </a>
//                   <a
//                     className="cb-subnav-item cb-sub-lg-sec-item"
//                     target="_self"
//                     //  href="https://www.cricbuzz.com/cricket-team/sri-lanka/5"
//                     title="Sri Lanka Cricket Team"
//                   >
//                     Sri Lanka
//                   </a>
//                   <a
//                     className="cb-subnav-item cb-sub-lg-sec-item"
//                     target="_self"
//                     //  href="https://www.cricbuzz.com/cricket-team/bangladesh/6"
//                     title="Bangladesh Cricket Team"
//                   >
//                     Bangladesh
//                   </a>
//                   <a
//                     className="cb-subnav-item cb-sub-lg-sec-item"
//                     target="_self"
//                     //  href="https://www.cricbuzz.com/cricket-team/england/9"
//                     title="England Cricket Team"
//                   >
//                     England
//                   </a>
//                   <a
//                     className="cb-subnav-item cb-sub-lg-sec-item"
//                     target="_self"
//                     //  href="https://www.cricbuzz.com/cricket-team/west-indies/10"
//                     title="West Indies Cricket Team"
//                   >
//                     West Indies
//                   </a>
//                   <a
//                     className="cb-subnav-item cb-sub-lg-sec-item"
//                     target="_self"
//                     // href="https://www.cricbuzz.com/cricket-team/south-africa/11"
//                     title="South Africa Cricket Team"
//                   >
//                     South Africa
//                   </a>
//                   <a
//                     className="cb-subnav-item cb-sub-lg-sec-item"
//                     target="_self"
//                     // href="https://www.cricbuzz.com/cricket-team/zimbabwe/12"
//                     title="Zimbabwe Cricket Team"
//                   >
//                     Zimbabwe
//                   </a>
//                   <a
//                     className="cb-subnav-item cb-sub-lg-sec-item"
//                     target="_self"
//                     //  href="https://www.cricbuzz.com/cricket-team/new-zealand/13"
//                     title="New Zealand Cricket Team"
//                   >
//                     New Zealand
//                   </a>
//                 </div>
//                 <div className="cb-sub-lg-sec">
//                   <h4 className="cb-sub-lg-sec-head">Associate</h4>
//                   <a
//                     className="cb-subnav-item cb-sub-lg-sec-item"
//                     target="_self"
//                     //  href="https://www.cricbuzz.com/cricket-team/malaysia/71"
//                     title="Malaysia Cricket Team"
//                   >
//                     Malaysia
//                   </a>
//                   <a
//                     className="cb-subnav-item cb-sub-lg-sec-item"
//                     target="_self"
//                     // href="https://www.cricbuzz.com/cricket-team/nepal/72"
//                     title="Nepal Cricket Team"
//                   >
//                     Nepal
//                   </a>
//                   <a
//                     className="cb-subnav-item cb-sub-lg-sec-item"
//                     target="_self"
//                     // href="https://www.cricbuzz.com/cricket-team/germany/77"
//                     title="Germany Cricket Team"
//                   >
//                     Germany
//                   </a>
//                   <a
//                     className="cb-subnav-item cb-sub-lg-sec-item"
//                     target="_self"
//                     //  href="https://www.cricbuzz.com/cricket-team/namibia/161"
//                     title="Namibia Cricket Team"
//                   >
//                     Namibia
//                   </a>
//                   <a
//                     className="cb-subnav-item cb-sub-lg-sec-item"
//                     target="_self"
//                     // href="https://www.cricbuzz.com/cricket-team/denmark/185"
//                     title="Denmark Cricket Team"
//                   >
//                     Denmark
//                   </a>
//                   <a
//                     className="cb-subnav-item cb-sub-lg-sec-item"
//                     target="_self"
//                     // href="https://www.cricbuzz.com/cricket-team/singapore/190"
//                     title="Singapore Cricket Team"
//                   >
//                     Singapore
//                   </a>
//                   <a
//                     className="cb-subnav-item cb-sub-lg-sec-item"
//                     target="_self"
//                     //  href="https://www.cricbuzz.com/cricket-team/papua-new-guinea/287"
//                     title="Papua New Guinea Cricket Team"
//                   >
//                     Papua New Guinea
//                   </a>
//                   <a
//                     className="cb-subnav-item cb-sub-lg-sec-item"
//                     target="_self"
//                     //  href="https://www.cricbuzz.com/cricket-team/kuwait/298"
//                     title="Kuwait Cricket Team"
//                   >
//                     Kuwait
//                   </a>
//                   <a
//                     className="cb-subnav-item cb-sub-lg-sec-item"
//                     target="_self"
//                     // href="https://www.cricbuzz.com/cricket-team/vanuatu/300"
//                     title="Vanuatu Cricket Team"
//                   >
//                     Vanuatu
//                   </a>
//                   <a
//                     className="cb-subnav-item cb-sub-lg-sec-item"
//                     target="_self"
//                     //  href="https://www.cricbuzz.com/cricket-team/jersey/303"
//                     title="Jersey Cricket Team"
//                   >
//                     Jersey
//                   </a>
//                   <a
//                     className="cb-subnav-item cb-sub-lg-sec-item"
//                     target="_self"
//                     //  href="https://www.cricbuzz.com/cricket-team/oman/304"
//                     title="Oman Cricket Team"
//                   >
//                     Oman
//                   </a>
//                   <a
//                     className="cb-subnav-item cb-sub-lg-sec-item"
//                     target="_self"
//                     //  href="https://www.cricbuzz.com/cricket-team/fiji/343"
//                     title="Fiji Cricket Team"
//                   >
//                     Fiji
//                   </a>
//                 </div>
//               </div>
//               <a
//                 target="_self"
//                 //  href="https://www.cricbuzz.com/cricket-team"
//                 className="cb-sub-lg-more"
//               >
//                 More...
//               </a>
//             </nav>
//           </div>
//           <div
//             className="cb-subnav cb-hm-mnu-itm feature-button cursor-pointer"
//             id="videosDropDown"
//             title="Cricket Videos"
//           >
//             <a
//               className="text-white"
//               target="_self"
//             //  href="https://www.cricbuzz.com/cricket-videos"
//             >
//               Videos
//             </a>
//             <span className="cb-caret-down" />
//             <nav className="cb-sub-navigation">
//               <a
//                 target="_self"
//                 className="cb-subnav-item"
//                 // href="https://www.cricbuzz.com/cricket-videos"
//                 title="All Cricket Videos"
//               >
//                 All Videos
//               </a>
//               <a
//                 target="_self"
//                 className="cb-subnav-item"
//                 // href="https://www.cricbuzz.com/cricket-videos/categories"
//                 title="Cricket Videos Categories"
//               >
//                 Categories
//               </a>
//               <a
//                 target="_self"
//                 className="cb-subnav-item"
//                 // href="https://www.cricbuzz.com/cricket-videos/playlists"
//                 title="Cricket Videos Playlists"
//               >
//                 Playlists
//               </a>
//             </nav>
//           </div>
//           <div
//             className="cb-subnav cb-hm-mnu-itm feature-button cursor-pointer"
//             id="rankingDropDown"
//             title="ICC Rankings"
//           >
//             <a
//               className="text-white"
//             //href="https://www.cricbuzz.com/cricket-stats/icc-rankings/men/batting"
//             >
//               Rankings
//             </a>
//             <span className="cb-caret-down" />
//             <nav className="cb-sub-navigation">
//               <a
//                 className="cb-subnav-item"
//                 target="_self"
//                 // href="https://www.cricbuzz.com/cricket-stats/icc-rankings/men/batting"
//                 title="ICC Rankings Men"
//               >
//                 ICC Rankings - Men
//               </a>
//               <a
//                 className="cb-subnav-item"
//                 target="_self"
//                 //  href="https://www.cricbuzz.com/cricket-stats/icc-rankings/women/batting"
//                 title="ICC Rankings Women"
//               >
//                 ICC Rankings - Women
//               </a>
//             </nav>
//           </div>
//           <div className="cb-subnav cb-hm-mnu-itm feature-button cursor-pointer">
//             More
//             <span className="cb-caret-down" />
//             <nav className="cb-sub-navigation" style={{ right: "0px" }}>
//               <a
//                 className="cb-subnav-item"
//                 target="_self"
//                 //  href="https://www.cricbuzz.com/cricket-stats/points-table/test/icc-world-test-championship"
//                 title="World Test Championship"
//               >
//                 World Test Championship
//               </a>
//               <a
//                 className="cb-subnav-item"
//                 target="_self"
//                 //  href="https://www.cricbuzz.com/ipl-live-streaming"
//                 title="IPL Live Stream"
//               >
//                 IPL Live Stream
//               </a>
//               <a
//                 className="cb-subnav-item"
//                 target="_self"
//                 //  href="https://www.cricbuzz.com/cricket-stats/points-table/odi/icc-men-cricket-world-cup-super-league"
//                 title="World Cup Super League"
//               >
//                 World Cup Super League
//               </a>
//               <a
//                 className="cb-subnav-item"
//                 target="_self"
//                 //href="https://www.cricbuzz.com/cricket-photo-gallery"
//                 title="Photo Gallery"
//               >
//                 Photos
//               </a>
//               <a
//                 className="cb-subnav-item"
//                 target="_self"
//                 // href="https://www.cricbuzz.com/mobileapps"
//                 title="Mobile Apps"
//               >
//                 Mobile Apps
//               </a>
//               <a
//                 className="cb-subnav-item"
//                 target="_self"
//                 // href="https://www.cricbuzz.com/careers"
//                 title="Careers"
//               >
//                 Careers
//               </a>
//               <a
//                 className="cb-subnav-item"
//                 target="_self"
//                 // href="https://www.cricbuzz.com/info/contact"
//                 title="Contact Us"
//               >
//                 Contact Us
//               </a>
//             </nav>
//           </div>
//           <a
//             // href="https://www.cricbuzz.com/cb-plus/premium-content/home"
//             className="cb-plus-menu-button cb-text-gray"
//             id="cricbuzz-plus-main-menu"
//           >
//             Cricbuzz Plus
//           </a>
//           <div
//             ng-controller="SearchCtrl"
//             ng-init=" init(-1, 61, 76, 350, '', 'nav')"
//             className="ng-scope"
//           >
//             <div
//               id="main-menu_search"
//               className="cb-nav-search-wrap"
//               ng-style="{width: inputFocus?'800px':'30px'}"
//               style={{ width: "30px" }}
//             >
//               <div className="cb-col-100 cb-col cb-srch-bar cb-srch-bar-nav">
//                 <form
//                   ng-submit="search_results(false, false)"
//                   name="form"
//                   className="cb-search-form ng-pristine ng-valid ng-valid-maxlength"
//                 >
//                   <div className="cb-search-input-nav">
//                     <div className="cb-search-outer">
//                       <div
//                         className="cb-search-input-wrap"
//                         ng-blur="loseInputFocus()"
//                         ng-click="onInputFocus()"
//                       >
//                         <input
//                           type="text"
//                           className="js-cb-search-input cb-search-input-elem cb-search-input-elem-nav form-control cb-car-inp cb-srch-bg ng-pristine ng-untouched ng-valid ng-empty ng-valid-maxlength"
//                           ng-change="suggest_search()"
//                           maxLength={500}
//                           ng-model="searchText"
//                           id="search_bar_menu"
//                           name="search"
//                           defaultValue="suggest.title"
//                           autoComplete="off"
//                           ng-class="{'cb-search-input-elem-error-nav':errorText, 'cb-srch-high-zIndex':dropdownVisible, 'cb-srch-input-focus':inputFocus}"
//                           placeholder
//                           ng-keydown="onKeyPress($event)"
//                           ng-focus="onInputFocus()"
//                           ng-blur="loseInputFocus()"
//                           ng-model-options="{ debounce: 400 }"
//                         />
//                         <span className="cb-ico cb-search-input-icon cb-search-input-icon-nav" />
//                         <span
//                           className="cb-srch-cross-new cb-srch-cross-new-nav cb-font-14 ng-hide"
//                           ng-class="{'cb-srch-cross-focus': inputFocus, 'cb-srch-high-zIndex':dropdownVisible, 'disp-none':clearVisible}"
//                           ng-click="reset_form('view');"
//                           ng-show="searchText.length > 0"
//                           id="cb-search-menubar-clear"
//                         >
//                           ✖
//                         </span>
//                       </div>
//                       <div
//                         ng-show="dropdownVisible"
//                         className="cb-srch-backdrop ng-hide"
//                         ng-click="hideDropdown()"
//                       />
//                       <div
//                         ng-show="dropdownVisible && searchText.length >= 2 && search_ftr_suggst.length > 0"
//                         className="cb-main-srch-box-wrap ng-hide"
//                       >
//                         <ul className="cb-main-srch-box" id="searchBox_nav">
//                           {/* ngRepeat: suggest in search_ftr_suggst track by $index */}
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                   <div
//                     className="cb-search-submit-nav"
//                     ng-class="{'cb-search-submit-input-focus': inputFocus, 'cb-search-submit-error': errorText}"
//                   >
//                     <a
//                       className="text-white cb-srch-bttn"
//                       ng-class="{'cb-srch-high-zIndex':dropdownVisible}"
//                       ng-click="search_results(false, true)"
//                     >
//                       SEARCH
//                     </a>
//                   </div>
//                   <input
//                     type="hidden"
//                     name="anticsrf"
//                     defaultValue="bowled"
//                     autoComplete="off"
//                   />
//                 </form>
//               </div>
//               <style
//                 dangerouslySetInnerHTML={{
//                   __html:
//                     "\n                .cb-srch-ico {\n                  margin: 0;\n                }\n                .cb-user-itm {\n                  position: absolute;\n                  top: 0;\n                  right: 5px;\n                }\n              ",
//                 }}
//               />
//             </div>
//           </div>
//           <div className="cb-user-itm cb-subnav">
//             <a
//               id="cb-plus-user-icon"
//             //href="https://www.cricbuzz.com/premium-subscription/user/login"
//             >
//               <span className="cb-plus-ico cb-user-icon" />
//             </a>
//             <nav
//               id="cb-plus-dropdown"
//               className="cb-sub-navigation"
//               style={{ right: "0px", display: "none" }}
//             >
//               <a
//                 className="cb-subnav-item"
//                 target="_self"
//                 // href="https://www.cricbuzz.com/premium-subscription/user/account-info"
//                 title="My Account"
//               >
//                 My Account
//               </a>
//               <a
//                 className="cb-subnav-item"
//                 target="_self"
//                 title="Sign Out"
//                 ng-click="sign_out_user(false)"
//               >
//                 Sign Out
//               </a>
//             </nav>
//           </div>
//         </nav>
//         <style
//           dangerouslySetInnerHTML={{
//             __html:
//               "\n          .cb-text-link {\n            color: #1866db;\n          }\n          .cb-plus-menu-button {\n            padding: 8px 14px;\n            background: #fff;\n            border-radius: 18px;\n            border: 0;\n          }\n          .cb-plus-menu-button:hover,\n          .cb-plus-menu-button:focus,\n          .cb-plus-menu-button:active {\n            background: #fff;\n          }\n        ",
//           }}
//         />
//       </div>
//     </header>
//   );
// };

// export default Header;

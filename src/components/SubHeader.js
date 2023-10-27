import React from "react";

const SubHeader = () => {
  return (
    // <nav className="cb-mat-mnu" ng-init="direction='up'">
    //   <a
    //     className="cb-mat-mnu-itm cb-ovr-flo cb-mat-mnu-ttl"
    //     target="_self"
    //     title
    //     href="https://www.cricbuzz.com/cricket-match/live-scores"
    //     id="live-scores-link"
    //   >
    //     MATCHES
    //   </a>
    //   <a
    //     className="cb-mat-mnu-itm cb-ovr-flo"
    //     title="Sri Lanka v Australia, 14th Match - AUS Won"
    //     href="https://www.cricbuzz.com/live-cricket-scores/75479/sl-vs-aus-14th-match-icc-cricket-world-cup-2023"
    //     target="_self"
    //   >
    //     SL vs AUS - AUS Won
    //   </a>
    //   <a
    //     className="cb-mat-mnu-itm cb-ovr-flo"
    //     title="South Africa v Netherlands, 15th Match - Preview"
    //     href="https://www.cricbuzz.com/live-cricket-scores/75486/rsa-vs-ned-15th-match-icc-cricket-world-cup-2023"
    //     target="_self"
    //   >
    //     RSA vs NED - Preview
    //   </a>
    //   <a
    //     className="cb-mat-mnu-itm cb-ovr-flo"
    //     title="Afghanistan v England, 13th Match - AFG Won"
    //     href="https://www.cricbuzz.com/live-cricket-scores/75472/afg-vs-eng-13th-match-icc-cricket-world-cup-2023"
    //     target="_self"
    //   >
    //     AFG vs ENG - AFG Won
    //   </a>
    //   <a
    //     className="cb-mat-mnu-itm cb-ovr-flo"
    //     title="Haryana v Mumbai, Group A - MUM Won"
    //     href="https://www.cricbuzz.com/live-cricket-scores/75665/har-vs-mum-group-a-syed-mushtaq-ali-trophy-2023"
    //     target="_self"
    //   >
    //     HAR vs MUM - MUM Won
    //   </a>
    //   <a
    //     className="cb-mat-mnu-itm cb-ovr-flo"
    //     title="Baroda v Jammu and Kashmir, Group A - BRD Won"
    //     href="https://www.cricbuzz.com/live-cricket-scores/75696/brd-vs-jk-group-a-syed-mushtaq-ali-trophy-2023"
    //     target="_self"
    //   >
    //     BRD vs JK - BRD Won
    //   </a>
    //   <span ng-click="(direction=='up')?direction = 'down' : direction = 'up'">
    //     <a
    //       className="cb-mat-mnu-itm cb-mat-mnu-all"
    //       ng-class="{true:'cb-mat-mnu-cls'}[direction=='down']"
    //       id="match-dropdown"
    //     >
    //       <span
    //         ng-bind="(direction=='up') ? 'ALL': 'CLOSE'"
    //         className="ng-binding"
    //       >
    //         ALL
    //       </span>
    //       <span
    //         ng-class="(direction=='up') ? 'cb-caret-down' : 'cb-caret-up'"
    //         className="cb-caret-down"
    //       />
    //     </a>
    //   </span>
    // </nav>

    <div
      className="html-refresh ng-isolate-scope"
      //url="/api/html/matches-menu"
      timeout={300000}
      disable-first-load="true"
    >
      <div className="cb-col cb-col-100 mrgn-btm-5">
        <nav className="cb-mat-mnu" ng-init="direction='up'">
          <a
            className="cb-mat-mnu-itm cb-ovr-flo cb-mat-mnu-ttl"
            target="_self"
            title
            // href="https://www.cricbuzz.com/cricket-match/live-scores"
            id="live-scores-link"
          >
            MATCHES
          </a>
          <a
            className="cb-mat-mnu-itm cb-ovr-flo"
            title="Sri Lanka v Australia, 14th Match - AUS Won"
            //  href="https://www.cricbuzz.com/live-cricket-scores/75479/sl-vs-aus-14th-match-icc-cricket-world-cup-2023"
            target="_self"
          >
            SL vs AUS - AUS Won
          </a>
          <a
            className="cb-mat-mnu-itm cb-ovr-flo"
            title="South Africa v Netherlands, 15th Match - Preview"
            //  href="https://www.cricbuzz.com/live-cricket-scores/75486/rsa-vs-ned-15th-match-icc-cricket-world-cup-2023"
            target="_self"
          >
            RSA vs NED - Preview
          </a>
          <a
            className="cb-mat-mnu-itm cb-ovr-flo"
            title="Afghanistan v England, 13th Match - AFG Won"
            // href="https://www.cricbuzz.com/live-cricket-scores/75472/afg-vs-eng-13th-match-icc-cricket-world-cup-2023"
            target="_self"
          >
            AFG vs ENG - AFG Won
          </a>
          <a
            className="cb-mat-mnu-itm cb-ovr-flo"
            title="Haryana v Mumbai, Group A - MUM Won"
            // href="https://www.cricbuzz.com/live-cricket-scores/75665/har-vs-mum-group-a-syed-mushtaq-ali-trophy-2023"
            target="_self"
          >
            HAR vs MUM - MUM Won
          </a>
          <a
            className="cb-mat-mnu-itm cb-ovr-flo"
            title="Baroda v Jammu and Kashmir, Group A - BRD Won"
            // href="https://www.cricbuzz.com/live-cricket-scores/75696/brd-vs-jk-group-a-syed-mushtaq-ali-trophy-2023"
            target="_self"
          >
            BRD vs JK - BRD Won
          </a>
          <span ng-click="(direction=='up')?direction = 'down' : direction = 'up'">
            <a
              className="cb-mat-mnu-itm cb-mat-mnu-all"
              ng-class="{true:'cb-mat-mnu-cls'}[direction=='down']"
              id="match-dropdown"
            >
              <span
                ng-bind="(direction=='up') ? 'ALL': 'CLOSE'"
                className="ng-binding"
              >
                ALL
              </span>
              <span
                ng-class="(direction=='up') ? 'cb-caret-down' : 'cb-caret-up'"
                className="cb-caret-down"
              />
            </a>
          </span>
        </nav>
        <div id="matchmenu">
          <div className="cb-mm-wrp up">
            <div className="cb-scg-drp-dwn cb-col cb-col-100 cb-mnu-up">
              <nav className="nav cb-mm-nvtb" ng-init="option= 'all'">
                <a
                  className="cb-nav-pill-2 active"
                  ng-click="option='all'"
                  style={{ marginRight: "20px" }}
                >
                  All
                </a>
                <a
                  className="cb-nav-pill-2"
                  ng-click="option='live'"
                  style={{ marginRight: "20px" }}
                >
                  Live Now
                </a>
                <a
                  className="cb-nav-pill-2"
                  ng-click="option='today'"
                  style={{ marginRight: "20px" }}
                >
                  Today
                </a>
              </nav>
              <style
                className="ng-binding"
                dangerouslySetInnerHTML={{
                  __html:
                    "\n                    .cb-nt-all {\n                      opacity: 0.4 !important;\n                    }\n                  ",
                }}
              />
              <ul className="cb-scg-drp-dwn-ul">
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mm-typ">INTERNATIONAL</div>
                    <div className="cb-scg-srs-nm">ICC Cricket WC 2023</div>
                    <div className="cb-mtch-all cb-nt-live cb-nt-today">
                      <a
                        target="_self"
                        //href="https://www.cricbuzz.com/live-cricket-scores/75472/afg-vs-eng-13th-match-icc-cricket-wc-2023"
                        title="Afghanistan v England, 13th Match - AFG Won"
                      >
                        <span className="cb-mm-mtch-tm">
                          Afghanistan vs England
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">13th Match</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live cb-nt-today">
                      <a
                        target="_self"
                        // href="https://www.cricbuzz.com/live-cricket-scores/75479/sl-vs-aus-14th-match-icc-cricket-wc-2023"
                        title="Sri Lanka v Australia, 14th Match - AUS Won"
                      >
                        <span className="cb-mm-mtch-tm">
                          Sri Lanka vs Australia
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">14th Match</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live">
                      <a
                        target="_self"
                        // href="https://www.cricbuzz.com/live-cricket-scores/75486/rsa-vs-ned-15th-match-icc-cricket-wc-2023"
                        title="South Africa v Netherlands, 15th Match - Preview"
                      >
                        <span className="cb-mm-mtch-tm">
                          South Africa vs Netherlands
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">15th Match</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live cb-nt-today">
                      <a
                        target="_self"
                        //  href="https://www.cricbuzz.com/live-cricket-scores/75490/nz-vs-afg-16th-match-icc-cricket-wc-2023"
                        title="New Zealand v Afghanistan, 16th Match - Upcoming"
                      >
                        <span className="cb-mm-mtch-tm">
                          New Zealand vs Afghanistan
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">16th Match</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-scg-srs-nm">Gibraltar v Luxembourg</div>
                    <div className="cb-mtch-all cb-nt-live cb-nt-today">
                      <a
                        target="_self"
                        //   href="https://www.cricbuzz.com/live-cricket-scores/82313/gib-vs-lux-1st-t20i-gibraltar-v-luxembourg"
                        title="Gibraltar v Luxembourg, 1st T20I - GIB Won"
                      >
                        <span className="cb-mm-mtch-tm">
                          Gibraltar vs Luxembourg
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">1st T20I</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live cb-nt-today">
                      <a
                        target="_self"
                        // href="https://www.cricbuzz.com/live-cricket-scores/82318/lux-vs-gib-2nd-t20i-gibraltar-v-luxembourg"
                        title="Luxembourg v Gibraltar, 2nd T20I - LUX Won"
                      >
                        <span className="cb-mm-mtch-tm">
                          Luxembourg vs Gibraltar
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">2nd T20I</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-scg-srs-nm">West Africa Trophy</div>
                    <div className="cb-mtch-all cb-nt-live cb-nt-today">
                      <a
                        target="_self"
                        //  href="https://www.cricbuzz.com/live-cricket-scores/82213/gh-vs-sle-3rd-place-play-off-west-africa-trophy"
                        title="Ghana v Sierra Leone, 3rd Place Play-off - SLE Won"
                      >
                        <span className="cb-mm-mtch-tm">
                          Ghana vs Sierra Leone
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">3rd Place Play-off</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live cb-nt-today">
                      <a
                        target="_self"
                        //  href="https://www.cricbuzz.com/live-cricket-scores/82215/nga-vs-rwa-final-west-africa-trophy"
                        title="Nigeria v Rwanda, Final - NGA Won"
                      >
                        <span className="cb-mm-mtch-tm">Nigeria vs Rwanda</span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">Final</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-scg-srs-nm">
                      Nepal T20I Tri-Series 2023
                    </div>
                    <div className="cb-mtch-all cb-nt-live cb-nt-today">
                      <a
                        target="_self"
                        // href="https://www.cricbuzz.com/live-cricket-scores/82229/nep-vs-uae-1st-match-nepal-t20i-tri-series-2023"
                        title="Nepal v United Arab Emirates, 1st Match - Upcoming"
                      >
                        <span className="cb-mm-mtch-tm">
                          Nepal vs United Arab Emirates
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">1st Match</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mm-typ">DOMESTIC</div>
                    <div className="cb-scg-srs-nm">SMA Trophy 2023</div>
                    <div className="cb-mtch-all cb-nt-live cb-nt-today">
                      <a
                        target="_self"
                        //   href="https://www.cricbuzz.com/live-cricket-scores/75672/cg-vs-miz-group-a-sma-trophy-2023"
                        title="Chhattisgarh v Mizoram, Group A - CG Won"
                      >
                        <span className="cb-mm-mtch-tm">
                          Chhattisgarh vs Mizoram
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">Group A</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live cb-nt-today">
                      <a
                        target="_self"
                        // href="https://www.cricbuzz.com/live-cricket-scores/75721/skm-vs-ser-group-b-sma-trophy-2023"
                        title="Sikkim v Services, Group B - SER Won"
                      >
                        <span className="cb-mm-mtch-tm">
                          Sikkim vs Services
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">Group B</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live cb-nt-today">
                      <a
                        target="_self"
                        // href="https://www.cricbuzz.com/live-cricket-scores/75756/arnp-vs-guj-group-c-sma-trophy-2023"
                        title="Arunachal Pradesh v Gujarat, Group C - GUJ Won"
                      >
                        <span className="cb-mm-mtch-tm">
                          Arunachal Pradesh vs Gujarat
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">Group C</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live cb-nt-today">
                      <a
                        target="_self"
                        // href="https://www.cricbuzz.com/live-cricket-scores/75703/pdc-vs-raj-group-d-sma-trophy-2023"
                        title="Puducherry v Rajasthan, Group D - Abandon"
                      >
                        <span className="cb-mm-mtch-tm">
                          Puducherry vs Rajasthan
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">Group D</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live cb-nt-today">
                      <a
                        target="_self"
                        // href="https://www.cricbuzz.com/live-cricket-scores/75696/brd-vs-jk-group-a-sma-trophy-2023"
                        title="Baroda v Jammu and Kashmir, Group A - BRD Won"
                      >
                        <span className="cb-mm-mtch-tm">
                          Baroda vs Jammu and Kashmir
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">Group A</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live cb-nt-today">
                      <a
                        target="_self"
                        // href="https://www.cricbuzz.com/live-cricket-scores/75742/bih-vs-cdg-group-b-sma-trophy-2023"
                        title="Bihar v Chandigarh, Group B - CDG Won"
                      >
                        <span className="cb-mm-mtch-tm">
                          Bihar vs Chandigarh
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">Group B</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live cb-nt-today">
                      <a
                        target="_self"
                        // href="https://www.cricbuzz.com/live-cricket-scores/75735/mp-vs-ngl-group-e-sma-trophy-2023"
                        title="Madhya Pradesh v Nagaland, Group E - Abandon"
                      >
                        <span className="cb-mm-mtch-tm">
                          Madhya Pradesh vs Nagaland
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">Group E</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live cb-nt-today">
                      <a
                        target="_self"
                        // href="https://www.cricbuzz.com/live-cricket-scores/75679/utk-vs-vid-group-d-sma-trophy-2023"
                        title="Uttarakhand v Vidarbha, Group D - VID Won"
                      >
                        <span className="cb-mm-mtch-tm">
                          Uttarakhand vs Vidarbha
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">Group D</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live cb-nt-today">
                      <a
                        target="_self"
                        // href="https://www.cricbuzz.com/live-cricket-scores/75668/mnp-vs-rlys-group-c-sma-trophy-2023"
                        title="Manipur v Railways, Group C - RLYS Won"
                      >
                        <span className="cb-mm-mtch-tm">
                          Manipur vs Railways
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">Group C</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live cb-nt-today">
                      <a
                        target="_self"
                        // href="https://www.cricbuzz.com/live-cricket-scores/75717/kar-vs-tn-group-e-sma-trophy-2023"
                        title="Karnataka v Tamil Nadu, Group E - Abandon"
                      >
                        <span className="cb-mm-mtch-tm">
                          Karnataka vs Tamil Nadu
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">Group E</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live cb-nt-today">
                      <a
                        target="_self"
                        // href="https://www.cricbuzz.com/live-cricket-scores/75658/goa-vs-ap-group-c-sma-trophy-2023"
                        title="Goa v Andhra, Group C - GOA Won"
                      >
                        <span className="cb-mm-mtch-tm">Goa vs Andhra</span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">Group C</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live cb-nt-today">
                      <a
                        target="_self"
                        //  href="https://www.cricbuzz.com/live-cricket-scores/75686/mgly-vs-hyd-group-a-sma-trophy-2023"
                        title="Meghalaya v Hyderabad, Group A - HYD Won"
                      >
                        <span className="cb-mm-mtch-tm">
                          Meghalaya vs Hyderabad
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">Group A</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live cb-nt-today">
                      <a
                        target="_self"
                        //  href="https://www.cricbuzz.com/live-cricket-scores/75731/odsa-vs-asm-group-b-sma-trophy-2023"
                        title="Odisha v Assam, Group B - ODSA Won"
                      >
                        <span className="cb-mm-mtch-tm">Odisha vs Assam</span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">Group B</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live cb-nt-today">
                      <a
                        target="_self"
                        //  href="https://www.cricbuzz.com/live-cricket-scores/75749/saur-vs-pun-group-c-sma-trophy-2023"
                        title="Saurashtra v Punjab, Group C - SAUR Won"
                      >
                        <span className="cb-mm-mtch-tm">
                          Saurashtra vs Punjab
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">Group C</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live cb-nt-today">
                      <a
                        target="_self"
                        // href="https://www.cricbuzz.com/live-cricket-scores/75693/ben-vs-mah-group-d-sma-trophy-2023"
                        title="Bengal v Maharashtra, Group D - MAH Won"
                      >
                        <span className="cb-mm-mtch-tm">
                          Bengal vs Maharashtra
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">Group D</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live cb-nt-today">
                      <a
                        target="_self"
                        // href="https://www.cricbuzz.com/live-cricket-scores/75724/del-vs-up-group-e-sma-trophy-2023"
                        title="Delhi v Uttar Pradesh, Group E - Abandon"
                      >
                        <span className="cb-mm-mtch-tm">
                          Delhi vs Uttar Pradesh
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">Group E</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live cb-nt-today">
                      <a
                        target="_self"
                        //  href="https://www.cricbuzz.com/live-cricket-scores/75665/har-vs-mum-group-a-sma-trophy-2023"
                        title="Haryana v Mumbai, Group A - MUM Won"
                      >
                        <span className="cb-mm-mtch-tm">Haryana vs Mumbai</span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">Group A</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live cb-nt-today">
                      <a
                        target="_self"
                        //  href="https://www.cricbuzz.com/live-cricket-scores/75710/ker-vs-hp-group-b-sma-trophy-2023"
                        title="Kerala v Himachal Pradesh, Group B - KER Won"
                      >
                        <span className="cb-mm-mtch-tm">
                          Kerala vs Himachal Pradesh
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">Group B</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live">
                      <a
                        target="_self"
                        //  href="https://www.cricbuzz.com/live-cricket-scores/75836/goa-vs-mnp-group-c-sma-trophy-2023"
                        title="Goa v Manipur, Group C - Preview"
                      >
                        <span className="cb-mm-mtch-tm">Goa vs Manipur</span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">Group C</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live">
                      <a
                        target="_self"
                        //  href="https://www.cricbuzz.com/live-cricket-scores/75763/hyd-vs-jk-group-a-sma-trophy-2023"
                        title="Hyderabad v Jammu and Kashmir, Group A - Preview"
                      >
                        <span className="cb-mm-mtch-tm">
                          Hyderabad vs Jammu and Kashmir
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">Group A</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live">
                      <a
                        target="_self"
                        // href="https://www.cricbuzz.com/live-cricket-scores/75808/asm-vs-bih-group-b-sma-trophy-2023"
                        title="Assam v Bihar, Group B - Preview"
                      >
                        <span className="cb-mm-mtch-tm">Assam vs Bihar</span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">Group B</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live">
                      <a
                        target="_self"
                        //// href="https://www.cricbuzz.com/live-cricket-scores/75843/mgly-vs-mum-group-a-sma-trophy-2023"
                        title="Meghalaya v Mumbai, Group A - Preview"
                      >
                        <span className="cb-mm-mtch-tm">
                          Meghalaya vs Mumbai
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">Group A</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live">
                      <a
                        target="_self"
                        // href="https://www.cricbuzz.com/live-cricket-scores/75791/del-vs-mp-group-e-sma-trophy-2023"
                        title="Delhi v Madhya Pradesh, Group E - Preview"
                      >
                        <span className="cb-mm-mtch-tm">
                          Delhi vs Madhya Pradesh
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">Group E</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live">
                      <a
                        target="_self"
                        //  href="https://www.cricbuzz.com/live-cricket-scores/75784/hp-vs-odsa-group-b-sma-trophy-2023"
                        title="Himachal Pradesh v Odisha, Group B - Preview"
                      >
                        <span className="cb-mm-mtch-tm">
                          Himachal Pradesh vs Odisha
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">Group B</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live">
                      <a
                        target="_self"
                        //  href="https://www.cricbuzz.com/live-cricket-scores/75826/ap-vs-pun-group-c-sma-trophy-2023"
                        title="Andhra v Punjab, Group C - Preview"
                      >
                        <span className="cb-mm-mtch-tm">Andhra vs Punjab</span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">Group C</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live">
                      <a
                        target="_self"
                        // href="https://www.cricbuzz.com/live-cricket-scores/75766/mah-vs-utk-group-d-sma-trophy-2023"
                        title="Maharashtra v Uttarakhand, Group D - Preview"
                      >
                        <span className="cb-mm-mtch-tm">
                          Maharashtra vs Uttarakhand
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">Group D</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live">
                      <a
                        target="_self"
                        //  href="https://www.cricbuzz.com/live-cricket-scores/75857/ben-vs-raj-group-d-sma-trophy-2023"
                        title="Bengal v Rajasthan, Group D - Preview"
                      >
                        <span className="cb-mm-mtch-tm">
                          Bengal vs Rajasthan
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">Group D</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live">
                      <a
                        target="_self"
                        //  href="https://www.cricbuzz.com/live-cricket-scores/75801/tn-vs-up-group-e-sma-trophy-2023"
                        title="Tamil Nadu v Uttar Pradesh, Group E - Preview"
                      >
                        <span className="cb-mm-mtch-tm">
                          Tamil Nadu vs Uttar Pradesh
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">Group E</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live">
                      <a
                        target="_self"
                        //  href="https://www.cricbuzz.com/live-cricket-scores/75773/brd-vs-miz-group-a-sma-trophy-2023"
                        title="Baroda v Mizoram, Group A - Preview"
                      >
                        <span className="cb-mm-mtch-tm">Baroda vs Mizoram</span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">Group A</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live">
                      <a
                        target="_self"
                        //  href="https://www.cricbuzz.com/live-cricket-scores/75822/cdg-vs-skm-group-b-sma-trophy-2023"
                        title="Chandigarh v Sikkim, Group B - Preview"
                      >
                        <span className="cb-mm-mtch-tm">
                          Chandigarh vs Sikkim
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">Group B</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live">
                      <a
                        target="_self"
                        //  href="https://www.cricbuzz.com/live-cricket-scores/75850/arnp-vs-rlys-group-c-sma-trophy-2023"
                        title="Arunachal Pradesh v Railways, Group C - Preview"
                      >
                        <span className="cb-mm-mtch-tm">
                          Arunachal Pradesh vs Railways
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">Group C</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live">
                      <a
                        target="_self"
                        // href="https://www.cricbuzz.com/live-cricket-scores/75794/ker-vs-ser-group-b-sma-trophy-2023"
                        title="Kerala v Services, Group B - Preview"
                      >
                        <span className="cb-mm-mtch-tm">
                          Kerala vs Services
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">Group B</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live">
                      <a
                        target="_self"
                        //  href="https://www.cricbuzz.com/live-cricket-scores/75829/guj-vs-saur-group-c-sma-trophy-2023"
                        title="Gujarat v Saurashtra, Group C - Preview"
                      >
                        <span className="cb-mm-mtch-tm">
                          Gujarat vs Saurashtra
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">Group C</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live">
                      <a
                        target="_self"
                        //  href="https://www.cricbuzz.com/live-cricket-scores/75780/jhkd-vs-pdc-group-d-sma-trophy-2023"
                        title="Jharkhand v Puducherry, Group D - Preview"
                      >
                        <span className="cb-mm-mtch-tm">
                          Jharkhand vs Puducherry
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">Group D</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live">
                      <a
                        target="_self"
                        //  href="https://www.cricbuzz.com/live-cricket-scores/75815/ngl-vs-tri-group-e-sma-trophy-2023"
                        title="Nagaland v Tripura, Group E - Preview"
                      >
                        <span className="cb-mm-mtch-tm">
                          Nagaland vs Tripura
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">Group E</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live">
                      <a
                        target="_self"
                        //  href="https://www.cricbuzz.com/live-cricket-scores/75854/cg-vs-har-group-a-sma-trophy-2023"
                        title="Chhattisgarh v Haryana, Group A - Preview"
                      >
                        <span className="cb-mm-mtch-tm">
                          Chhattisgarh vs Haryana
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">Group A</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-scg-srs-nm">
                      CSA Provincial One-Day Challenge Division One 2023
                    </div>
                    <div className="cb-mtch-all cb-nt-live cb-nt-today">
                      <a
                        target="_self"
                        // href="https://www.cricbuzz.com/live-cricket-scores/80899/wpr-vs-dol-20th-match-csa-provincial-one-day-challenge-division-one-2023"
                        title="Western Province v Dolphins, 20th Match - WPR Won"
                      >
                        <span className="cb-mm-mtch-tm">
                          Western Province vs Dolphins
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">20th Match</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live cb-nt-today">
                      <a
                        target="_self"
                        //  href="https://www.cricbuzz.com/live-cricket-scores/80892/kznin-vs-war-19th-match-csa-provincial-one-day-challenge-division-one-2023"
                        title="KwaZulu-Natal Inland v Warriors, 19th Match - WAR Won"
                      >
                        <span className="cb-mm-mtch-tm">
                          KwaZulu-Natal Inland vs Warriors
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">19th Match</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live cb-nt-today">
                      <a
                        target="_self"
                        //   href="https://www.cricbuzz.com/live-cricket-scores/80906/tit-vs-kznin-22nd-match-csa-provincial-one-day-challenge-division-one-2023"
                        title="Titans v KwaZulu-Natal Inland, 22nd Match - Upcoming"
                      >
                        <span className="cb-mm-mtch-tm">
                          Titans vs KwaZulu-Natal Inland
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">22nd Match</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live cb-nt-today">
                      <a
                        target="_self"
                        //  href="https://www.cricbuzz.com/live-cricket-scores/80901/bol-vs-war-21st-match-csa-provincial-one-day-challenge-division-one-2023"
                        title="Boland v Warriors, 21st Match - Upcoming"
                      >
                        <span className="cb-mm-mtch-tm">
                          Boland vs Warriors
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">21st Match</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-scg-srs-nm">
                      Sheffield Shield 2023-24
                    </div>
                    <div className="cb-mtch-all">
                      <a
                        target="_self"
                        // href="https://www.cricbuzz.com/live-cricket-scores/79090/vic-vs-ql-4th-match-sheffield-shield-2023-24"
                        title="Victoria v Queensland, 4th Match - Live"
                      >
                        <span className="cb-mm-mtch-tm">
                          Victoria vs Queensland
                        </span>
                        <span className="cb-mm-liv-tag">&nbsp;&nbsp;LIVE</span>
                      </a>
                      <div className="cb-mm-mtch-nm">4th Match</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all">
                      <a
                        target="_self"
                        //  href="https://www.cricbuzz.com/live-cricket-scores/79097/saus-vs-nsw-5th-match-sheffield-shield-2023-24"
                        title="South Australia v New South Wales, 5th Match - Live"
                      >
                        <span className="cb-mm-mtch-tm">
                          South Australia vs New South Wales
                        </span>
                        <span className="cb-mm-liv-tag">&nbsp;&nbsp;LIVE</span>
                      </a>
                      <div className="cb-mm-mtch-nm">5th Match</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live">
                      <a
                        target="_self"
                        // href="https://www.cricbuzz.com/live-cricket-scores/79111/tas-vs-wa-6th-match-sheffield-shield-2023-24"
                        title="Tasmania v Western Australia, 6th Match - Stumps"
                      >
                        <span className="cb-mm-mtch-tm">
                          Tasmania vs Western Australia
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">6th Match</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-scg-srs-nm">
                      CSA Provincial One-Day Challenge Division Two 2023
                    </div>
                    <div className="cb-mtch-all cb-nt-live cb-nt-today">
                      <a
                        target="_self"
                        //  href="https://www.cricbuzz.com/live-cricket-scores/81071/bor-vs-saep-27th-match-csa-provincial-one-day-challenge-division-two-2023"
                        title="Border v South Africa Emerging Players, 27th Match - Abandon"
                      >
                        <span className="cb-mm-mtch-tm">
                          Border vs South Africa Emerging Players
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">27th Match</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mtch-all cb-nt-live cb-nt-today">
                      <a
                        target="_self"
                        // href="https://www.cricbuzz.com/live-cricket-scores/81074/kng-vs-ncape-28th-match-csa-provincial-one-day-challenge-division-two-2023"
                        title="Knights v Northern Cape, 28th Match - KNG Won"
                      >
                        <span className="cb-mm-mtch-tm">
                          Knights vs Northern Cape
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">28th Match</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-scg-srs-nm">
                      Australia Domestic One-Day Cup 2023-24
                    </div>
                    <div className="cb-mtch-all cb-nt-live cb-nt-today">
                      <a
                        target="_self"
                        // href="https://www.cricbuzz.com/live-cricket-scores/79126/ql-vs-vic-10th-match-australia-domestic-one-day-cup-2023-24"
                        title="Queensland v Victoria, 10th Match - Upcoming"
                      >
                        <span className="cb-mm-mtch-tm">
                          Queensland vs Victoria
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">10th Match</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-mm-typ">WOMEN</div>
                    <div className="cb-scg-srs-nm">
                      South Africa Women v New Zealand Women
                    </div>
                    <div className="cb-mtch-all cb-nt-live cb-nt-today">
                      <a
                        target="_self"
                        //  href="https://www.cricbuzz.com/live-cricket-scores/73677/rsaw-vs-nzw-5th-t20i-south-africa-women-v-new-zealand-women"
                        title="South Africa Women v New Zealand Women, 5th T20I - RSAW Won"
                      >
                        <span className="cb-mm-mtch-tm">
                          South Africa Women vs New Zealand Women
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">5th T20I</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-scg-srs-nm">
                      Ireland Women v Scotland Women
                    </div>
                    <div className="cb-mtch-all cb-nt-live">
                      <a
                        target="_self"
                        //  href="https://www.cricbuzz.com/live-cricket-scores/82322/irew-vs-scow-1st-odi-ireland-women-v-scotland-women"
                        title="Ireland Women v Scotland Women, 1st ODI - Preview"
                      >
                        <span className="cb-mm-mtch-tm">
                          Ireland Women vs Scotland Women
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">1st ODI</div>
                    </div>
                  </div>
                </li>
                <li className="cb-lst-mtch cb-lst-dom">
                  <div style={{ display: "inline-block" }}>
                    <div className="cb-scg-srs-nm">ARGW V CHIW, 2023</div>
                    <div className="cb-mtch-all cb-nt-live cb-nt-today">
                      <a
                        target="_self"
                        //  href="https://www.cricbuzz.com/live-cricket-scores/82308/argw-vs-chlw-3rd-t20i-argw-v-chiw-2023"
                        title="Argentina Women v Chile Women, 3rd T20I - ARGW Won"
                      >
                        <span className="cb-mm-mtch-tm">
                          Argentina Women vs Chile Women
                        </span>
                        <span className="cb-mm-liv-tag" />
                      </a>
                      <div className="cb-mm-mtch-nm">3rd T20I</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;

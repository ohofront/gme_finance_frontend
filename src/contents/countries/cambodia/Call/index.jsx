import ApplyButton2 from "components/ApplyButton2";
import DataTable from "components/DataTable";
import Divider from "components/Divider";
import RowBgWrapper from "components/RowBgWrapper";
import RowBgWrapper2 from "components/RowBgWrapper2";
import { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import {
  calls,
  facebooks,
  feature,
  headers,
  items,
} from "utils/Countries/Cambodia/detail";
import card2 from "assets/images/countries/cambodia/card2.jpg";
import call from "assets/images/countries/cambodia/call.png";

const Call = () => {
  useEffect(() => {
    console.log(headers);
  }, []);
  return (
    <>
      <QuickHeaderRowInner>
        <RowBgWrapper2 />
        <QuickContentDarkLeft>
          <LicenseContainer>
            <LicenseColumnInner>
              <LicenseWpbWrapper>
                <Divider height={25} />
                <ContentElement>
                  <ContentWbpWrapper>
                    <img
                      src={call}
                      style={{
                        display: "block",
                        maxWidth: "100%",
                        borderRadius: 20,
                      }}
                    />
                    <ApplyButton2 />
                  </ContentWbpWrapper>
                </ContentElement>
              </LicenseWpbWrapper>
            </LicenseColumnInner>
          </LicenseContainer>
          <VideoContainer>
            <LicenseColumnInner>
              <LicenseWpbWrapper>
                <Divider height={25} />
                <ContentElement>
                  <ContentWbpWrapper>
                    {calls.map((item, index) => {
                      return <p style={{ paddingBottom: 27 }}>{item}</p>;
                    })}
                  </ContentWbpWrapper>
                </ContentElement>
              </LicenseWpbWrapper>
            </LicenseColumnInner>
          </VideoContainer>
        </QuickContentDarkLeft>
      </QuickHeaderRowInner>
    </>
  );
};
export default Call;
const QuickHeaderRowInner = styled.div`
  position: relative;
`;
const QuickContentDarkLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  float: none;
  margin-bottom: 100px !important;
  z-index: 10;
  margin-left: -1%;
  margin-right: -1%;
  width: auto;
  position: relative;
  &::after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
`;

const LicenseContainer = styled.div`
  display: block;
  float: none;
  margin-right: 0;
  margin-left: 0;
  padding-left: 1%;
  padding-right: 1%;
  box-shadow: none;
  background-position: center;
  position: relative;
  @media screen and (min-width: 690px) {
    width: 25%;
  }
`;
const LicenseColumnInner = styled.div`
  position: relative;
`;
const LicenseWpbWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const ContentElement = styled.div`
  margin-bottom: 0;
  display: flex;
  text-align: center;
`;
const ContentWbpWrapper = styled.div``;
const VideoContainer = styled.div`
  display: block;
  float: none;
  margin-right: 0;
  margin-left: 0;
  padding-left: 1%;
  padding-right: 1%;
  box-shadow: none;
  background-position: center;
  position: relative;
  @media screen and (min-width: 690px) {
    width: 75%;
  }
`;

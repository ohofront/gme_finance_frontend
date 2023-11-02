import ApplyButton from "components/ApplyButton";
import ApplyButton2 from "components/ApplyButton2";
import DataTable from "components/DataTable";
import Divider from "components/Divider";
import RowBgWrapper from "components/RowBgWrapper";
import RowBgWrapper2 from "components/RowBgWrapper2";
import { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { feature, headers, items } from "utils/Countries/Bangladesh/detail";
const DetailContent = () => {
  useEffect(() => {
    console.log(headers);
  }, []);
  return (
    <>
      <QuickHeaderRowInner>
        <RowBgWrapper />
        <QuickContentDarkLeft>
          <DataTable headers={headers} items={items} selectable={false} />
        </QuickContentDarkLeft>
      </QuickHeaderRowInner>
      <QuickHeaderRowInner>
        <RowBgWrapper2 />
        <QuickContentDarkLeft>
          <LicenseContainer>
            <LicenseColumnInner>
              <LicenseWpbWrapper>
                <Divider height={25} />
                <ContentElement>
                  <ContentWbpWrapper>
                    <p style={{ paddingBottom: 27 }}>
                      <b>দেখে নিন আমাদের সার্ভিস কেন সেরাঃ</b>
                    </p>
                    {feature.map((item, index) => {
                      return <p style={{ paddingBottom: 27 }}>{item}</p>;
                    })}
                  </ContentWbpWrapper>
                </ContentElement>
              </LicenseWpbWrapper>
            </LicenseColumnInner>
          </LicenseContainer>
        </QuickContentDarkLeft>
        <ApplyButton2 />
      </QuickHeaderRowInner>
    </>
  );
};
export default DetailContent;
const QuickHeaderRowInner = styled.div`
  margin-bottom: 24px;
  margin-top: 50px !important;
  position: relative;
`;
const QuickContentDarkLeft = styled.div`
  display: flex;
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
const LicenseDarkLeft = styled.div`
  display: flex;
  justify-content: center;
  flew-wrap: wrap;
  float: none;
  margin-bottom: 0 !important;
  z-index: 10;
  margin-left: -1%;
  margin-right: -1%;
  width: auto;
  position: relative;
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
    width: 100%;
  }
`;
const LicenseColumnInner = styled.div`
  position: relative;
`;
const LicenseWpbWrapper = styled.div``;
const ContentElement = styled.div`
  margin-bottom: 0;
  margin-top: 100px !important;
  padding-left: 200px;
`;
const ContentWbpWrapper = styled.div``;

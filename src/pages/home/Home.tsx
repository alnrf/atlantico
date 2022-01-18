import React, { useState, useEffect } from "react";
import { BounceLoader } from "react-spinners";
import Card from "../../components/card/Card";
import { css } from "@emotion/react";
import { getCasesByCountry, getWorldCases } from "../../services/Services";
import * as S from "./home.styled";
import Selector from "../../components/selector/Selector";
import { FcSearch } from "react-icons/fc";
import Countries from "../../utils/countries.json";
import Flag from "react-world-flags";
import moment from "moment";
import CountryCard from "../../components/countryCard/CountryCard";

interface WorldProps {
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

interface CountryProps {
  ID?: string;
  Country?: string;
  CountryCode?: string | undefined;
  Province?: string;
  City?: string;
  CityCode?: number;
  Lat?: string;
  Lon?: string;
  Confirmed?: number;
  Deaths?: number;
  Recovered?: number;
  Active?: number;
  Date?: string;
}

const override = css`
  display: block;
  margin: 0 auto;
`;

const Spinner = () => {
  let color = "#7FFF7F";
  return (
    <S.Spinner>
      <BounceLoader color={color} loading={true} css={override} size={100} />
    </S.Spinner>
  );
};

function Home() {
  const [worldCases, setWorldCases] = useState<WorldProps>();
  const [countryCases, setCountrCases] = useState<CountryProps>();
  const [countryCasesPeriod, setCountrCasesPeriod] = useState<CountryProps>();
  const [isLoading, setLoading] = useState(false);
  const [isLoadingCountry, setLoadingCountry] = useState(false);
  const [error, setError] = useState(false);
  const [isByDate, setIsByDate] = useState(false);
  const [isByInterval, setIsByInterval] = useState(false);
  const [country, setCountry] = useState();
  const [countryCode, setCountryCode] = useState();
  const [countryName, setCountryName] = useState();
  const [currentDate, setCurrentDate] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  useEffect(() => {
    setLoading(true);
    getWorldCases()
      .then((res) => {
        setWorldCases(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const onSelectCountry = (e: any) => {
    setCountry(e.target.value);
  };

  const handleCurrentDate = (e: any) => {
    setIsByDate(true);
    setIsByInterval(false);
    setCurrentDate(e.target.value);
  };
  const handleStartDate = (e: any) => {
    setStartDate(e.target.value);
  };

  const handleEndDate = (e: any) => {
    setIsByDate(false);
    setIsByInterval(true);
    setEndDate(e.target.value);
  };

  const searchByDate = (country: string, start: string | undefined) => {
    setLoadingCountry(true);
    getCasesByCountry(country, `${start}T0:0:00Z`, `${start}T23:59:00Z`)
      .then((res) => {
        setCountrCases(res[0]);
        setCountryCode(res[0].CountryCode);
        setLoadingCountry(false);
      })
      .catch((err) => {
        setError(true);
        setLoadingCountry(false);
      });
  };

  const searchByPeriod = (
    country: string,
    start: string | undefined,
    end: string | undefined
  ) => {
    setLoadingCountry(true);
    getCasesByCountry(country, start, end)
      .then((res) => {
        setCountrCasesPeriod(res);
        setCountryCode(res[0].CountryCode);
        setCountryName(res[0].Country);
        setLoadingCountry(false);
      })
      .catch((err) => {
        setError(true);
        setLoadingCountry(false);
      });
  };

  return (
    <>
      <S.Main>
        <S.Box>
          <S.MainTitle>Global Situation</S.MainTitle>
          {isLoading ? (
            <Spinner />
          ) : !error ? (
            <>
              <S.CardWrap>
                <Card
                  value={worldCases?.TotalConfirmed}
                  title="Confirmed"
                  type="Confirmed"
                />
                <Card
                  value={worldCases?.TotalRecovered}
                  title="Recovered"
                  type="Recovered"
                />
                <Card
                  value={worldCases?.TotalDeaths}
                  title="Deaths"
                  type="Deaths"
                />
              </S.CardWrap>
            </>
          ) : (
            <S.Error>Something gone wrong. Please try again later!</S.Error>
          )}
        </S.Box>
        <S.BoxCountry>
          <S.MainTitle>Situation by Country</S.MainTitle>
          <S.SelectContainer>
            <Selector
              options={Countries}
              onChange={onSelectCountry}
              id="countryList"
              name="countryList"
              placeholder="Select a country..."
              alignContent="center"
              value={country}
            />
          </S.SelectContainer>
          {country && (
            <>
              <S.DateContainer>
                <S.SearchByDate>
                  <S.InputGroup>
                    <S.Label>By Date</S.Label>
                    <S.WrapByDate>
                      <S.RowWrap>
                        <input type="date" onChange={handleCurrentDate} />
                      </S.RowWrap>
                      <S.SearchButton
                        onClick={() =>
                          currentDate
                            ? searchByDate(country, currentDate)
                            : alert("Please, insert a date to search!")
                        }
                        style={{
                          cursor: currentDate ? "pointer" : "not-allowed",
                        }}
                      >
                        <S.IconSearch as={FcSearch} />
                        <S.SearchButtonTxt>Search</S.SearchButtonTxt>
                      </S.SearchButton>
                    </S.WrapByDate>
                  </S.InputGroup>
                </S.SearchByDate>
                <S.SearchByInterval>
                  <S.InputGroup>
                    <S.Label>By Period</S.Label>
                    <S.WrapByDate>
                      <S.RowWrap>
                        <S.Text style={{ marginRight: "8px" }}>From:</S.Text>
                        <input type="date" onChange={handleStartDate} />
                      </S.RowWrap>
                      <S.RowWrap>
                        <S.Text style={{ marginRight: "8px" }}>To:</S.Text>
                        <input type="date" onChange={handleEndDate} />
                      </S.RowWrap>
                      <S.SearchButton
                        style={{ cursor: endDate ? "pointer" : "not-allowed" }}
                        onClick={() =>
                          endDate
                            ? searchByPeriod(country, startDate, endDate)
                            : alert(
                                "Please, insert the start and final date to search!"
                              )
                        }
                      >
                        <S.IconSearch as={FcSearch} />
                        <S.SearchButtonTxt>Search</S.SearchButtonTxt>
                      </S.SearchButton>
                    </S.WrapByDate>
                  </S.InputGroup>
                </S.SearchByInterval>
              </S.DateContainer>
            </>
          )}

          {countryCases && isByDate && !isByInterval && (
            <>
              <S.ByDayContainer>
                {isLoadingCountry ? (
                  <Spinner />
                ) : !error ? (
                  <>
                    <S.CountryInfo>
                      <S.RowWrapCountry>
                        <S.FlagContainer>
                          <Flag code={countryCode} />
                        </S.FlagContainer>
                        <S.ColWrap>
                          <S.CountryName>{countryCases?.Country}</S.CountryName>
                          <S.WrapCountry>
                            <S.UpdateTitle>Last Update:</S.UpdateTitle>
                            <S.Updatevalue>
                              {moment(countryCases?.Date).format("DD/MM/YYYY")}
                            </S.Updatevalue>
                          </S.WrapCountry>
                          <S.Alert>
                            * The information may not be up to date as of the
                            date provided.
                          </S.Alert>
                        </S.ColWrap>
                      </S.RowWrapCountry>
                    </S.CountryInfo>
                    <S.CardWrapResult>
                      <Card
                        value={countryCases?.Confirmed}
                        title="Confirmed "
                        type="Confirmed"
                      />
                      <Card
                        value={countryCases?.Recovered}
                        title="Recovered"
                        type="Recovered"
                      />
                      <Card
                        value={countryCases?.Deaths}
                        title="Deaths"
                        type="Deaths"
                      />
                      <Card
                        value={countryCases?.Active}
                        title="Active Cases"
                        type="Active"
                      />
                    </S.CardWrapResult>
                  </>
                ) : (
                  <S.Error>
                    Something gone wrong. Please try again later!
                  </S.Error>
                )}
              </S.ByDayContainer>
            </>
          )}

          {countryCasesPeriod && !isByDate && isByInterval && (
            <>
              <S.ByIntervalContainer>
                {isLoadingCountry ? (
                  <Spinner />
                ) : !error ? (
                  <>
                    <S.CountryInfo>
                      <S.RowWrapCountry>
                        <S.FlagContainer>
                          <Flag code={countryCode} />
                        </S.FlagContainer>
                        <S.ColWrap>
                          <S.CountryName>{countryName}</S.CountryName>
                          <S.RowWrap>
                            <S.UpdateTitle>Search range:</S.UpdateTitle>
                            <S.Updatevalue>
                              {`${moment(startDate).format(
                                "DD/MM/YYYY"
                              )} to ${moment(endDate).format("DD/MM/YYYY")}`}
                            </S.Updatevalue>
                          </S.RowWrap>
                          <S.Alert>
                            * The information may not be up to date as of the
                            date provided.
                          </S.Alert>
                        </S.ColWrap>
                      </S.RowWrapCountry>
                    </S.CountryInfo>
                    <S.RowCards>
                      <CountryCard data={countryCasesPeriod} />
                    </S.RowCards>
                  </>
                ) : (
                  <S.Error>
                    Something gone wrong. Please try again later!
                  </S.Error>
                )}
              </S.ByIntervalContainer>
            </>
          )}
        </S.BoxCountry>
      </S.Main>
    </>
  );
}

export default Home;

import { Container, Typography } from "@material-ui/core";
import sortBy from "lodash.sortby";
import moment from "moment";
import React, { useState, useEffect } from "react";
import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Highlight";
import Summary from "./components/Summary";
import { api } from "./services/api";
import "moment/locale/vi";

moment.locale("vi");

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState("");
  const [report, setReport] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      const data = await api.getDataApiCountries();
      console.log({ data });
      const countchi = sortBy(data, "Country");
      setCountries(countchi);
      setSelectedCountryId("vn");
    };

    getCountries();
  }, []);

  const handleOnChange = (e) => {
    setSelectedCountryId(e.target.value);
  };
  useEffect(() => {
    if (selectedCountryId) {
      const { Slug } = countries.find(
        (country) => country.ISO2.toLowerCase() === selectedCountryId
      );
      // console.log({ selectedCountryId, Slug });
      //call api

      const getDataReport = async () => {
        const data = await api.getReportByCountry(Slug);
        data.pop();
        setReport(data);
      };
      getDataReport();
    }
  }, [selectedCountryId, countries]);

  console.log(report);

  return (
    <Container style={{ marginTop: "20px" }}>
      <Typography variant="h2" component="h2" style={{ textAlign: "center" }}>
        So lieu covid-19
      </Typography>
      <Typography style={{ textAlign: "center" }}>
        {moment().format("LLL")}
      </Typography>
      <CountrySelector
        countries={countries}
        handleOnChange={handleOnChange}
        value={selectedCountryId}
      />
      <Highlight report={report} />
      <Summary report={report} />
    </Container>
  );
}

export default App;

import {
  FormControl,
  FormHelperText,
  InputLabel,
  makeStyles,
  NativeSelect,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: `${theme.spacing(3)}px 0`,
  },
}));

function CountrySelector({ value, handleOnChange, countries }) {
  const styles = useStyles();
  return (
    <FormControl className={styles.formControl}>
      <InputLabel htmlFor="" shrink>
        Quoc gia
      </InputLabel>
      <NativeSelect
        value={value}
        onChange={handleOnChange}
        inputProps={{
          name: "country",
          id: "country-selector",
        }}
      >
        {countries.map((country) => (
          <option key={country.ISO2} value={country.ISO2.toLowerCase()}>
            {country.Country}
          </option>
        ))}
      </NativeSelect>
      <FormHelperText>Lua chon quoc gia</FormHelperText>
    </FormControl>
  );
}

export default CountrySelector;

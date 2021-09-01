## API

[api](https://documenter.getpostman.com/view/10808728/SzS8rjbc)

## UI

[material](https://material-ui.com/getting-started/installation/)

[grid](https://material-ui.com/components/grid/)

**`material su dung theo he thong 12 cot nen muon chia thanh 3 cot tren mot hang thi`**

```bash
<Grid container spacing={3}>

<Grid item sm={4} sx={12}>
 cot thu 1
</Grid>

<Grid item sm={4} sx={12}>
 cot thu 2
</Grid>

<Grid item sm={4} sx={12}>
 cot thu 3
</Grid>

</Grid>
```

[highcharts](https://github.com/highcharts/highcharts-react)

[moment](https://github.com/moment/moment)

**`Giup format Date`**

```bash
import moment from 'moment';

moment(date).format('YYYY-MM-DD')
```

**`Giup lay ra thoi gian hien tai`**
`Vi moment hien thi theo ngay 'en' nen minh can phai chuyen sang 'vn'`

```bash
import "moment/locale/vi";

moment.locale("vi");
```

[lodash](https://www.npmjs.com/package/lodash)

`Giup sap xep theo thu tu alpha b`

```bash
import sortBy from "lodash.sortby";

sortBy(collection, iteratees)

.collection: This parameter holds the collection to iterate over.
.iteratees: This parameter holds the iteratees to sort by and are invoked with one argument(value).
```

[react-countup](https://www.npmjs.com/package/react-countup?activeTab=readme)

`Giup tao hieu ung duration`

```bash
import CountUp from "react-countup";

<CountUp end={0} duration={2} separator=" "></CountUp>

This will start a count up transition from 0 to 100 on render.

```

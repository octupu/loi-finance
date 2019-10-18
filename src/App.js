
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FinanceEvolutionChart from './FinanceEvolutionChart';
import config from './config';
import SpentColumnChart from './SpentColumnChart.js';
import WaffleChart from './WaffleChart';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {''}
      <Link color="inherit" href="https://twitter.com/abderrahmen_g">
        إتصل بنا -
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const MAIN_COLOR = config.palette[0];
const ACTION_COLOR = config.palette[7];
const SECONDARY_COLOR = config.secondaryColor;
const SIZE_FINANCE_2019 = 42740;
const SIZE_FINANCE_2020 = 47227;
const SIZE_SUPPORT_MONEY_2020 = 4180;
const SIZE_INVESTMENT_MONEY_2020 = 6900;
const SPENT_MONEY_DATA = [{ "name": "hiring", "name_ar": "نفقات التأجير", "cost20": 19030, "percentage20": 40.3, "cost19": 17165, "percentage19": 42.13 }, { "name": "Debt", "name_ar": "خدمة الدين العمومي", "cost20": 11678, "percentage20": 24.72, "percentage19": 10.68, "cost19": 9307 }, { "name": "Developmental expenses", "name_ar": "نفقات ذات صبغة تنموية", "cost20": 6900, "percentage20": 14.6, "percentage19": 22.84, "cost19": 5099 }, { "name": "support", "name_ar": "نفقات الدعم", "cost20": 4180, "percentage20": 8.85, "percentage19": 10.68, "cost19": 4350 }, { "name": "Unpredicted cases", "name_ar": "النفقات الطارئة", "cost20": 767, "percentage20": 1.62, "percentage19": 1.82, "cost19": 744 }];
const SUPPORT_SPENT_MONEY_DATA = [{ "name": "electricity and fuel", "name_ar": "دعم المحروقات و الكهرباء", "cost20": 1880, "details": [{ "name": "منحة بمبلغ 1880 م د بميزانية وزارة الصناعة بعنوان دعم المحروقات", "value": 1880, "percentage": 45 }], "percentage": 45 }, { "name": "necessary needs", "name_ar": "دعم المواد الأساسية", "cost20": 1800, "details": [{ "name": "الحبوب", "value": 1325, "percentage": 73.6 }, { "name": "الزيت النباتي", "value": 240, "percentage": 13.3 }, { "name": "الحليب", "value": 180, "percentage": 10 }, { "name": "العجين الغذائي والكسكسي", "value": 40, "percentage": 2 }, { "name": "السكر", "value": 10, "percentage": 0.5 }, { "name": "الورق المدرسي", "value": 5, "percentage": 0.3 }], "percentage": 43 }, { "name": "transportation", "name_ar": "دعم النقل العمومي", "cost20": 500, "details": [{ "name": "الشركات الجهوية للنقل", "value": 290, "percentage": 58 }, { "name": "شركة نقل تونس : النقل عبر الحافلات", "value": 99, "percentage": 19.8 }, { "name": "الشركة الوطنية للسكك الحديدية", "value": 50, "percentage": 10 }, { "name": "شركة نقل تونس : النقل عبر الميترو", "value": 36, "percentage": 7.2 }, { "name": "الشركة الجديدة للنقل بقرقنة", "value": 12.5, "percentage": 2.5 }, { "name": "شركة الخطوط التونسية السريعة", "value": 10, "percentage": 2 }, { "name": "الشركة الوطنية للنقل بين المدن", "value": 2.5, "percentage": 0.5 }], "percentage": 12 }];
const INVESTMENT_PER_MINESTRY = [{ "name_ar": "رئاسة الحكومة", "value": 9.3 }, { "name_ar": "الداخلية", "value": 230 }, { "name_ar": "الدفاع الوطني", "value": 550 }, { "name_ar": "العدل", "value": 73 }, { "name_ar": "الشؤون الخارجية", "value": 8 }, { "name_ar": "الشؤون المحلية و البيئة", "value": 431 }, { "name_ar": "الشؤون الدينية", "value": 2.5 }, { "name_ar": "المالية", "value": 130 }, { "name_ar": "أملاك الدولة و الشؤون العقارية", "value": 13.7 }, { "name_ar": "التنمية والاستثمار والتعاون الدولي", "value": 806.1 }, { "name_ar": "الفلاحة والموارد المائية والصيد البحري", "value": 989 }, { "name_ar": "الصناعة والطاقة", "value": 236 }, { "name_ar": "التجارة", "value": 40 }, { "name_ar": "تكنولوجيات الاتصال والاقتصاد الرقمي", "value": 110 }, { "name_ar": "السياحة والصناعات التقليدية", "value": 82 }, { "name_ar": "التجهيز والتهيئة الترابية", "value": 1260 }, { "name_ar": "النقل", "value": 203 }, { "name_ar": "الشؤون الثقافية", "value": 119 }, { "name_ar": "الشباب والرياضة", "value": 100 }, { "name_ar": "شؤون المرأة والأسرة والطفولة وكبار السن", "value": 33 }, { "name_ar": "الصحة", "value": 330 }, { "name_ar": "الشؤون الاجتماعية", "value": 48.5 }, { "name_ar": "التربية", "value": 324.5 }, { "name_ar": "التعليم العالي و البحث العلمي", "value": 175 }, { "name_ar": "التكوين المهني والتشغيل", "value": 525 }]
const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  button: {
    margin: theme.spacing(1),
  },
  subtitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginTop: theme.spacing(5),
    borderTop: `1px solid ${theme.palette.divider}`,

  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));
const prepareSpentMoneyColumnChartData = (rawData, detailsLoop) => {
  let categories = [], data20 = [], data19 = [];
  if (detailsLoop) {
    rawData.map((element, id) => {
      categories.push(element.name_ar);
      let arr = []
      element.details.map(detailedElm => {
        //data20.push({ stack:id, name: detailedElm.name, data: [{id,y:detailedElm.value}], perc: (detailedElm.value * 100 / element.cost20).toFixed(2) })
        data20.push([id, detailedElm.value, detailedElm.name])
      })
    });
    return { series: [{ data: data20 }], categories }
  } else {
    rawData.map(element => {
      categories.push(element.name_ar);
      data20.push({ name: "2020", y: element.cost20, percentage: (element.cost20 * 100 / SIZE_FINANCE_2020).toFixed(2), color: MAIN_COLOR })
      data19.push({ name: "2019", y: element.cost19, percentage: (element.cost19 * 100 / SIZE_FINANCE_2019).toFixed(2), color: SECONDARY_COLOR })
    });
    return {
      series: [{ name: '2020', color: MAIN_COLOR, data: data20 }, { name: '2019', color: SECONDARY_COLOR, data: data19 }],
      categories
    }
  }
}
const prepareSpentMoneyWaffleChartData = (rawData, PercentageDiviser) => {
  let data = [];
  rawData.map((element, id) => {
    if (PercentageDiviser) {
      data.push({ "id": element.name_ar, "label": element.name_ar, "cost": element.cost20, "value": (element.cost20 * 100 / PercentageDiviser).toFixed(2), "color": config.palette[id] })
    }
  });
  return data
}
const prepareMoneyPerMinistryColumnChartData = (rawData) => {
  rawData.sort((a, b) => (a.value > b.value) ? 1 : ((b.value > a.value) ? -1 : 0));
  let categories = [], data = [];
  rawData.map(element => {
    categories.push(element.name_ar);
    data.push({ name: "2020", y: element.value, percentage: (element.value * 100 / SIZE_INVESTMENT_MONEY_2020).toFixed(2), color: MAIN_COLOR })
  });
  return { series: [{ data }], categories }
}

export default function App() {
  const classes = useStyles();
  const [activeChartBtn, setActiveChartBtn] = React.useState(['primary', 'default'])
  const [activeChartBtnSupport, setActiveChartBtnSupport] = React.useState(['default', 'primary'])
  const [activeChartBtnMinistrySpent, setActiveChartBtnMinistrySpent] = React.useState(['primary', 'default'])
  const handleChartBtn = (btnId, name) => {
    let newActiveChartBtn = ['default', 'default'];
    newActiveChartBtn[btnId] = 'primary';
    if (name === 'activeChartBtn') {
      setActiveChartBtn(newActiveChartBtn)
    } else if (name === 'activeChartBtnSupport') {
      setActiveChartBtnSupport(newActiveChartBtn)
    } else if (name === 'activeChartBtnMinistrySpent') {
      setActiveChartBtnMinistrySpent(newActiveChartBtn)
    }
  }
  return (
    <React.Fragment>
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>

          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              About
            </Link>
            {/* <Link variant="button" color="textPrimary" href="#" className={classes.link}>
            </Link> */}
          </nav>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          قانون المالية لسنة 2020
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          <a dir='rtl' href="http://bit.ly/2VPdLUN" target='_blank'>هنا</a> بعض المرئيات حول قانون المالية. بإمكانك تحميل التقرير من
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <FinanceEvolutionChart title='تطور حجم الميزانية' subTitle='حجم الميزانية بالم د' percentageValue={false} data={[{ name: "2016", y: 29150, percentage: null }, { name: "2017", y: 32200, percentage: 10.46 }, { name: "2018", y: 35851, percentage: 11.33 }, { name: "2019", y: 42740, percentage: 13.63 }, { name: "2020", y: 47227, percentage: 9.5, color: ACTION_COLOR }]} />
        <Typography className={classes.subtitle} variant="h5" align="center" color="textSecondary" component="div">
          <p dir='rtl' > </p>
        </Typography>
        <FinanceEvolutionChart title='إنخفاض نسبة عجز الميزانية' subTitle='نسبة عجز الميزانية' percentageValue={true} data={[{ "name": "2016", "y": 6.1 }, { "name": "2017", "y": 6.1 }, { "name": "2018", "y": 4.8 }, { "name": "2019", "y": 3.5 }, { "name": "2020", "y": 3, color: ACTION_COLOR }, { "name": "2021", "y": 2.4 }, { "name": "2022", "y": 2 }]} />

        <Typography className={classes.subtitle} variant="h5" align="center" color="textSecondary" component="div">
          <p dir='rtl' > النفقات</p>
        </Typography>
        <Grid container spacing={8}>
          <Grid item xs={12} >
            <Button variant="contained" color={activeChartBtn[0]} onClick={handleChartBtn.bind(this, 0, 'activeChartBtn')} className={classes.button}>
              مخطط كعكة الوفل - Waffle Chart
        </Button>
            <Button variant="contained" color={activeChartBtn[1]} onClick={handleChartBtn.bind(this, 1, 'activeChartBtn')} className={classes.button}>
              المخطط العمودي - Column chart
          </Button>
          </Grid>
        </Grid>
        {
          activeChartBtn[0] === 'primary' ?
            <div style={{ height: '60vh', width: '100%' }}>
              <WaffleChart data={prepareSpentMoneyWaffleChartData(SPENT_MONEY_DATA, SIZE_FINANCE_2020)} colorSchema='nivo' title=' 2020 نفقات ميزانية الدولة' />
            </div>
            : <SpentColumnChart
              stackingChart={false}
              legend={true}
              colorByPoint={false}
              type='column'
              tooltip={['name', 'النفقات:', 'النسبة من الميزانية: % ']}
              data={prepareSpentMoneyColumnChartData(SPENT_MONEY_DATA)} title='نفقات ميزانية الدولة' axis='بالم د ' mainColor={MAIN_COLOR} secondaryColor={SECONDARY_COLOR} />
        }

        <div style={{ marginTop: '96px' }}>

          <Grid container spacing={8}>
            <Grid item xs={12} >
              <Button variant="contained" color={activeChartBtnSupport[0]} onClick={handleChartBtn.bind(this, 0, 'activeChartBtnSupport')} className={classes.button}>
                مخطط كعكة الوفل - Waffle chart
      </Button>
              <Button variant="contained" color={activeChartBtnSupport[1]} onClick={handleChartBtn.bind(this, 1, 'activeChartBtnSupport')} className={classes.button}>
                المخطط الأفقي - Bar chart
        </Button>
            </Grid>
          </Grid>
        </div>
        {
          activeChartBtnSupport[0] === 'primary' ?
            <div style={{ height: '60vh' }}>
              <WaffleChart data={prepareSpentMoneyWaffleChartData(SUPPORT_SPENT_MONEY_DATA, SIZE_SUPPORT_MONEY_2020)} colorSchema='set3' title=' تفصيل نفقات الدعم' />
            </div>
            : <div >
              <SpentColumnChart
                stackingChart={true}
                legend={false}
                colorByPoint={true}
                type='bar'
                tooltip={['key', 'النفقات:', 'النسبة: % ']}
                data={prepareSpentMoneyColumnChartData(SUPPORT_SPENT_MONEY_DATA, true)}
                title='نفقات ميزانية الدولة'
                axis='بالم د ' mainColor={MAIN_COLOR} secondaryColor={SECONDARY_COLOR} />
            </div>
        }


        <Typography className={classes.subtitle} variant="h5" align="center" color="textSecondary" component="div">
          <p dir='rtl' > الاستثمارات، اطلع على الصفحة 54 -> 122 من تقرير المالية  </p>
        </Typography>
        {
          activeChartBtnMinistrySpent[0] === 'primary' ?
            <SpentColumnChart
              stackingChart={false}
              legend={false}
              colorByPoint={false}
              type='column'
              tooltip={['category', 'النفقات:', 'النسبة: % ']}
              data={prepareMoneyPerMinistryColumnChartData(INVESTMENT_PER_MINESTRY)}
              title='حجم الاستثمارات حسب كل وزارة '
              axis='بالم د ' mainColor={MAIN_COLOR} secondaryColor={SECONDARY_COLOR} />
            :
            <div style={{ height: '60vh' }}>
              <WaffleChart data={prepareSpentMoneyWaffleChartData(SUPPORT_SPENT_MONEY_DATA, SIZE_SUPPORT_MONEY_2020)} colorSchema='set3' title=' تفصيل نفقات الدعم' />
            </div>
        }
      </Container>
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Copyright />
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}
import MyTreeSelect from '@/components/TreeSelect';
import { Watermark } from 'antd';
import ReactEcharts from 'echarts-for-react';
import styles from './index.less';

export default function Data() {
  let option1 = {
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 90, name: '及格（60-70）' },
          { value: 30, name: '挂科（<50）' },
          { value: 10, name: '高分（90-100）' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };

  const colors = ['#5470C6', '#91CC75', '#EE6666'];

  let option2 = {
    color: colors,

    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
    },
    grid: {
      right: '20%',
    },
    toolbox: {
      feature: {
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    legend: {
      data: ['Evaporation', 'Precipitation', 'Temperature'],
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {
          alignWithLabel: true,
        },
        // prettier-ignore
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
    ],
    yAxis: [
      {
        type: 'value',
        name: 'Evaporation',
        position: 'right',
        alignTicks: true,
        axisLine: {
          show: true,
          lineStyle: {
            color: colors[0],
          },
        },
        axisLabel: {
          formatter: '{value} ml',
        },
      },
      {
        type: 'value',
        name: 'Precipitation',
        position: 'right',
        alignTicks: true,
        offset: 80,
        axisLine: {
          show: true,
          lineStyle: {
            color: colors[1],
          },
        },
        axisLabel: {
          formatter: '{value} ml',
        },
      },
      {
        type: 'value',
        name: '温度',
        position: 'left',
        alignTicks: true,
        axisLine: {
          show: true,
          lineStyle: {
            color: colors[2],
          },
        },
        axisLabel: {
          formatter: '{value} °C',
        },
      },
    ],
    series: [
      {
        name: 'Evaporation',
        type: 'bar',
        data: [
          2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,
        ],
      },
      {
        name: 'Precipitation',
        type: 'bar',
        yAxisIndex: 1,
        data: [
          2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
        ],
      },
      {
        name: 'Temperature',
        type: 'line',
        yAxisIndex: 2,
        data: [
          2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2,
        ],
      },
    ],
  };
  let option3 = {
    title: {
      text: 'Funnel',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}%',
    },
    toolbox: {
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {},
      },
    },
    legend: {
      data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order'],
    },

    series: [
      {
        name: 'Funnel',
        type: 'funnel',
        left: '10%',
        top: 60,
        bottom: 60,
        width: '80%',
        min: 0,
        max: 100,
        minSize: '0%',
        maxSize: '100%',
        sort: 'descending',
        gap: 2,
        label: {
          show: true,
          position: 'inside',
        },
        labelLine: {
          length: 10,
          lineStyle: {
            width: 1,
            type: 'solid',
          },
        },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1,
        },
        emphasis: {
          label: {
            fontSize: 20,
          },
        },
        data: [
          { value: 60, name: 'Visit' },
          { value: 40, name: 'Inquiry' },
          { value: 20, name: 'Order' },
          { value: 80, name: 'Click' },
          { value: 100, name: 'Show' },
        ],
      },
    ],
  };
  const dataAll = [
    [
      [10.0, 8.04],
      [8.0, 6.95],
      [13.0, 7.58],
      [9.0, 8.81],
      [11.0, 8.33],
      [14.0, 9.96],
      [6.0, 7.24],
      [4.0, 4.26],
      [12.0, 10.84],
      [7.0, 4.82],
      [5.0, 5.68],
    ],
    [
      [10.0, 9.14],
      [8.0, 8.14],
      [13.0, 8.74],
      [9.0, 8.77],
      [11.0, 9.26],
      [14.0, 8.1],
      [6.0, 6.13],
      [4.0, 3.1],
      [12.0, 9.13],
      [7.0, 7.26],
      [5.0, 4.74],
    ],
    [
      [10.0, 7.46],
      [8.0, 6.77],
      [13.0, 12.74],
      [9.0, 7.11],
      [11.0, 7.81],
      [14.0, 8.84],
      [6.0, 6.08],
      [4.0, 5.39],
      [12.0, 8.15],
      [7.0, 6.42],
      [5.0, 5.73],
    ],
    [
      [8.0, 6.58],
      [8.0, 5.76],
      [8.0, 7.71],
      [8.0, 8.84],
      [8.0, 8.47],
      [8.0, 7.04],
      [8.0, 5.25],
      [19.0, 12.5],
      [8.0, 5.56],
      [8.0, 7.91],
      [8.0, 6.89],
    ],
  ];

  const markLineOpt: echarts.MarkLineComponentOption = {
    animation: false,
    label: {
      formatter: 'y = 0.5 * x + 3',
      align: 'right',
    },
    lineStyle: {
      type: 'solid',
    },
    tooltip: {
      formatter: 'y = 0.5 * x + 3',
    },
    data: [
      [
        {
          coord: [0, 3],
          symbol: 'none',
        },
        {
          coord: [20, 13],
          symbol: 'none',
        },
      ],
    ],
  };

  let option4 = {
    title: {
      text: "Anscombe's quartet",
      left: 'center',
      top: 0,
    },
    grid: [
      { left: '7%', top: '7%', width: '38%', height: '38%' },
      { right: '7%', top: '7%', width: '38%', height: '38%' },
      { left: '7%', bottom: '7%', width: '38%', height: '38%' },
      { right: '7%', bottom: '7%', width: '38%', height: '38%' },
    ],
    tooltip: {
      formatter: 'Group {a}: ({c})',
    },
    xAxis: [
      { gridIndex: 0, min: 0, max: 20 },
      { gridIndex: 1, min: 0, max: 20 },
      { gridIndex: 2, min: 0, max: 20 },
      { gridIndex: 3, min: 0, max: 20 },
    ],
    yAxis: [
      { gridIndex: 0, min: 0, max: 15 },
      { gridIndex: 1, min: 0, max: 15 },
      { gridIndex: 2, min: 0, max: 15 },
      { gridIndex: 3, min: 0, max: 15 },
    ],
    series: [
      {
        name: 'I',
        type: 'scatter',
        xAxisIndex: 0,
        yAxisIndex: 0,
        data: dataAll[0],
        markLine: markLineOpt,
      },
      {
        name: 'II',
        type: 'scatter',
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: dataAll[1],
        markLine: markLineOpt,
      },
      {
        name: 'III',
        type: 'scatter',
        xAxisIndex: 2,
        yAxisIndex: 2,
        data: dataAll[2],
        markLine: markLineOpt,
      },
      {
        name: 'IV',
        type: 'scatter',
        xAxisIndex: 3,
        yAxisIndex: 3,
        data: dataAll[3],
        markLine: markLineOpt,
      },
    ],
  };

  return (
    <>
      <Watermark content="张航">
        <MyTreeSelect />
        <div className={styles.content}>
          <div className={styles.container}>
            <ReactEcharts option={option1} />
            平均科目成绩统计表
          </div>
          <div className={styles.container}>
            <ReactEcharts option={option2} />
            平均科目成绩统计表
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.container}>
            <ReactEcharts option={option3} />
            平均科目成绩统计表
          </div>
          <div className={styles.container}>
            <ReactEcharts option={option4} />
            平均科目成绩统计表
          </div>
        </div>
      </Watermark>
    </>
  );
}

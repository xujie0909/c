<template>
  <div :class="className" :id="id" :style="{height:height,width:width}"/>
</template>

<script>
  import echarts from 'echarts'
  import resize from "../dashboard/admin/components/mixins/resize";
  import {sourceProportion} from '@/api/bill'


  require('echarts/theme/macarons') // echarts theme
  /*import resize from './mixins/resize'*/

  export default {
    props: {
      className: {
        type: String,
        default: 'chart01'
      },
      id: {
        type: String,
        default: 'chart'
      },
      width: {
        type: String,
        default: '30%'
      },
      height: {
        type: String,
        default: '350px'
      },
    },
    data() {
      return {
        charData01:{
          sourceTypes: [],
          typeAndValue: [],
        },
      }
    },
    mixins: [resize],
    mounted() {
      this.getChartData()
    },
    methods: {
      //获取图表数据
      getChartData(charType) {
        sourceProportion(charType).then(data => {
          console.log(data.data);
          this.charData01.sourceTypes = data.data.sourceTypes;
          this.charData01.typeAndValue = data.data.typeAndValue;
          this.initChart();
        })
      },


      //初始化图标
      initChart() {
        console.log(this.charData01)
        console.log(this.charData01.typeAndValue)
        this.chart = echarts.init(this.$el, 'macarons');
        this.chart.setOption({
          title: {
            text: '消费渠道占比',
            subtext: '',
            left: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            /*data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']*/
            data: this.charData01.sourceTypes,
          },
          series: [
            {
              name: '消费渠道',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: this.charData01.typeAndValue,
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        });
      },

      setOptions({expectedData, actualData} = {}) {
        this.chart.setOption({
          xAxis: {
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            boundaryGap: false,
            axisTick: {
              show: false
            }
          },
          grid: {
            left: 10,
            right: 10,
            bottom: 20,
            top: 30,
            containLabel: true
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            },
            padding: [5, 10]
          },
          yAxis: {
            axisTick: {
              show: false
            }
          },
          legend: {
            data: ['expected', 'actual']
          },
          series: [{
            name: 'expected', itemStyle: {
              normal: {
                color: '#FF005A',
                lineStyle: {
                  color: '#FF005A',
                  width: 2
                }
              }
            },
            smooth: true,
            type: 'line',
            data: expectedData,
            animationDuration: 2800,
            animationEasing: 'cubicInOut'
          },
            {
              name: 'actual',
              smooth: true,
              type: 'line',
              itemStyle: {
                normal: {
                  color: '#3888fa',
                  lineStyle: {
                    color: '#3888fa',
                    width: 2
                  },
                  areaStyle: {
                    color: '#f3f8ff'
                  }
                }
              },
              data: actualData,
              animationDuration: 2800,
              animationEasing: 'quadraticOut'
            }]
        })
      }
    }
  }

</script>

<style scoped>
  .chart01 {
    margin-top: 20px;
    margin-left: 20px;
  }
</style>

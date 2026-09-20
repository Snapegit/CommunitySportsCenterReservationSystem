<template>
<div class="content" :style='{"minHeight":"100vh","width":"100%","padding":"30px","background":"rgb(255, 255, 255)","height":"auto"}'>
	<!-- notice -->
	<!-- title -->
	<div class="text" :style='{"margin":"20px auto 30px","fontSize":"24px","color":"rgb(51, 51, 51)","textAlign":"center","fontWeight":"bold"}'>欢迎使用 {{this.$project.projectName}}</div>
	<!-- statis -->
	<div :style='{"margin":"0 0 20px 0","alignItems":"center","justifyContent":"center","display":"flex"}'>
		<div :style='{"border":"2px solid #cdd4de","padding":"5px 0","margin":"0 10px","borderRadius":"40px","display":"flex"}' v-if="isAuth('yonghu','首页总数')">
			<div :style='{"width":"80px","alignItems":"center","background":"red","justifyContent":"center","display":"none","height":"80px"}'>
				<span class="icon iconfont icon-xihuan" :style='{"color":"#fff","fontSize":"24px"}'></span>
			</div>
			<div :style='{"width":"160px","alignItems":"center","flexDirection":"column","justifyContent":"center","display":"flex"}'>
				<div :style='{"margin":"5px 0","lineHeight":"24px","fontSize":"20px","color":"#8d9cb5","fontWeight":"bold","height":"24px"}'>{{yonghuCount}}</div>
				<div :style='{"margin":"5px 0","lineHeight":"24px","fontSize":"16px","color":"#8d9cb5","height":"24px"}'>用户总数</div>
			</div>
		</div>
		<div :style='{"border":"2px solid rgb(205, 212, 222)","padding":" 5px 0px","margin":"0 10px","borderRadius":"40px","display":"flex"}' v-if="isAuth('jiaolian','首页总数')">
			<div :style='{"width":"80px","alignItems":"center","background":"red","justifyContent":"center","display":"none","height":"80px"}'>
				<span class="icon iconfont icon-xihuan" :style='{"color":"#fff","fontSize":"24px"}'></span>
			</div>
			<div :style='{"width":"160px","alignItems":"center","flexDirection":"column","justifyContent":"center","display":"flex"}'>
				<div :style='{"margin":"5px 0","lineHeight":"24px","fontSize":"20px","color":"rgb(141, 156, 181)","fontWeight":"bold","height":"24px"}'>{{jiaolianCount}}</div>
				<div :style='{"margin":"5px 0","lineHeight":"24px","fontSize":"16px","color":"rgb(141, 156, 181)","height":"24px"}'>教练总数</div>
			</div>
		</div>
		<div :style='{"border":"2px solid rgb(205, 212, 222)","padding":"5px 0px","margin":"0 10px","borderRadius":"40px","display":"flex"}' v-if="isAuth('qicaiyuyue','首页总数')">
			<div :style='{"width":"80px","alignItems":"center","background":"red","justifyContent":"center","display":"none","height":"80px"}'>
				<span class="icon iconfont icon-xihuan" :style='{"color":"#fff","fontSize":"24px"}'></span>
			</div>
			<div :style='{"width":"160px","alignItems":"center","flexDirection":"column","justifyContent":"center","display":"flex"}'>
				<div :style='{"margin":"5px 0","lineHeight":"24px","fontSize":"20px","color":"rgb(141, 156, 181)","fontWeight":"bold","height":"24px"}'>{{qicaiyuyueCount}}</div>
				<div :style='{"margin":"5px 0","lineHeight":"24px","fontSize":"16px","color":"rgb(141, 156, 181)","height":"24px"}'>器材预约总数</div>
			</div>
		</div>
	</div>
	<!-- statis -->
	

	
	<!-- echarts -->
</div>
</template>
<script>
//0
import router from '@/router/router-static'
import * as echarts from 'echarts'
export default {
	data() {
		return {
            yonghuCount: 0,
            jiaolianCount: 0,
            qicaiyuyueCount: 0,
		};
	},
	mounted(){
		this.init();
		this.getyonghuCount();
		this.getjiaolianCount();
		this.getqicaiyuyueCount();
	},
	methods:{
		init(){
			if(this.$storage.get('Token')){
			this.$http({
				url: `${this.$storage.get('sessionTable')}/session`,
				method: "get"
			}).then(({ data }) => {
				if (data && data.code != 0) {
				router.push({ name: 'login' })
				}
			});
			}else{
				router.push({ name: 'login' })
			}
		},
		getyonghuCount() {
			this.$http({
				url: `yonghu/count`,
				method: "get"
			}).then(({
				data
			}) => {
				if (data && data.code == 0) {
					this.yonghuCount = data.data
				}
			})
		},
		getjiaolianCount() {
			this.$http({
				url: `jiaolian/count`,
				method: "get"
			}).then(({
				data
			}) => {
				if (data && data.code == 0) {
					this.jiaolianCount = data.data
				}
			})
		},
		getqicaiyuyueCount() {
			this.$http({
				url: `qicaiyuyue/count`,
				method: "get"
			}).then(({
				data
			}) => {
				if (data && data.code == 0) {
					this.qicaiyuyueCount = data.data
				}
			})
		},
  }
};
</script>
<style lang="scss" scoped>
    .cardView {
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        .cards {
            display: flex;
            align-items: center;
            width: 100%;
            margin-bottom: 10px;
            justify-content: center;
            .card {
                width: calc(25% - 20px);
                margin: 0 10px;
                ::v-deep.el-card__body{
                    padding: 0;
                }
            }
        }
    }
	
	// 日历
	.calendar td .text {
				border-radius: 12px;
				flex-direction: column;
				background: #fff;
				display: flex;
				width: 100%;
				justify-content: center;
				align-items: center;
				height: 100%;
			}
	.calendar td .text:hover {
				background: rgba(78,110,242,.1);
			}
	.calendar td .text .new {
				color: #000;
				font-size: 24px;
				line-height: 1.4;
			}
	.calendar td .text .old {
				color: #666;
				font-size: 16px;
				line-height: 1.4;
			}
	.calendar td.festival .text {
				border-radius: 12px;
				flex-direction: column;
				background: rgba(235,51,51,.05);
				display: flex;
				width: 100%;
				justify-content: center;
				align-items: center;
				height: 100%;
			}
	.calendar td.festival .text:hover {
				background: rgba(78,110,242,.1);
			}
	.calendar td.festival .text .new {
				color: #000;
				font-size: 24px;
				line-height: 1.4;
			}
	.calendar td.festival .text .old {
				color: #666;
				font-size: 16px;
				line-height: 1.4;
			}
	.calendar td.other .text {
				border-radius: 12px;
				flex-direction: column;
				background: #fff;
				display: flex;
				width: 100%;
				justify-content: center;
				align-items: center;
				opacity: 0.3;
				height: 100%;
			}
	.calendar td.other .text:hover {
				background: rgba(78,110,242,.1);
			}
	.calendar td.other .text .new {
				color: #000;
				font-size: 24px;
				line-height: 1.4;
			}
	.calendar td.other .text .old {
				color: #666;
				font-size: 16px;
				line-height: 1.4;
			}
	.calendar td.today .text {
				border-radius: 12px;
				flex-direction: column;
				color: #fff;
				background: rgb(64, 158, 255);
				display: flex;
				width: 100%;
				justify-content: center;
				align-items: center;
				height: 100%;
			}
	.calendar td.today .text:hover {
				background: rgba(64, 158, 255,.5);
			}
	.calendar td.today .text .new {
				color: inherit;
				font-size: 24px;
				line-height: 1.4;
			}
	.calendar td.today .text .old {
				color: inherit;
				font-size: 16px;
				line-height: 1.4;
			}
	
	// echarts1
	.type1 .echarts1 {
				border: 1px solid #ddd;
				border-radius: 8px;
				padding: 20px;
				box-shadow: 0px 16px 16px -16px #ccc;
				margin: 10px 0;
				background: rgba(255,255,255,1);
				width: 100%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type1 .echarts1:hover {
			}
	// echarts2
	.type2 .echarts1 {
				border: 1px solid #ddd;
				border-radius: 8px;
				padding: 20px;
				box-shadow: 0px 16px 16px -16px #ccc;
				margin: 10px 0;
				background: rgba(255,255,255,1);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type2 .echarts1:hover {
			}
	.type2 .echarts2 {
				border: 1px solid #ddd;
				border-radius: 8px;
				padding: 20px;
				box-shadow: 0px 16px 16px -16px #ccc;
				margin: 10px 0;
				background: rgba(255,255,255,1);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type2 .echarts2:hover {
			}
	// echarts3
	.type3 .echarts1 {
				border: 1px solid #ddd;
				border-radius: 8px;
				padding: 20px;
				box-shadow: 0px 16px 16px -16px #ccc;
				margin: 10px 0;
				background: rgba(255,255,255,1);
				width: 100%;
				position: relative;
				transition: 0.3s;
				height: 400px;
				order: 3;
			}
	.type3 .echarts1:hover {
			}
	.type3 .echarts2 {
				border: 1px solid #ddd;
				border-radius: 8px;
				padding: 20px;
				box-shadow: 0px 16px 16px -16px #ccc;
				margin: 10px 0;
				background: rgba(255,255,255,1);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type3 .echarts2:hover {
			}
	.type3 .echarts3 {
				border: 1px solid #ddd;
				border-radius: 8px;
				padding: 20px;
				box-shadow: 0px 16px 16px -16px #ccc;
				margin: 10px 0;
				background: rgba(255,255,255,1);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type3 .echarts3:hover {
			}
	// echarts4
	.type4 .echarts1 {
				border: 1px solid #ddd;
				border-radius: 8px;
				padding: 20px;
				box-shadow: 0px 16px 16px -16px #ccc;
				margin: 10px 0;
				background: rgba(255,255,255,1);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type4 .echarts1:hover {
			}
	.type4 .echarts2 {
				border: 1px solid #ddd;
				border-radius: 8px;
				padding: 20px;
				box-shadow: 0px 16px 16px -16px #ccc;
				margin: 10px 0;
				background: rgba(255,255,255,1);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type4 .echarts2:hover {
			}
	.type4 .echarts3 {
				border: 1px solid #ddd;
				border-radius: 8px;
				padding: 20px;
				box-shadow: 0px 16px 16px -16px #ccc;
				margin: 10px 0;
				background: rgba(255,255,255,1);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type4 .echarts3:hover {
			}
	.type4 .echarts4 {
				border: 1px solid #ddd;
				border-radius: 8px;
				padding: 20px;
				box-shadow: 0px 16px 16px -16px #ccc;
				margin: 10px 0;
				background: rgba(255,255,255,1);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type4 .echarts4:hover {
			}
	// echarts5
	.type5 .echarts1 {
				border: 1px solid #ddd;
				border-radius: 8px;
				padding: 20px;
				box-shadow: 0px 16px 16px -16px #ccc;
				margin: 10px 0;
				background: rgba(255,255,255,1);
				width: 100%;
				position: relative;
				transition: 0.3s;
				height: 400px;
				order: 3;
			}
	.type5 .echarts1:hover {
			}
	.type5 .echarts2 {
				border: 1px solid #ddd;
				border-radius: 8px;
				padding: 20px;
				box-shadow: 0px 16px 16px -16px #ccc;
				margin: 10px 0;
				background: rgba(255,255,255,1);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type5 .echarts2:hover {
			}
	.type5 .echarts3 {
				border: 1px solid #ddd;
				border-radius: 8px;
				padding: 20px;
				box-shadow: 0px 16px 16px -16px #ccc;
				margin: 10px 0;
				background: rgba(255,255,255,1);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type5 .echarts3:hover {
			}
	.type5 .echarts4 {
				border: 1px solid #ddd;
				border-radius: 8px;
				padding: 20px;
				box-shadow: 0px 16px 16px -16px #ccc;
				margin: 10px 0;
				background: rgba(255,255,255,1);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type5 .echarts4:hover {
			}
	.type5 .echarts5 {
				border: 1px solid #ddd;
				border-radius: 8px;
				padding: 20px;
				box-shadow: 0px 16px 16px -16px #ccc;
				margin: 10px 0;
				background: rgba(255,255,255,1);
				width: 49%;
				position: relative;
				transition: 0.3s;
				height: 400px;
			}
	.type5 .echarts5:hover {
			}
	
	.echarts-flag-2 {
	  display: flex;
	  flex-wrap: wrap;
	  justify-content: space-between;
	  padding: 10px 20px;
	  background: rebeccapurple;
	
	  &>div {
	    width: 32%;
	    height: 300px;
	    margin: 10px 0;
	    background: rgba(255,255,255,.1);
	    border-radius: 8px;
	    padding: 10px 20px;
	  }
	}
</style>

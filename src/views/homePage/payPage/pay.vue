<template>
    <div>
        <x-content v-scroll-record title="买单">
            <!-- 输入金额框 start -->
            <div class="x-pay-input" flex="{ main:justify cross:center }">
                <h3 class="big-font">消费总金额(元)</h3>

                <!-- 模拟键盘所需的模拟输入框 start -->
                <div class="x-key-board-input" flex="main:right cross:center" @click="openKeyBoard(1)">
                    <!-- 当没有内容时候的提醒文字 -->
                    <span class="x-input-placeholder" v-if="money.length === 0">0.00</span>
                    <!-- 显示的输入金额 -->
                    <span class="x-input-value">{{money}}</span>
                    <!-- 模拟输入框的模拟光标 -->
                    <i class="x-input-cursor" :style="{ visibility : keyBoardShow && type === 1 ? 'visible' : 'hidden'}">&nbsp;</i>

                </div>
                <!-- 模拟键盘所需的模拟输入框 end -->
            </div>
            <!-- 输入金额框 end -->

            <!-- 输入不享优惠金额框 start -->
            <div class="x-pay-input margin-top-10" flex="{ main:justify cross:center }">
                <h3 class="small-font">不参与优惠金额(元)</h3>

                <!-- 模拟键盘所需的模拟输入框 start -->
                <div class="x-key-board-input x-no-discount-input" flex="main:right cross:center" @click="openKeyBoard(2)">
                    <!-- 当没有内容时候的提醒文字 -->
                    <span class="x-input-placeholder" v-if="noDiscountMoney.length === 0">0.00</span>
                    <!-- 显示的输入金额 -->
                    <span class="x-input-value">{{noDiscountMoney}}</span>
                    <!-- 模拟输入框的模拟光标 -->
                    <i class="x-input-cursor" :style="{ visibility : keyBoardShow && type === 2 ? 'visible' : 'hidden'}">&nbsp;</i>

                </div>
                <!-- 模拟键盘所需的模拟输入框 end -->
            </div>
            <!-- 输入不享优惠金额框 end -->

            <!-- 红包金额 start -->
            <div class="default-padding small-font no-padding-bottom" flex="{ main:justify cross:center }">
                <h3 class="color-gray">红包</h3>
                <span class="color-skin">-5.00</span>
            </div>
            <!-- 红包金额 end -->

            <!-- 优惠金额 start -->
            <div class="default-padding small-font no-padding-bottom" flex="{ main:justify cross:center }">
                <h3 class="color-gray">折扣优惠 <span>9折</span></h3>
                <span class="color-skin">-5.00</span>
            </div>
            <!-- 优惠金额 end -->

            <!-- 实际付款金额 start -->
            <div class="default-padding big-font" flex="{ main:justify cross:center }">
                <h3>实际付款(元)</h3>
                <strong class="color-skin" style="font-size: 1.4rem">5.00</strong>
            </div>
            <!-- 实际付款金额 end -->

            <!-- 支付方式选择 start -->
            <x-cell-item :hasArrow=false @on-click="selectPayType(3)">
                <div class="x-pay-box">
                    <i class="x-pay-icon vip-pay-icon"></i>
                    <span>会员卡支付</span>
                </div>
                <i class="x-check-icon" :class="[payType === 3 ? 'x-checked' : 'x-no-checked']"></i>
            </x-cell-item>

            <x-cell-item :hasArrow=false @on-click="selectPayType(1)">
                <div class="x-pay-box">
                    <i class="x-pay-icon wechat-pay-icon"></i>
                    <span>微信支付</span>
                </div>
                <i class="x-check-icon" :class="[payType === 1 ? 'x-checked' : 'x-no-checked']"></i>
            </x-cell-item>
            <!-- 支付方式选择 end -->

            <!-- 点击支付按钮 start -->
            <div class="default-padding">
                <x-button @on-click="pay">
                    确定
                </x-button>

                <!-- 会员余额显示 -->
                <div class="margin-top-20" flex="{ main:center cross:center }" v-if="payType === 3">
                    <span>会员卡余额：336.00</span>
                    <button class="x-border-btn margin-left-10">充值</button>
                </div>
            </div>
            <!-- 点击支付按钮 end -->
        </x-content>

        <!-- 自定义键盘 start -->
        <x-key-board :value="inputValue" :show="keyBoardShow" @close-key-board="closeKeyBoard" @update-value="updateValue"></x-key-board>
        <!-- 自定义键盘 start -->

        <!-- 商家没有开通会员服务提示 start -->
        <x-pay-dialog :show="noVipServerDialogShow" @close-dialog="noVipServerDialogShow = false">
            <div class="x-pay-no-server">
                <p>好可惜~</p>
                <img class="margin-top-20 margin-bottom-20" src="./../../../../static/bigImg/dialog_pity.png" alt="图标" width="60%">
                <!-- 底边中间带点的线 -->
                <div class="x-spot-line" flex="main:center cross:center">
                    <div class="x-spot">
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                </div>

                <p>老板忘记开通生活圈会员服务了</p>
                <p>您无法使用会员支付享受更多优惠</p>
            </div>
        </x-pay-dialog>
        <!-- 商家没有开通会员服务提示 end-->

        <!-- 用户会员卡月不足提示 start -->
        <x-pay-dialog :show="vipNoMoneyShow" @close-dialog="vipNoMoneyShow = false">
            <div class="x-pay-no-server">
                <p>您的会员余额不够支付哦~</p>
                <img class="margin-top-20 margin-bottom-20" src="./../../../../static/bigImg/dialog_no_remaining.png" alt="图标" width="60%">
                <div class="padding-top-5 padding-bottom-5">
                    <a href="javascript:void(0)" class="x-left-btn">
                        会员卡充值
                    </a>
                    <a href="javascript:void(0)" class="x-right-btn">
                        会员卡充值
                    </a>
                </div>
            </div>
        </x-pay-dialog>
        <!-- 用户会员卡月不足提示 end-->

        <!-- 激活会员弹出框 start -->
        <x-pay-dialog :show="activationVipServerShow" @close-dialog="activationVipServerShow = false">
            <div class="x-pay-vip-activation">
                <!-- 小人icon -->
                <i class="x-vip-activation-icon"></i>
                <!-- 黄色带 -->
                <div class="x-yellow-line">
                    该店的会员活动
                </div>
                <!-- 会员活动 -->
                <div class="x-vip-activity-box">
                    <p class="padding-bottom-10">15秒激活会员</p>
                    <ul class="x-activity-list">
                        <li>
                            <i class="x-activity-list-icon"></i>
                            <span>充值满100送20</span>
                        </li>
                        <li>
                            <i class="x-activity-list-icon"></i>
                            <span>充值满100送20</span>
                        </li>
                        <li>
                            <i class="x-activity-list-icon"></i>
                            <span>充值满100送20</span>
                        </li>
                    </ul>
                </div>
                <!-- 激活按钮 -->
                <router-link class="x-activation-vip-btn" :to="{ name : 'payDetail' }">
                    激活
                </router-link>
            </div>
        </x-pay-dialog>
        <!-- 激活会员弹出框 end-->
    </div>

</template>

<script>
    export default {
        data () {
            return {
                type : 0, // 当前输入的是哪个金额 【0：没有输入；1 : 消费金额 ； 2：不享优惠金额】
                inputValue : '', // 需要传给键盘的值
                money : '123', // 输入的现金
                noDiscountMoney : '', // 不享优惠金额
                keyBoardShow : false, // 自定义键盘是否弹出
                payType : 1, // 当前是什么支付方式 【1：微信支付 ， 2:支付宝支付，3：会员卡支付】

                noVipServerDialogShow : false, // 未开通了会员服务弹出框
                activationVipServerShow : false, // 激活会员服务弹出框
                vipNoMoneyShow : false, // 会员卡余额不足弹出框
            }
        },
        methods:{
            /**
             * 选择支付方式
             * @param  type  【1：微信支付 ， 2:支付宝支付，3：会员卡支付】
             * */
            selectPayType(type){
                this.payType = type;
            },
            /**
             * 打开键盘
             * @param  val  当前需要输入的是哪个金额 【0：没有输入；1 : 消费金额 ； 2：不享优惠金额】
             * */
            openKeyBoard(type){
                this.keyBoardShow = true;
                this.type = type;
                this.inputValue = type === 1 ? this.money : this.noDiscountMoney;
            },
            /**
             * 接收键盘组件传递来的值
             * 并且赋值给对应的金额
             * @param  val  键盘组件输出的值，即最新的输入的值
             * */
            updateValue(val){
                if(this.type === 1){
                    this.money = val;
                }else{
                    this.noDiscountMoney = val;
                }
                this.inputValue = val;
            },
            /**
             * 关闭键盘
             * 并且初始化输入类型
             * */
            closeKeyBoard(){
                this.keyBoardShow = false;
                this.type = 0;
            },
            pay(){
                this.$router.push({ name : 'payDetail' });
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "./../../../assets/css/modules/pay.less";
</style>

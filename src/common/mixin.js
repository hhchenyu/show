import BackTop from 'components/content/backTop/BackTop'

export const backTopMixin={
    components:{
        BackTop
    },
    data () {
        return {
            isBackTopOk:false, //是否显示backTop
        }
    },
    methods:{
        getBackTop(){
            //返回顶部
            this.$refs.bscroll&&this.$refs.bscroll.scrollTo(0,0,300);
        }
    }
 }
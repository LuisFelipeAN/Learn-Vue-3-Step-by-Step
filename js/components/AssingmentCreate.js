export default {
    template:`
        <form @submit.prevent="addAssingment">
            <input type="text" v-model="newAssingment" class="border">
            <button type="submit" class="bg-blue-200 hover:bg-blue-400" >Add</button>
        </form>
        `,
        data(){
            return {
                newAssingment:''
            }
        },
       
        methods:{
            addAssingment(){
                if(this.newAssingment!=''){
                    this.$emit('add',{name:  this.newAssingment, complete:false})
                    this.newAssingment=''
                }
            }, 
        }
    } 
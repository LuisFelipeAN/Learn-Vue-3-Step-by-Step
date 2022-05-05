import List from './List.js';
import AppButton from './AppButton.js';
export default{
    template:`
        <form @submit.prevent="addAssingment">
            <input type="text" v-model="newAssingment" class="border">
            <button type="submit" class="bg-blue-200 hover:bg-blue-400" >Add</button>
        </form>
        <list title="In Progress" :items="assingments" evaluatedProp="complete" :expectedValue="false" @remove-item="removeItem"/>
        <list title="Completed" :items="assingments" evaluatedProp="complete" :expectedValue="true" @remove-item="removeItem"/>
    `,
    components:{
        'list':List,
        'custom-button':AppButton
    },

    data(){
        return {
         assingments: [
                 {name: 'Assingment 1', complete:false, id:1},
                 {name: 'Assingment 2', complete:false, id:2},
                 {name: 'Assingment 3', complete:false, id:3},
                 {name: 'Assingment 4', complete:false, id:4},
                 {name: 'Assingment 5', complete:false, id:5},
                 {name: 'Assingment 6', complete:false, id:6}
             ],
            newAssingment:'',
            cont:100
         }
         r
    },
    computed:{
         completedAssigments(){
             return this.assingments.filter(a =>a.complete );
         },
         inProgressAssigments(){
             return this.assingments.filter(a =>!a.complete );
         }
    },
    methods:{
        addAssingment(){
            if(this.newAssingment!=''){
                this.assingments.push({name:  this.newAssingment, complete:false, id:this.cont});
                this.cont++;
                this.newAssingment='';
            }
            
        },
        removeItem(i){
            this.assingments=this.assingments.filter(a=>a.id!=i.id);
        }
    }
} 
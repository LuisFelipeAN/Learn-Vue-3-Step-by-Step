import List from './List.js';
import AssingmentCreate from './AssingmentCreate.js';
export default{
    template:`
        <assingment-create @add="addAssingment"/>
        <list title="In Progress" :items="assingments" evaluatedProp="complete" :expectedValue="false" @remove-item="removeItem"/>
        <list title="Completed" :items="assingments" evaluatedProp="complete" :expectedValue="true" @remove-item="removeItem"/>
    `,
    components:{
        'list':List,
        'assingment-create':AssingmentCreate
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
        addAssingment(a){
            a.id= this.cont;
            this.assingments.push(a);
            this.cont++;
    
        },
        removeItem(i){
            this.assingments=this.assingments.filter(a=>a.id!=i.id);
        }
    }
} 
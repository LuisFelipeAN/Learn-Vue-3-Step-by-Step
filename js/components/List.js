import Task from './Task.js'

export default{
    template:`
    <section  v-show="listItems.length>0">
        <h2 class="font-bold mb-2">{{title}}</h2>
        <ul>
            <task v-for="item in listItems" :key="item.id" :item="item"/>
        </ul>
    </section>

    `,

    data(){
        return {
        }
    }, 
    props:{
        items:{type: Array, default:[]},
        title:{type: String, default:'MULL'},
        evaluatedProp:{type: String, default:''},
        expectedValue:{type: Boolean, default:''}
    },
    computed :{
        listItems(){
            return this.items.filter((i)=>{
                return i[this.evaluatedProp]===this.expectedValue;
            })
        }
    },
    components:{
        'task':Task
    }
}
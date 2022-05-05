export default{
    template:`
    <li>
        <label>
            {{item.name}}
            <input type="checkbox" v-model="item.complete">
            <button @click="this.$parent.$emit('remove-item',item)" class="bg-gray-100">X</button>
        </label>
    </li>

    `,
    data(){
        return {
           
        }
    }, 
    props:{
        item:{type: Object, default:null},
    }
}
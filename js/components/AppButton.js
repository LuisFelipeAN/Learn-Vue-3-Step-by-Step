export default{
    template:`
        <button 
        :class="{
            'border rounded p-3 disabled:cursor-not-allowed': true,
            'bg-gray-200 hover:bg-gray-400' : type=='muted',
            'bg-blue-200 hover:bg-blue-400' : type=='primary',
            'bg-purple-200 hover:bg-purple-400' : type=='secondary',
            'is-loading': processing

        }" :disabled="processing" @click="this.$emit('click')"><slot/></button>
    `,
    data(){
       return {}
    },
    props:{
        type:{ type: String, default: 'primary'},
        processing:{ type: Boolean, default: false}
    },
}
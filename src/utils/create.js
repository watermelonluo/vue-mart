import Vue from 'vue'

export default function(Comp,props){
    const instance = new Vue({
        render:h=>h(Comp,{props})
    }).$mount()

    document.body.appendChild(instance.$el)
    const comp=instance.$children[0];
    comp.remove=function(){
        document.body.removeChild(instance.$el);
        instance.$destroy()
    }
    return comp
}
<template>
    <div>
        <pre v-highlightjs='sourcecode'><code class='javascript' /></pre>
    </div>
</template>

<script setup lang="ts">

import { ref ,onMounted } from 'vue';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

let sourcecode = ref('var hello = 1');

NProgress.configure({
    showSpinner:false,
    template: '<div class="bar" style="height:5px" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon">123</div></div>'

});


onMounted(() => {
    console.log('start');
    NProgress.start();
    console.log('start');
    
    setTimeout(() => {
        
        sourcecode.value = 'var fuck = 2';
        NProgress.done();
        console.log('done',sourcecode.value);
        
    }, 3000);
}
);
</script>
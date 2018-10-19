<template>
    <div>
        
        <ul class="nav nav-pills">
            <transition>
                <li class="nav-item mr-auto" 
                    @mouseover="hover = true"
                    @mouseout="hover = false"
                    v-if="$route.name != 'home'">
                        <img src="../assets/spencer.png" class="pic" v-if="!hover">
                        <img src="../assets/spenceroutline.png" class="pic" v-else>
                        <img src="../assets/name.png" style="margin-left: 10px;" v-if="!hover">
                        <img src="../assets/namewhite.png" style="margin-left: 10px;" v-else>
                </li>
                <li class="mr-auto" v-else></li>
            </transition>
            <router-link 
                to="/"
                tag="li"
                class="nav-item"
                ><a class="nav-link active" data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
            </router-link>
            <router-link 
                to="/about"
                tag="li"
                class="nav-item"
                ><a class="nav-link" data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="false">About</a>
            </router-link>
            <router-link 
                to="/portfolio"
                tag="li"
                class="nav-item"
                ><a class="nav-link" data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="false">Portfolio</a>
            </router-link>
            <router-link 
                to="/contact"
                tag="li"
                class="nav-item"
                ><a class="nav-link" data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="false">Contact</a>
            </router-link>
        </ul>
    </div>
</template>

<script>

export default {
    data() {
        return {
            hover: false
        }
    }, 
    computed: {
        route() {
            // console.log(this.$route);
            
            return this.$route
        }
    },
    methods: {
        printRoute(){
            console.log(this.$route);
        }
    }
}
</script>


<style scoped>
    .pic {
        width: 60px;
        height: 60px;
    }
    .nav-link{
        color: #2c3e50;
    }
    .nav-pills li a {
        border: 1px solid #2c3e50;
        margin: 0 5px;
        background-color: #FF644461 !important;
    }
    .nav-pills li .active{
        background-color: #FF6444B3 !important;
    }
    .nav-link:hover {
        color: #FF6444;
    }

    
</style>


<template>
    <ul class="nav nav-pills">
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
</template>

<style>
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


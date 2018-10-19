<template>
    <ul class="nav justify-content-center">
        <router-link 
            to="/"
            tag="li"
            class="nav-item active"
            ><a class="nav-link">Home</a>
        </router-link>
        <router-link 
            to="/About"
            tag="li"
            class="nav-item"
            ><a class="nav-link">About</a>
        </router-link>
        <router-link 
            to="/Portfolio"
            tag="li"
            class="nav-item"
            ><a class="nav-link">Portfolio</a>
        </router-link>
        <router-link 
            to="/Contact"
            tag="li"
            class="nav-item"
            ><a class="nav-link">Contact</a>
        </router-link>
    </ul>
</template>

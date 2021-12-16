<template>
<div id="app">
    <h1 class="text-2xl pt-10">Welcome to Url Shorter</h1>

    <div class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Enter url here</h2>

        <form @submit.prevent='shortThis()'>
            <div>
                <input autocomplete="off" id="username" v-model="inpUrl" type="text" class="block w-1/2 px-4 py-2 mt-2 mx-auto text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
            </div>

            <div class="flex justify-center mt-6">
                <button type="submit" class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Let's short this !</button>
            </div>
        </form>
    </div>
    <div class="max-w-4xl p-6 mt-10 mx-auto bg-transparent rounded-md dark:bg-gray-800">
        
    <div v-if="tabUrls.length > 0" class="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div v-for='tabUrl,index in tabUrls' :key="index" class="mt-2">
            <a :v-model="tabUrl.data.result.short_link" target="_blank" :href="tabUrl.data.result.full_short_link" class="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">{{tabUrl.data.result.short_link}}</a>
            <button type="button" v-clipboard:copy='tabUrl.data.result.short_link' v-clipboard:success='onCopy' class="ml-32">
              Copy to Clipboard!
            </button>
        </div>
    </div>
    </div>
</div>

</template>

<script>
import axios from 'axios'

export default {
    name: 'App',
    data(){
      return{
        tabUrls: [
          
        ],
        inpUrl : null
      }
    },
    methods:{
      shortThis(){
        if (this.inpUrl) {
          axios
            .get(`https://api.shrtco.de/v2/shorten?url=${this.inpUrl}`)
            .then(response => this.tabUrls.push(response))
          
          this.inpUrl = null
        }
      },
      onCopy(){
        alert('url copied')
      }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    background-color: beige;
    height: 100vh;
    margin: 0;
    padding: 0;
}
</style>

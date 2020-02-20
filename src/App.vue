<template>
<div id="app">
    <router-view />
</div>
</template>

<style>
* {
    margin: 0;
    padding: 0;
    border: 0;
    /* 62.5% = 10px = 1rem */
    font-size: 62.5%;
}

html,
body {
    height: 100%;
    width: 100%;
    min-width: 999px;
    min-height: 956px;
    overflow: auto;
}

#app{
    height: 100%;
}

.testdiv {
    border: 2px solid red;
}
</style>

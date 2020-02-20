<template>
<div id="home" class="home">
    <div id="left" >
        <Left />
    </div>
    <div id="middle" >
        <div id="header" >
            <Header />
        </div>
        <div id="main">
            <Main />
        </div>
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header'
import Left from '@/components/Left'
import Main from '@/components/Main'
// import Footer from '@/components/Footer'

export default {
  name: 'Home',
  data () {
    return {
      flag: true
    }
  },
  components: {
    Header,
    Left,
    Main
  }
}
</script>

<style scoped>
#home {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: flex-start;
}

#home #middle {
   width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
}

#home>#left {
    height: 100%;
    width: 10%
}

#home>#middle>#header {
    width: 100%;
    height: 20%;
}

#home>#middle>#main {
    height: 100%;
    width: 100%
}

#home #footer {
    height: 20%;
    width: 80%;
    align-items: flex-end;
}
</style>

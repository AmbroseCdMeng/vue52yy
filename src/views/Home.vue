<template>
    <div class="home">
        <Header/>
        <Left/>
        <Footer/>
        <Main/>
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header'
import Left from '../components/Left'
import Footer from '../components/Footer'
import Main from '../components/Main'

export default {
  name: 'Home',
  components: {
    Header,
    Left,
    Footer,
    Main
  }
}
</script>

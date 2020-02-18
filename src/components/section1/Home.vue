<template>
    <div>
        <Navbar />
        <Header />
    </div>
</template>

<script>
    import Navbar from './Navbar';
    import Header from './Header';
    export default {
        name: 'Home',
        components: {
            Navbar,
            Header,
        }
    }
</script>
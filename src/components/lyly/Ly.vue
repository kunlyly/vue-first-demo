<template>
    <div>
        <h1>Hello Bong, From Lyly</h1>
        <h2>Miss lyly te?</h2>
        <h3> {{ miss ? 'Miss ha' : 'Miss ma nheb'}} </h3>
    </div>
</template>
<script>
export default {
    data: () => ({
        miss : true
    })
}
</script>
<style scoped>

</style>
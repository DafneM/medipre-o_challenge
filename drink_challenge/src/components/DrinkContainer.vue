<template>
    <div class="drink-container">
        <img>
        <p>{{name}}</p>
        <h1>{{id}}</h1>
    </div>
</template>

<script>
export default{
    name: "DrinkContainer",
    props: ["name","id"],
    mounted(){
        axios.get()
    }
};
</script>

<style scoped>

</style>
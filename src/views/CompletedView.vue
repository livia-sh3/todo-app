<script setup>
    import TodoList from '@/components/TodoList.vue';

    const tasks = JSON.parse(localStorage.getItem("tasks"))

</script>

<template>
    <!-- <TodoList :tasks="tasks" :completed="true"/> -->
     <TodoList :completed="true"/>
</template>
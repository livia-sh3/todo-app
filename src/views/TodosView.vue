<script setup>
    import TodoForm from '@/components/TodoForm.vue'
    import TodoList from '@/components/TodoList.vue';
    import { ref } from 'vue';

    let tasks = ref([])
    if (localStorage.getItem("tasks") !== null) {
        tasks.value = JSON.parse(localStorage.getItem('tasks'))
    }

    function addTask(descr) {
        tasks.value.push({id: tasks.value.length+1+descr, descr: descr, done:false})
        // localStorage.removeItem("tasks")
        localStorage.setItem("tasks", JSON.stringify(tasks.value))

        // tasks.value = ref(JSON.parse(localStorage.getItem('tasks')))
    }
</script>

<template>
    <TodoForm @add-task="addTask"/>
    <TodoList :completed="false"/>
</template>
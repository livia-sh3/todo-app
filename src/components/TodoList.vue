<script setup>
    import { ref } from 'vue';
    import TodoItem from './TodoItem.vue';

    defineProps({
        completed: Boolean
    })

    let tasks = ref([])
    if (localStorage.getItem("tasks") !== null) {
        tasks.value = JSON.parse(localStorage.getItem('tasks'))
    }

    function editTask(id, checked) {
        let index = tasks.value.findIndex(item => item.id === id)
        tasks.value[index].done = checked
        localStorage.removeItem("tasks")
        localStorage.setItem("tasks", JSON.stringify(tasks.value))
    }
    
</script>

<template>
    <TodoItem
    :completed="completed"
    :tarefa="item"
    :key="item.id"
    @check="editTask"
    v-for="item in tasks"/>
</template>
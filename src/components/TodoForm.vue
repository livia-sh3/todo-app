<script setup>
    import { ref } from 'vue';
    import Button from 'primevue/button';

    defineEmits(['addTask'])

    const descr = ref('')
</script>

<template>
    <p>Insira sua tarefa:</p>
    <input v-model="descr" placeholder="ex: lavar louça" />
    <Button label="Add" @click="$emit('addTask', descr)" />
</template>
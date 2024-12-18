<script setup>
    defineProps({
        tarefa: {
            type: Object,
            default: () => {
               return {
                id: 0,
                descr: '',
                done: false
               }
            }
        },
        completed: Boolean
    })

    defineEmits(['check'])
    
</script>

<template>
    <div v-if="(!tarefa.done && !completed) || (tarefa.done && completed)">
        <input v-if="!completed"
        type="checkbox" id="checkbox" v-model="tarefa.done" @change="$emit('check', tarefa.id, tarefa.done)" />
        <p style="display: inline;">Tarefa: {{tarefa.descr}}</p>
    </div>
</template>
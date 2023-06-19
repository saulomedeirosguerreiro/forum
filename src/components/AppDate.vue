<template>
  <span :title="humanFriendlyDate()">{{ diffHuman() }}</span>
</template>

<script setup>
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import localeData from 'dayjs/plugin/localeData'
dayjs.extend(relativeTime);
dayjs.extend(localeData);
import { defineProps } from 'vue';

const props = defineProps({
    timestamp: {
        type: Number,
        required: true,
    },
});

function diffHuman() {
    return dayjs.unix(props.timestamp).fromNow();
}

function humanFriendlyDate() {
    return dayjs.unix(props.timestamp).format('llll');
}

</script>
<style>

</style>
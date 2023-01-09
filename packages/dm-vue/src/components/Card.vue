<template>
    <section class="card">
        <a class="card__photo" href="">
            <img :src="card.cover" alt=""/>
        </a>
        <div class="card__footer">
            <p>{{ card.title }}</p>
            <div>
                <img :src="card.author.avatar" alt="">
                <span>{{ card.author.nickName  }}</span>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { Card } from '@/schema/Card'

    defineProps<{
        card: Card
    }>()
</script>

<style lang="scss" scoped>

.card {
    padding: 10px;
    &__photo {
        img {
            width: 180px;
            border-radius: 8px;
        }
    }
    &__footer {

    }
}
</style>
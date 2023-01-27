<template>
  <section class="card">
    <router-link class="card__cover" :to="detailLink">
      <img :src="cover.url" alt="cover" />
    </router-link>

    <div class="card__footer">
      <router-link :to="detailLink">
        <p class="card__title">{{ title }}</p>
      </router-link>

      <div class="card__detail">
        <router-link v-if="author" class="card__author" :to="userLink">
          <img class="card__avatar" :src="author.avatar" alt="avatar" />
          <span class="card__name">{{ author.nickName }}</span>
        </router-link>
        <span class="card__like">{{ like }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Card } from '@/schema/Card'
import { computed, toRefs, unref } from 'vue'
import { PageName } from '@/schema/PageName'

const props = defineProps<{
  card: Card
}>()
const { card } = toRefs(props)

const title = computed(() => unref(card)?.title ?? '')
const cover = computed(() => unref(card)?.cover ?? '')
const author = computed(() => unref(card)?.author ?? null)
const like = computed(() => unref(card)?.like ?? '')
const detailLink = computed(() => ({
  name: PageName.ExploreDetail,
  params: {
    id: unref(card).id,
  },
}))
const userLink = computed(() => ({
  name: PageName.User,
  params: {
    id: unref(author).id,
  },
}))
const ratio = computed(() => ((unref(cover).height / unref(cover).width) * 100).toFixed(2) + '%')
</script>

<style lang="scss" scoped>
.card {
  padding: 10px;
  width: 180px;
  box-sizing: content-box;

  &__cover {
    position: relative;
    display: block;
    width: 100%;
    padding-top: v-bind(ratio);

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 180px;
      border-radius: 8px;
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.25);
      border-radius: 8px;
      opacity: 0;
      transition: all 0.2s;
    }

    @media (hover: hover) {
      &:hover {
        &::after {
          opacity: 1;
        }
      }
    }
  }

  &__footer {
    padding: 12px;
  }
  &__title {
    margin-bottom: 8px;
    color: #333333;
    font-size: 14px;
    line-height: 22px;
    font-weight: 500;
    @include multi-line-omit;
  }
  &__detail {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__author {
    display: flex;
    align-items: center;
  }
  &__avatar {
    margin-right: 6px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 0.5px solid #e6e6e6;
  }
  &__name {
    font-size: 12px;
    color: #666666;
  }

  &__like {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #666666;
    &::before {
      content: '';
      margin-right: 2px;
      display: inline-block;
      width: 14px;
      height: 14px;
      @include bg-svg('like');
    }
  }
}
</style>

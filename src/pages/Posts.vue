<template>
  <div>
    <p>Post lists</p>
    <Suspense>
      <template #default>
        <PostsList />
      </template>
      <template #fallback>
        Loading...
      </template>
    </Suspense>
  </div>
</template>

<script>
import PostsList from '@/components/PostsList.vue';

export default {
  name: 'PostsPage',
  components: { PostsList }
}
</script>

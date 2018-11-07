<template>
	<div class="blog-post">
        <a :href="post.spa_meta.user_permalink" v-if="post.spa_meta.thumbnail">
            <img :src="post.spa_meta.thumbnail" class="img-responsive">
        </a>
        <h2><a>{{post.title.rendered}}</a></h2>
        <p>{{moment(post.date)}} by <a :href="post.spa_meta.user_permalink">{{post.spa_meta.user_nicename}}</a></p>

        <div v-html="post.excerpt.rendered"></div>

        <hr>
    </div>

</template>

<script>
export default {
	props: ['post'],
    methods: {
        moment: function(date) {
            return moment.utc(date).format('MMMM DD, YYYY ');
        }
    }
}
</script>